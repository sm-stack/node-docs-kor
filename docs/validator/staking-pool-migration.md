---
id: staking-pool-migration
title: 업그레이드 가능한 스테이킹 풀
sidebar_label: 업그레이드 가능한 스테이킹 풀
sidebar_position: 7
---

#  업그레이드 가능한 스테이킹 풀

NEAR 프로토콜은 다음과 같은 기능을 갖춘 업그레이드 가능한 스테이킹 풀 컨트랙트를 제공합니다.
- 업그레이드 가능
- 스테이크 파밍

향후, 이 업그레이드 가능한 스테이킹 풀 컨트랙트는 Chunk-Only Producer에 대한 스테이킹 작업도 지원할 것입니다. Testnet에서 업그레이드 가능한 스테이킹 컨트랙트의 이름은 `factory01.littlefarm.testnet`입니다. Mainnet의 컨트랙트 이름은 `pool.near`입니다.


### 새로운 스테이킹 풀 배포
스테이킹 풀 팩토리를 호출하고, 지정된 이름으로 새 스테이킹 풀을 생성하고 표시된 accountId에 배포합니다.

Testnet의 경우: (이 호출은 `code_hash`처럼 작동하지 않을 것입니다. 팩토리에 추가되지 않았기 때문입니다. 이 컨트랙트가 준비되면, 결과가 출력될 때까지 계속 지켜봐 주세요.)

```
near call factory01.littlefarm.testnet  create_staking_pool '{"staking_pool_id": "<poolId>", "owner_id": "<accountId>", "stake_public_key": "<public key in validator.json>", "reward_fee_fraction": {"numerator": 5, "denominator": 100}, "code_hash": "GGfKUF9TuAFN4AzbecPonNGuRTuVqx8UPXmViogN8pRm"}' --accountId="<accountId>" --amount=4 --gas=300000000000000
```

Mainnet의 경우:

```
near call pool.near create_staking_pool '{"staking_pool_id": "<poolId>", "owner_id": "<accountId>", "stake_public_key": "<public key>", "reward_fee_fraction": {"numerator": 5, "denominator": 100}}' --accountId="<accountId>" --amount=4 --gas=300000000000000
```

위의 예에서 다음을 교체해야 합니다.

* **Pool ID**: 스테이킹 풀 이름입니다. 팩토리는 자동으로 이 매개변수에 이름을 추가하여 {pool_id}.{staking_pool_factory}를 생성합니다. `aurora`를 예를 들어 보겠습니다.  
   - `aurora.factory01.littlefarm.testnet` (testnet)
   - `aurora.pool.near` (mainnet)
* **Owner ID**: 스테이킹 풀을 관리할 NEAR 계정입니다. 일반적으로 이는 기본 NEAR 계정입니다.
* **Public Key**: **validator_key.json** 파일 내 공개 키입니다.
* **5**: 풀이 부과할 수수료입니다(예: 이 경우 100분의 5는 수수료가 5%임을 의미합니다).
* **Account Id**: 스테이킹 풀을 배포하는 NEAR 계정입니다.

> 최소 4개의 NEAR를 사용할 수 있어야 합니다. 이는 새 풀 컨트랙트에서 스토리지에 필요한 최소값입니다.

새 스테이킹 풀이 배포되고, 이제 새 노드와 연결되면 새 풀로 스테이크 마이그레이션을 시작할 수 있습니다. 스테이크를 마이그레이션하려면 [스테이크 및 위임 페이지](/validator/staking-and-delegation)를 살펴보세요.

### 제안 제출
밸리데이터 자리를 확보하려면, 핑으로 제안서를 제출해야 합니다. 핑은 새로운 제안을 발행하고 위임자의 스테이킹 잔액을 업데이트합니다. 보고된 보상을 최신 상태로 유지하려면, 매 에포크마다 핑을 발행해야 합니다.

명령:
```
near call <staking_pool_id> ping '{}' --accountId <accountId> --gas=300000000000000
```



>질문이 있으신가요?
<a href="https://stackoverflow.com/questions/tagged/nearprotocol">
  <h8>StackOverflow에 물어보세요!</h8></a>
