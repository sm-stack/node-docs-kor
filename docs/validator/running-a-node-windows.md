---
id: running-a-node-windows
title: Windows에서 노드 실행
sidebar_label: 노드 실행 (Windows)
sidebar_position: 4
description: Windows에서 `nearup`을 사용해 NEAR 노드 실행
---

*밸리데이터 노드를 처음 설정하는 경우, [밸리데이터 부트캠프](/validator/validator-bootcamp)로 이동하세요 🚀. Nearup은 Mainnet에서 사용되지 않으므로 Nearup 대신 Neard로 노드를 설정하는 것이 좋습니다. Neard로 RPC 노드를 설정하는 방법에 대한 지침은 [노드 실행](/validator/compile-and-run-a-node)에서 확인할 수 있습니다.*

이 문서는 Windows에서 `nearup`을 사용해 NEAR 노드를 실행하는 방법을 알고자 하는 개발자, 시스템 관리자, DevOps 또는 호기심 많은 사람들을 위해 작성되었습니다.

<blockquote class="warning">
<strong>주의</strong><br /><br />
이 문서는 추가 편집이 필요할 수 있습니다. 다음 명령을 실행할 때 이 점에 유의하세요.
</blockquote>


## `nearup` 설치 {#nearup-installation}
https://github.com/near-guildnet/nearup의 지침에 따라 `nearup`을 설치할 수 있습니다.

<blockquote class="info">
<strong>주의</strong><br /><br />

`testnet`과 `localnet`에서 **노드를 준비하고 실행하는 데에는** `nearup`에 대한 README만 필요할 것입니다. `nearup`은 NEAR `testnet`과 `localnet`노드를 설치하는 데에 독점적으로 사용됩니다. 그러나, `nearup`은 `mainnet` 노드를 설치하는 데에는 사용되지 않습니다. `mainnet`에서 노드를 실행하려면 [메인넷에 노드 배포](deploy-on-mainnet.md)를 참고하세요.

</blockquote>


1.  Linux용 Windows 하위 시스템이 활성화되지 않은 경우, PowerShell을 관리자 권한으로 열고 다음을 실행합니다.

    ```sh
    Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
    ```
    그런 다음 컴퓨터를 다시 시작하세요.
2. Microsoft Store로 이동하여 Ubuntu를 찾으세요. 이는 우분투 터미널 인스턴스입니다. 설치하고 실행하세요.
3. 이제 사용자 이름과 암호를 묻는 메시지가 표시될 수 있습니다. 사용자 이름으로 admin을 사용하지 마세요.
4. Ubuntu 인스턴스는 다음 단계로 넘어가기 전에 초기 설정이 필요합니다.
    ```sh
    sudo apt-get update
    sudo apt-get upgrade
    sudo apt-get install build-essential pkg-config libssl-dev
    ```
5. 노드를 실행하려면 OpenSSL을 설치해야 합니다. OpenSSL을 다운로드하려면 Ubuntu 터미널에서 다음 명령을 실행하세요.
    ```sh
    cd /tmp
    wget https://www.openssl.org/source/openssl-1.1.1.tar.gz
    tar xvf openssl-1.1.1.tar.gz
    ```
6. OpenSSL 다운로드가 완료되면 다음 명령을 실행하여 설치합니다.
    ```sh
    cd openssl-1.1.1
    sudo ./config -Wl,--enable-new-dtags,-rpath,'$(LIBRPATH)'
    sudo make
    sudo make install
    ```
    파일은 /usr/local/ssl 디렉토리에 있습니다.
7. 이 작업이 완료되면 Ubuntu가 올바른 버전의 OpenSSL을 사용하는지 확인해야 합니다. 이제 매뉴얼 페이지와 바이너리의 경로를 업데이트하세요. 다음 명령을 실행합니다.
    ```sh
    cd ../..
    sudo nano /etc/manpath.config
    ```
8. 텍스트 파일이 열리면 다음 줄을 추가합니다.
    ```sh
    MANPATH_MAP     /usr/local/ssl/bin      /usr/local/ssl/man
    ```
    이 작업이 완료되면 ctrl + o를 누릅니다. 파일을 저장하라는 메시지가 표시되면 Enter 키를 누르십시오. 이제 ctrl + x를 눌러 종료합니다.
9. OpenSSL이 설치되어 있는지 확인하려면 다음을 실행하세요.
    ```sh
    openssl version -v
    ```
    그러면 설치된 버전이 표시됩니다. 이에 대한 자세한 정보는 여기에서 확인할 수 있습니다. (https://manpages.ubuntu.com/manpages/bionic/man1/version.1ssl.html)

10. 이제 다음 명령을 실행하여 필요한 모든 소프트웨어 및 종속성을 설치해야 합니다.
    ```sh
    sudo apt-get update
    sudo apt-get upgrade
    sudo apt-get install -y git jq binutils-dev libcurl4-openssl-dev zlib1g-dev libdw-dev libiberty-dev cmake gcc g++ protobuf-compiler python3 python3-pip llvm clang
    ```
    Rustup 설치
    ```sh
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    source $HOME/.cargo/env
    rustup default nightly
    ```
    잘 하셨습니다! 노드를 시작하고 실행할 준비가 모두 완료되었습니다!
11. github nearcore 복제

    먼저 현재 `testnet`에서 작동 중인 버전을 확인해야 합니다.
    ```sh
    curl -s https://rpc.testnet.near.org/status | jq .version
    ```
    "1.13.0-rc.2"와 같은 메시지가 표시됩니다. "1.13.0"은 `testnet`에 대해 노드를 빌드하기 위해 복제해야 하는 브랜치입니다.

    ```sh
    git clone --branch 1.13.0 https://github.com/near/nearcore.git
    ```
12. 이것은 nearcore 디렉토리를 생성하고, 그 디렉토리로 이동해 noce를 빌드합니다.
    ```sh
    cd nearcore
    make neard
    ```
13. nearup 설치
    ```sh
    pip3 install --user nearup
    export PATH="$HOME/.local/bin:$PATH"
    ```
14. 마지막: `testnet` 실행
    ```sh
    nearup run testnet --binary-path ~/nearcore/target/release/neard
    ```
    노드가 실행 중인지 확인하려면, 다음과 같이 로그를 확인할 수 있습니다.

    ```sh
    nearup logs --follow
    ```

이후 밸리데이터 ID를 요구할 수 있습니다. 유효성 검사를 하지 않으려면 Enter 키를 누르기만 하면 됩니다. 유효성 검사를 하고 싶다면, [밸리데이터 부트캠프](/validator/validator-bootcamp) 내 지침을 따르세요.


>질문이 있으신가요?
<a href="https://stackoverflow.com/questions/tagged/nearprotocol">
  <h8>StackOverflow에 물어보세요!</h8></a>
