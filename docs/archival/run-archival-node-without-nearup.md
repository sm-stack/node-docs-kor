---
id: run-archival-node-without-nearup
title: 아카이브 노드 실행
sidebar_label: 노드 실행 🚀
sidebar_position: 2
description: nearup 없이 RPC 노드를 실행하는 방법
---

다음 지침은 localnet, testnet 및 mainnet에 적용됩니다.

다음 네트워크 중 하나에 대해 기본적으로 NEAR RPC 노드를 컴파일하고 실행하는 방법을 배우려는 경우, 이 가이드가 적합합니다.

- [`testnet`](/archival/run-archival-node-without-nearup#testnet)
- [`mainnet`](/archival/run-archival-node-without-nearup#mainnet)


<blockquote class="info">
<strong>주의</strong><br /><br />

아카이브 노드를 실행하는 것은 [밸리데이터 노드](/validator/running-a-node)를 실행하는 것과 매우 유사한데, 이는 두 유형의 노드가 모두 동일한 `nearcore` 릴리스를 사용하기 때문입니다. 아카이브 노드를 실행할 때의 주요 차이점은, `config.json` 내에서 `archive`를 `true`로 변경하였다는 것입니다. 아래에서 자세한 내용을 확인하세요.

</blockquote>


## 전제 조건 {#prerequisites}

- [Rust](https://www.rust-lang.org/). 아직 설치하지 않은 경우, [다음 지침을 따르세요](https://docs.near.org/develop/prerequisites).
- [Git](https://git-scm.com/)
- 설치된 개발자 도구:
  - MacOS
    ```bash
    $ brew install cmake protobuf clang llvm awscli
    ```
  - Linux
    ```bash
    $ apt update
    $ apt install -y git binutils-dev libcurl4-openssl-dev zlib1g-dev libdw-dev libiberty-dev cmake gcc g++ python docker.io protobuf-compiler libssl-dev pkg-config clang llvm cargo awscli
    ```
---

### `nearcore` 버전 선택 {#choosing-your-nearcore-version}

NEAR 노드를 구축할 때 원하는 용도에 따라 선택할 수 있는 두 가지 브랜치 옵션이 있습니다.

- `master` : _(**실험적**)_
  - 최신 코드로 실험해보고 싶다면, 이를 사용하세요. 이 브랜치는 완전히 작동하는 상태가 보장되지 않으며, *Mainnet* 또는 *Testnet* 의 현재 상태와 호환된다는 보장이 전혀 없습니다.
- [`Latest stable release`](https://github.com/near/nearcore/tags) : _(**안정**)_
  - *Mainnet* 에 대한 NEAR 노드를 실행하려면 이를 사용하세요. *Mainnet* 의 경우 최신 안정 릴리스를 사용하세요. 이 버전은 메인넷 밸리데이터 및 기타 노드에서 사용되며 현재 메인넷 상태와 완벽하게 호환됩니다.
- [`Latest release candidates`](https://github.com/near/nearcore/tags) : _(**출시 후보**)_
  - *Testnet* 에 대해 NEAR 노드를 실행하려면 이를 사용하세요. *Testnet* 의 경우 먼저 RC 버전을 릴리스한 다음 나중에 해당 릴리스를 안정화합니다. Testnet의 경우 최신 RC 버전을 실행하세요.


## `testnet` {#testnet}

### 1. Github에서 `nearcore` 프로젝트 복제 {#1-clone-nearcore-project-from-github}

우선 [`nearcore` 레퍼지토리](https://github.com/near/nearcore)를 복제합니다.

```bash
$ git clone https://github.com/near/nearcore
$ cd nearcore
$ git fetch origin --tags
```

Checkout to the branch you need if not `master` (default). Latest release is recommended. Please check the [releases page on GitHub](https://github.com/near/nearcore/releases).

```bash
$ git checkout tags/1.28.0 -b mynode
```

### 2. `nearcore` 바이너리 컴파일 {#2-compile-nearcore-binary}

`nearcore` 폴더에서 다음 명령을 실행합니다.

```bash
$ make release
```

그러면 컴파일 프로세스가 시작됩니다. 컴퓨터 전원에 따라 약간의 시간이 소요됩니다(예: i9 8코어 CPU, 32GB RAM, SSD는 약 25분 소요). 컴파일 과정에서, 컴퓨터에 있는 가상 코어당 1GB 이상의 메모리가 필요합니다. 프로세스가 종료되어 빌드가 실패하면 다음과 같이 병렬 작업 수를 줄이려고 할 수 있습니다: `CARGO_BUILD_JOBS=8 make neard`.

Cargo에 익숙하다면 `cargo build -p neard --release`를 실행하지 않는 이유가 궁금할 수 있습니다. 이는 바이너리를 생성할 것이지만, 덜 최적화된 버전의 결과가 나올 것이기 때문입니다. 기술적인 레벨에서, `make neard`를 통해 빌드하는 것은 기본적으로 비활성화된 링크 타임 최적화를 활성화하기 때문입니다.

바이너리 경로는 `target/release/neard`입니다.

### 3. 작업 디렉토리 초기화 {#3-initialize-working-directory}

NEAR 노드에는 두 개의 구성 파일이 있는 작업 디렉토리가 필요합니다. 다음을 실행하여 초기 필수 작업 디렉토리를 생성하세요.

```bash
$ ./target/release/neard --home ~/.near init --chain-id testnet --download-genesis --download-config
```

> 초기화 중에 다음과 같은 플래그를 전달하여 사용할 신뢰할 수 있는 부팅 노드를 지정할 수 있습니다: `--boot-nodes ed25519:4k9csx6zMiXy4waUvRMPTkEtAS2RFKLVScocR5HwN53P@34.73.25.182:24567,ed25519:4keFArc3M4SE1debUQWi3F1jiuFZSWThgVuA2Ja2p3Jv@34.94.158.10:24567,ed25519:D2t1KTLJuwKDhbcD9tMXcXaydMNykA99Cedz7SkJkdj2@35.234.138.23:24567,ed25519:CAzhtaUPrxCuwJoFzceebiThD9wBofzqqEMCiupZ4M3E@34.94.177.51:24567`

> 기본 작업 디렉토리가 `~/.near`에 있는 것이 괜찮다면, `--home` 인자를 건너뛸 수 있습니다. 그렇지 않은 경우, 원하는 위치를 지정하세요.

이 명령은 필요한 디렉토리 구조를 생성하고, `testnet` 네트워크 용 `config.json`, `node_key.json`, `validator_key.json` 및 `genesis.json` 파일을 생성합니다.
- `config.json` - 노드가 작동하는 방식에 응답하는 구성 매개변수입니다.
- `genesis.json` - 제네시스에서 네트워크가 시작된 모든 데이터가 포함된 파일입니다. 여기에는 초기 계정, 컨트랙트, 액세스 키 및 블록체인의 초기 상태를 나타내는 기타 기록이 포함됩니다.
- `node_key.json` -  노드의 공개 및 개인 키가 포함된 파일입니다. 또한 밸리데이터 노드를 실행하는 데 필요한 선택적 `account_id` 매개변수를 포함합니다(이 문서에서 다루지 않겠습니다).
- `data/` -  NEAR 노드가 상태를 기록할 폴더입니다. 

> **주의**
> `testnet`의 제네시스 파일은 크기가 크므로 (8GB +), 명령이 실행되는 동안 진행률이 표시되지 않습니다.


### 4. `config.json` 수정 {#4-replacing-the-configjson}

생성된 `config.json`에서, 두 가지 매개변수를 수정합니다:
- `boot_nodes`: 3단계에서 초기화하는 동안 사용할 부팅 노드를 지정하지 않은 경우 생성된 `config.json`에 빈 배열이 표시되므로, 이를 부팅 노드를 지정하는 전체 배열로 교체해야 합니다
- `tracked_shards`: 생성된 `config.json`에서, 이 필드는 비어 있습니다. 이를 `"tracked_shards": [0]`으로 교체해야 합니다.

`config.json`을 바꾸려면, 다음 명령을 실행합니다

```bash
$ rm ~/.near/config.json
$ wget https://s3-us-west-1.amazonaws.com/build.nearprotocol.com/nearcore-deploy/testnet/config.json -P ~/.near/
```

### 구성 업데이트 {#configuration-update}

`config.json`은 다음 필드들을 포함해야 합니다. 현재, NEAR 테스트넷과 메인넷은 4개의 샤드를 가지고 있습니다. 이 모든 샤드를 추적하려면, `"tracked_shards": [0]`을 사용하세요. 향후, 서로 다르거나 여러 개의 샤드를 추적할 수 있도록 할 수도 있습니다.

```
{
  ...
  "archive": true,
  "tracked_shards": [0],
  ...
}
```

`config.json`을 변경하는 도중, 노드가 실행되지 않아야 합니다.

구성이 변경되면 노드를 다시 시작할 수 있으며, 노드는 새 아카이브 데이터 동기화를 시작합니다. 전체 아카이브 기록을 원하는 경우, 데이터 디렉토리를 삭제하고 전체 기록을 동기화하는 스크래치에서 노드를 시작하거나, 가까운 홈 디렉토리(기본: ~/.near/data) 아래에서 복사 가능한 데이터 디렉토리 스냅샷을 포함한 최신 백업 중 하나를 사용하세요.

### 5. 데이터 백업 가져오기 {#5-get-data-backup}

노드를 시작할 준비가 되었습니다. 그러나 먼저 네트워크와 동기화해야 합니다. 즉, 노드는 네트워크의 다른 노드가 이미 가지고 있는 모든 헤더와 블록을 다운로드해야 합니다.

```bash
$ aws s3 --no-sign-request cp s3://near-protocol-public/backups/testnet/archive/latest .
$ LATEST=$(cat latest)
$ aws s3 --no-sign-request cp --no-sign-request --recursive s3://near-protocol-public/backups/testnet/archive/$LATEST ~/.near/data
```

### 6. 노드 실행 {#6-run-the-node}
노드를 시작하려면 다음 명령을 실행하기만 하면 됩니다.

```bash
$ ./target/release/neard --home ~/.near run
```

이제 끝났습니다. 노드가 실행 중이고 콘솔에서 로그 출력을 볼 수 있습니다. 마지막 백업이 수행된 후 약간의 누락된 데이터를 다운로드하지만, 이는 시간이 많이 걸리지는 않습니다.


## `mainnet` {#mainnet}

### 1. Github에서 `nearcore` 프로젝트 복제 {#1-clone-nearcore-project-from-github-1}

우선 [`nearcore` 레퍼지토리](https://github.com/near/nearcore)를 복제합니다.

```bash
$ git clone https://github.com/near/nearcore
$ cd nearcore
$ git fetch origin --tags
```

다음으로 기본 `master` 브랜치를 사용하지 않을 경우, 필요한 릴리스 브랜치를 체크아웃합니다 master. [Github 내 릴리스 페이지](https://github.com/near/nearcore/releases)에서 최신 릴리스를 확인하세요.

`master`와 최신 릴리스 브랜치 중에서 선택하는 방법에 대한 자세한 내용은 [여기를 클릭하세요](/validator/compile-and-run-a-node#choosing-your-nearcore-version).

```bash
$ git checkout tags/1.26.1 -b mynode
```

### 2. `nearcore` 바이너리 컴파일 {#2-compile-nearcore-binary-1}

`nearcore`에서 다음 명령을 실행합니다.

```bash
$ make release
```

그러면 컴파일 프로세스가 시작됩니다. 컴퓨터 전원에 따라 약간의 시간이 소요됩니다(예: i9 8코어 CPU, 32GB RAM, SSD는 약 25분 소요). 컴파일 과정에서, 컴퓨터에 있는 가상 코어당 1GB 이상의 메모리가 필요합니다. 프로세스가 종료되어 빌드가 실패하면 다음과 같이 병렬 작업 수를 줄이려고 할 수 있습니다: `CARGO_BUILD_JOBS=8 make neard`.


Cargo에 익숙하다면 `cargo build -p neard --release`를 실행하지 않는 이유가 궁금할 수 있습니다. 이는 바이너리를 생성할 것이지만, 덜 최적화된 버전의 결과가 나올 것이기 때문입니다. 기술적인 레벨에서, `make neard`를 통해 빌드하는 것은 기본적으로 비활성화된 링크 타임 최적화를 활성화하기 때문입니다.


바이너리 경로는 `target/release/neard`입니다.

### 3. 작업 디렉토리 초기화 {#3-initialize-working-directory-1}

NEAR 노드에는 두 개의 구성 파일이 있는 작업 디렉토리가 필요합니다. 다음을 실행하여 초기 필수 작업 디렉토리를 생성하세요.

```bash
$ ./target/release/neard --home ~/.near init --chain-id mainnet --download-genesis --download-config
```

> 초기화 중에 다음과 같은 플래그를 전달하여 사용할 신뢰할 수 있는 부팅 노드를 지정할 수 있습니다: `--boot-nodes ed25519:86EtEy7epneKyrcJwSWP7zsisTkfDRH5CFVszt4qiQYw@35.195.32.249:24567,ed25519:BFB78VTDBBfCY4jCP99zWxhXUcFAZqR22oSx2KEr8UM1@35.229.222.235:24567,ed25519:Cw1YyiX9cybvz3yZcbYdG7oDV6D7Eihdfc8eM1e1KKoh@35.195.27.104:24567,ed25519:33g3PZRdDvzdRpRpFRZLyscJdbMxUA3j3Rf2ktSYwwF8@34.94.132.112:24567,ed25519:CDQFcD9bHUWdc31rDfRi4ZrJczxg8derCzybcac142tK@35.196.209.192:24567`

> 기본 작업 디렉토리가 `~/.near`에 있는 것이 괜찮다면, `--home` 인자를 건너뛸 수 있습니다. 그렇지 않은 경우, 원하는 위치를 지정하세요.

이 명령은 필요한 디렉토리 구조를 생성하고, `mainnet` 네트워크 용 `config.json`, `node_key.json`, `validator_key.json` 및 `genesis.json` 파일을 생성합니다.
- `config.json` - 노드가 작동하는 방식에 응답하는 구성 매개변수입니다.
- `genesis.json` - 제네시스에서 네트워크가 시작된 모든 데이터가 포함된 파일입니다. 여기에는 초기 계정, 컨트랙트, 액세스 키 및 블록체인의 초기 상태를 나타내는 기타 기록이 포함됩니다.
- `node_key.json` -  노드의 공개 및 개인 키가 포함된 파일입니다. 또한 밸리데이터 노드를 실행하는 데 필요한 선택적 `account_id` 매개변수를 포함합니다(이 문서에서 다루지는 않겠습니다).
- `data/` -  NEAR 노드가 상태를 기록할 폴더입니다.

### 4. `config.json` 수정 {#4-replacing-the-configjson-1}

생성된 `config.json`에서, 두 가지 매개변수를 수정합니다:
- `boot_nodes`: 3단계에서 초기화하는 동안 사용할 부팅 노드를 지정하지 않은 경우 생성된 `config.json`에 빈 배열이 표시되므로, 이를 부팅 노드를 지정하는 전체 배열로 교체해야 합니다.
- `tracked_shards`: 생성된 `config.json`에서, 이 필드는 비어 있습니다. 이를 `"tracked_shards": [0]`으로 교체해야 합니다.

`config.json`을 바꾸려면, 다음 명령을 실행합니다.

```bash
$ rm ~/.near/config.json
$ wget https://s3-us-west-1.amazonaws.com/build.nearprotocol.com/nearcore-deploy/mainnet/config.json -P ~/.near/
```

### 구성 업데이트 {#configuration-update-1}

`config.json`은 다음 필드들을 포함해야 합니다. 현재, NEAR 테스트넷과 메인넷은 4개의 샤드를 가지고 있습니다. 이 모든 샤드를 추적하려면, `"tracked_shards": [0]`을 사용하세요. 향후, 서로 다르거나 여러 개의 샤드를 추적할 수 있도록 할 수도 있습니다.
```
{
  ...
  "archive": true,
  "tracked_shards": [0],
  ...
}
```

`config.json`을 변경하는 도중, 노드가 실행되지 않아야 합니다.

구성이 변경되면 노드를 다시 시작할 수 있으며, 노드는 새 아카이브 데이터 동기화를 시작합니다. 전체 아카이브 기록을 원하는 경우, 데이터 디렉토리를 삭제하고 전체 기록을 동기화하는 스크래치에서 노드를 시작하거나, 가까운 홈 디렉토리(기본: ~/.near/data) 아래에서 복사 가능한 데이터 디렉토리 스냅샷을 포함한 최신 백업 중 하나를 사용하세요.


### 5. 데이터 백업 가져오기 {#5-get-data-backup-1}

노드를 시작할 준비가 되었습니다. 그러나 먼저 네트워크와 동기화해야 합니다. 즉, 노드는 네트워크의 다른 노드가 이미 가지고 있는 모든 헤더와 블록을 다운로드해야 합니다.

```bash
$ aws s3 --no-sign-request cp s3://near-protocol-public/backups/mainnet/archive/latest .
$ LATEST=$(cat latest)
$ aws s3 --no-sign-request cp --no-sign-request --recursive s3://near-protocol-public/backups/mainnet/archive/$LATEST ~/.near/data
```

### 6. 노드 실행 {#6-run-the-node-1}
노드를 시작하려면 다음 명령을 실행하기만 하면 됩니다.

```bash
$ ./target/release/neard --home ~/.near run
```

이제 끝났습니다. 노드가 실행 중이고 콘솔에서 로그 출력을 볼 수 있습니다. 마지막 백업이 수행된 후 약간의 누락된 데이터를 다운로드하지만, 이는 시간이 많이 걸리지는 않습니다.


>질문이 있으신가요?
<a href="https://stackoverflow.com/questions/tagged/nearprotocol">
  <h8>StackOverflow에 물어보세요!</h8></a>
