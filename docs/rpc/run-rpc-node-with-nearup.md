---
id: run-rpc-node-with-nearup
title: RPC 노드 실행 (nearup 사용)
sidebar_label: 노드 실행 (nearup 사용)
sidebar_position: 3
description: nearup을 사용하여 RPC 노드를 실행하는 법
---

_Nearup은 Mainnet에서 사용되지 않으므로 Nearup 대신 Neard로 노드를 설정하는 것이 좋습니다. Neard로 RPC 노드를 설정하는 방법에 대한 지침은 [노드 실행](/rpc/run-rpc-node-without-nearup) 으로 이동하세요._


<blockquote class="info">
<strong>Heads up</strong><br /><br />

`testnet`과 `localnet`에서 **노드를 준비하고 실행하는 데에는** `nearup`에 대한 README만 필요할 것입니다. `nearup`은 NEAR `testnet`과 `localnet`노드를 설치하는 데에 독점적으로 사용됩니다. 그러나, `nearup`은 `mainnet` 노드를 설치하는 데에는 사용되지 않습니다. 

</blockquote>


## 전제 조건

- [Git](https://git-scm.com/)
- [Nearup](https://github.com/near-guildnet/nearup): [`nearup`](https://github.com/near-guildnet/nearup)이 설치되었는지 확인하세요. https://github.com/near-guildnet/nearup 내 지침에 따라 `nearup`을 설치할 수 있습니다.

---

### `nearup`을 사용하여 RPC 노드를 실행하기 위한 단계 

RPC 노드를 실행하는 것은 [밸리데이터 노드](/validator/running-a-node)를 실행하는 것과 매우 유사한데, 이는 두 유형의 노드가 모두 동일한 `nearcore` 릴리스를 사용하기 때문입니다. 밸리데이터 노드를 실행할 때의 주요 차이점은, 밸리데이터 노드에서 `validator_key.json`를 사용해야 한다는 것입니다. 이는 밸리데이터 노드가 네트워크에서 블록 및 청크 유효성 검사 작업을 지원하기 때문입니다.


우선, `nearcore` 레퍼지토리를 복제하세요.

```text
git clone https://github.com/near/nearcore.git
cd nearcore
```
빌드하고 싶은 버전을 체크아웃합니다.

```bash
git checkout <version>
```

그런 다음, 아래 명령을 실행합니다.

```bash
make neard
```

이렇게 하면 체크아웃한 버전의 `neard` 바이너리가 컴파일되며, `target/release/neard`에서 사용할 수 있습니다.

컴파일에는 컴퓨터에 있는 가상 코어당 1GB 이상의 메모리가 필요합니다. 프로세스가 종료되어 빌드가 실패하면 다음과 같이 병렬 작업 수를 줄이려고 할 수 있습니다: `CARGO_BUILD_JOBS=8 make neard`

참고하세요. `cargo build --release`가 아닌 `make`을 통해 릴리스를 빌드해야 합니다. `cargo build --release`는 일부 최적화(특히 링크 타임 최적화)를 건너뛰므로, 덜 효율적인 실행 파일을 생성합니다.


```bash
nearup run testnet --binary-path path/to/nearcore/target/release
```

그러면 아래에 계정 ID를 입력하라는 메시지가 표시됩니다. 현재 밸리데이터 노드가 아닌 RPC 노드를 실행 중이므로, 이 칸은 비워 두어야 합니다.


```text
Enter your account ID (leave empty if not going to be a validator):
```

초기화가 완료될 때까지 기다렸다가 다음 명령을 사용하여 로그를 따릅니다.

```bash
  $ nearup logs --follow
```
그런 다음 아래 명령을 실행합니다.

```bash
  $ nearup stop
```

S3에서 최신 RPC 스냅샷의 사본을 검색합니다.

```bash
$ aws s3 --no-sign-request cp s3://near-protocol-public/backups/testnet/rpc/latest .
$ LATEST=$(cat latest)
$ aws s3 --no-sign-request cp --no-sign-request --recursive s3://near-protocol-public/backups/testnet/rpc/$LATEST ~/.near/data
```


마지막으로 다음 명령을 실행하면, 노드에서 헤더 동기화를 시작해야 합니다.

```bash
  $ nearup run testnet
```

>질문이 있으신가요?
<a href="https://stackoverflow.com/questions/tagged/nearprotocol">
  <h8>StackOverflow에 물어보세요!</h8></a>
