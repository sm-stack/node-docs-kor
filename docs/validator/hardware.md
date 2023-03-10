---
id: hardware
title: 밸리데이터 노드의 하드웨어 요구 사항
sidebar_label: 하드웨어 요구 사항
sidebar_position: 1
description: NEAR 밸리데이터 노드 하드웨어 요구 사항
---

이 페이지에서는 밸리데이터 노드로 NEAR 플랫폼에 참여하기 위한 최소 및 권장 하드웨어 요구 사항을 다룹니다.


## 권장 하드웨어 사양 {#recommended-hardware-specifications}

| 하드웨어       |  권장 사양                                                  |
| -------------- | ---------------------------------------------------------------              |
| CPU            | x86_64 (Intel, AMD) 프로세서(8코어 이상)                 |
| CPU Features   | CMPXCHG16B, POPCNT, SSE4.1, SSE4.2, AVX                                      |
| RAM            | 24GB DDR4                                                                    |
| Storage        | 1TB SSD (NVMe SSD 권장. HDD는 localnet에만 충분함)      |

Linux에서 다음 명령을 실행하여 CPU 기능 지원을 확인하세요.

```
lscpu | grep -P '(?=.*avx )(?=.*sse4.2 )(?=.*cx16 )(?=.*popcnt )' > /dev/null \
  && echo "Supported" \
  || echo "Not supported"
```

## 최소 하드웨어 사양{#minimal-hardware-specifications}

| 하드웨어       |  최소 사양                                                     |
| -------------- | ---------------------------------------------------------------             |
| CPU            | x86_64 (Intel, AMD) 프로세서 (8코어 이상)               |
| CPU Features   | CMPXCHG16B, POPCNT, SSE4.1, SSE4.2, AVX                                     |
| RAM            | 16GB DDR4                                                                    |
| Storage        | 500GB SSD (NVMe SSD 권장. HDD는 localnet에만 충분함)   |

Linux에서 다음 명령을 실행하여 CPU 기능 지원을 확인하세요.

```
lscpu | grep -P '(?=.*avx )(?=.*sse4.2 )(?=.*cx16 )(?=.*popcnt )' > /dev/null \
  && echo "Supported" \
  || echo "Not supported"
```

## 비용 추정 {#cost-estimation}

운영 체제에 따른 예상 월별 비용은 다음과 같습니다.


| 클라우드 제공자 | 장치 크기    | Linux                  |
| -------------- | --------------- | ---------------------- |
| AWS            | m5.2xlarge      | $330 CPU + $80 storage |
| GCP            | n2-standard-8   | $280 CPU + $80 storage |
| Azure          | Standard_F8s_v2 | $180 CPU + $40 storage |

<blockquote class="info">
<strong>비용 추정을 위한 리소스</strong><br /><br />

모든 가격은 1년 약정으로, 모든 플랫폼에서 대폭 할인을 제공하는 *예약 인스턴스를* 반영합니다.

- AWS
  - cpu: https://aws.amazon.com/ec2/pricing/reserved-instances/pricing
  - 스토리지: https://aws.amazon.com/ebs/pricing
- GCP
  - cpu: https://cloud.google.com/compute/vm-instance-pricing
  - 스토리지: https://cloud.google.com/compute/disks-image-pricing
- Azure — https://azure.microsoft.com/en-us/pricing/calculator

</blockquote>

>질문이 있으신가요?
<a href="https://stackoverflow.com/questions/tagged/nearprotocol">
  <h8>StackOverflow에 물어보세요!</h8></a>
