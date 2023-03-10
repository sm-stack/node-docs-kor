---
id: node-data-snapshots
title: 노드 데이터 스냅샷
sidebar_label: 노드 데이터 스냅샷
sidebar_position: 3
description: 노드 데이터 스냅샷
---

노드 실행을 시작하기 전에, 먼저 네트워크와 동기화해야 합니다. 즉, 노드는 네트워크의 다른 노드가 이미 가지고 있는 모든 헤더와 블록을 다운로드해야 합니다. 퍼블릭 S3 버킷에서 최신 데이터 스냅샷을 다운로드하여 이 프로세스의 속도를 높일 수 있습니다.

다음은 노드 유형 및 네트워크에 따라 사용 가능한 스냅샷 디렉토리입니다. 스냅샷은 12시간마다 업데이트됩니다.

| 노드 유형 및 네트워크| S3 경로                                                       |
| -------------------- | ------------------------------------------------------------- |
| RPC 테스트넷          | s3://near-protocol-public/backups/testnet/rpc/latest          |
| RPC 메인넷          | s3://near-protocol-public/backups/mainnet/rpc/latest          |
| 아카이브 테스트넷     | s3://near-protocol-public/backups/testnet/archive/latest      |
| 아카이브 메인넷     | s3://near-protocol-public/backups/mainnet/archive/latest      |


----

기본 위치를 전달하지 않고 [노드의 작업 디렉터리를 초기화](/validator/compile-and-run-a-node#3-initialize-working-directory-1)한 경우, 노드의 기본 작업 디렉터리는 `~/.near`입니다. `~/.near` 아래의 `data` 폴더로 wget 및 untar하는 것이 좋습니다. 새 `~/.near/data`는 노드가 이전 상태를 저장하고 해당 상태를 기록하는 위치입니다. 기본 위치를 사용하려면, 다음 명령을 실행합니다.

먼저, AWS CLI를 설치하세요.
```bash
$ sudo apt-get install awscli -y
```

그런 다음 AWS CLI를 사용하여 스냅샷을 다운로드합니다.
```bash
$ chain="mainnet"  # or "testnet"
$ kind="rpc"       # or "archive"
$ aws s3 --no-sign-request cp "s3://near-protocol-public/backups/${chain:?}/${kind:?}/latest" .
$ latest=$(cat latest)
$ aws s3 sync --delete --no-sign-request  "s3://near-protocol-public/backups/${chain:?}/${kind:?}/${latest:?}" ~/.near/data
```

더 빠른 스냅샷 다운로드 속도를 위해 Go로 작성된 S3용 다운로드 가속기인 s5cmd를 사용하세요. 다운로드 지침은 https://github.com/peak/s5cmd를 참조하세요.

>질문이 있으신가요?
<a href="https://stackoverflow.com/questions/tagged/nearprotocol">
  <h8>StackOverflow에 물어보세요!</h8></a>
