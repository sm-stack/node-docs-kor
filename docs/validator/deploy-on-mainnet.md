---
id: deploy-on-mainnet
title: Mainnet 스테이킹 풀 배포
sidebar_label: Mainnet 스테이킹 풀 배포
sidebar_position: 5
---

`mainnet`에 노드를 배포하는 것은 `testnet`에 노드를 배포하는 것과 유사하며, 다음 단계가 필요합니다.

1. `mainnet` 지갑을 생성합니다.
2. `mainnet` 밸리데이터 노드 데몬을 빌드합니다.
3. 노드를 초기화합니다.
4. `mainnet` 스테이킹 풀을 배포합니다.
5. 밸리데이터 노드를 실행합니다.


### 1. `mainnet` 지갑 생성 {#create-wallet}

NEAR 계정이 없다면 먼저 [NEAR 지갑](https://wallet.near.org/)으로 이동하여 계정을 만드세요.

### 2. `mainnet` 밸리데이터 노드 데몬 빌드 {#build-node}

밸리데이터를 빌드하려면, 먼저 [`nearcore`
레퍼지토리](https://github.com/near/nearcore)를 복제하세요.

```bash
git clone https://github.com/near/nearcore.git
```

완료되면, [가장 최근의 안정적인 릴리스](https://github.com/near/nearcore/releases)를 파악합니다. 안정적인 릴리스는 `-rc.<number>` 접미사가 없는 릴리스를 의미합니다('rc'는 '릴리스 후보(release candidate)'를 나타냄). 이는 다음과 같이 자동으로 수행할 수 있습니다.


```bash
NEAR_RELEASE_VERSION=$(curl -s https://github.com/near/nearcore/releases/latest |
                       tr '/" ' '\n' | grep "[0-9]\.[0-9]*\.[0-9]" | head -n 1)
```

이제 복제된 레퍼지토리의 루트 디렉터리로 이동하여, 최신 안정 릴리스에 해당하는 코드를 체크아웃합니다.

```bash
cd nearcore
git checkout "refs/heads/${NEAR_RELEASE_VERSION:?}"
```

마지막으로 `make`를 사용하여 실행 파일을 빌드합니다. `cargo build --release` 명령으로 빌드하는 것만으로는 완전히 최적화된 실행 파일을 만드는 데 충분하지 *않습니다*.

```bash
make neard
```


### 3. 노드 초기화 {#init-node}

데몬 실행 파일이 빌드되면 노드를 초기화할 시간입니다.

```bash
./target/release/neard init --chain-id=mainnet \
                            --account-id="<POOL_ID>.poolv1.near"
```

`<POOL_ID>`는 스테이킹 풀에 사용하려는 이름입니다. 이 시점에서 `<POOL_ID>.poolv1.near` 계정은 아직 존재하지 않습니다. 이는 다음 단계에서 만들 예정입니다.

이 명령은 밸리데이터의 개인 키를 포함할 `~/.near/validator_key.json` 파일을 생성합니다. 이 파일을 안전한 위치에 백업해 두는 것이 좋습니다. 지금은 이 파일에서 밸리데이터의 공개 키를 읽습니다.

```bash
grep public_key ~/.near/validator_key.json
```


### 4. `mainnet` 스테이킹 풀 배포 {#deploy-staking-pool}

`near call` 명령을 사용하여 [near-cli](https://github.com/near/near-cli)로 스테이킹 풀을 배포할 수 있습니다.

```bash
near call poolv1.near create_staking_pool '{
    "staking_pool_id": "<POOL_ID>",
    "owner_id": "<OWNER_ID>",
    "stake_public_key": "<VALIDATOR_KEY>",
    "reward_fee_fraction": {"numerator": <X>, "denominator": <Y>}
}' --account_id <OWNER_ID> --amount 30 --gas 300000000000000
```

이는 다음과 같은 매개 변수를 전달하여 [NEAR 핵심 컨트랙트](https://github.com/near/core-contracts)에서 `staking-pool-factory` 메서드를 호출합니다.

- `poolv1.near` : 스테이킹 풀 팩토리입니다.
- `<POOL_ID>` : 밸리데이터(및 관련 스테이킹 풀)의 이름입니다.
- `<OWNER_ID>` : 풀을 제어하는 ​​지갑입니다(자세한 내용은 [소유자 전용 메서드](https://github.com/near/core-contracts/tree/master/staking-pool#owner-only-methods) 참조).
- `<VALIDATOR_KEY>` : `~/.near/validator_key.json` 파일 내에 이전 단계에서 읽은 밸리데이터 노드 공개 키입니다.
- `{"numerator": <X>, "denominator": <Y>}` : 밸리데이터 수수료를 설정합니다(예: `X=10`이고 `Y=100`이면 10%를 의미)
- `--amount 30` : 30 $NEAR를 트랜잭션에 첨부하여 컨트랙트 스토리지 비용을 지불합니다.
- `--gas 300000000000000` : 트랜잭션에 대한 가스 양을 지정합니다(선택 사항).

`<POOL_ID>`가 'buildlinks'인 경우, 스테이킹 풀 팩토리는 'buildlinks.poolv1.near'라는 컨트랙트를 배포하고, 노드는 익스플로러에 'buildlinks.poolv1.near'로 표시됩니다. 이는 이전 단계에서 사용된 계정 식별자에 해당합니다.

### 5. 밸리데이터 노드 실행 {#run-the-node}

데몬이 구축되면, 노드가 초기화되고 스테이킹 풀이 생성되며 밸리데이터를 시작할 수 있습니다. 노드가 올바르게 설정되었는지 확인하려면, `~/.near/config.json`에 있는 구성 파일이 [이 메인넷의 config.json](https://s3-us-west-1.amazonaws.com/build.nearprotocol.com/nearcore-deploy/mainnet/config.json)과 동일한지 확인하세요.

```bash
sha1sum <~/.near/config.json
curl -s https://s3-us-west-1.amazonaws.com/build.nearprotocol.com/nearcore-deploy/mainnet/config.json | sha1sum
```

모든 것이 정상이면 다음 명령을 사용하여 노드를 시작합니다.

```
./target/release/neard run
```

`--disable-rpc` 플래그를 추가한 뒤 위의 명령을 실행하여 JSON RPC 엔드포인트 없이 노드를 시작할 수 있습니다. 이렇게 하면 수신 포트를 닫아 리소스 사용과 공격 벡터를 줄입니다.


>질문이 있으신가요?
<a href="https://stackoverflow.com/questions/tagged/nearprotocol">
  <h8>StackOverflow에 물어보세요!</h8></a>
