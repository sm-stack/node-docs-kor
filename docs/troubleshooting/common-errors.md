---
id: common-errors
title: 일반적인 노드 오류 및 해결책
sidebar_label: 일반적인 노드 오류 및 해결책
description: 일반적인 노드 오류 및 해결책
---


***제 노드는 길드넷, 테스트넷, 메인넷에서 피어를 찾고 있습니다. 왜 그럴까요?***

이는 알려진 로깅 문제입니다. 노드는 동일한 체인에서 피어를 찾아야 합니다. 이는 노드가 동일한 체인 내의 피어를 확인할 때 경고 메시지로 출력됩니다.

***정상적인 수의 피어가 없고, 누락된 블록이 표시되고 있습니다.***

일반적으로 노드는 12~15개의 피어를 찾아야 합니다. 노드의 피어 수가 적고 누락된 블록이 표시되면, 노드를 다시 시작하여 피어를 재설정할 수 있습니다.

***제 노드에 피어가 충분하지 않고, 일부 피어가 다운되었습니다.***

원인: 노드에는 평균 12~15 개의 피어가 있고, x 개의 피어가 다운되면(예: 프로토콜 업그레이드 중에 이러한 노드가 늦게 업그레이드되어 제거될 수 있음) 블록이 누락될 수 있습니다.

해결책: 노드를 다시 시작하고 새 피어를 찾으세요. 노드 근처에 성능이 좋지 않은 피어로 인해 노드가 블록을 놓칠 수 있습니다. 피어가 악의적인 경우, 피어를 금지하기 위해 `config.json`에서 `"blacklist": ["IP"]`를 사용하는 것을 고려할 수 있습니다.


***제 노드가 피어를 찾을 수 없거나, 피어가 하나밖에 있습니다.***

원인 1: 첫 번째 피어가 누구인지, 가까운 다른 피어가 있는지에 따라 노드가 더 많은 피어를 찾을 수 없습니다.

해결책: 이 문제는 노드를 다시 시작하여 해결할 수 있습니다.

원인 2: `config.json`에 정의된 부트 노드가 가득 차서, 추가 연결을 허용하지 않습니다.

해결책: 잠재적으로 모든 노드를 `config.json`에 추가하고, 해당 노드를 부트 노드로 사용하여 더 많은 피어를 찾을 수 있습니다.

원인 3: 네트워크에 방금 연결되었고, 최신 피어가 없는 노드에 연결되었습니다.

해결책: 노드를 다시 시작하여 다른 피어를 찾으세요. 잠재적으로 노드를 구성에 추가하고, 해당 노드를 사용하여 더 많은 피어를 찾을 수 있습니다.




***제 노드가 상태를 동기화할 수 없거나, 동기화 상태 루프에 갇혀 있습니다.***

원인: 잠재적으로 잘못된 nearcore 릴리스를 사용하고 있습니다.

해결책: Nearcore 릴리스를 수정합니다: https://github.com/near/nearcore/releases. 그리고, 노드 설정에 대한 세부 정보도 확인하세요.

***제 노드가 블록에 걸렸습니다.***

원인: 이것은 에포크의 시작 부분에 블록 처리 시간이 증가되는 시점에서 주로 발생합니다.

해결책: 일반적으로 노드를 다시 시작하면 상황이 개선됩니다.

***노드 충돌 시 제 노드에 "Mailbox closed"가 표시됩니다.***

원인 1: 손상된 상태

해결책: DB에 문제가 있을 수 있습니다. 이 경우, 최신 스냅샷을 다운로드하고 노드를 다시 동기화하거나, 백업 노드가 있는 경우 백업 노드에서 동기화하세요.

원인 2: 블록 높이 불일치

해결책: 피어에 문제가 있을 수 있습니다. 노드는 일정 기간 동안 모든 피어를 금지했으며, 이는 적절하게 종료되지 않은 피어와 관련이 있습니다: https://github.com/near/nearcore/issues/5340. 노드 운영자의 경우, 로그에서 검색하여 스레드 패닉이 있는지 확인하세요. 패닉이 발생하면 스냅샷에서 DB를 저장하면 됩니다. 패닉이 발생하지 않으면 노드를 다시 시작하세요.

Zendesk를 사용하여 모든 메일박스 관련 문제를 보고하고, 로그를 추가하세요: https://near-node.zendesk.com/hc/en-us/requests/new .



***노드가 실행 중일 때 제 노드에 "Mailbox closed"가 표시됩니다.***

원인: 불분명

해결책: 노드를 다시 시작하세요.

***제 노드는 블록 높이 사기를 치는 피어를 금지합니다.***

원인: 피어 네트워크 연결이 느리거나 불안정하거나, 데이터 센터에 문제가 있을 수 있습니다. 피어는 블록 헤더를 충분히 빠르게 보내지 않습니다.

해결책: 노드가 제대로 실행되고 있으면 아무것도 하지 마세요. 피어가 모두 금지되지 않는 한 다음 문제로 이동하세요.



***블록 높이 사기로 인해 모든 피어가 차단되었습니다.***

원인: 피어 네트워크 연결이 느리거나 불안정하거나 데이터 센터에 문제가 있을 수 있습니다. 0bps가 자주 표시되는 경우, 이는 일반적으로 연결 문제가 발생했음을 나타냅니다. 피어가 노드 블록 헤더를 충분히 빠르게 보내지 않습니다. 이 경우 노드가 뒤쳐져(동기화되지 않음) 노드가 피어를 금지하기 시작할 수 있습니다.

해결책: 네트워크 연결을 수정하세요. 피어 금지를 방지하기 위해 `config.json`에서 `ban_window`를 1초로 변경할 수 있습니다.

***노드가 아직 동기화되지 않았고 제안을 했으며, 노드에 다양한 오류(DB를 찾을 수 없음, 메일박스 닫힘 등)가 표시됩니다.***

원인: 노드가 동기화되지 않았습니다. 제안하기 전에 노드가 완전히 동기화될 때까지 기다리세요.

해결책: 완전히 동기화한 뒤, 2 에포크를 기다린 다음 다시 ping합니다.

***기본 노드가 백업 노드로 장애 조치되면, 백 노드에 문제가 발생하고 뒤쳐지고 모든 블록이 누락됩니다.***

원인: 이 문제는 백업 노드의 config.json이 제대로 설정되지 않아 자주 발생합니다.

솔루션: 백업 노드는 모든 샤드를 추적해야 합니다. 초기화 중 기본 config.json은 `"tracked_shards": []`를 가지고 있습니다. 기본 노드와 백업 노드 모두의 `config.json` 파일에서 `"tracked_shards": [0]`을 포함하도록 업데이트하세요. 기본 노드와 백업 노드 모두에 대해 이 업데이트를 수행해야 합니다.

***제 노드는 많은 요청을 보내고, 메모리 사용량이 급증합니다.***

원인: 이 문제는 드물게 관찰되지만 때때로 발생합니다. 노드가 너무 많은 요청을 보내기 시작하여 메모리 사용량이 급증하면, 10분 후에 멈추고 메모리가 부족하게 됩니다.

해결책: 노드를 다시 시작하세요.

***노드의 손상된 상태의 원인은 무엇인가요?***

- 다른 프로토콜 버전 전환으로 인해 업그레이드가 늦어졌을 수 있습니다.
- 노드를 잘못 중지했습니다. 노드는 DB를 일관된 상태로 유지하기 위해 최신 업데이트를 디스크에 기록해야 합니다.
- 스냅샷이 잘못되었습니다. [Zendesk](https://near-node.zendesk.com/hc/en-us/requests/new)에 문제를 제기하여 알려주세요.
- DB 마이그레이션 내 알려진 문제: DB 마이그레이션을 중지하면 노드가 손상된 상태가 됩니다.

***제 노드에 일관성 없는 DB 상태 또는 DB Not Found가 표시됩니다.***

원인: 일관성 없는 DB 상태, DB Not Found는 일반적으로 손상된 상태와 관련이 있습니다(위 참고).

해결책: 문제의 심각도에 따라, 일관성 없는 상태를 해결하기 위해 노드를 다시 시작할 수 있습니다. 더 심각한 경우 노드가 최신 스냅샷을 다운로드하고 다시 시작해야 할 수 있습니다.

***제 노드는 에포크 시작 시 블록을 누락하였습니다.***

원인: 일반적으로 가비지 수집으로 인해 에포크 시작 시 블록이 누락될 수 있습니다. 그러나 노드는 일반적으로 해당 에포크 동안 이를 따라잡고, 퇴출되지 않습니다.

해결책: 노드가 따라잡기를 기다립니다. 쫓겨나면 다시 가입하세요.

***기본 밸리데이터 노드와 보조 노드가 있는 메인넷의 일반적인 사고 복구 계획은 무엇인가요?***

1. node_key.json을 보조 노드로 복사합니다.
2. validator_key.json을 보조 노드에 복사합니다.
3. 기본 노드를 중지합니다.
4. 보조 노드를 중지합니다.
5. 보조 노드를 다시 시작합니다.


***일반적인 밸리데이터/RPC 노드 업그레이드 프로세스에서는 어떤 일이 발생합니까?***

1. DB 마이그레이션 (릴리스에 DB 마이그레이션이 포함된 경우에는 선택 사항)
2. 피어 찾기
3. 헤더를 100% 다운로드
4. 상태 동기화
5. 블록 다운로드

***일반적인 아카이브 노드 업그레이드 프로세스에서는 어떤 일이 발생합니까?***

아카이브 노드는 모든 블록이 필요하므로, 헤더를 다운로드한 후 바로 블록을 다운로드합니다.

1. DB 마이그레이션 (릴리스에 DB 마이그레이션이 포함된 경우에는 선택 사항)
2. 피어 찾기
3. 헤더를 100% 다운로드
4. 블록 다운로드

## 여전히 노드에 문제가 있나요?
Zendesk (https://near-node.zendesk.com/hc/en-us/requests/new)에서 NEAR 팀의 버그 보고서를 찾아 로그를 첨부하세요.
