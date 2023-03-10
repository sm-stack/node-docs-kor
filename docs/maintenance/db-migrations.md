---
id: db-migrations
title: 안전한 데이터베이스 마이그레이션
sidebar_label: 안전한 데이터베이스 마이그레이션
description: 데이터베이스를 손상시키지 않고 데이터베이스 마이그레이션을 수행하는 방법
sidebar_position: 3
---

# 데이터베이스 마이그레이션

## 배경

노드는 [RocksDB](https://rocksdb.org/) 데이터베이스를 사용하여 블록체인 정보를 로컬에 저장합니다. 일부 노드 릴리스는, 예를 들어 새로운 프로토콜 기능을 활성화하기 위해 해당 데이터베이스에 저장된 데이터 형식을 변경해야 합니다. 데이터를 새로운 형식으로 변환하는 프로세스를 **데이터베이스 마이그레이션**이라고 합니다. 데이터 형식에도 번호가 지정되며, 이를 **데이터베이스 버전**이라고 합니다.

노드 바이너리는 지원되는 프로토콜 버전과 필요한 데이터베이스 버전을 출력할 수 있습니다.

예를 들어 여기에서 `db 28`이라고 나타난 것은, 노드가 데이터베이스 버전 28을 예상한다는 것을 의미합니다.

```
$ ./target/release/neard
neard (release 1.22.0) (build 5a6fb2bd2) (protocol 48) (db 28)
NEAR Protocol Node
```

기존 데이터베이스 버전이 바이너리에 필요한 것보다 낮은 경우, 노드는 시작 시 **데이터베이스 마이그레이션**을 수행합니다. 다음은 노드 버전 `1.21.1`으로 생성된 데이터베이스의 인스턴스를 사용하여 노드 버전 `1.24.0`을 실행하는 예입니다. 여기서, 여러 DB 마이그레이션이 순차적으로 트리거되는 것을 볼 수 있습니다.

```
$ ./target/release/neard
INFO neard: Version: 1.24.0, Build: crates-0.11.0-80-g164991d7a, Latest Protocol: 51
INFO near: Opening store database at "/home/user/.near/data"
INFO near: Migrate DB from version 27 to 28
INFO near: Migrate DB from version 28 to 29
INFO near: Migrate DB from version 29 to 30
INFO near: Migrate DB from version 30 to 31
```

## 무엇이 잘못될 수 있나요?

때때로 데이터베이스 마이그레이션이 **중단**됩니다. 이는 장기 실행 데이터베이스 마이그레이션 중에 시스템이 실패하거나, 사용자가 실수로 `Ctrl-C`를 눌러 프로세스를 중지하는 등 여러 가지 이유로 발생할 수 있습니다. 데이터베이스에 저장된 데이터에는 효율성 상의 이유로 자체 설명 메타데이터가 없으므로, 어떤 데이터베이스 항목이 이미 새 형식으로 변환되었는지 확인할 수 없습니다. 즉, 마이그레이션을 다시 시작하거나 시작할 수 없습니다. 따라서, 데이터베이스 마이그레이션을 중단하면 데이터베이스가 복구할 수 없게 손상됩니다.

## 안전한 데이터베이스 마이그레이션

neard 릴리스 `1.26.0`부터, 노드에는 데이터베이스 마이그레이션이 손상되더라도 **데이터베이스 인스턴스를 복구**하는 방법이 포함됩니다. 이 기능은 기본적으로 활성화되어 있지만, 데이터베이스 마이그레이션이 실제로 중단되는 경우 수동으로 개입해야 합니다.

데이터베이스를 복원하는 방법 중 하나는 알려진 양호한 데이터베이스 상태를 사용하는 것입니다. `1.26.0` 이전에는 대부분 노드 [데이터베이스 스냅샷](/intro/node-data-snapshots)을 다운로드하여 수행했습니다. `1.26.0`로 시작하면 로컬에서 수행할 수 있으므로 더 편리하고 훨씬 빠릅니다.

데모 목적으로, 가까운 홈 디렉토리가 `/home/user/.near`이고 데이터베이스 위치가 `/home/user/.near/data`이라고 가정합니다. 그런 다음 안전한 데이터베이스 마이그레이션은 다음과 같은 방식으로 작동합니다.

1. 파일 시스템 하드 링크를 사용하여, `/home/user/.near/data/migration-snapshot` 내 기존 데이터베이스의 즉각적인 무료 스냅샷을 생성합니다.

<blockquote class="warning">
파일 시스템이 하드 링크를 지원하지 않는 경우(또는 다른 파일 시스템에서 생성되도록 스냅샷을 구성한 경우), 이 단계에 상당한 시간이 걸리고, 데이터베이스에서 사용하는 공간이 두 배로 늘어날 수 있습니다.
</blockquote>

2. 데이터베이스 마이그레이션을 실행합니다.

<blockquote class="warning">
새로 생성된 스냅샷은 추가 공간을 차지하지 않지만, 데이터베이스 마이그레이션이 진행됨에 따라 스냅샷이 차지하는 공간은 점차 증가합니다.
</blockquote>

3. 스냅샷을 삭제합니다.

4. 노드를 정상적으로 실행합니다.

마이그레이션 단계가 중단되면 스냅샷이 삭제되지 않습니다. 다시 시작할 때, 노드는 로컬 스냅샷의 존재를 감지하고 데이터베이스 마이그레이션이 중단되었다고 가정하며(데이터베이스 손상) 사용자에게 해당 스냅샷에서 데이터베이스를 복구하도록 요청합니다.

### 복구

손상된 데이터베이스가 `/home/user/.near/data`에 있고, 스냅샷이 데이터베이스 디렉토리(`/home/user/.near/data/migration-snapshot`)의 기본 위치에 있다고 가정하면, 사용자는 다음과 같이 데이터베이스를 복원할 수 있습니다.

```sh
# Delete files of the corrupted database
rm /home/user/.near/data/*.sst

# Move not only the .sst files, but all files, to the data directory
mv /home/user/.near/data/migration-snapshot/* /home/user/.near/data/

# Delete the empty snapshot directory
rm -r /home/user/.near/data/migration-snapshot

# Restart
./target/release/neard
```

### 구성

예정된 릴리스 1.30부터 안전한 데이터베이스 마이그레이션 기능은 `store.migration_snapshot` 옵션(즉, `store` 객체의  `store.migration_snapshot` 옵션)으로 구성됩니다. 다음 중 하나로 설정할 수 있습니다.

- 절대 경로 (예: `"/srv/neard/migration-snapshot"`) — 스냅샷이 지정된 위치에 생성됩니다.
- 상대 경로 (e.g. `"migration-snapshot"`) — 스냅샷은 데이터베이스 디렉토리 내부의 지정된 하위 디렉토리에 생성됩니다.
- `true` (기본값) — `"migration-snapshot"` 상대 경로를 지정하는 것과 같습니다.
- `false` —  안전한 마이그레이션 기능이 비활성화됩니다.

스냅샷의 기본 위치는 데이터베이스 디렉토리 내부입니다. 이렇게 하면 스냅샷이 즉시 무료로 생성됩니다(파일 시스템이 하드링크를 지원하는 한).

버전 1.30 이전에는, 이 기능이 `use_db_migration_snapshot` 및 `db_migration_snapshot_path` 옵션으로 구성되었습니다. 이는 이제 더 이상 사용되지 않으며, 노드가 설정된 것을 감지하면 새 옵션으로 마이그레이션하는 방법을 설명하는 메시지와 함께 마이그레이션에 실패합니다.

>질문이 있으신가요?
<a href="https://stackoverflow.com/questions/tagged/nearprotocol">
  <h8>StackOverflow에 물어보세요!</h8></a>
