---
id: compile-and-run-a-node
title: 밸리데이터 노드 실행
sidebar_label: 노드 실행
sidebar_position: 3
description: localnet, testnet, 그리고 mainnet에서 컨테이너 없이 NEAR 노드 컴파일 및 실행
---

*밸리데이터 노드를 처음 설정하는 경우, [밸리데이터 부트캠프](/validator/validator-bootcamp)로 이동하세요 🚀.*

다음 지침은 localnet, testnet 및 mainnet에 적용됩니다. 참고: 우리는 메인넷에서 nearup을 사용하지 않습니다.

다음 네트워크 중 하나에 대해 기본적으로(컨테이너화 없이) NEAR 밸리데이터 노드를 컴파일하고 실행하는 방법을 배우려는 경우, 이 가이드가 적합합니다.

- [`localnet`](/validator/compile-and-run-a-node#localnet)
- [`testnet`](/validator/compile-and-run-a-node#testnet)
- [`mainnet`](/validator/compile-and-run-a-node#mainnet)

## 전제 조건 {#prerequisites}

- [Rust](https://www.rust-lang.org/). 아직 설치하지 않은 경우 [다음 지침을 따르세요](https://docs.near.org/docs/tutorials/contracts/intro-to-rust#3-step-rust-installation).
- 설치된 개발자 도구:
  - MacOS
    ```bash
    $ brew install cmake protobuf llvm awscli
    ```
  - Linux
    ```bash
    $ apt update
    $ apt install -y git binutils-dev libcurl4-openssl-dev zlib1g-dev libdw-dev libiberty-dev cmake gcc g++ python docker.io protobuf-compiler libssl-dev pkg-config clang llvm cargo awscli
    ```

## 이 문서를 사용하는 방법 {#how-to-use-this-document}

이 문서는 네트워크 ID별 섹션으로 구분됩니다. 모든 섹션에 거의 동일한 단계/텍스트가 있지만, 개별 섹션을 만드는 것이 더 유용하므로 명령을 쉽게 복사/붙여넣어 노드를 빠르게 실행할 수 있습니다.

### `nearcore` 버전 선택 {#choosing-your-nearcore-version}

NEAR 노드를 구축할 때 원하는 용도에 따라 선택할 수 있는 두 가지 브랜치 옵션이 있습니다.

- `master` : _(**실험적**)_
  - 최신 코드로 실험해보고 싶다면, 이를 사용하세요. 이 브랜치는 완전히 작동하는 상태가 보장되지 않으며, *Mainnet* 또는 *Testnet* 의 현재 상태와 호환된다는 보장이 전혀 없습니다 .
 - [`Latest stable release`](https://github.com/near/nearcore/tags) : _(**안정**)_
  - *Mainnet* 에 대한 NEAR 노드를 실행하려면 이를 사용하세요. *Mainnet* 의 경우 최신 안정 릴리스를 사용하세요. 이 버전은 메인넷 밸리데이터 및 기타 노드에서 사용되며 현재 메인넷 상태와 완벽하게 호환됩니다.
- [`Latest release candidates`](https://github.com/near/nearcore/tags) : _(**출시 후보**)_
  - *Testnet* 에 대해 NEAR 노드를 실행하려면 이를 사용하세요. *Testnet* 의 경우 먼저 RC 버전을 릴리스한 다음 나중에 해당 릴리스를 안정화합니다. Testnet의 경우 최신 RC 버전을 실행하세요.

#### (Optional) 디버그 로깅 활성화 {#optional-enable-debug-logging}

> **참고:** 문제를 디버깅하는 데 추가 정보가 필요한 경우가 아니면 이 단계를 건너뛰어도 됩니다.

디버그 로깅을 활성화하려면, 다음과 같이 `neard`를 실행하세요:

```bash
$ RUST_LOG=debug,actix_web=info ./target/release/neard --home ~/.near run
```

## `localnet` {#localnet}

### 1. Github에서 `nearcore` 프로젝트 복제 {#clone-nearcore-project-from-github}

우선 [`nearcore` 레퍼지토리](https://github.com/near/nearcore)를 복제합니다.

```bash
$ git clone https://github.com/near/nearcore
```

다음으로 기본 `master` 브랜치를 사용하지 않을 경우, 필요한 릴리스 브랜치를 체크아웃합니다.  [ [추가 정보](/validator/compile-and-run-a-node#choosing-your-nearcore-version) ]


```bash
$ git checkout master
```

### 2. `nearcore` 바이너리 컴파일 {#compile-nearcore-binary}

해당 레퍼지토리에서 다음 명령을 실행합니다.

```bash
$ make neard
```

그러면 컴파일 프로세스가 시작됩니다. 컴퓨터 전원에 따라 약간의 시간이 소요됩니다(예: i9 8코어 CPU, 32GB RAM, SSD는 약 25분 소요). 컴파일 과정에서, 컴퓨터에 있는 가상 코어당 1GB 이상의 메모리가 필요합니다. 프로세스가 종료되어 빌드가 실패하면 다음과 같이 병렬 작업 수를 줄이려고 할 수 있습니다: `CARGO_BUILD_JOBS=8 make neard`.

그건 그렇고, Cargo에 익숙하다면 `cargo build -p neard --release`를 실행하지 않는 이유가 궁금할 수 있습니다. 이렇게 하면 바이너리가 생성되지만, 덜 최적화된 버전이 생성되게 됩니다. 기술적인 수준에서 이는 `make neard`를 통해 빌드하는 것이 기본적으로 비활성화된 링크 타임 최적화를 활성화하기 때문입니다. 바이너리 경로는 `target/release/neard`입니다.



`localnet`의 경우, 야간 모드(실험적, 최신 테스트에 사용됨)에서 빌드할 수 있는 옵션도 있습니다. 이를 컴파일하려면 다음 명령을 사용하세요.
```bash
$ cargo build --package neard --features nightly_protocol,nightly_protocol_features --release
```

### 3. 작업 디렉토리 초기화 {#initialize-working-directory}

NEAR 노드에는 두 개의 구성 파일이 있는 작업 디렉토리가 필요합니다. 다음을 실행하여 초기 필수 작업 디렉토리를 생성하세요.

```bash
$ ./target/release/neard --home ~/.near init --chain-id localnet
```

> 기본 작업 디렉토리가 `~/.near`에 있는 것이 괜찮다면, `--home` 인자를 건너뛸 수 있습니다. 그렇지 않은 경우, 원하는 위치를 지정하세요.

이 명령은 필요한 디렉토리 구조를 생성하고, `localnet` 네트워크 용 `config.json`, `node_key.json`, `validator_key.json` 및 `genesis.json` 파일을 생성합니다.

- `config.json` - 노드가 작동하는 방식에 응답하는 구성 매개변수입니다.
- `genesis.json` -  제네시스에서 네트워크가 시작된 모든 데이터가 포함된 파일입니다. 여기에는 초기 계정, 컨트랙트, 액세스 키 및 블록체인의 초기 상태를 나타내는 기타 기록이 포함됩니다.
- `node_key.json` -  노드의 공개 및 개인 키가 포함된 파일입니다. 또한 밸리데이터 노드를 실행하는 데 필요한 선택적 `account_id` 매개변수를 포함합니다(이 문서에서 다루지 않겠습니다).
- `data/` -   NEAR 노드가 상태를 기록할 폴더입니다.
- `validator_key.json` - 유일한 로컬 네트워크 밸리데이터에 속하는 로컬 `test.near` 계정에 대한 공개 및 개인 키를 포함하는 파일입니다.


### 4. 노드 실행 {#run-the-node}

노드를 실행하려면 다음 명령을 실행하기만 하면 됩니다.

```bash
$ ./target/release/neard --home ~/.near run
```

이제 끝났습니다. 노드가 실행 중이면 콘솔에서 로그 출력을 볼 수 있습니다.


## `testnet` {#testnet}

### 1. Github에서 `nearcore` 프로젝트 복제 {#clone-nearcore-project-from-github-1}

우선 [`nearcore` 레퍼지토리](https://github.com/near/nearcore)를 복제합니다.

```bash
$ git clone https://github.com/near/nearcore
$ cd nearcore
$ git fetch origin --tags
```

다음으로 `master` (기본) 브랜치를 사용하지 않을 경우, 필요한 릴리스 브랜치를 체크아웃합니다. 최신 릴리스를 권장합니다. [Github의 릴리스 페이지](https://github.com/near/nearcore/releases)를 확인하세요.

```bash
$ git checkout tags/1.28.0 -b mynode
```

### 2. `nearcore` 바이너리 컴파일 {#compile-nearcore-binary-1}

`nearcore` 폴더에서 다음 명령을 실행합니다.

```bash
$ make neard
```

그러면 컴파일 프로세스가 시작됩니다. 컴퓨터 전원에 따라 약간의 시간이 소요됩니다(예: i9 8코어 CPU, 32GB RAM, SSD는 약 25분 소요). 컴파일 과정에서, 컴퓨터에 있는 가상 코어당 1GB 이상의 메모리가 필요합니다. 프로세스가 종료되어 빌드가 실패하면 다음과 같이 병렬 작업 수를 줄이려고 할 수 있습니다: `CARGO_BUILD_JOBS=8 make neard`.


그건 그렇고, Cargo에 익숙하다면 `cargo build -p neard --release`를 실행하지 않는 이유가 궁금할 수 있습니다. 이렇게 하면 바이너리가 생성되지만, 덜 최적화된 버전이 생성되게 됩니다. 기술적인 수준에서 이는 `make neard`를 통해 빌드하는 것이 기본적으로 비활성화된 링크 타임 최적화를 활성화하기 때문입니다. 바이너리 경로는 `target/release/neard`입니다.


### 3. 작업 디렉토리 초기화 {#initialize-working-directory-1}

NEAR 노드에는 두 개의 구성 파일이 있는 작업 디렉토리가 필요합니다. 다음을 실행하여 초기 필수 작업 디렉토리를 생성하세요.

```bash
$ ./target/release/neard --home ~/.near init --chain-id testnet --download-genesis --download-config
```

> 기본 작업 디렉토리가 `~/.near`에 있는 것이 괜찮다면, `--home` 인자를 건너뛸 수 있습니다. 그렇지 않은 경우, 원하는 위치를 지정하세요.

이 명령은 필요한 디렉토리 구조를 생성하고, `testnet` 네트워크 용 `config.json`, `node_key.json`, `validator_key.json` 및 `genesis.json` 파일을 생성합니다.

- `config.json` - 노드가 작동하는 방식에 응답하는 구성 매개변수입니다.
- `genesis.json` - 제네시스에서 네트워크가 시작된 모든 데이터가 포함된 파일입니다. 여기에는 초기 계정, 컨트랙트, 액세스 키 및 블록체인의 초기 상태를 나타내는 기타 기록이 포함됩니다.
- `node_key.json` -  노드의 공개 및 개인 키가 포함된 파일입니다. 또한 밸리데이터 노드를 실행하는 데 필요한 선택적 `account_id` 매개변수를 포함합니다(이 문서에서 다루지 않겠습니다).
- `data/` - NEAR 노드가 상태를 기록할 폴더입니다. 

> **주의**
> `testnet`의 제네시스 파일은 크기가 크므로 (6GB +), 명령이 실행되는 동안 진행률이 표시되지 않습니다.

### 4. 데이터 백업 가져오기 {#get-data-backup}

노드를 시작할 준비가 되었습니다. 그대로 시작하면 네트워크 연결을 설정하고 최신 상태를 다운로드하기 시작합니다. 이 작업은 시간이 걸릴 수 있으므로, 대안은 동기화 속도를 높이는 [노드 데이터 스냅샷](/intro/node-data-snapshots)을 다운로드하는 것입니다. 간단히 말하면, AWS CLI를 설치하고 다음을 실행하는 것입니다.

```bash
$ aws s3 --no-sign-request cp s3://near-protocol-public/backups/testnet/rpc/latest .
$ latest=$(cat latest)
$ aws s3 --no-sign-request cp --no-sign-request --recursive s3://near-protocol-public/backups/testnet/rpc/$latest ~/.near/data
```

> **주의**
> RPC 노드는 약 500GB의 데이터를 디스크에 저장합니다. 또한
> SSD가 네트워크를 따라잡을 수 있어야 합니다. 
> 따라서, 충분히 빠른 디스크에 충분한 여유 공간이 있는지 확인하십시오.

노드가 NEAR 네트워크에서 데이터를 다운로드할 때 완전히 분산된 환경을 선호하는 경우, 이 단계를 수행할 필요가 없습니다.

### 5. 노드 실행 {#run-the-node}
노드를 시작하려면 다음 명령을 실행하기만 하면 됩니다.

```bash
$ ./target/release/neard --home ~/.near run
```

이제 끝났습니다. 노드가 실행 중이면 콘솔에서 로그 출력을 볼 수 있습니다. 마지막 백업이 수행된 후 약간의 누락된 데이터를 다운로드할 것이지만, 시간이 많이 걸리지는 않습니다.

## `mainnet` {#mainnet}

### 1. Github에서 `nearcore` 프로젝트 복제 {#clone-nearcore-project-from-github-2}

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

### 2. `nearcore` 바이너리 컴파일 {#compile-nearcore-binary-2}

`nearcore`에서 다음 명령을 실행합니다.

```bash
$ make neard
```

그러면 컴파일 프로세스가 시작됩니다. 컴퓨터 전원에 따라 약간의 시간이 소요됩니다(예: i9 8코어 CPU, 32GB RAM, SSD는 약 25분 소요). 컴파일 과정에서, 컴퓨터에 있는 가상 코어당 1GB 이상의 메모리가 필요합니다. 프로세스가 종료되어 빌드가 실패하면 다음과 같이 병렬 작업 수를 줄이려고 할 수 있습니다: `CARGO_BUILD_JOBS=8 make neard`.

그건 그렇고, Cargo에 익숙하다면 `cargo build -p neard --release`를 실행하지 않는 이유가 궁금할 수 있습니다. 이렇게 하면 바이너리가 생성되지만, 덜 최적화된 버전이 생성되게 됩니다. 기술적인 수준에서 이는 `make neard`를 통해 빌드하는 것이 기본적으로 비활성화된 링크 타임 최적화를 활성화하기 때문입니다. 바이너리 경로는 `target/release/neard`입니다.

### 3. 작업 디렉토리 초기화 {#initialize-working-directory-2}

NEAR 노드에는 두 개의 구성 파일이 있는 작업 디렉토리가 필요합니다. 다음을 실행하여 초기 필수 작업 디렉토리를 생성하세요.

```bash
$ ./target/release/neard --home ~/.near init --chain-id mainnet --download-config
```

> 기본 작업 디렉토리가 `~/.near`에 있는 것이 괜찮다면, `--home` 인자를 건너뛸 수 있습니다. 그렇지 않은 경우, 원하는 위치를 지정하세요.

이 명령은 필요한 디렉토리 구조를 생성하고, `mainnet`에 대한 `config.json`, `node_key.json`, `validator_key.json` 및 `genesis.json` 파일을 생성합니다.

- `config.json` - 노드가 작동하는 방식에 응답하는 구성 매개변수입니다.
- `genesis.json` - 제네시스에서 네트워크가 시작된 모든 데이터가 포함된 파일입니다. 여기에는 초기 계정, 컨트랙트, 액세스 키 및 블록체인의 초기 상태를 나타내는 기타 기록이 포함됩니다.
- `node_key.json` -  노드의 공개 및 개인 키가 포함된 파일입니다. 또한 밸리데이터 노드를 실행하는 데 필요한 선택적 `account_id` 매개변수를 포함합니다(이 문서에서 다루지 않겠습니다).
- `data/` -  NEAR 노드가 상태를 기록할 폴더입니다.


### 4. 데이터 백업 가져오기 {#get-data-backup-1}

노드를 시작할 준비가 되었습니다. 그대로 시작하면, 네트워크 연결을 설정하고 최신 상태를 다운로드하기 시작합니다. 이 작업은 시간이 걸릴 수 있으므로, 대안은 동기화 속도를 높이는 [노드 데이터 스냅샷](/intro/node-data-snapshots)을 다운로드하는 것입니다. 간단히 말하면, AWS CLI를 설치하고 다음을 실행하는 것입니다.

```bash
$ aws s3 --no-sign-request cp s3://near-protocol-public/backups/mainnet/rpc/latest .
$ latest=$(cat latest)
$ aws s3 --no-sign-request cp --no-sign-request --recursive s3://near-protocol-public/backups/mainnet/rpc/$latest ~/.near/data
```

> **주의**
> RPC 노드는 약 500GB의 데이터를 디스크에 저장합니다. 또한
> SSD가 네트워크를 따라잡을 수 있어야 합니다. 
> 따라서, 충분히 빠른 디스크에 충분한 여유 공간이 있는지 확인하십시오.

노드가 NEAR 네트워크에서 데이터를 다운로드할 때 완전히 분산된 환경을 선호하는 경우, 이 단계를 수행할 필요가 없습니다.

### 5. 노드 실행 {#run-the-node-1}
노드를 시작하려면 다음 명령을 실행하기만 하면 됩니다.

```bash
$ ./target/release/neard --home ~/.near run
```

이제 끝났습니다. 노드가 실행 중이면 콘솔에서 로그 출력을 볼 수 있습니다. 마지막 백업이 수행된 후 약간의 누락된 데이터를 다운로드할 것이지만, 시간이 많이 걸리지는 않습니다.


>질문이 있으신가요?
<a href="https://stackoverflow.com/questions/tagged/nearprotocol">
  <h8>StackOverflow에 물어보세요!</h8></a>
