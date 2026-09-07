---
doc: CPI-BGD canonical FHIR R5 artifacts — generated JSON
name: fhir-canonical
description: >-
  Machine-readable FHIR R5 CodeSystem, ValueSet, and StructureDefinition definitions for the
  CPI-BGD terminology and profile layer. Generated deterministically by
  scripts/gen_fhir_canonical.py from the verified markdown sources; regenerate after source
  edits, never hand-edit the JSON.
metadata:
  status: draft
  version: 1.0.0
  generator: scripts/gen_fhir_canonical.py
  sources:
    camp_terminology: resource-hub/standards/fhir/camp-terminology.md
    diagnosis_dictionary: resource-hub/standards/fhir/hf418-diagnosis-dictionary.md
    resource_map: resource-hub/standards/fhir/his-resource-map.md
  verified: resources/verified-resource-index.md §20–21
---

# CPI-BGD canonical FHIR R5 artifacts

## What this is

FHIR R5 JSON definitions for the CPI-BGD terminology and profile layer:

| Folder | Resource types | Count |
|---|---|---|
| `codesystem/` | CodeSystem | 5 |
| `valueset/` | ValueSet | 7 |
| `structuredefinition/` | StructureDefinition (differential profiles) | 5 |

These are the machine form of the human-readable hub definitions. The markdown remains the
single source of truth; the JSON is serialized from it so the future ZarishSphere ingestion
bridge (Phase 3.6, `ingestion-bridge.md`) and any FHIR server can consume canonical artifacts
without re-parsing tables.

## Generation

```
python3 scripts/gen_fhir_canonical.py            # write all artifacts
python3 scripts/gen_fhir_canonical.py --check    # CI/idempotence check
```

- Deterministic output (stable key order, fixed date) — rerunning after a source edit rewrites
  cleanly, and `--check` fails if the checked-in JSON drifts from the generator.
- **Never hand-edit JSON here.** Edit the markdown sources, then regenerate.

## Provenance rules (enforced)

1. Every local `CodeSystem` uses the `https://zs.cpi-bgd.org/codesystem/...` namespace
   (`camp-terminology.md`).
2. ValueSets/profiles use `https://zs.cpi-bgd.org/fhir/ValueSet|StructureDefinition/...`.
3. Published systems bind via their verified URIs only: ICD-11 MMS
   (`http://id.who.int/icd/release/11/mms`), LOINC (`http://loinc.org`), v2-0203
   (`http://terminology.hl7.org/CodeSystem/v2-0203`), and the published FHIR identifier-type
   ValueSet — all verified in `resources/verified-resource-index.md` (§14–16, §21).
4. No code is invented: every code emitted is present verbatim in the source tables.
5. `zc-camp-block` ships `content: not-present` on purpose — the sub-block master lives in the
   `cpi-bgd-mission-context` skill, never duplicated here.

## Boundary notes

- `Observation.interpretation` is bound to the EWARS case class (`cpi-bgd-ewars-class`);
  symptoms (e.g., ME10.1 jaundice) bind to `Observation`, not `Condition` (dictionary rule 3).
- Profiles are differential and minimal (Phase 3.8); they constrain the core paths the bridge
  emits. Full national-exchange alignment (BD-Core R4) stays a bridge task, not a profile change.
- Open items tracked in `camp-terminology.md` (EWARS label confirmation; ICD-11 severity
  post-coordination) — these land here only after the markdown is updated.

---

_This document: CC BY 4.0. Community Partners International (CPI). Visit www.cpintl.org._