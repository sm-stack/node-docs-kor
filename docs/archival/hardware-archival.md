---
id: hardware-archival
title: 아카이브 노드의 하드웨어 요구 사항
sidebar_label: 하드웨어 요구 사항
sidebar_position: 1
description: NEAR 아카이브 노드의 하드웨어 요구 사항
---

이 페이지에서는 NEAR 플랫폼에 아카이브 노드로 참여하기 위한 최소 및 권장 하드웨어 요구 사항을 다룹니다.



## 권장 하드웨어 사양 {#recommended-hardware-specifications}

| 하드웨어       |  권장 사양                                               |
| -------------- | -----------------------------------------------------------------------   |
| CPU            | 8코어 (16 스레드) Intel i7/Xeon 또는 동급의 AVX 지원           |
| CPU 기능   | CMPXCHG16B, POPCNT, SSE4.1, SSE4.2, AVX                                   |
| RAM            | 24GB DDR4                                                                 |
| 저장소        | 7 테라바이트 SSD                                                            |

_```$ lscpu | grep -oh avx``` 명령을 실행하여 Linux에서 AVX가 지원되는지를 확인합니다. 출력이 비어 있으면 CPU가 지원되지 않는 것입니다._

## 최소 하드웨어 사양 {#minimal-hardware-specifications}

| 하드웨어       |  최소 사양                                                    |
| -------------- | -------------------------------------------------------------------------- |
| CPU            | 8코어(16 스레드) Intel i7/Xeon 또는 동급의 AVX 지원            |
| RAM            | 16GB DDR4                                                                   |
| 저장소        | 7 테라바이트 SSD                                                             |

_```$ lscpu | grep -oh avx``` 명령을 실행하여 Linux에서 AVX가 지원되는지를 확인합니다. 출력이 비어 있으면 CPU가 지원되지 않는 것입니다._

## 비용 추정 {#cost-estimation}

운영 체제에 따른 예상 월별 비용은 다음과 같습니다.

| 클라우드 제공자 | 장치 크기    | Linux                     |
| -------------- | --------------- | ------------------------  |
| AWS            | m5.2xlarge      | $330 CPU + $800 storage † |
| GCP            | n2-standard-8   | $280 CPU + $800 storage † |
| Azure          | Standard_F8s_v2 | $180 CPU + $800 storage † |

_( † ) 아카이브 노드는 성장하는 NEAR 블록체인에서 더 많은 데이터를 저장함에 따라, 스토리지 비용은 시간이 지남에 따라 증가합니다._


<blockquote class="info">
<strong>비용 추정을 위한 리소스</strong><br /><br />

모든 가격은 1년 약정으로, 모든 플랫폼에서 대폭 할인을 제공하는 *예약 인스턴스* 를 반영하였습니다.


- AWS
  - cpu: https://aws.amazon.com/ec2/pricing/reserved-instances/pricing
  - 저장소: https://aws.amazon.com/ebs/pricing
- GCP
  - cpu: https://cloud.google.com/compute/vm-instance-pricing
  - 저장소: https://cloud.google.com/compute/disks-image-pricing
- Azure — https://azure.microsoft.com/en-us/pricing/calculator

</blockquote>

> 질문이 있으신가요?
> <a href="https://stackoverflow.com/questions/tagged/nearprotocol"> > <h8>StackOverflow에 물어보세요!</h8></a>
