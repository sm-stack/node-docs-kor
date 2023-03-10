---
id: staking-and-delegation
title: 스테이킹 및 위임
sidebar_label: 스테이킹 및 위임
sidebar_position: 6
---

#  NEAR에 스테이킹

스테이킹은 주어진 노드가 다가오는 에포크에서 밸리데이터가 되려고 한다는 것을 네트워크에 알리는 `StakeTransaction` 전송 프로세스입니다. 이 유형의 트랜잭션은 공개 키와 스테이킹 금액을 제공해야 합니다. 트랜잭션이 전송된 후, 스테이킹 트랜잭션의 공개 키와 연결된 개인 키가 있는 노드는 밸리데이터가 되기 위해 두 에포크까지 기다려야 합니다.

## 밸리데이터으로서의 최소 스테이크 금액은 얼마인가요?
노드는 스테이킹 트랜잭션의 금액이 [프로토콜에서 정의한 자리 가격](https://near.org/papers/economics-in-sharded-blockchain/#validators)보다 높은 경우에만 NEAR 밸리데이터가 될 수 있습니다. 자리 가격은 동적으로 계산되며, 이는 다른 밸리데이터가 스테이킹한 NEAR 토큰 양의 함수입니다.

밸리데이터의 현재 자리 가격은 여기 익스플로러 페이지에서 확인할 수 있습니다: https://explorer.near.org/nodes/validators

## 스마트 컨트랙트 기반 스테이킹

NEAR의 위임은 프로토콜 수준에서 구현되지 않으므로, 각 밸리데이터는 위임자를 유치하는 데 사용하는 자체 컨트랙트를 생성하거나 사용자 정의할 수 있습니다. 밸리데이터가 위임된 지분을 수락하려면, 커미션 수수료와 보상 분배 분할을 정의하는 스테이킹 풀 컨트랙트를 배포하고, 해당 컨트랙트를 위임 대상으로 광고해야 합니다.

다른 PoS 네트워크와 달리, NEAR는 스테이킹 풀 팩토리 내 화이트리스트 스테이킹 스마트 컨트랙트를 사용하여 위임자의 자금을 안전하게 보호합니다. 따라서 NEAR에서 밸리데이터 노드를 실행하기 위해서는, NEAR 계정에 스테이킹 풀을 배포하고, 이를 NEAR 밸리데이터 노드에 통합해야 합니다.

각 밸리데이터는 자체 커미션 수수료와 보상 분배 방식을 결정할 수 있습니다.

## NEAR CLI로 스테이킹

밸리데이터의 경우, 스테이킹 풀 스마트 컨트랙트를 배포하지 않고 스테이킹할 수 있는 옵션이 있습니다. 그러나 스테이킹 풀을 배치하지 않고 직접 스테이킹하는 이 옵션을 선택하면 다른 위임자가 당신에게 위임하는 것을 방지하고, 잠재적인 수수료 수입을 줄일 수 있습니다. 이 접근법을 취하고 싶다면:
- [near-cli](https://github.com/near/near-cli)를 설치하세요.
- 다음 명령에 따라 NEAR를 스테이킹하고 언스테이킹합니다.


### 스테이킹 풀 없이 NEAR를 직접 스테이킹
```
near stake <accountId> <publicKey> --amount <amount>
```

### 스테이킹 풀 없이 NEAR를 직접 언스테이킹
언스테이킹 명령은 단순히 스테이킹 명령을 변경하여 스테이킹 금액을 0으로 만드는 것입니다.
```
near stake <accountId> <publicKey> --amount 0
```

---


# NEAR에서의 위임

## 위임 스테이킹은 어떻게 작동하나요?
NEAR 토큰 보유자는 토큰을 위임하여 보상을 받을 수 있습니다. NEAR 토큰을 스테이킹하면, 네트워크를 보호하고 보상을 받을 수 있습니다. 토큰을 위임하면 검증자가 배포한 특정 스테이킹 풀에 토큰을 예치하고 스테이킹하게 됩니다.

## 밸리데이터를 선택하는 방법은 무엇인가요?
위임에 사용 가능한 풀 목록(밸리데이터당 하나)은 [익스플로러 내 밸리데이터](https://explorer.near.org/nodes/validators) 페이지에서 확인할 수 있습니다. 위임자는 밸리데이터의 성과와 부과된 수수료를 검토하여 최선의 위임 방법을 결정해야 합니다.

위임자는 [NEAR 지갑](https://wallet.near.org/) 또는 [NEAR CLI](https://github.com/near/near-cli)를 사용하여 기존 스테이킹 풀에 위임할 수 있습니다.

## NEAR 지갑으로 위임

NEAR 지갑을 사용하여 위임하려는 위임자라면, 다음과 같이 `mainnet` 지갑을 만드세요.

- [wallet.near.org](https://wallet.near.org/)로 이동하여 계정을 만드세요.
- [스테이킹](https://wallet.near.org/staking) 탭으로 이동하여 토큰을 위임할 스테이킹 풀을 선택합니다.

## NEAR CLI로 위임

명령줄을 사용하여 위임하려는 위임자의 경우:
- [near-cli](https://github.com/near/near-cli)를 설치하세요.
- 다음 명령은 NEAR를 스테이킹, 언스테이킹 및 인출하는 데 도움이 될 수 있습니다.


### NEAR 입금 및 스테이킹

```
near call <stakingPoolId> deposit_and_stake --amount <amount> --accountId <accountId> --gas=300000000000000
```

### 모두 언스테이킹
Unstaking은 완료하는 데 2-3 에포크가 걸립니다. 언스테이킹 기간이 지나면 NEAR를 스테이킹 풀에서 인출할 수 있습니다.
```
near call <stakingPoolId> unstake_all --accountId <accountId> --gas=300000000000000
```

### 특정 금액 언스테이킹
yoctoNEAR 단위로 언스테이킹할 금액을 작성하세요. 참고: 언스테이킹을 완료하려면 2-3 에포크가 걸립니다. 언스테이킹 기간이 지나면 NEAR를 스테이킹 풀에서 인출할 수 있습니다.

```
near call <stakingPoolId> unstake '{"amount": "<amount yoctoNEAR>"}' --accountId <accountId> --gas=300000000000000
```

### 모두 출금
```
near call <stakingPoolId> withdraw_all --accountId <accountId> --gas=300000000000000
```

### 특정 금액만 출금
yoctoNEAR 단위로 출금액을 작성하세요.
```
near call <stakingPoolId> withdraw '{"amount": "<amount yoctoNEAR>"}' --accountId <accountId> --gas=300000000000000
```

### 업데이트된 잔액 보기
스테이킹 풀에 최근에 적용된 작업이 없는 경우, 모든 스테이킹된 계정에 이전 잔액이 표시될 수 있습니다. 업데이트된 잔액을 보려면, 풀을 ping하면 됩니다.

```
near call <stakingPoolId> ping '{}' --accountId <accountId> --gas=300000000000000
```


>질문이 있으신가요?
<a href="https://stackoverflow.com/questions/tagged/nearprotocol">
  <h8>StackOverflow에 물어보세요!</h8></a>
