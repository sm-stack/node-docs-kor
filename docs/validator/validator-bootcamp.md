---
id: validator-bootcamp
title: NEAR 밸리데이터 부트캠프
sidebar_label: NEAR 밸리데이터 부트캠프 🚀
sidebar_position: 2
description: NEAR 밸리데이터 부트캠프
---

# NEAR 밸리데이터 부트캠프 🚀
---

### 밸리데이터 온보딩 FAQ's

***메인넷의 밸리데이터 수를 늘리는 현재 프로토콜 업그레이드는 무엇인가요??***

메인넷 밸리데이터 수를 늘리기 위한 다음 업그레이드는 Chunk-Only Producers를 도입할 예정이며, 현재 2022년 3분기로 예정되어 있습니다. Chunk-Only Producer가 되는 방법에 대한 자세한 내용을 알고 싶다면, https://near.org/decentralize/로 이동해 등록하세요.

***메인넷에서 밸리데이터로 NEAR에 가입하려면 어떻게 해야 하나요? 어떤 조치를 취해야 합니까?***

1. 밸리데이터가 되는 방법에 대해 자세히 알아보려면, https://near.org/validators/로 이동하세요.
2. [Open Shards Alliance Server](https://discord.com/invite/t9Kgbvf)에 가입하여 노드를 실행하고 길드넷에 참여하는 방법에 대해 자세히 알아보세요.

***NEAR 프로토콜의 향후 계획은 무엇인가요?***

https://near.org/blog/near-launches-simple-nightshade-the-first-step-towards-a-sharded-blockchain/에서 프로토콜 로드맵에 대해 알아보세요.

---

## 레슨 1 - NEAR 개요


#### 블록체인 기술

블록체인은 원래 비트코인이 개발한 신기술입니다. 블록체인 기술을 설명하는 데 가장 자주 사용되는 용어는 "공공 원장"입니다. 설명하기 쉬운 방법은, 몇 가지 주요 차이점을 제외하고 잔액, 차변 및 대변을 추적하는 은행 명세서와 유사하다는 것입니다.

- 무한 – 네트워크가 작동하는 한 항상 트랜잭션을 추가할 수 있습니다.
- 불변 – 일단 작성(검증)되면 변경할 수 없으며 수정할 수 없습니다.
- 탈중앙화  – 전 세계에 있는 밸리데이터(개별 노드)에서 블록체인을 유지 관리합니다.
- 검증 가능 – 트랜잭션은 지분 증명(POS) 또는 작업 증명(POW) 알고리즘을 사용하여, 분산된 밸리데이터 간 합의를 통해 검증됩니다. 

#### 스마트 컨트랙트
모든 블록체인이 동일한 것은 아닙니다. 일부는 트랜잭션(잔액, 차변 및 대변) 처리만 허용하지만, NEAR 및 Ethereum과 같은 블록체인은 스마트 컨트랙트를 제공합니다. 이는 블록체인에서 프로그램을 실행할 수 있도록 하는 또 다른 기능 레이어입니다.

쉽게 생각할 수 있는 방법은 "스마트 컨트랙트"를 지원하는 블록체인이 슈퍼컴퓨터와 같다는 것입니다. 이를 통해 사용자와 개발자는 전 세계적으로 CPU/메모리(리소스) 및 디스크(스토리지)를 사용하기 위해 요금을 지불할 수 있습니다.

그러나 모든 것을 블록체인에 저장하는 것은 비용이 너무 많이 들기 때문에 이치에 맞지 않습니다. 웹 프론트엔드(HTML, CSS 및 JS)는 웹 호스팅, Github 또는 Skynet에서 제공되며, 이미지는 종종 Filecoin 또는 Arweave와 같은 IPFS(InterPlanetary File Systems)에 저장됩니다.

#### 샤딩
첫 블록체인인 비트코인과 이더리움이 성장하기 시작하면서, 한계가 나타났습니다. 그들은 가진 블록/시간 스페이스 내에서 특정 수의 트랜잭션만 처리할 수 있었습니다. 이로 인해 처리, 대기 시간에 심각한 병목 현상이 발생했으며, 트랜잭션 처리에 필요한 수수료도 크게 증가했습니다.

샤딩은 블록체인을 확장하고 더 많은 처리량을 제공하는 동시에, 대기 시간을 줄이고 트랜잭션 수수료를 낮게 유지하는 기술 발전입니다. 네트워크 사용이 증가함에 따라 추가 샤드를 생성하여 이를 수행합니다.

#### NEAR에 대해
NEAR 프로토콜은 최고의 접근 방식을 염두에 두고 설계되었습니다. 이전 블록체인의 병목 현상을 해결하는 동시에, 기존 Web2 사용자 및 개발자가 블록체인 기술을 더 광범위하게 채택할 수 있도록 사용자 경험을 향상시키는 데 중점을 둡니다. NEAR는 샤딩 지분 증명(POS) 블록체인입니다.


#### 주요 특징
- 수상 경력에 빛나는 팀 – 세계 최고의 프로그래머
- 지분 증명 (POS)
- 무제한 샤드
- 사용자 경험 (UX)
- 개발자 경험 (DX)
- Rainbow Bridge에서 ETH로 - ETH에서 자산을 연결합니다.
- Aurora – 기본 제공되는 Solidity로 기본 ETH 앱 실행

#### 기술 스택
- Rust – 기본 스마트 컨트랙트 언어
- Assembly Script – 대체 스마트 컨트랙트 언어 (TypeScript와 유사)
- NodeJS – 도구
- Javascript / React / Angular – 프론트엔드

---

## 레슨 2 - NEAR-CLI
NEAR-CLI는 RPC(원격 절차 호출)를 통해 NEAR 블록체인과 통신하는 명령줄 인터페이스입니다.

* NEAR CLI 설정 및 설치
* 밸리데이터 통계 보기

> 참고: 보안상의 이유로, NEAR-CLI를 밸리데이터 노드와 다른 컴퓨터에 설치하고, 밸리데이터 노드에 전체 액세스 키를 보관하지 않는 것이 좋습니다.

### NEAR-CLI 설정

먼저 Debian이 최신인지 확인합시다.

```
sudo apt update && sudo apt upgrade -y
```

#### 개발자 도구, Node.js, 및 npm 설치
먼저 `Node.js`와 `npm` 설치부터 시작합니다.

```
curl -sL https://deb.nodesource.com/setup_17.x | sudo -E bash -  
sudo apt install build-essential nodejs
PATH="$PATH"
```

`Node.js`와 `npm` 버전을 확인합니다.
```
node -v
```
> v17.x.x

```
npm -v
```
> 8.x.x


#### NEAR-CLI 설치

다음은 NEAR CLI용 Github 레퍼지토리입니다: https://github.com/near/near-cli. NEAR-CLI를 설치하려면, 루트로 로그인하지 않는 한(권장되지 않는 한), `sudo`를 사용하여 NEAR-CLI를 설치하고, near 바이너리가 /usr/local/bin에 저장되도록 해야 합니다.

```
sudo npm install -g near-cli
```
### 밸리데이터 통계

이제 NEAR-CLI가 설치되었으므로, CLI를 테스트하고, 다음 명령을 사용하여 블록체인과 상호 작용하며 밸리데이터 통계를 볼 수 있습니다. 밸리데이터 상태를 모니터링하는 데 사용되는 세 가지 보고서가 있습니다.


##### 환경
올바른 네트워크를 선택하려면 새 셸을 시작할 때마다 환경을 설정해야 합니다.

네트워크:
- GuildNet
- TestNet
- MainNet

명령:
```
export NEAR_ENV=<network> (use guildnet / testnet / mainnet)
```

##### 제안
밸리데이터의 제안은 밸리데이터 세트에 들어가고 싶다는 것을 나타내며, 제안이 수락되려면 최소 시트 가격을 충족해야 합니다.

명령:
```
near proposals
```

##### Validators Current
이는 현재 에포크의 활성 밸리데이터 목록, 생성된 블록 수, 예상 블록 수 및 온라인 비율을 보여줍니다. 이는 밸리데이터에 문제가 있는지 모니터링하는 데 사용됩니다.

명령:
```
near validators current
```

##### Validators Next
이는 한 에포크 전에 제안이 승인되어서, 다음 에포크에 설정된 밸리데이터에 들어갈 밸리데이터 목록을 보여줍니다.

명령:
```
near validators next
```

---

## 레슨 3 - 밸리데이터 설정

이 레슨에서는 다음에 대해 배웁니다.

* 노드 설정
* 메인넷과 테스트넷의 차이점
* 메인넷 용 Nearcore 컴파일
* 제네시스 파일(genesis.json)
* 구성 파일(config.json)


### 서버 요구 사항
블록 생산 유효성 검사기에 대해서는, [`Validator Hardware`](/validator/hardware)를 참고하세요. Chunk-Only Producer(NEAR 내 향후에 생길 역할)는 아래 하드웨어 요구 사항을 참고하세요.

| 하드웨어       | Chunk-Only Producer  사양                                   |
| -------------- | ---------------------------------------------------------------       |
| CPU            | AVX를 지원하는 4-Core CPU                                           |
| RAM            | 8GB DDR4                                                              |
| 스토리지        | 500GB SSD                                                             |


### 필수 소프트웨어 설치 및 구성 설정
#### 전제 조건:
시작하기 전에, 컴퓨터에 올바른 CPU 기능이 있는지 확인하고 싶을 수 있습니다. 자세한 하드웨어 관련 정보는 [하드웨어 요구 사항](/validator/hardware)을 참고하세요.


```
lscpu | grep -P '(?=.*avx )(?=.*sse4.2 )(?=.*cx16 )(?=.*popcnt )' > /dev/null \
  && echo "Supported" \
  || echo "Not supported"
```
> 지원

다음으로 데비안이 최신 버전인지 확인합시다.


```
sudo apt update && sudo apt upgrade -y
```

#### 개발자 도구 설치:
```
sudo apt install -y git binutils-dev libcurl4-openssl-dev zlib1g-dev libdw-dev libiberty-dev cmake gcc g++ python docker.io protobuf-compiler libssl-dev pkg-config clang llvm cargo
```
####  Python pip 설치:

```
sudo apt install python3-pip
```
#### 구성 설정:

```
USER_BASE_BIN=$(python3 -m site --user-base)/bin
export PATH="$USER_BASE_BIN:$PATH"
```

#### Building env 설치
```
sudo apt install clang build-essential make
```

#### Rust & Cargo 설치
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

다음이 표시될 것입니다.

![img](/images/rust.png)

1을 누르고 enter를 누릅니다.

#### 환경 소싱
```
source $HOME/.cargo/env
```

### GitHub에서 `nearcore` 프로젝트 복제 
먼저 [`nearcore` 레퍼지토리](https://github.com/near/nearcore)를 복제합니다.

```
git clone https://github.com/near/nearcore
cd nearcore
git fetch origin --tags
```

필요한 브랜치로 전환하세요. 테스트넷에서 실행하는 경우, 최신 불안정 릴리스를 권장하고, 메인넷에서 실행하는 경우 최신 안정 버전을 권장합니다. [GitHub의 릴리스 페이지](https://github.com/near/nearcore/releases)를 확인하세요.

```
git checkout tags/<version> -b mynode
```

### `nearcore` 바이너리 컴파일
`nearcore` 폴더에서 다음 명령을 실행합니다.

```
make neard
```
바이너리 경로는 `target/release/neard`입니다. 문제가 있는 경우, cargo 명령이 없는 것일 수 있습니다. `sudo apt install cargo`를 수행해보세요. `nearcore` 바이너리를 컴파일하는 데 약간의 시간이 걸릴 수 있습니다.

### 작업 디렉토리 초기화

제대로 작업하려면, NEAR 노드에 작업 디렉토리와 몇 가지 구성 파일이 필요합니다. 다음을 실행하여 초기 필수 작업 디렉토리를 생성하십시오.

```
./target/release/neard --home ~/.near init --chain-id <network> --download-genesis
```

![img](/images/initialize.png)

이 명령은 디렉토리 구조를 생성하고, 전달한 네트워크에서 `config.json`, `node_key.json`, 그리고 `genesis.json`을 생성합니다. `testnet`에 대한 제네시스 파일이 크기 때문에(6GB 이상), 이 명령이 실행되고 한동안 진행률이 표시되지 않을 것입니다.

- `config.json` - 노드가 작동하는 방식에 응답하는 구성 매개변수입니다. config.json에는 노드가 네트워크에서 실행되는 데 필요한 정보, 피어와 통신하는 방법 및 합의에 도달하는 방법이 포함되어 있습니다. 일부 옵션은 구성 가능하지만, 일반적으로 밸리데이터는 제공된 기본 config.json을 사용하는 것을 선택합니다.
- `genesis.json` - 제네시스에서 네트워크가 시작된 모든 데이터가 포함된 파일입니다. 여기에는 초기 계정, 컨트랙트, 액세스 키 및 블록체인의 초기 상태를 나타내는 기타 기록이 포함됩니다. genesis.json 파일은 특정 시점의 네트워크 상태에 대한 스냅샷입니다. 컨트랙트 계정, 잔액, 활성 밸리데이터 및 네트워크에 대한 기타 정보가 포함됩니다. 메인넷에서, 이는 출시 당시의 네트워크 상태를 의미합니다. 테스트넷이나 길드넷에서는 네트워크가 한 지점에서 하드포크된 경우, 더 중간 상태를 포함할 수 있습니다.
- `node_key.json` -  노드의 공개 및 개인 키가 포함된 파일입니다. 또한 밸리데이터 노드를 실행하는 데 필요한 선택적인 `account_id` 매개변수를 포함합니다(이 문서에서 다루지 않음).
- `data/` -  NEAR 노드가 자신의 상태를 기록할 폴더입니다.

### `config.json` 교체

생성된 `config.json`에서, 수정할 두 매개변수가 있습니다.
- `boot_nodes`: 3단계에서 초기화하는 동안 사용할 부팅 노드를 지정하지 않은 경우, 생성된 `config.json`에 빈 배열이 표시되므로, 이를 부팅 노드를 지정하는 전체 배열로 교체해야 합니다
- `tracked_shards`: 생성된 `config.json`에서, 이 필드는 비어 있습니다. 이를 `"tracked_shards": [0]`으로 교체해야 합니다.

```
rm ~/.near/config.json
wget -O ~/.near/config.json https://s3-us-west-1.amazonaws.com/build.nearprotocol.com/nearcore-deploy/<network>/config.json
```

### 데이터 백업 가져오기

노드를 시작할 준비가 되었습니다. 그러나, 먼저 네트워크와 동기화해야 합니다. 즉, 노드는 네트워크의 다른 노드가 이미 가지고 있는 모든 헤더와 블록을 다운로드해야 합니다.

먼저 AWS CLI를 설치하세요.
```
sudo apt-get install awscli -y
```

그런 다음 AWS CLI를 사용하여 스냅샷을 다운로드합니다.
```
aws s3 --no-sign-request cp s3://near-protocol-public/backups/<testnet|mainnet>/rpc/latest .
LATEST=$(cat latest)
aws s3 --no-sign-request cp --no-sign-request --recursive s3://near-protocol-public/backups/<testnet|mainnet>/rpc/$LATEST ~/.near/data
```


NOTE: .tar 파일은 약 147GB(증가할 것임)이므로, 데이터 폴더 내부에 압축을 풀 디스크 공간이 충분한지 확인하세요.

### 노드 실행
노드를 시작하려면 다음 명령을 실행하기만 하면 됩니다.

```
cd nearcore
./target/release/neard --home ~/.near run
```

![img](/images/download.png)
이제 노드가 실행 중이며 콘솔에서 로그 출력을 볼 수 있습니다. 노드는 피어를 찾고 헤더를 100%로 다운로드한 다음 블록을 다운로드해야 합니다.

----


#### NearUp 사용

Mainnet 및 Testnet에서 neard를 사용하여 노드를 설정할 수 있습니다. Guildnet에서는 NearUp을 사용하여 노드를 설정할 수 있습니다. 그러나 NearUp은 Mainnet 또는 Testnet에 대해 권장되거나 지원되지 않습니다. 즉, Guildnet, Testnet 및 Mainnet에서 neard를 일관되게 사용하는 것이 좋습니다.

그러나 NearUp 사용을 선택한 경우, NearUp은 시작 및 실행에 필요한 바이너리와 파일을 다운로드합니다. 실행할 네트워크와 스테이킹 풀 ID만 제공하면 됩니다.


* NearUp 설치:

```
pip3 install --user nearup
```
* 최신 NearUp 버전 설치:

```
pip3 install --user --upgrade nearup
```


####  지갑 생성
- MainNet: https://wallet.near.org/
- TestNet: https://wallet.testnet.near.org/
- GuildNet: `https://wallet.openshards.io/`

#### 로컬에서 지갑 승인
NEAR-CLI를 통해 트랜잭션을 수행하려면 전체 액세스 키를 로컬에 설치해야 합니다.

Guildnet의 경우
```
export NEAR_ENV=testnet
```

* 다음 명령을 실행해야 합니다.

```
near login
```

>참고: 이 명령은 로컬로 복사할 전체 액세스 키의 인증을 허용하는 웹 브라우저를 시작합니다.


1 – 브라우저에서 링크를 복사합니다.


![img](/images/1.png)

2 –  Near CLI에 대한 액세스 권한을 부여합니다.

![img](/images/3.png)

3 – 권한 부여 후에는 다음과 같은 페이지가 표시됩니다. 콘솔로 돌아가세요.

![img](/images/4.png)

4 – 지갑을 입력하고 Enter 키를 누릅니다.

![img](/images/5.png)


Guildnet의 경우

* 최신 제네시스 및 구성 파일을 다운로드합니다.

```
cd ~/.near/guildnet
wget -c https://s3.us-east-2.amazonaws.com/build.openshards.io/nearcore-deploy/guildnet/config.json
wget -c https://s3.us-east-2.amazonaws.com/build.openshards.io/nearcore-deploy/guildnet/genesis.json
```
* 이 명령을 실행하여 Near guildnet 환경을 설정합니다.


```
export NEAR_ENV=guildnet
```
이 명령을 실행하여 Near guildnet 환경을 영구적으로 설정할 수도 있습니다.
```
echo 'export NEAR_ENV=guildnet' >> ~/.bashrc
```

* 실행 명령은 다음과 같습니다.

```
nearup run $NEAR_ENV --account-id <staking pool id>
```
여기서 AccountId는 xx.stake.guildnet, xx는 풀 이름(예: bootcamp.stake.guildnet)입니다.


Testnet의 경우

* 최신 제네시스 구성 파일을 다운로드합니다.

```
cd ~/.near/testnet
wget -c https://s3-us-west-1.amazonaws.com/build.nearprotocol.com/nearcore-deploy/testnet/config.json
wget -c https://s3-us-west-1.amazonaws.com/build.nearprotocol.com/nearcore-deploy/testnet/genesis.json
```

* 최신 스냅샷을 다운로드합니다.

```
mkdir ~/.near/testnet/data
cd ~/.near/testnet
wget -c https://near-protocol-public.s3.amazonaws.com/backups/testnet/rpc/data.tar -O - | tar -xf -
```

* 이 명령을 실행하여 Near Testnet 환경을 설정합니다.

```
export NEAR_ENV=testnet
```
* 이 명령을 실행하여 Near 테스트넷 환경을 영구적으로 설정할 수도 있습니다.

```
echo 'export NEAR_ENV=testnet' >> ~/.bashrc
```
* 실행 명령은 다음과 같습니다.

```
nearup run $NEAR_ENV --account-id <staking pool id>
```
여기서 AccountId는 xx.pool.f863973.m0이고 xx는 풀 이름(예: bootcamp.pool.f863973.m0)입니다.

처음 실행하면 NEARUp이 스테이킹 풀 ID를 입력하도록 요청하고, 이전에 {pool id}.{staking pool factory} 형식으로 설정된 스테이킹 풀 ID를 제공합니다.


> **참고: 이는 닭과 달걀과의 관계와도 같습니다.
> 스테이킹 풀을 생성하진 않았지만, 이름을 제공해야 합니다.**

####  validator_key.json 확인
* 다음 명령을 실행합니다.

Guildnet의 경우
```
cat ~/.near/guildnet/validator_key.json
```

Testnet의 경우
```
cat ~/.near/testnet/validator_key.json
```


> 참고: validator_key.json이 없으면 다음 단계에 따라 새로 만드세요.

Guildnet용 validator_key.json을 생성합니다.

*   키 파일을 생성합니다.

```
near generate-key <pool_id>
```
* 생성된 파일을 Guildnet 폴더에 복사합니다.

YOUR_WALLET을 accountId로 바꿉니다.
```
cp ~/.near-credentials/guildnet/<YOUR_WALLET>.json ~/.near/guildnet/validator_key.json
```
* “account_id” => `xx.stake.guildnet`으로 편집합니다. 여기서 xx는 PoolName을 의미합니다.

* `private_key`를 `secret_key`로 변경

> 참고: account_id는 스테이킹 풀 컨트랙트 이름과 일치해야 합니다. 그렇지 않으면 블록에 서명할 수 없습니다.

파일 컨텐츠는 다음과 같은 패턴이어야 합니다.
```
{
  "account_id": "xx.stake.guildnet",
  "public_key": "ed25519:HeaBJ3xLgvZacQWmEctTeUqyfSU4SDEnEwckWxd92W2G",
  "secret_key": "ed25519:****"
}
```

Testnet용 `validator_key.json` 만들기

*   키 파일을 생성합니다.

```
near generate-key <pool_id>
```
* Testnet 폴더에 생성된 파일을 복사합니다. YOUR_WALLET을 accountId로 교체해야 합니다.

```
cp ~/.near-credentials/testnet/YOUR_WALLET.json ~/.near/testnet/validator_key.json
```
* “account_id” => xx.pool.f863973.m0으로 편집합니다. 여기서 xx는 PoolName입니다.
* `private_key`를 `secret_key`로 변경합니다.

> 참고: account_id는 스테이킹 풀 컨트랙트 이름과 일치해야 합니다. 그렇지 않으면 블록에 서명할 수 없습니다.

파일 컨텐츠는 다음과 같은 패턴이어야 합니다.
```
{
  "account_id": "xx.stake.guildnet",
  "public_key": "ed25519:HeaBJ3xLgvZacQWmEctTeUqyfSU4SDEnEwckWxd92W2G",
  "secret_key": "ed25519:****"
}
```


#### 8단계 – 모든 파일이 생성되었는지 확인

Guildnet 명령
```
ls ~/.near/guildnet
```

Testnet 명령
```
ls ~/.near/testnet
```


다음과 같은 것들이 있어야 합니다: **validator_key.json  node_key.json  config.json  data  genesis.json**

# NEARCore를 사용한 백업 (MainNet)
메인넷에 권장됨
#### 1단계 – 필요한 소프트웨어 설치 및 구성

* 시작하기 전에 시스템이 최신 상태인지 확인하고 싶을 수 있습니다.
```
sudo apt update && sudo apt upgrade -y
```
* Python 설치
```
sudo apt install python3 git curl
```
* Building env 설치
```
sudo apt install clang build-essential make
```
* Rust & Cargo 설치
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
1을 누르고 enter를 누릅니다.
![img](/images/rust.png)

* 환경 소싱
```
source $HOME/.cargo/env
```
* NEARCore 레퍼지토리 복제
```
git clone https://github.com/nearprotocol/nearcore.git
```
* 환경을 최신 릴리스 태그로 설정합니다. 최신 릴리스 태그는 https://github.com/near/nearcore/releases에서 확인하세요. 참고: RC 태그는 테스트넷 전용입니다.
```
export NEAR_RELEASE_VERSION=1.26.1
```
```
cd nearcore
git checkout $NEAR_RELEASE_VERSION
make release
```
* Nodejs 및 NPM 설치
```
curl -sL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo apt install build-essential nodejs
PATH="$PATH"
```
* Near CLI 설치

NodeJs 및 NPM이 설치되면 이제 NEAR-Cli를 설치할 수 있습니다.

루트로 로그인하지 않는 한(권장하지 않음), NEAR-Cli를 설치하는 데 `sudo`를 사용하여 /usr/local/bin에 near binary 바이너리가 설치되도록 합니다.
```
sudo npm install -g near-cli
```
* 이 명령을 실행하여 Near Mainnet 환경을 설정합니다.
```
export NEAR_ENV=mainnet
```
* 이 명령을 실행하여 Near Testnet 환경을 영구적으로 설정할 수도 있습니다.
```
echo 'export NEAR_ENV=mainnet' >> ~/.bashrc
```
#### 2단계 – 지갑 생성
MainNet: https://wallet.near.org/

#### 3단계 – 로컬에서 지갑 인증
NEAR-Cli를 통해 트랜잭션을 수행하려면, 전체 액세스 키를 로컬에 설치해야 합니다.

* 다음 명령을 실행해야 합니다.
```
near login
```
> 참고: 이 명령은 웹 브라우저를 시작하여 로컬로 복사할 전체 액세스 키의 인증을 허용합니다.

1 – 브라우저에서 링크를 복사합니다.

![img](/images/1.png)

2 – Near CLI에 대한 액세스 권한을 부여합니다.

![img](/images/3.png)

3 – 권한 부여 후에는 다음과 같은 페이지가 표시됩니다. 콘솔로 돌아가세요.

![img](/images/4.png)

4 – 지갑을 입력하고 Enter 키를 누릅니다.

![img](/images/5.png)

#### 4단계 – 노드 초기화 및 시작
* 최신 제네시스 구성 파일을 다운로드합니다.
```
mkdir ~/.near
cd ~/.near
wget -c https://s3-us-west-1.amazonaws.com/build.nearprotocol.com/nearcore-deploy/mainnet/genesis.json
wget -c https://s3-us-west-1.amazonaws.com/build.nearprotocol.com/nearcore-deploy/mainnet/config.json
```
* [스냅샷 페이지](/intro/node-data-snapshots)에서 최신 스냅샷을 다운로드합니다.

* NEAR를 초기화합니다.
```
target/release/neard init --chain-id="mainnet" --account-id=<staking pool id>
```
##### Create `validator_key.json`
* 키 파일을 생성합니다.
```
near generate-key <pool_id>
```
* Mainnet 폴더에 생성된 파일을 복사합니다. YOUR_WALLET을 당신의 accountId로 바꿔야 합니다.
```
cp ~/.near-credentials/YOUR_WALLET.json ~/.near/mainnet/validator_key.json
```
* "account_id" => xx.poolv1.near를 편집합니다. 여기서 xx는 PoolName입니다.
* "private_key"를 "secret_key"로 변경합니다.
> 참고:  account_id는 스테이킹 풀 컨트랙트 이름과 일치해야 합니다. 그렇지 않으면 블록에 서명할 수 없습니다. 
> 파일 내용은 다음과 같아야 합니다.
> {
>   "account_id": "xx.poolv1.near",
>   "public_key": "ed25519:HeaBJ3xLgvZacQWmEctTeUqyfSU4SDEnEwckWxd92W2G",
>   "secret_key": "ed25519:****"
> }
```
near generate-key <your_accountId>
vi ~/.near/{your_accountId}.json
```
"private_key"를 "secret_key"로 이름을 바꾼 다음 파일을 ~/.near로 이동합니다.

```
mv the file to ~/.near
```
"account_id"를 staking_pool_id로 업데이트합니다.

> 참고:  account_id는 스테이킹 풀 컨트랙트 이름과 일치해야 합니다. 그렇지 않으면 블록에 서명할 수 없습니다. 

* 노드를 시작합니다.
```
target/release/neard run
```
* Systemd 명령을 설정합니다.

```
sudo vi /etc/systemd/system/neard.service
```
다음을 붙여넣습니다.

```[Unit]
Description=NEARd Daemon Service

[Service]
Type=simple
User=<USER>
#Group=near
WorkingDirectory=/home/<USER>/.near
ExecStart=/home/<USER>/nearcore/target/release/neard run
StandardOutput=file:/home/<USER>/.near/neard.log
StandardError=file:/home/<USER>/.near/nearderror.log
Restart=on-failure
RestartSec=30
KillSignal=SIGINT
TimeoutStopSec=45
KillMode=mixed

[Install]
WantedBy=multi-user.target
```

> 참고: USER를 당신의 경로로 변경하세요.

명령:

```
sudo systemctl enable neard
```
명령:

```
sudo systemctl start neard
```
파일의 오류로 인해 서비스의 변경이 필요한 경우. 다시 로드해야 합니다.

```
sudo systemctl reload neard
```
##### 로그 감시
명령:

```
journalctl -n 100 -f -u neard
```
로그를 깔끔하게 출력해 보세요. 

명령:

```
sudo apt install ccze
```
로그에 색상을 넣습니다.

명령:

```
journalctl -n 100 -f -u neard | ccze -A
```
### 밸리데이터 되기
밸리데이터가 되어 밸리데이터 집합에 들어가기 위해서는, 최소한의 성공 기준들이 충족되어야 합니다.

* 노드가 완전히 동기화되어야 합니다.
* `validator_key.json`가 올바른 위치에 있어야 합니다.
* 컨트랙트는 `validator_key.json` 내 공개 키로 초기화되어야 합니다.
* account_id는 스테이킹 풀 컨트랙트 ID로 설정되어야 합니다.
* 최소 시트 가격을 충족할 수 있는 충분한 위임량이 있어야 합니다. [여기](https://explorer.testnet.near.org/nodes/validators)에서 시트 가격을 확인하세요.
* 컨트랙트를 가리키는 제안서를 제출해야 합니다.
* 제안이 수락되면, 밸리데이터는 밸리데이터 집합에 들어가기 위해 2-3 에포크를 기다려야 합니다.
* 밸리데이터 집합에 들어가면, 밸리데이터는 할당된 블록의 90% 이상을 생성해야 합니다.

밸리데이터 노드의 실행 상태를 확인하세요. "Validator"가 표시되면 현재 밸리데이터 목록에서 풀이 선택된 것입니다.


### 풀 정보 제출 (Mainnet 전용)
풀 정보를 추가하면 위임자에게 도움이 되며, 업그레이드 및 기타 중요한 발표에 대한 홍보에도 도움이 됩니다: https://github.com/zavodil/near-pool-details. 추가할 수 있는 필드는 https://github.com/zavodil/near-pool-details/blob/master/FIELDS.md에 나와 있습니다.

밸리데이터에게 제공하도록 요청하는 정보는 다음과 같습니다.

- 이름
- 설명
- URL
- 국가 및 국가 코드
- 이메일 (지원용)
- Telegram, Discord, 또는 Twitter

명령:

```
near call name.near update_field '{"pool_id": "<pool_id>.poolv1.near", "name": "url", "value": "https://yoururl.com"}' --accountId=<accountId>.near  --gas=200000000000000
```
```
near call name.near update_field '{"pool_id": "<pool_id>.poolv1.near", "name": "twitter", "value": "<twitter>"}' --accountId=<account id>.near  --gas=200000000000000
```
```
near view name.near get_all_fields '{"from_index": 0, "limit": 3}'
```
```
near view name.near get_fields_by_pool '{"pool_id": "<pool_id>.poolv1.near"}'
```
---

## 레슨 4 - 스테이킹 풀
NEAR는 화이트리스트 스테이킹 컨트랙트가 있는 스테이킹 풀 팩토리를 사용하여, 위임자의 자금이 안전한지 확인합니다. NEAR에서 밸리데이터를 실행하려면, 스테이킹 풀을 NEAR 계정에 배포하고 NEAR 밸리데이터 노드에 통합해야 합니다. 위임자는 UI 또는 명령줄을 사용하여 풀에 스테이킹해야 합니다. 스테이킹 풀은 NEAR 계정에 배포되는 스마트 컨트랙트입니다.

### 스테이킹 풀 컨트랙트 배포
#### 스테이킹 풀 배포
스테이킹 풀 팩토리를 호출하고, 지정된 이름으로 새 스테이킹 풀을 생성하여 표시된 accountId에 배포합니다.

Guildnet의 경우
```
near call stake.guildnet create_staking_pool '{"staking_pool_id": "<pool id>", "owner_id": "<accountId>", "stake_public_key": "<public key>", "reward_fee_fraction": {"numerator": 5, "denominator": 100}}' --accountId="<accountId>" --amount=30 --gas=300000000000000
```

Testnet의 경우
```
near call pool.f863973.m0 create_staking_pool '{"staking_pool_id": "<pool id>", "owner_id": "<accountId>", "stake_public_key": "<public key>", "reward_fee_fraction": {"numerator": 5, "denominator": 100}}' --accountId="<accountId>" --amount=30 --gas=300000000000000
```

Mainnet의 경우
```
near call poolv1.near create_staking_pool '{"staking_pool_id": "<pool id>", "owner_id": "<accountId>", "stake_public_key": "<public key>", "reward_fee_fraction": {"numerator": 5, "denominator": 100}}' --accountId="<accountId>" --amount=30 --gas=300000000000000
```

위의 예에서 다음을 교체해야 합니다.

* **풀 ID**: 스테이킹 풀 이름입니다. 팩토리는 자동으로 이 매개 변수에 이름을 추가하여 {pool_id}.{staking_pool_factory}를 생성합니다. 예시는 다음과 같습니다.   

- `nearkat.stake.guildnet` (guildnet)
- `nearkat.pool.f863973.m0` (testnet)
- `nearkat.poolv1.near` (mainnet)

* **Owner ID**: 스테이킹 풀을 관리할 NEAR 계정입니다. 일반적으로 기본 NEAR 계정입니다.
* **Public Key**: **validator_key.json** 파일의 공개 키입니다 .
* **5**: 풀이 부과할 수수료(예: 이 경우 5/100는 5%의 수수료를 의미)입니다.
* **Account Id**:  스테이킹 풀을 배포하는 NEAR 계정입니다.

> 최소 30개의 NEAR를 가지고 있어야 합니다. 이는 스토리지에 필요한 최소값입니다.

풀 매개변수를 변경하려면 다음 명령을 사용하세요. 아래 예에서는 청구되는 커미션 금액을 1%로 변경합니다.

```
near call <pool_name> update_reward_fee_fraction '{"reward_fee_fraction": {"numerator": 1, "denominator": 100}}' --accountId <account_id> --gas=300000000000000
```


다음과 같은 내용이 표시됩니다.

![img](/images/pool.png)

끝에 "True"가 있는 경우. 풀이 생성됩니다.

**이제 스테이킹 풀을 구성했습니다.**

Guildnet & Testnet의 경우 OSA Discord로 이동하여 일부 guildnet 또는 testnet 토큰을 밸리데이터로 요청할 수 있습니다. https://discord.gg/GrBqK3ZJ2T

#### 스테이킹 풀 컨트랙트 구성
다음을 교체합니다.

* 풀 이름 – pool_id.staking_pool_factory
* 소유자 Id
* 공개 키
* 보상 비율
* 계정 Id
```
near call <pool name> new '{"owner_id": "<owner id>", "<public key>": "<public key>", "reward_fee_fraction": {"numerator": <reward fraction>, "denominator": 100}}' --accountId <accountId>
```
#### Manage your staking pool contract
> HINT: Copy/Paste everything after this line into a text editor and use search and replace. Once your pool is deployed, you can issue the commands below:


##### 스테이킹 풀의 소유자 ID 검색

명령:

```
near view {pool_id}.{staking_pool_factory} get_owner_id '{}'
```
##### 밸리데이터에 대해 네트워크가 가진 공개 키 반환을 위해 다음 명령을 실행합니다.
명령:

```
near view {pool_id}.{staking_pool_factory} get_staking_key '{}'
```
##### 공개 키가 일치하지 않으면 다음과 같이 스테이킹 키를 업데이트할 수 있습니다(아래의 pubkey를 validator.json 파일의 키로 교체).

```
near call {pool_id}.{staking_pool_factory} update_staking_key '{"stake_public_key": "<public key>"}' --accountId <accountId>
```

### 스테이킹 풀 작업
> 참고: 제안서를 발행하거나 자금을 입금하기 전에 밸리데이터가 완전히 동기화되어야 합니다.

### 제안

밸리데이터 자리를 얻으려면 먼저 적절한 금액의 지분이 있는 제안서를 제출해야 합니다. epoch +2에 대해 제안이 전송됩니다. 즉, 지금 제안서를 보내면 승인되면, 3 에포크 후에 자리를 얻게 됩니다. 자리를 확보하려면 매 에포크마다 제안서를 제출해야 합니다. 제안서를 보내려면 ping 명령을 사용합니다. 스테이킹 풀 컨트랙트에 스테이킹 또는 언스테이크 명령이 전송되는 경우에도 제안이 전송됩니다.

참고로 핑은 위임자의 스테이킹 잔액도 업데이트합니다. 풀 컨트랙트에서 보고된 보상을 최신 상태로 유지하려면, 매 에포크마다 핑을 발행해야 합니다. cron 작업을 사용하여 핑을 설정하거나, [Cron Cat](https://cron.cat/)을 사용할 수 있습니다.

각 네트워크에 대한 스테이킹 풀 팩토리는 다음과 같습니다.
* **GuildNet**: stake.guildnet
* **TestNet**: pool.f863973.m0
* **MainNet**: poolv1.near

### 트랜잭션
#### NEAR 입금 및 스테이킹

명령:
```
near call <staking_pool_id> deposit_and_stake --amount <amount> --accountId <accountId> --gas=300000000000000
```
#### NEAR 언스테이킹
금액은 yoctoNEAR 단위로 표시됩니다.

언스테이킹하려면, 다음 명령을 실행하세요.
```
near call <staking_pool_id> unstake '{"amount": "<amount yoctoNEAR>"}' --accountId <accountId> --gas=300000000000000
```
한번에 언스테이킹하려면, 다음을 실행하면 됩니다.
```
near call <staking_pool_id> unstake_all --accountId <accountId> --gas=300000000000000
```
#### 출금

언스테이킹은 완료하는 데 2-3 에포크가 걸리며, 그 기간이 지나면 풀에서 YoctoNEAR 단위의 금액을 출금할 수 있습니다.


명령:
```
near call <staking_pool_id> withdraw '{"amount": "<amount yoctoNEAR>"}' --accountId <accountId> --gas=300000000000000
```
한번에 출금하는 명령:
```
near call <staking_pool_id> withdraw_all --accountId <accountId> --gas=300000000000000
```

#### 핑
핑은 새로운 제안을 발행하고 위임자의 스테이킹 잔액을 업데이트합니다. 보고된 보상을 최신 상태로 유지하려면, 매 에포크마다 핑을 발행해야 합니다.

명령:
```
near call <staking_pool_id> ping '{}' --accountId <accountId> --gas=300000000000000
```
잔액
총 잔액
명령:
```
near view <staking_pool_id> get_account_total_balance '{"account_id": "<accountId>"}' --gas=300000000000000
```
#### 스테이킹 잔액
명령:
```
near view <staking_pool_id> get_account_staked_balance '{"account_id": "<accountId>"}'
```
#### 언스테이킹 잔액
Command:
```
near view <staking_pool_id> get_account_unstaked_balance '{"account_id": "<accountId>"}'
```
#### 출금 가능
잠금 해제된 경우에만 컨트랙트에서 자금을 인출할 수 있습니다.

명령:
```
near view <staking_pool_id> is_account_unstaked_balance_available '{"account_id": "<accountId>"}'
```
#### 스테이킹 일시정지 / 재개
##### 일시정지
명령:
```
near call <staking_pool_id> pause_staking '{}' --accountId <accountId>
```
##### 재개
명령:
```
near call <staking_pool_id> resume_staking '{}' --accountId <accountId>
```

---

## 레슨 5 - 모니터링
### 로그 파일
로그 파일은 설정에 따라 ~/.nearup/logs 디렉토리 또는 systemd에 저장됩니다.

NEARUp 명령:
```
nearup logs --follow
```

Systemd 명령:
```
journalctl -n 100 -f -u neard | ccze -A
```

**샘플 로그 파일:**

밸리데이터 | 1명

```
INFO stats: #85079829 H1GUabkB7TW2K2yhZqZ7G47gnpS7ESqicDMNyb9EE6tf Validator 73 validators 30 peers ⬇ 506.1kiB/s ⬆ 428.3kiB/s 1.20 bps 62.08 Tgas/s CPU: 23%, Mem: 7.4 GiB
```

* **밸리데이터**: “Validator”는 당신이 활성 밸리데이터임을 나타냅니다.
* **73 밸리데이터**: 네트워크 내에 총 73명의 밸리데이터가 존재합니다.
* **30 피어**: 현재 30명의 피어가 있습니다. 합의에 도달하고 검증을 시작하려면, 최소 3명의 피어가 필요합니다.
* **#46199418**: 블록 – 블록이 계속 증가하는지 확인하세요.

### RPC
포트가 노드 방화벽에서 열려 있는 한, 네트워크 내의 모든 노드는 포트 3030에서 RPC 서비스를 제공합니다. NEAR-CLI는 내부적으로 RPC 호출을 사용합니다. RPC의 일반적인 용도는 밸리데이터 통계, 노드 버전, 위임자 지분을 확인하는 것이지만, 블록체인, 계정 및 컨트랙트 전반과 상호 작용하는 데에도 사용할 수 있습니다.

여기에서 많은 명령과 사용 방법을 자세히 알아보세요.

- https://docs.near.org/api/rpc/introduction



명령:
```
sudo apt install curl jq
```
##### 일반적인 명령:
###### 노드 버전 확인:
명령:
```
curl -s http://127.0.0.1:3030/status | jq .version
```
###### 위임자 및 지분 확인
명령:
```
near view <your pool>.stake.guildnet get_accounts '{"from_index": 0, "limit": 10}' --accountId <accountId>.guildnet
```
###### 밸리데이터 탈락 이유 확인
명령:
```
curl -s -d '{"jsonrpc": "2.0", "method": "validators", "id": "dontcare", "params": [null]}' -H 'Content-Type: application/json' https://rpc.openshards.io | jq -c ".result.prev_epoch_kickout[] | select(.account_id | contains ("<POOL_ID>"))" | jq .reason
```
###### 생성 / 예상 블록 확인
명령:
```
curl -s -d '{"jsonrpc": "2.0", "method": "validators", "id": "dontcare", "params": [null]}' -H 'Content-Type: application/json' http://localhost:3030/ | jq -c ".result.current_validators[] | select(.account_id | contains ("POOL_ID"))"
```
### Prometheus
디스크, CPU, 메모리, 네트워크 io, 누락된 블록 및 피어를 모니터링하는 것은 건강한 노드를 위해 매우 중요합니다. 현재 Prometheus와 Granfana를 결합하여 모니터링 및 시각적 보고 도구를 제공하고 있습니다. Prometheus는 로그 저장 요구 사항으로 인해, 별도의 시스템에 설정하는 것이 가장 좋습니다.

#### 설치
명령:
```
sudo apt-get update
```
명령:
```
sudo apt-get install prometheus prometheus-node-exporter prometheus-pushgateway
prometheus-alertmanager
```
Prometheus가 설치되었는지, 경로에 있는지 확인하세요.
```
prometheus --version
```
#### 서비스 시작
명령:
```
sudo systemctl status prometheus
```
명령:
```
sudo systemctl status prometheus-node-exporter
```
명령:
```
sudo vi /etc/prometheus/prometheus.yml
```
#### 타겟 업데이트 및 저장
targets: [‘localhost:9093’, ‘localhost:3030’]

#### 규칙 파일 참고
규칙을 한 번 로드하고, 전역 'evaluation_interval'에 따라 규칙을 주기적으로 평가합니다.

```
rule_files:

- "rules.yml"
```
#### Postfix 이메일 설정
명령:
```
sudo apt-get install mailutils
```
#### 응답 설정
* 인터넷 사이트
* 도메인 이름 입력(이메일 주소로 사용)

명령
```
sudo vi /etc/postfix/main.cf
```
#### 구성 파일 업데이트 및 저장
* inet_interfaces = all to inet_interfaces = localhost
* inet_protocols = all to inet_protocols = ipv4

#### postfix 재시작
명령:
```
sudo service postfix restart
```
#### Postfix와 함께 사용되는 호스트 이름 추가
명령:
```
sudo vi /etc/hostname
```
명령
```
sudo nano /etc/hosts
```
#### 테스트 이메일 전송
```
echo "This is the body of the email" | mail -s "This is the subject line" user@example.com
```
#### rules.yml 업데이트
명령:
```
sudo vi /etc/prometheus/rules.yml
```
```
groups:
  - name: near
    rules:
      - alert: InstanceDown
        expr: up == 0
        for: 1m
        labels:
          severity: "critical"
        annotations:
          summary: "Endpoint {{ $labels.instance }} down"
          description: "{{ $labels.instance }} of job {{ $labels.job }} "
      - alert: NearVersionBuildNotMatched
        expr: near_version_build{instance="yournode.io", job="near"} != near_dev_version_build{instance="yournode.io", job="near"}
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "Near Node Version needs updated."
          description: "Your version is out of date and you risk getting kicked."
      - alert: StakeBelowSeatPrice
        expr: abs((near_current_stake / near_seat_price) * 100) < 100
        for: 2m
        labels:
          severity: critical
        annotations:
          description: 'Pool is below the current seat price'
```
#### 서비스 재시작
명령:
```
sudo systemctl restart prometheus
```
명령:
```
sudo systemctl status prometheus
```
```
sudo systemctl status prometheus
```
### Grafana
#### 패키지 다운로드 및 추가
명령:
```
wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -
```
명령:
```
sudo add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"
```
명령:
```
sudo apt-get install grafana
```
#### 규칙 설정
명령:
```
sudo vi /etc/prometheus/rules.yml
```
```
- job_name: validator
  - static_configs:
    - targets: ['localhost:9093']
```
#### 알림 관리자 업데이트
명령:
```
sudo vi /etc/init.d/prometheus-alertmanager
```
```
NAME=prometheus-alertmanager
```
#### 명령줄 인자 설정
명령:
```
sudo vi /etc/default/prometheus-alertmanager
```
```
ARGS="--cluster.listen-address="
```
#### 서비스 시작 및 리로드
명령:
```
sudo systemctl daemon-reload
```
```
sudo systemctl enable grafana-server.service
```
```
sudo systemctl start grafana-server
```
```
sudo service grafana-server status
```
#### 추가 플러그인 설치
```
sudo grafana-cli plugins install simpod-json-datasource
```
```
sudo grafana-cli plugins install ryantxu-ajax-panel
```
#### 서비스 재시작 및 비밀번호 업데이트
```
service grafana-server restart
```
```
sudo grafana-cli admin reset-admin-password admin
```
#### 특정 IP로 포트 열기
명령:
```
sudo iptables -L
```
명령:
```
sudo iptables -A INPUT -p tcp --dport 3000 -s 66.73.0.194 -j ACCEPT
```
```
sudo netfilter-persistent save
```
```
sudo netfilter-persistent reload
```
#### 대시보드 생성
* Prometheus 데이터소스 추가
* 알림 채널 이메일 추가
* grafana 이메일 구성

명령
```
sudo vi /etc/grafana/grafana.ini
```
```
enabled = true
host = localhost:25
skip_verify = true
from_address = moinitor@yournode.com
from_name = Validator
```
#### 서비스 재시작
```
service grafana-server restart
```
#### 로그 감시
```
sudo tail -f /var/log/grafana/grafana.log
```
#### Prometheus Exporter 설치

명령:
```
sudo apt install golang-go
git clone https://github.com/masknetgoal634/near-prometheus-exporter.git
cd near-prometheus-exporter/
go build -a -installsuffix cgo -ldflags="-w -s" -o main .
```
#### Exporter 시작
명령:
```
./main -accountId <contract account id>
netstat -an | grep 9333
```
#### Prometheus 업데이트

명령:
```
sudo vi /etc/prometheus/prometheus.yml
```

```
- job_name: near-node
scrape_interval: 15s
static_configs:
- targets: ['<NODE_IP_ADDRESS>:3030']
```
#### AlertManager 업데이트
```
sudo vi /etc/prometheus/alertmanager.yml
```
```
postqueue -p
```
```
amtool alert
```
```
promtool check rules /etc/prometheus/rules.yml
```
```
promtool check config /etc/prometheus/prometheus.yml
```
```
amtool check-config /etc/prometheus/alertmanager.yml
```
```
cd near-prometheus-exporter/
```
```
mv main near-exporter
```
```
sudo vi /lib/systemd/system/near-exporter.service
```

```
[Unit]

Description=NEAR Prometheus Exporter

[Service]

Restart=always

User=prometheus

EnvironmentFile=/etc/default/near-exporter

ExecStart=/opt/near-prometheus-exporter/near-exporter $ARGS

ExecReload=/bin/kill -HUP $MAINPID

TimeoutStopSec=20s

SendSIGKILL=no

[Install]

WantedBy=multi-user.target
```
#### Exporter 업데이트
명령:
```
sudo vi /etc/default/near-exporter

# Set the command-line arguments to pass to the server.

# Set you contract name

ARGS="-accountId yournode"
```
#### 구성 복사 및 서비스 시작
명령:
```
sudo cp /lib/systemd/system/near-exporter.service /etc/systemd/system/near-exporter.service
```
```
sudo chmod 644 /etc/systemd/system/near-exporter.service
```
```
sudo systemctl start near-exporter
```
```
sudo systemctl status near-exporter
```
```
ps -elf | grep near-exporter
```
```
netstat -an | grep 9333
```
```
sudo systemctl enable near-exporter
```
---

## 레슨 6 - 문제 해결
이 레슨에서는 다음에 대해 배웁니다.

* 키
* 일반적인 오류

### 키
NEAR는 암호화 키를 사용하여 계정과 밸리데이터를 보호하며, 각 키에는 공개 및 개인 키 쌍이 있습니다.


NEAR 및 키에 대한 자세한 정보 찾기:
https://docs.near.org/concepts/basics/account#access-keys

#### 밸리데이터 키:
트랜잭션을 관리하고 서명하려면 node_key 및 validator_key를 사용하세요.

##### 노드 키:

다른 피어와 통신하는 데 사용되며 주로 블록체인 동기화를 담당합니다.
```
~/.near/<network>/node_key.json
```
일반적인 문제:

장애 상황에서는 node_key와 validator_key를 모두 복사해야 합니다.

##### 밸리데이터 키:

서명 및 블록 검증에 사용됩니다.
```
~/.near/<network>/validator_key.json
```
일반적인 문제:

1. 스테이킹 컨트랙트를 초기화하는 데 사용되는 밸리데이터 키가 validator_key.json에 있는 키가 아닙니다.
2. NEARUp 초기화 ​​시 제출한 계정 ID가 validator_key.json의 계정 ID와 동일하지 않습니다.


### 일반적인 오류 & 해결책
#### 밸리데이터 동기화 전에 제안 제출
밸리데이터 집합에 들어가기 위한 제안서를 제출하기 전까지 검증인이 완전히 동기화되어야 합니다. 완전히 동기화되지 않고 밸리데이터 집합을 입력한 경우, 로그가 오류로 채워집니다.


**해결 방법**
밸리데이터 집합에서 쫓겨날 때까지 4 에포크를 기다리세요. 그런 다음 데이터 디렉토리를 삭제하고, 다시 동기화합니다. 스테이킹 작업 또는 핑이 풀로 이동하기 전에 완전히 동기화되었는지 확인하세요.
```
1. Stop the node
2. rm -Rf ~/.near/<NETWORK_ID>/data
3. Start the node
```
#### 다른 인스턴스가 실행되고 있을 때 노드 시작
경우에 따라 셸 또는 NEARUp에서 프로세스 연결이 끊어질 수 있습니다. 노드를 시작하려고 할 때 표시되는 일반적인 오류는 다음과 같습니다.

```
Err value: Os { code: 98, kind: AddrInUse, message: "Address already in use" }',
```
**해결 방법**
실행 중인 프로세스의 pid를 찾으세요.
```
ps -elf | grep neard
```
실행 중인 pid를 중단합니다.
```
kill -9 <PID>
```
#### 디스크 공간 부족
밸리데이터 로그 파일에서 남은 공간이 없다는 장치 오류가 발생한다면, 디스크 공간이 부족한 것일 수 있습니다.

```
1. Stop the node
2. Failover to a backup node
3. Cleanup files or resize disk
4. Fail back over.
```
#### 밸리데이터 자리를 받기에 부족한 지분
이는 밸리데이터 제안이 수락되었는지 확인하여, 자리를 받았는지 확인할 수 있습니다.
```
near proposals
```
#### 블록을 생성하지 않고 있음
당신의 밸리데이터가 현재 Near 밸리데이터로써 블록을 생성하지 않고 있다고 해봅시다.

이는 스테이킹 풀 컨트랙트와 validator_key.json이 서로 다른 공개 키를 가지고 있거나, validator_key.json의 account_id가 스테이킹 풀 컨트랙트 ID가 아니기 때문입니다.

**스테이킹 풀 키 가져오기**
```
near view <POOL_ID> get_staking_key '{}'
```
**validator_key.json 내 키 가져오기**
```
cat ~/.near/<network>/validator_key.json | grep public_key
```
> 참고: 두 키가 모두 일치해야 합니다. 스테이킹 풀 키를 업데이트하지 않고 핑하기 전에 2 에포크를 기다리세요.

**스테이킹 풀 키 업데이트**
```
near call <POOL_ID> update_staking_key '{"stake_public_key": "<PUBLIC_KEY>"}' --accountId <ACCOUNT_ID>
```
**account_id가 스테이킹 풀 컨트랙트로 설정되어 있는지 확인하세요.**
```
vi ~/.near/<network>/validator_key.json
```
```
"account_id" = <staking pool id>
```
> Note: if it does now match the staking pool id upate it and restart your node.

#### 충분한 블록 또는 청크를 생성하지 않고 있음
누락된 블록 또는 청크는 밸리데이터가 밸리데이터 풀에서 추방되는 주된 이유입니다. NEAR-Cli 및 RPC를 통해 예상/누락된 블록 수를 확인할 수 있습니다.

**NEAR-CLI**

```
near validators current | grep <pool id>
```
**RPC**
```
curl -s -d '{"jsonrpc": "2.0", "method": "validators", "id": "dontcare", "params": [null]}' -H 'Content-Type: application/json' http://localhost:3030/ | jq -c ".result.current_validators[] | select(.account_id | contains ("<POOL_ID>"))"
```
**추방된 이유 확인**
```
curl -s -d '{"jsonrpc": "2.0", "method": "validators", "id": "dontcare", "params": [null]}' -H 'Content-Type: application/json' https://rpc.openshards.io | jq -c ".result.prev_epoch_kickout[] | select(.account_id | contains ("<POOL_ID>"))" | jq .reason
```
#### 올바른 환경을 내보내지 않음
NEAR-Cli를 실행할 때마다 올바른 환경을 사용하고 있는지 확인하세요.

```
export NEAR_ENV=<mainnet,testnet,guildnet>
```
#### AVX 지원과 호환되지 않는 CPU
누락된 블록과 노드가 동기화되지 않는 한 가지 원인은, AVX가 지원되지 않는 CPU에서 실행되기 때문입니다. AVX 지원은 필요하지만, 이는 트랜잭션의 복잡성에 따라 항상 사용되는 것은 아닙니다.

#### SSD 드라이브 동작 안함
NEAR는 1초의 블록 시간을 가지고 있으며, HDD 디스크는 이를 감당할 만큼 충분히 빠르지 않습니다. 따라서 SDD 드라이브가 필요하고, SSD NVME 드라이브가 권장됩니다.

#### 일관적이지 않은 인터넷 연결
NEAR에는 1초의 블록 시간을 가지고 있으므로, 인터넷 제공업체의 레이턴시로 인해 블록을 놓칠 수 있습니다.

#### 합의에 충분한 피어를 확보하지 못함
피어를 확보할 수 없는 경우 재시작이 도움이 될 수 있습니다. 드물게, config.json의 boot_nodes가 비어 있을 수도 있습니다.


해당 문제에 대한 로그는 다음과 같습니다:
```
INFO stats: #42376888 Waiting for peers 0/0/40 peers ⬇ 0 B/s ⬆ 0 B/s 0.00 bps 0 gas/s CPU: 2%, Mem: 91.3 MiB
```

**해결 방법**
최신 config.json 파일을 다운로드하고 다시 시작합니다:
- For Guildnet: https://s3.us-east-2.amazonaws.com/build.openshards.io/nearcore-deploy/guildnet/config.json
- For Testnet: https://s3-us-west-1.amazonaws.com/build.nearprotocol.com/nearcore-deploy/testnet/config.json
- For Mainnet: https://s3-us-west-1.amazonaws.com/build.nearprotocol.com/nearcore-deploy/mainnet/config.json


## 레슨 7 - 노드 장애 조치
기본 노드에서 하드웨어 또는 네트워크 오류가 발생하는 경우 다른 위치에서 작동할 보조 노드를 유지 관리하는 것은 무언의 요구 사항입니다.

표준 노드(밸리데이터 키 없음)와 다른 node_key를 설정해야 합니다. 노드는 정상적인 프로세스를 사용하여 설정됩니다(밸리데이터 노드 설정 참조).

참고: 백업 노드는 config.json에서 기본 노드와 동일한 샤드를 추적해야 합니다. 백업 노드가 기본 노드와 동일한 `config.json`을 가지고 있는지 확인하세요.

```
"tracked_shards":[0],
```

### 장애 조치
장애에 대해 조치하려면, node_key.json 및 validatory_key.json을 보조 노드에 복사하고 다시 시작해야 합니다.
```
1. Copy over node_key.json
2. Copy over validator_key.json
4. Stop the node primary node
3. Stop the secondary node
4. Restart the secondary node
```
기본 노드에 발생한 장애를 복구할 때, 보조 node_key.json을 원래 자리로 옮기고 역순으로 서비스를 다시 시작하면 됩니다.

>질문이 있으신가요?
<a href="https://stackoverflow.com/questions/tagged/nearprotocol">
  <h8>StackOverflow에 물어보세요!</h8></a>
