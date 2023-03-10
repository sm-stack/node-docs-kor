---
id: maintenance
title: 노드 업데이트 및 네트워크 업그레이드
sidebar_label: 노드 업데이트 및 네트워크 업그레이드
sidebar_position: 2
description: NEAR 노드 업데이트 및 네트워크 업그레이드
---

## Nearcore 릴리스 {#updating-a-node}

탈중앙화 네트워크로서 NEAR 프로토콜에 대한 모든 업데이트에는 최종 사용자, 플랫폼, 개발자 및 밸리데이터 간의 조정이 필요합니다.

NEAR는 Github의 Nearcore 릴리스(https://github.com/near/nearcore/releases)에서 Nearcore 업데이트를 병합합니다. 각 Nearcore 릴리스에 대한 정보는 릴리스의 특성을 나타냅니다.

```
CODE_COLOR: CODE_YELLOW_MAINNET  // This field indicates the release tag (see below).
RELEASE_VERSION: 1.23.0          // This field indicates the nearcore version.
PROTOCOL_UPGRADE: TRUE           // This indicates that is a protocol upgrade and therefore a required upgrade.
DATABASE_UPGRADE: TRUE           // This field indicates that database migration is needed.
SECURITY_UPGRADE: FALSE          // This field indicates this release does not contain a security upgrade.
```


## Nearcore 릴리스 일정 {#nearcore-planned-updates}

Nearcore 릴리스 일정은 공개 [NEAR 커뮤니티 Google 캘린더](https://calendar.google.com/calendar/u/0/embed?src=nearprotocol.com_ltk89omsjnc2ckgbtk6h9157i0@group.calendar.google.com)에 표시됩니다.

일반적으로 `testnet` 및 `mainnet` 릴리스는 `mainnet` 프로모션 5주 전부터 `testnet`에서 테스트됩니다. 때때로 엔지니어링 캘린더의 변경 및 릴리스 특성으로 인해 릴리스 날짜가 변경될 수 있습니다. 최신 릴리스 날짜는 [NEAR 커뮤니티 Google 캘린더](https://calendar.google.com/calendar/u/0/embed?src=nearprotocol.com_ltk89omsjnc2ckgbtk6h9157i0@group.calendar.google.com)를 참고하세요.


- `testnet`: 수요일 15:00 UTC. 릴리스 태그는 `x.y.z-rc.1`과 연결됩니다.
- `mainnet`: 수요일 15:00 UTC. 릴리스 태그는 `x.y.z`와 연결됩니다.

<blockquote class="warning">
<strong>주의</strong><br /><br />

`betanet`은 일일 업데이트와 자주 있는 하드 포크를 통해 밸리데이터를 위한 최첨단 테스트 환경을 제공합니다. `betanet`에서 실행 중인 노드에 대한 자세한 내용은 [거버넌스 포럼의 betanet 분석 그룹](https://gov.near.org/t/betanet-analysis-group-reports/339)을 참고하세요.

</blockquote>


## Nearcore 긴급 업데이트 {#nearcore-emergency-updates}

네트워크에 사소한 문제가 있거나 새로운 소프트웨어 릴리스가 호환 문제를 일으켜 추가 테스트가 필요한 경우, [CODE_YELLOW_TESTNET]또는 [CODE_YELLOW_MAINNET]를 발행할 수 있습니다.

NEAR 프로토콜 팀은 [Discord](https://discord.gg/xsrHaCb)의 밸리데이터 공지 채널 내에서 `[CODE_RED_TESTNET]` 또는 `[CODE_RED_MAINNET]` 태그를 사용하고, 조정을 위한 이메일 지침을 발표합니다. 일부 업데이트는 [nearcore/SECURITY.md](https://github.com/near/nearcore/blob/master/SECURITY.md) 문서에 설명된 대로 기밀 프로세스를 따를 수 있습니다.

NEAR의 팀은 주로 [Github](https://github.com/near/nearcore)에서 활동하며, Discord 및 Telegram에는 제한적으로 참여합니다.

## 런타임 알림 {#runtime-alerts}

네트워크를 건강하게 유지하고 잠재적인 사고의 피해를 최소화하기 위해, NEAR 팀은 밸리데이터와 업데이트 및 긴급 상황을 소통하여 네트워크 운영을 적절하게 유지할 수 있도록 신속하게 대응할 수 있는 프로세스를 구축하고자 합니다. 이를 위해 밸리데이터 쪽에서, 자동화 시스템이 쉽게 선택할 수 있도록 밸리데이터에게 보내는 중요한 메시지에 다른 태그를 사용할 것을 제안합니다.

제안하는 태그는 다음과 같습니다.

`[CODE_RED_<network_id>]` : 여기서 `<network_id>`는 `MAINNET` 또는 `TESTNET`입니다. 이는 가장 절박하고 긴급한 상황을 나타냅니다. 일반적으로 이는 네트워크가 중단되었거나 충돌했으며, 네트워크를 활성화하기 위해 **즉각적인** 조치를 취하기 위해 밸리데이터가 필요함을 의미합니다. 또한 이는 일부 매우 중요한 보안 취약점을 발견했으며, 가능한 한 빨리 패치가 필요함을 의미할 수 있습니다. 메인넷에 관한 것이라면 밸리데이터가 이러한 경고에 대해, 이상적으로는 30분 이내에 즉시 반응할 것으로 예상됩니다.

`[CODE_YELLOW_<network_id>]`: 여기서 `<network_id>`는 `MAINNET` 또는 `TESTNET`입니다. 이것은 덜 긴급한 발표를 나타냅니다. 일반적으로 이는 프로토콜 변경 릴리스 또는 보통 수준의 보안 문제 수정을 의미합니다. 이러한 경우 밸리데이터는 즉각적인 조치를 취하지 않아도 며칠 내에 반응할 것으로 예상됩니다.

`[CODE_GREEN_<network_id>]`: 여기서 `<network_id>`는 `MAINNET` 또는 `TESTNET`입니다. 이는 일반적으로 더 많은 정보를 제공하거나, 짧은 시간 내에 조치가 필요하지 않은 일반적인 발표를 의미합니다. 성능을 개선하거나 일부 사소한 문제를 수정하는 릴리스 발표일 수 있습니다.

네트워크가 지연되고 수동으로 노드를 다시 시작해야 하는 경우, 기술 팀을 호출하세요. 이러한 메시지는 `[CODE_RED_BETANET]` 또는 `[CODE_RED_TESTNET]`로 시작하며 [Discord](https://discord.gg/xsrHaCb)의 읽기 전용 밸리데이터 공지 채널에 게시됩니다. 동일한 메시지를 다른 채널에서 반복하여 더 멀리 퍼뜨릴 수 있습니다.


>질문이 있으신가요?
<a href="https://stackoverflow.com/questions/tagged/nearprotocol">
  <h8>StackOverflow에 물어보세요!</h8></a>
