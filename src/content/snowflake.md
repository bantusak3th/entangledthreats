---
title: "Snowflake Operational Toolkit"
description: "A collection of SQL recipes, automation scripts, and monitoring dashboards."
year: 2024
repoUrl: "https://github.com/bantusak3th"
coverImage: "/images/architecture-diagram.png"
---
## Overview
This toolkit contains my daily SQL scripts used for managing Snowflake compute warehouses and standardizing role-based access control.

## Sample Query
```sql
SELECT warehouse_name, sum(credits_used) 
FROM snowflake.account_usage.warehouse_metering_history 
GROUP BY 1;
