---
doc: CPI-BGD FHIR R5 server spike — Go-native options vs zs-fhir-go spec
name: fhir-server-spike
description: >-
  Verified outcome of the Phase 3.7 server spike: as of 2026-09-08 no production-grade
  Go-native FHIR server exists publicly, so zs-fhir-go is a greenfield build. Records the
  verified Go FHIR model library candidates, the R5/R4 hybrid recommendation, and the
  deployment-shape decision (Raspberry Pi 5 binary for the FHIR engine; Workers for UI only).
metadata:
  status: draft
  version: 1.0.0
  verified: resources/verified-resource-index.md §20 (2026-09-08)
  canon: resource-hub/models/zarishsphere-blueprint.md, skills/fhir-hl7-reference
---

# FHIR R5 server spike — Go-native options vs `zs-fhir-go` spec

## 1. Spike question

ZarishSphere blueprint open item #1: pick the FHIR R5 server engine among Go options and
compare against the `zs-fhir-go` spec (Go-native single binary, chi router, FHIR R5 + R4
bridge, Raspberry Pi 5 capable).

## 2. Verdict (confidence: high — all rows `gh api`-verified 2026-09-08)

**No production-grade Go-native FHIR *server* exists publicly. `zs-fhir-go` is a greenfield
build.** Existing options require either a different runtime (Java/TypeScript/Clojure), 2–3 GB
RAM (excluded on the i3/8GB dev machine), or are learning-grade/unlicensed examples. The
Go-native constraint therefore has no off-the-shelf server to adopt — the build starts from a
**Go FHIR model library**, not from a server scaffold.

## 3. Verified candidate landscape (all checked via GitHub API, 2026-09-08)

### 3.1 Server candidates — none are Go-native production

| Candidate | Runtime | License | Stars | Verdict |
|---|---|---|---|---|
| `medplum/medplum` | TypeScript, FHIR **R4** | Apache-2.0 | 2,657 | Not Go; R5 work paused; self-host needs Node+Postgres+Redis |
| `hapifhir/hapi-fhir-jpaserver-starter` | Java | Apache-2.0 | 542 | Excluded: no-HAPI/RAM constraint (i3/8GB) |
| `samply/blaze` | Clojure/JVM | Apache-2.0 | 228 | Not Go-native (JVM) |
| `savannahghi/hapi-fhir-go` | Go — but **client SDK, not a server** | MIT | 0 | Frequently mislabeled as a server; use as test client only |
| `openclintech/go-fhir-server` | Go | none (no license) | 1 | Learning reference only; not production-grade |

### 3.2 Model library candidates — the real foundation choice

| Library | FHIR versions | License | Stars | Notes |
|---|---|---|---|---|
| `gofhir/models` | **R4 / R4B / R5** | MIT | 2 | Fluent builders, conformant JSON+XML, round-tripped conformance corpus; **pushed 2026-09-07** (actively maintained). **Preferred R5 core.** |
| `samply/golang-fhir-models` | **R4 only** | Apache-2.0 | 109 | Canonical Go FHIR structs + generated required-binding ValueSet enums; push 2024-03. **Preferred R4 bridge.** |
| `d4l-data4life/go-fhir` | R2 / R3 / R4 / R4B / R5 | MIT (per README) | 0 | Converted from `@types/fhir`; R5 present but project older (2025-07); secondary option |

### 3.3 Non-finding recorded honestly

`zarishsphere/fhir` was suggested by a search snippet as a Go FHIR server; `gh api repos/` returned
404 (does not exist). GitHub Search API 404s on this token (no search scope) and web search UI
429s — the negative result is documented in `verified-resource-index.md` §20 so it is never
re-introduced as evidence.

## 4. Recommended build path for `zs-fhir-go`

1. **R5 core** on `gofhir/models` (only actively maintained Go R5 struct set with a conformance corpus).
2. **R4 bridge** on `samply/golang-fhir-models` for legacy interop (its generated required-binding enums map cleanly to CPI-BGD ValueSet design).
3. Keep `savannahghi/hapi-fhir-go` as the **test client** for the R4 bridge acceptance checks.
4. Chi router, single binary, SQLite for offline/field + Postgres for facility scale (per `sql-writing` skill defaults).

## 5. Deployment-shape decision (Phase 3.7 finding)

The blueprint lists Cloudflare Workers + Durable Objects as "first CPI-BGD deploy", but a Workers
runtime cannot run a Go binary natively (needs WASM/TinyGo, with real risk for full FHIR JSON
marshalling and no conformance corpus in that toolchain). Adjusting the shape split:

| Shape | Role | Status |
|---|---|---|
| B. Raspberry Pi 5 (single binary) | **FHIR engine host** (zs-fhir-go) | Adopted for the clinical HIS; matches _raw blueprint, offline-first |
| A. Cloudflare Workers | **UI / Pages layer only** (React MFEs, PWA) | Retained; never hosts the FHIR engine |
| Sheets + Apps Script ingestion bridge (Phase 3.6) | Feeds FHIR Bundles to the engine | Already designed (`standards/fhir/ingestion-bridge.md`) |

## 6. Registry gate before Phase 3.8

Before writing any custom CPI-BGD profile or ValueSet: search **https://registry.fhir.org** for an
existing humanitarian / refugee-camp / NCD / HCV / PEN implementation guide. `fhir.org/guides/registry`
is the browse list (JS-rendered; the full search surface is `registry.fhir.org`). Rule source:
`skills/fhir-hl7-reference`.

## 7. Open ADRs (logged for the ADR series)

- ADR candidate: Go model library split (R5 `gofhir/models` + R4 `samply`) — validated here, to be
  ratified as an ADR.
- ADR candidate: FHIR engine on Pi 5 (Shape B) vs serverless — decision recorded in §5, ratification
  pending.

## Glossary

| Term | Definition |
|---|---|
| Server spike | Time-boxed, evidence-first investigation that validates a build choice before committing (here: the FHIR engine pick). |
| zs-fhir-go | The planned Go-native single-binary FHIR R5 server of the ZarishSphere HIS (blueprint decision #2). |

---

_This document: CC BY 4.0. Community Partners International (CPI). Visit www.cpintl.org._