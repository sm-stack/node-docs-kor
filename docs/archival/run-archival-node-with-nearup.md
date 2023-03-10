---
id: run-archival-node-with-nearup
title: 아카이브 노드 실행 (nearup 사용)
sidebar_label: 노드 실행 (nearup 사용)
sidebar_position: 3
description: nearup을 사용하여 아카이브 노드를 실행하는 법
---

_Nearup은 Mainnet에서 사용되지 않으므로 Nearup 대신 Neard로 노드를 설정하는 것이 좋습니다. Neard로 RPC 노드를 설정하는 방법에 대한 지침은 [노드 실행](/archival/run-archival-node-without-nearup) 으로 이동하세요._

<blockquote class="info">
<strong>주의</strong><br /><br />

아카이브 노드를 실행하는 것은 [밸리데이터 노드](/validator/running-a-node)를 실행하는 것과 매우 유사한데, 이는 두 유형의 노드가 모두 동일한 `nearcore` 릴리스를 사용하기 때문입니다. 아카이브 노드를 실행할 때의 주요 차이점은, `config.json` 내에서 `archive`를 `true`로 변경하였다는 것입니다. 아래에서 자세한 내용을 확인하세요.

</blockquote>


## 전제 조건 {#prerequisites}

- [Git](https://git-scm.com/)
- [Nearup](https://github.com/near-guildnet/nearup): [`nearup`](https://github.com/near-guildnet/nearup)이 설치되었는지 확인하세요. https://github.com/near-guildnet/nearup 내 지침에 따라 `nearup`을 설치할 수 있습니다.


---

### `nearup`을 사용하여 아카이브 노드를 실행하기 위한 단계  {#steps-to-run-an-archival-node-using-nearup}

먼저 S3에서 최신 보관 스냅샷의 복사본을 검색합니다.
```bash
$ aws s3 --no-sign-request cp s3://near-protocol-public/backups/testnet/archive/latest .
$ LATEST=$(cat latest)
$ aws s3 --no-sign-request cp --no-sign-request --recursive s3://near-protocol-public/backups/testnet/archive/$LATEST ~/.near/data
```


### 구성 업데이트 {#configuration-update}

아카이브 노드를 실행하는 것은 [밸리데이터 노드](/validator/running-a-node)를 실행하는 것과 매우 유사한데, 이는 두 유형의 노드가 모두 동일한 `nearcore` 릴리스를 사용하기 때문입니다. 아카이브 노드를 실행할 때의 주요 차이점은, `config.json` 내에서 `archive`를 `true`로 변경하였다는 것입니다.

`config.json`에는 다음 필드들이 존재합니다. 현재 NEAR 테스트넷과 메인넷에는 1개의 샤드 ([0]으로 인덱싱됨)만 있고, 해당 샤드가 추적됩니다. 향후 서로 다른 또는 여러 샤드를 추적할 수 있게 될 것입니다.

```
{
  ...
  "archive": true,
  "tracked_shards": [0],
  ...
}
```

`config.json`를 변경하는 동안, 노드가 중지되었는지 확인하세요.

구성이 변경되면 노드를 다시 시작할 수 있으며 노드는 새 아카이브 데이터 동기화를 시작합니다. 전체 보관 기록을 원하는 경우, 데이터 디렉토리를 삭제하고 전체 기록을 동기화하는 스크래치에서 노드를 시작하거나, 가까운 홈 디렉터리(기본값: ~/.near/data)에서 복사한 데이터 디렉토리 스냅샷을 담은 최신 백업 데이터를 사용하세요.


그런 다음 아래 명령을 실행합니다.
```bash
  $ nearup run testnet
```
초기화가 완료될 때까지 기다렸다가 다음 명령을 사용하여 로그를 따릅니다.

```bash
  $ nearup logs --follow
```
Then run:
```bash
  $ nearup stop
```
마지막으로 다음 명령을 실행하면, 노드가 ~97%에서 헤더 동기화를 시작해야 합니다.

```bash
  $ nearup run testnet
```

>질문이 있으신가요?
<a href="https://stackoverflow.com/questions/tagged/nearprotocol">
  <h8>StackOverflow에 물어보세요!</h8></a>
