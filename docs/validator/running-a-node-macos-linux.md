---
id: running-a-node
title: Linux와 MacOS에서 노드 실행
sidebar_label: 노드 실행 (Linux and MacOS)
sidebar_position: 3
description: Linux와 MacOS에서 nearup을 사용해 NEAR 노드를 실행하는 법(Docker 사용/미사용)
---

*밸리데이터 노드를 처음 설정하는 경우, [밸리데이터 부트캠프](/validator/validator-bootcamp)로 이동하세요 🚀. Nearup은 Mainnet에서 사용되지 않으므로 Nearup 대신 Neard로 노드를 설정하는 것이 좋습니다. Neard로 RPC 노드를 설정하는 방법에 대한 지침은 [노드 실행](/validator/compile-and-run-a-node)에서 확인할 수 있습니다.*

이 문서는 Docker를 사용하거나 사용하지 않고 Linux 및 MacOS에서 `nearup`을 사용해 NEAR 노드를 실행하는 방법을 알고자 하는 개발자, 시스템 관리자, DevOps 또는 호기심 많은 사람들을 위해 작성되었습니다.

## `nearup` 설치 {#nearup-installation}
https://github.com/near-guildnet/nearup의 지침에 따라 `nearup`을 설치할 수 있습니다.

<blockquote class="info">
<strong>주의</strong><br /><br />

`testnet`과 `localnet`에서 **노드를 준비하고 실행하는 데에는** `nearup`에 대한 README만 필요할 것입니다. `nearup`은 NEAR `testnet`과 `localnet`노드를 설치하는 데에 독점적으로 사용됩니다. 그러나, `nearup`은 `mainnet` 노드를 설치하는 데에는 사용되지 않습니다. `mainnet`에서 노드를 실행하려면 [메인넷에 노드 배포](deploy-on-mainnet.md)를 참조하십시오

</blockquote>

이 문서 내 나머지 단계에서는 `nearup`이 필요합니다.


## Docker를 사용해 노드 실행 {#running-a-node-using-docker}

### Docker 설치 {#install-docker}

기본적으로 Docker를 사용하여 클라이언트를 실행합니다.

장치에 Docker를 설치하려면 다음 지침을 따르세요.

* [MacOS](https://docs.docker.com/docker-for-mac/install/)
* [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

### Docker로 `nearup` 실행 {#running-nearup-with-docker}

<blockquote class="warning">
참고: `nearup` 및 `neard`는 컨테이너 내부에서 실행 중입니다. 호스트에 있어야 하는 데이터가 손실되지 않도록 하려면 ~/.near 폴더를 마운트해야 합니다.
</blockquote>

`nearup`과 Docker가 설치되면(이전 섹션의 지침에 따라), 실행합니다:

```sh
docker run -v $HOME/.near:/root/.near -p 3030:3030 --name nearup nearup/nearprotocol run testnet
```


_(`localnet` 사용을 선호하는 경우, 위의 명령에서 `testnet`을 `localnet`으로 바꾸세요)_


이후 밸리데이터 ID를 요구할 수 있습니다. 유효성 검사를 하지 않으려면 Enter 키를 누르기만 하면 됩니다. 유효성 검사를 하고 싶다면, [밸리데이터 부트캠프](/validator/validator-bootcamp) 내 지침을 따르세요.


```text
Enter your account ID (leave empty if not going to be a validator):
```


#### 분리 모드에서 실행 {#running-in-detached-mode}

docker의 분리(비차단) 모드에서 `nearup`을 실행하려면, `docker run` 명령에 `-d`를 추가할 수 있습니다.

```
docker run -v $HOME/.near:/root/.near -p 3030:3030 -d --name nearup nearup/nearprotocol run testnet
```

#### 컨테이너에서 `nearup` 명령 실행 {#execute-nearup-commands-in-container}

`logs`, `stop`, `run`과 같은 `nearup` 명령을 실행하려면, `docker exec`을 사용하면 됩니다.

```
docker exec nearup nearup logs
docker exec nearup nearup stop
docker exec nearup nearup run {testnet/localnet}
```

(컨테이너는 바쁜 대기 루프에서 실행 중이므로, 죽지 않습니다.)

#### `nearup` 로그 {#nearup-logs}

`neard` 로그를 실행하려면 다음을 수행하세요.

```
docker exec nearup nearup logs
```

또는

```
docker exec nearup nearup logs --follow
```

`nearup` 로그를 실행하려면 다음을 수행하세요.

```
docker logs -f nearup
```

![text-alt](/images/docker-logs.png)


| 주석   |                                                            |
| :------- | :--------------------------------------------------------- |
| `# 7153` | 블록 높이                                                |
| `V/1`    | `V` (밸리데이터) or  `—`  (일반 노드) / 총 밸리데이터 |
| `0/0/40` | 연결된 피어 / 최신 피어 / 최대 피어             |



## Docker 없이 노드 컴파일 및 실행 {#compiling-and-running-a-node-without-docker}

대신, 로컬에서 `neard`를 컴파일하고, 컴파일된 바이너리를 지정하여 Docker 없이 노드를 빌드하고 실행할 수 있습니다. 이 섹션의 단계에서는 이를 수행하는 방법에 대해 자세히 설명합니다.

[Rust](https://www.rust-lang.org/)가 아직 설치되지 않은 경우, [다음 지침을 따르세요](https://docs.near.org/docs/tutorials/contracts/intro-to-rust#3-step-rust-installation).

Mac OS의 경우 개발자 도구가 설치되어 있는지 확인한 다음, `brew`를 통해 추가 도구를 설치합니다.

```text
brew install cmake protobuf clang llvm
```

Linux의 경우, 다음 의존성을 설치합니다.

```text
sudo apt update
sudo apt install -y git binutils-dev libcurl4-openssl-dev zlib1g-dev libdw-dev libiberty-dev cmake gcc g++ python docker.io protobuf-compiler libssl-dev pkg-config clang llvm
```

그런 다음 레퍼지토리를 복제합니다.

```text
git clone https://github.com/near/nearcore.git
cd nearcore
```
빌드하려는 버전을 확인하세요.

```bash
git checkout <version>
```

그런 다음, 아래 명령을 실행할 수 있습니다.

```bash
make neard
```

이렇게 하면 체크아웃한 버전의 `neard` 바이너리가 컴파일되며, `target/release/neard`에서 사용할 수 있습니다.

컴파일에는 컴퓨터에 있는 가상 코어당 1GB 이상의 메모리가 필요합니다. 프로세스가 종료되어 빌드가 실패하면, 다음과 같이 병렬 작업 수를 줄이려고 할 수 있습니다: `CARGO_BUILD_JOBS=8 make neard`

참고하세요. `cargo build --release`가 아닌 `make`을 통해 릴리스를 빌드해야 합니다. `cargo build --release`는 일부 최적화(특히 링크 타임 최적화)를 건너뛰므로, 덜 효율적인 실행 파일을 생성합니다.

장치에 방화벽 또는 NAT가 실행되고 있다면, 포트 24567이 열려 있고 노드가 실행될 시스템으로 전달되는지 확인하세요.

마지막으로 다음을 실행합니다.

```bash
nearup run testnet --binary-path path/to/nearcore/target/release
```

대신 실행하려면 위 명령에서 `testnet`을 `localnet`으로 바꿉니다. (`localnet`을 실행 중인 경우, 포트 24567을 열 필요가 없습니다)

이후 밸리데이터 ID를 요구할 수 있습니다. 유효성 검사를 하지 않으려면 Enter 키를 누르기만 하면 됩니다. 유효성 검사를 하고 싶다면, [밸리데이터 부트캠프](/validator/validator-bootcamp) 내 지침을 따르세요.


```text
Enter your account ID (leave empty if not going to be a validator):
```

## 클라우드 내에서 노드 실행 {#running-a-node-on-the-cloud}

[하드웨어 요구 사항](hardware.md)에 따라 새 인스턴스를 만듭니다.

모든 IP(0.0.0.0/0)에서 포트 24567로의 트래픽을 허용하는 방화벽 규칙을 추가합니다.

장치에 SSH를 연결합니다. 클라우드 공급자에 따라, 다른 명령이 필요할 수 있습니다. 단순한 `ssh hosts-external-ip`도 작동해야 합니다. 클라우드 공급자는 인스턴스에 연결하는 데 도움이 되는 사용자 지정 명령을 제공할 수 있습니다: GCP는 [`gcloud compute ssh`](https://cloud.google.com/sdk/gcloud/reference/compute/ssh)를, AWS는 [`aws emr ssh`](https://docs.aws.amazon.com/cli/latest/reference/emr/ssh.html)를, Azure를 [`az ssh`](https://docs.microsoft.com/en-gb/cli/azure/ssh?view=azure-cli-latest) 제공합니다.

인스턴스에 연결되면, [위에 나열된 단계](#compiling-and-running-a-node-without-docker)를 따릅니다.

## 성공 메시지 {#success-message}

Docker를 사용하여 노드를 실행하거나 Docker 없이 컴파일하는 단계를 수행하면, 아래와 유사한 메시지가 표시됩니다.

```text
Using local binary at path/to/nearcore/target/release
Our genesis version is up to date
Starting NEAR client...
Node is running!
To check logs call: `nearup logs` or `nearup logs --follow`
```

또는

```text
Using local binary at path/to/nearcore/target/release
Our genesis version is up to date
Stake for user 'stakingpool.youraccount.testnet' with 'ed25519:6ftve9gm5dKL7xnFNbKDNxZXkiYL2cheTQtcEmmLLaW'
Starting NEAR client...
Node is running!
To check logs call: `nearup logs` or `nearup logs --follow`
```

## 백업에서 노드 시작 {#starting-a-node-from-backup}
데이터 백업을 사용하면, 공용 tar 백업 파일을 사용하여 노드를 빠르게 동기화할 수 있습니다. `testnet` 및 `mainnet`에 사용할 수 있는 두 가지 유형의 백업이 있습니다.
- 정기 백업
- 아카이브 백업

### 아카이브 링크 {#archive-links}

[노드 데이터 스냅샷](/intro/node-data-snapshots)에서 최신 스냅샷을 다운로드합니다.

`neard` 백업 데이터를 사용하여 노드를 시작합니다.

```bash
./neard init --chain-id <chain-id> --download-genesis
mkdir ~/.near/data
wget -c <link-above> -O - | tar -xC ~/.near/data
./neard run
```
`nearup` 백업 데이터를 사용하여 노드를 시작합니다.

```bash
nearup run <chain-id> && sleep 30 && nearup stop
dir=$HOME/.near/<chain-id>/data
rm -r -- "$dir"  # clean up old DB files to avoid corruption
mkdir -- "$dir"
wget -c <link-above> -O - | tar -xC "$dir"
nearup run <chain-id>
```

위 두 예시에서, `<chain-id>`는 `testnet` 또는 `mainnet`에 해당합니다.

**참고:** `neard` 데이터의 기본 위치는 `~/.near/data`입니다. `nearup`은 기본적으로 `~/.near/<chain-id>/data.`에 저장됩니다.

>질문이 있으신가요?
<a href="https://stackoverflow.com/questions/tagged/nearprotocol">
  <h8>StackOverflow에 물어보세요!</h8></a>
