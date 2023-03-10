---
id: recompress-storage
title: 아카이브 노드 스토리지 재압축
sidebar_label: 아카이브 노드 스토리지 재압축
sidebar_position: 4
description: 아카이브 노드의 스토리지를 재압축하여 크기를 줄이는 방법
---

# 아카이브 노드 스토리지 재압축

Nearcore 1.26.0 릴리스는 노드의 스토리지 계층에 대한 다양한 개선 사항을 도입합니다. 더 나은 성능을 위한 변경 사항으로 인해 아카이브 노드의 스토리지가 *크게* 감소했습니다. 즉, 스토리지 크기는 메인넷에서 7.7TB에서 3.8TB로, 테스트넷에서 3.6TB에서 1.7TB로 줄었습니다.

그러나 스토리지 최적화 효과를 최대한 활용하려면, 몇 가지 수동 단계를 수행해야 합니다. 이 문서에서는 이러한 단계를 설명합니다. 아카이브 노드를 실행하지 않는 경우 아무 작업도 수행할 필요가 없습니다.

개선 사항 중 하나는 데이터베이스에서 사용하는 압축 알고리즘을 변경하는 것입니다. 그렇기 때문에 이 프로세스 전체를 '스토리지 재압축'이라고 합니다.

## 재압축된 스냅샷 다운로드

재압축을 수행하는 대신, 스토리지 최적화의 이점을 얻는 더 쉬운 방법은 새 [노드 데이터 스냅샷](/intro/node-data-snapshots)을 다운로드하는 것입니다. 이 옵션은 메인넷 및 테스트넷 체인 모두에서 사용할 수 있습니다.

2022년 6월 10일 이후에 백업에서 새 아카이브 노드를 시작한 경우, 노드는 이미 재압축된 스토리지로 실행 중이므로 추가 조치를 취할 필요가 없습니다.

## 작업 수행

재압축은 언제든지 수행할 수 있습니다. 즉, 노드 업그레이드 직후에 재압축을 실행할 필요가 없습니다. 사실 바이너리 업그레이드 며칠 후에 일정을 잡는 것이 더 나을 수도 있습니다. 이렇게 며칠 기다리는 것은, 다른 변경 사항을 도입하기 전에 바이너리 릴리스가 올바르게 작동하는지 확인하는 시간을 제공합니다.

### 필요한 여유 공간

스토리지 재압축은 *새* 데이터베이스를 생성하여 작동합니다. 결과적으로, 상당한 양의 여유 디스크 공간이 필요합니다. 메인넷의 경우 4TB, 테스트넷 아카이브 노드의 경우 2TB입니다.

호스트에 여유 공간이 충분하지 않은 경우, 기존 파티션 중 하나의 크기를 조정하거나(클라우드에서 실행 중이고 디스크 크기를 자유롭게 조정할 수 있는 경우) 임시로 새 디스크를 연결해야 합니다.

프로세스가 끝나면 이전 데이터베이스를 삭제하여 많은 공간을 확보할 수 있습니다. 그러나 클라우드에서 디스크 크기를 늘리는 것은 간단한 작업인 경우가 많지만 축소하는 것은 더 복잡할 수 있습니다. 노드 설정에 따라 적절하게 계획해야 합니다.

### 노드 중지

재압축이 진행되는 동안에는 데이터베이스를 수정할 수 없습니다. 즉, 노드를 종료해야 합니다. 작업은 메인넷에서 약 12시간, 테스트넷에서 6시간이 걸립니다. 아카이브 노드에 대한 지속적인 액세스가 필요한 경우, 중복 노드를 설정해야 합니다.

노드 중지 절차는 시스템 구성에 따라 다릅니다. 예를 들어 neard가 systemd 서비스로 실행되는 경우, 이를 중지하는 명령은 다음과 같습니다.

```console
$ sudo systemctl stop neard.service
```

### 재압축 실행

재압축은 `neard` 바이너리의 `recompress-storage` 명령을 실행하여 수행됩니다. 명령이 중단되면 전체 작업을 처음부터 다시 실행해야 합니다. 그렇기 때문에 screen 또는 tmux 세션 내에서 또는 nohup 유틸리티를 통해 실행하는 것이 가장 좋습니다. 예를 들어:

```console
$ NEAR_HOME=$HOME/.near  # change to point to near home directory
$ export NEAR_HOME

$ screen
$ # Inside of screen session:
$ neard recompress-storage --output-dir="${NEAR_HOME:?}/data.new"
```
재압축이 성공적으로 완료되면 이전 데이터베이스 대신 새 데이터베이스를 배치해야 합니다. 이는 `data.new` 디렉토리 이름을 바꾸기만 하면 됩니다.

```console
$ NEAR_HOME=$HOME/.near  # change to point to near home directory
$ export NEAR_HOME

$ mv -- "${NEAR_HOME:?}/data"     "${NEAR_HOME:?}/data.bak"
$ mv -- "${NEAR_HOME:?}/data.new" "${NEAR_HOME:?}/data"
```

적어도 다음 섹션에서 설명하는 확인이 완료될 때까지 `data.bak` 백업은 보관할 가치가 있습니다. 확인에 실패하면 재압축 전에 데이터베이스를 쉽게 복구할 수 있습니다. 그렇지 않으면 `data.bak`은 삭제될 수 있습니다.

#### 디스크 크기 고려

위에서 언급했듯이, 작업에는 최대 4TB의 여유 디스크 공간이 필요합니다. 위의 명령은 홈 디렉토리 근처에 있다고 가정하지만, 그렇지 않은 경우, 그에 따라 `--output-dir` 플래그를 조정하는 다른 위치에 새 데이터베이스를 작성해야 합니다.

예를 들어, 아카이브 노드가 클라우드 환경에서 실행 중인 경우 새 디스크를 만들어 새 위치(예: `/mnt`)에 마운트할 수 있습니다. 이는 다음과 같이 보일 수 있습니다.

```console
$ NEAR_HOME=$HOME/.near  # change to point to near home directory
$ export NEAR_HOME

$ # After attaching new disk to the virtual machine; e.g. at /dev/sdx:
$ dev=/dev/sdx

$ sudo mkfs.ext4 "${dev:?}"
$ sudo mount "${dev:?}" /mnt
$ sudo chown -R $USER /mnt
$ neard recompress-storage --output-dir=/mnt/data
$ # ... recompress comences ...

$ rm -rf -- "${NEAR_HOME:?}/data"
$ cp -R -- /mnt/data "${NEAR_HOME:?}"
$ sudo umount /mnt
```

별도의 디스크가  `~/.near` 디렉토리에 마운트된 다른 구성을 사용하는 경우, 복사가 필요하지 않으며 마운트 지점을 교체하여 처리할 수 있습니다. 이 경우 새 디스크는 SSD여야 합니다.


```console
$ cp ~/.near/*.json /mnt
$ sudo umount ~/.near
$ sudo umount /mnt
$ sudo mount "${dev:?}" ~/.near
```

세부 정보는 사용 중인 시스템의 구성에 따라 다릅니다.

### 검증

이 시점에서 아카이브 노드를 다시 시작할 수 있습니다. 그러나 재시작 전에 새 데이터베이스에서 온전성 검사를 수행하는 것이 좋습니다. 이것은 다음과 같이 `view-state` 명령의 도움으로 수행할 수 있습니다.

```console
$ NEAR_HOME=$HOME/.near  # change to point to near home directory
$ export NEAR_HOME

$ head=$(neard view-state view-chain |
         sed -ne 's/ *height: *\([0-9]*\),$/\1/p')
$ test -n "$head" || echo 'Unable to read chain head'
$ echo TIP: "$head"
TIP: 63870907

$ start=$((head - 1000))
$ neard view-state apply-range --start-index=$start --shard-id=0
$ neard view-state apply-range --start-index=$start --shard-id=1
$ neard view-state apply-range --start-index=$start --shard-id=2
$ neard view-state apply-range --start-index=$start --shard-id=3
```

명령이 오류나 차이점을 보고하지 않으면, 노드를 다시 시작하는 것이 안전합니다. 이 확인에는 약 15분이 소요됩니다.

## 변경 사항

1.26.0 릴리스에는 스토리지 크기를 줄이는 세 가지 주요 변경 사항이 도입되었습니다.

첫째, 자체적으로 데이터베이스 크기를 약 1/4로 줄이는 Zstandard(zstd) 압축 알고리즘을 통합했습니다. 그러나 일반적으로 기존 데이터는 변경되거나 압축되지 않는 한, 그대로 유지됩니다. RPC 노드는 5 에포크마다 대부분의 저장소를 다시 쓰기 때문에, 데이터베이스는 2.5일 후에 다시 압축됩니다. 반면에 아카이브 노드는 수동으로 수행되는 이점이 있습니다. 그렇지 않으면 크기 축소가 나타나는 데 오랜 시간이 걸리기 때문입니다.

둘째, 아카이브 노드에서 부분적으로 인코딩된 청크를 가비지 수집하기 시작했습니다. RPC 노드는 이미 해당 데이터를 가비지 수집하고 있었으므로, 이 변경 사항은 영향을 미치지 않습니다. 인코딩된 청크는 다른 노드가 상태를 동기화할 때 필요하지만, 이는 데이터베이스 내 다른 객체에서 재구성될 수 있습니다. 이는 데이터베이스 크기의 약 1/4을 구성하므로, 이를 가비지 수집하면 노드가 오래된 블록을 다른 아카이브 노드로 보내어 상태를 동기화하려고 할 때 계산 비용을 약간 증가시키는 방향으로 스토리지 크기를 크게 줄입니다.

셋째, 아카이브 노드에서 트라이 변경 생성을 중지했습니다. 이러한 객체는 RPC 노드에 필요하지만, 아카이브 노드에서는 생략할 수 있습니다. 이는 데이터베이스 크기의 약 1/4을 차지했습니다.


## 무엇을 해야 하나요?

RPC 노드를 실행 중이거나 스토리지 비용에 관심이 없다면 아무것도 할 필요가 없습니다. 남은 SSD 디스크 공간이 있는 경우에도, 재압축을 수행하지 않고 노드를 계속 실행할 수 있습니다.

또한 아카이브 노드를 운영 중이지만 일정이 걱정되는 경우(예: 다른 문제를 처리하느라 바빠 임박한 데이터베이스 변경 사항을 처리할 시간이 없는 경우) 재압축을 연기할 수 있습니다.
