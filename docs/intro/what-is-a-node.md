---
id: what-is-a-node
title: 노드란?
sidebar_label: 노드란?
sidebar_position: 1
description: NEAR 노드란 무엇이고, 왜 노드를 돌리나요?
---

NEAR 프로토콜은 공개적으로 유지 관리되는 컴퓨터 모음(또는 "노드")에서 실행됩니다. 모든 노드는 [GitHub](https://github.com/near/nearcore/releases/)에서 사용할 수 있는 최신 릴리스와 동일한 `nearcore` 코드베이스를 실행하고 있습니다.

모든 노드가 다른 구성으로 동일한 코드베이스를 실행한다는 점을 염두에 두는 것이 중요합니다. 이와 같이, 다양한 유형의 노드를 실행하기 위한 튜토리얼을 노드 유형별 섹션으로 분할했습니다.

## 왜 노드를 실행하나요? {#why-run-a-node}

다음과 같은 몇 가지 이유로 자신의 노드를 실행하기로 결정할 수 있습니다.

- 밸리데이터 노드를 실행하는 밸리데이터로 네트워크에 참여합니다. 밸리데이터 노드를 실행하는 것은 누구나 할 수 있으며, 이를 통해 NEAR 네트워크를 효과적으로 보호하고 보상을 받을 수 있습니다.
- RPC 성능 및/또는 가용성에 크게 의존하는 애플리케이션을 실행합니다.
- 로컬(독립적이고 격리된) 노드("localnet"이라고도 함)에서 컨트랙트를 개발하고 배포합니다. (†)
- 체인 분석, 블록 익스플로러 등에 사용할 수 있는 블록체인 데이터를 빠르게 추출합니다.

_(†)개발 과정에서 작업에 대한 정보 유출을 피하려면 `localnet`이 올바른 선택이 될 것입니다. `testnet`과 `betanet`은 퍼블릭 네트워크이기 때문입니다. 또한 `localnet`에서는 고급 사용 사례(예: `nearcore` 변경하기)를 위한 계정, 경제 및 기타 요소를 완전히 제어할 수 있습니다._

## 네트워크 유형 {#types-of-network}

잠재적으로 노드를 실행할 수 있는 몇 가지 다른 네트워크가 있습니다. 각 네트워크는 자체 독립 밸리데이터와 고유한 상태로 작동합니다. 자세한 내용을 알아보려면 [네트워크 개요](https://docs.near.org/concepts/basics/networks)로 이동하세요.

* [`mainnet`](https://docs.near.org/concepts/basics/networks#mainnet)
* [`testnet`](https://docs.near.org/concepts/basics/networks#testnet)
* [`betanet`](https://docs.near.org/concepts/basics/networks#betanet)
* [`localnet`](https://docs.near.org/concepts/basics/networks#localnet)


>질문이 있으신가요?
<a href="https://stackoverflow.com/questions/tagged/nearprotocol">
  <h8>StackOverflow에 물어보세요!</h8></a>
