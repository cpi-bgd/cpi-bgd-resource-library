---
doc: CPI-BGD Health Operations Platform blueprint
name: platform-blueprint
description: >-
  Reference architecture for the CPI-BGD Health Operations Platform: two-layer Google-first
  design, the nine operational domains mapped to free tools, integration/data-flow diagram,
  scalability swap-points, and the phased rollout summary.
metadata:
  status: draft
  version: 0.1.0
  decisionlog: funded-by-decisions 2026-09-07 (no self-hosting, both publishing surfaces)
---

# Platform blueprint

## Architecture (as decided 2026-09-07)

```mermaid
flowchart TB
  subgraph L1[Workspace layer]
    A[Sheets registers] --> D[Apps Script glue]
    B[Forms capture] --> D
    D --> C[Looker Studio dashboards]
    E[Drive + Shared Drives] --- A
    F[Chat Spaces + Groups] --- G[Meet]
  end
  subgraph L2[Serverless layer]
    H[Supabase / Firebase] --- I[Cloudflare Workers]
    J[KoboToolbox offline] --- K[GitHub Actions cron]
    L[Gemini AI Studio assist] --- M[rclone backup]
  end
  N[(DHIS2 / EWARS)]
  O[(FHIR-based ZarishSphere HIS)]

  D <--> H
  J --> C
  C --> N
  L --> D
  O -. future .-> H

  classDef ws fill:#41273B,color:#FFFFFF
  classDef srv fill:#4298B5,color:#FFFFFF
  classDef data fill:#D91E4D,color:#FFFFFF
  classDef ext fill:#948794,color:#FFFFFF
  class A,B,D,E,F,G ws
  class H,I,J,K,L,M srv
  class N,O data
```

Legend: `#41273B` Workspace layer · `#4298B5` Serverless layer · `#D91E4D` Data/register ·
`#948794` External system.

## The nine domains and their free tool mapping

| # | Domain | Now (Google-native) | Scale to (free serverless / relational) |
|---|---|---|---|
| 1 | Program operations | Sheets registers + Forms | Grist-style relational (serverless) |
| 2 | Program development | Docs + Sites + Gemini AI Studio | GitHub org per program |
| 3 | Realtime monitoring | Forms/Kobo → staging → aggregate → Looker (pipeline built in Phase 2) | Supabase/Firebase realtime |
| 4 | Staff management | Directory + Groups + Sheets register (built in Phase 2) | Serverless HR module |
| 5 | Grant management (full lifecycle) | Grant workbook (Pipeline/Budget/Deliverables/Compliance/Donor Reports) + Apps Script + Looker — replaces Monday.com | Relational grant DB |
| 6 | Reporting | Report calendar + scheduled assembler (built in Phase 2) + Looker | Scheduled Workers / Actions |
| 7 | Collaboration | Chat Spaces + Drive + Meet | — |
| 8 | Team management | Groups + Shared Drives + Spaces | — |
| 9 | Warehouse / inventory | Stock cards: item master + movements + low-stock/expiry alerts (built in Phase 2) | Relational inventory on serverless |

## Data-flow spine (tally → aggregate → report)

```mermaid
flowchart LR
  P[Paper tally / register] --> K[KoboToolbox or Forms]
  K --> R[Sheets register]
  R --> S[Looker Studio dashboard]
  S --> N[(DHIS2 / EWARS)]
  S --> Rep[Report pack]

  classDef p fill:#D0C4C5,color:#2D2926
  classDef d fill:#D91E4D,color:#FFFFFF
  classDef a fill:#615E9B,color:#FFFFFF
  class P p
  class K,R,N d
  class S,Rep a
```

Legend: `#D0C4C5` Source / input · `#D91E4D` Data / register · `#615E9B` Output / deliverable.

## Scalability swap-points

| Today | Symptom it scales past | Swap to |
|---|---|---|
| Sheets register | concurrent writers / locked cells / 10M-cell limits | Supabase Postgres (free 500 MB) |
| Apps Script cron | 6 min runtime / 100k fetches per day | GitHub Actions (2,000 min/mo private) |
| Forms polling | need offline + validation | KoboToolbox (25k sub/mo free) |
| Manual report assembly | recurring every month | workflow in Sheets + Looker + Docs |
| Monday.com CPMS | — (paid, replaced) | Phase 1 grant workbook: Pipeline/Budget/Deliverables/Compliance/Donor Reports |
| ActivityInfo 4W | — (paid, being replaced) | Sheets + Forms + Looker 4W matrix |

## Rollout phases

- Phase 0 — Resource Hub foundation (this repo + public Pages site). STATUS: complete (v0.1.0).
- Phase 1 — Grant management, full lifecycle (template + scripts + migration manifest designed;
  operator builds/deploys the workbook). STATUS: design complete, deployment pending.
- Phase 2 — Operations domains (staff, warehouse, monitoring, reporting templates designed;
  operator builds the workbooks). STATUS: in progress.
- Phase 3 — ZarishSphere FHIR R5 HIS (design: blueprint + resource map + camp terminology done;
  ingestion bridge + profiles next). STATUS: in progress.

See `docs/rollout-plan.md` for the live progress tracker and
`models/zarishsphere-blueprint.md` for the HIS architecture.

---

_This document: CC BY 4.0. Community Partners International (CPI). Visit www.cpintl.org._