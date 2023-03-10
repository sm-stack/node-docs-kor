---
id: upgrade_alert
title: 밸리데이터 노드 업그레이드 알림
sidebar_label: 밸리데이터 노드 업그레이드 알림
description: 밸리데이터 노드 업그레이드에 대한 알림을 설정하는 방법
sidebar_position: 5
---

# 밸리데이터 노드 업그레이드 알림

밸리데이터 노드의 80%가 새 프로토콜 버전으로 전환되면, 업그레이드는 2 에포크 내에 발생합니다. 적시에 업그레이드하지 않는 밸리데이터 노드는 추방됩니다. 다음은 밸리데이터가 새 프로토콜 버전으로 업그레이드된 밸리데이터 노드의 비율을 확인할 수 있는 네트워크 업그레이드 비율을 제공합니다.

<blockquote class="warning">
<strong>주의</strong><br /><br />

노드 버전 및 빌드에 대한 정보는 온체인에서 사용할 수 있습니다. 온체인 데이터를 기반으로 하는 통계는 더 신뢰할 수 있으며, 해당 통계는 이미 구축 중입니다.
</blockquote>

밸리데이터 노드는 공개적으로 액세스 가능한 PostgresSQL 데이터베이스에 저장된 원격 측정 데이터를 주기적으로 제출합니다. 노드는 원격 측정 데이터 제출을 거부할 수 있으며, 원격 측정 데이터의 정확성은 보장되지 않습니다.

이러한 주의 사항을 명확히 했다면 업그레이드 알림을 정의해 보겠습니다. 지침은 Grafana에서만 테스트되었습니다.

1단계: 다음 자격 증명을 사용하여 PostgreSQL 데이터 원본을 추가합니다.

* 테스트넷은 `telemetry_testnet`, 메인넷은 `telemetry_mainnet`: https://github.com/near/near-indexer-for-explorer/#shared-public-access

2단계: 다음 SQL 쿼리를 사용하여 그래프 패널이 있는 대시보드를 추가합니다. Grafana는 그래프 패널의 알림만 지원하므로, 테이블 데이터를 그래프 형식에 맞추기 위한 해결 방법이 필요합니다.

```
SELECT $__time(time_sec)
  ,upgraded_ratio
FROM (
  SELECT NOW() - INTERVAL '1' SECOND AS time_sec
    ,(
      (
        SELECT CAST(COUNT(*) AS FLOAT)
        FROM nodes
        WHERE agent_version > (
            SELECT MIN(agent_version)
            FROM nodes
            WHERE is_validator
              AND (now() - last_seen) < INTERVAL '15 MINUTE'
            )
          AND is_validator
          AND (now() - last_seen) < INTERVAL '15 MINUTE'
        ) / (
        SELECT COUNT(*)
        FROM nodes
        WHERE is_validator
          AND (now() - last_seen) < INTERVAL '15 MINUTE'
        )
      ) AS upgraded_ratio
  ) AS inner_table
WHERE $__timeFilter(time_sec);
```

3단계: 알림 탭으로 이동하여 조건을 `WHEN last () OF query (A, 10s, now) IS ABOVE 0.65`로, 또는 유사하게 변경합니다.

4단계: 선택적으로 밸리데이터 노드의 최소 및 최대 버전이 포함된 테이블을 추가합니다.

```
SELECT (
    SELECT MIN(agent_version)
    FROM nodes
    WHERE is_validator
      AND (now() - last_seen) < INTERVAL '15 MINUTE'
    ) AS min_version
  ,(
    SELECT MAX(agent_version)
    FROM nodes
    WHERE is_validator
      AND (now() - last_seen) < INTERVAL '15 MINUTE'
    ) AS max_version
  ,(
    SELECT COUNT(*)
    FROM nodes
    WHERE is_validator
      AND (now() - last_seen) < INTERVAL '15 MINUTE'
    ) AS num_validators
  ,(
    SELECT COUNT(*)
    FROM nodes
    WHERE agent_version = (
        SELECT MAX(agent_version)
        FROM nodes
        WHERE is_validator
          AND (now() - last_seen) < INTERVAL '15 MINUTE'
        )
      AND is_validator
      AND (now() - last_seen) < INTERVAL '15 MINUTE'
    ) AS upgraded_validators
  ,(
    (
      SELECT CAST(COUNT(*) AS FLOAT)
      FROM nodes
      WHERE agent_version = (
          SELECT MAX(agent_version)
          FROM nodes
          WHERE is_validator
            AND (now() - last_seen) < INTERVAL '15 MINUTE'
          )
        AND is_validator
        AND (now() - last_seen) < INTERVAL '15 MINUTE'
      ) / (
      SELECT COUNT(*)
      FROM nodes
      WHERE is_validator
        AND (now() - last_seen) < INTERVAL '15 MINUTE'
      )
    ) AS upgraded_ratio;
```

5단계: 필요에 따라, 현재 노드보다 최신 버전을 실행하는 노드의 개수가 포함된 테이블을 추가합니다.

```
SELECT (
    SELECT COUNT(*)
    FROM nodes
    WHERE is_validator
      AND (now() - last_seen) < INTERVAL '15 MINUTE'
    ) AS num_validators
  ,(
    SELECT COUNT(*)
    FROM nodes
    WHERE agent_version > (
        SELECT agent_version
        FROM nodes
        WHERE moniker = '$YOUR_VALIDATOR_MONIKER'
        )
      AND is_validator
      AND (now() - last_seen) < INTERVAL '15 MINUTE'
    ) AS upgraded_validators
  ,(
    (
      SELECT CAST(COUNT(*) AS FLOAT)
      FROM nodes
      WHERE agent_version > (
          SELECT agent_version
          FROM nodes
          WHERE moniker = '$YOUR_VALIDATOR_MONIKER'
          )
        AND is_validator
        AND (now() - last_seen) < INTERVAL '15 MINUTE'
      ) / (
      SELECT COUNT(*)
      FROM nodes
      WHERE is_validator
        AND (now() - last_seen) < INTERVAL '15 MINUTE'
      )
    ) AS upgraded_ratio;
```

>질문이 있으신가요?
<a href="https://stackoverflow.com/questions/tagged/nearprotocol">
  <h8>StackOverflow에 물어보세요!</h8></a>
