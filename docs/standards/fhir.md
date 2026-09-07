---
doc: CPI-BGD adapted standards — FHIR mapping index
name: fhir-index
description: >-
  Index of every CPI-BGD FHIR mapping asset: where each paper template family maps to FHIR R5
  resources, the canonical reference file, and its confidence stamp. Adaptation policy: map what
  exists in _raw, never invent LOINC/SNOMED/ICD codes, record confidence per mapping.
metadata:
  status: ratified
  version: 1.0.0
  canon: skills/fhir-hl7-reference, skills/hp-template-digitization
---

# Adapted FHIR mapping index

## Local constraint (read first)

The dev machine cannot run HAPI FHIR (Java/RAM). Any FHIR server work targets **Go-native FHIR
libraries** (R5). Do not propose HAPI, even "for testing."

## Mapping assets

| Template family | FHIR R5 resources | Canonical mapping | Confidence |
|---|---|---|---|
| Health Post registers (OPD, ANC/PNC, lab, NCD) | Patient, Encounter, Observation, Condition | `skills/hp-template-digitization/SKILL.md` §mapping table | High (per-field, from `_raw` masters) |
| HF-418 toolkit SL-1..58 | varies per form | `skills/hp-template-digitization/references/hf418-sl-registry.md` | High (structure), Medium (semantic per form) |
| HOP community registers (CIV/CHV/SRHV) | Patient, Observation, QuestionnaireResponse | `skills/hop-community-digitization/references/hop-registers.md` | High (column sets), Medium (semantics) |
| NCD longitudinal books (SL-11, SL-53, SL-55) | Patient, Encounter, MedicationStatement, CarePlan | `skills/ncd-register-schema/SKILL.md` | High (schema), Medium (vocabulary) |
| Surveillance line lists (AWD/AJS/Flu/Measles/Diphtheria) | Observation/Condition + EWARS case class | `skills/line-list-standardization/SKILL.md` | High (core columns) |

## Rules

1. Every mapping row records a **confidence stamp** (High/Medium/Low) and a **source** instead of
   a bare claim.
2. Never fabricate a LOINC/SNOMED/ICD code — leave the code-system cell empty and flag it.
3. Free models never see identifiable case data; FHIR mapping happens on template *shape*, in
   files, not pasted line-list excerpts.

## Gaps to close (planned)

- FHIR profiles (structure definitions) for CPI-BGD registers — **Phase 3, in progress**:
  start from `models/zarishsphere-blueprint.md` + `his-resource-map.md`; check
  `registry.fhir.org` before authoring custom profiles.
- Terminology bindings (ValueSets) for camp-specific concepts (FCN, ProGres ID, sub-block) —
  **Phase 3, in progress**: see `camp-terminology.md` (local code systems under
  `https://zs.cpi-bgd.org/codesystem/`; no invented LOINC/SNOMED/ICD codes).

---

_This document: CC BY 4.0. Community Partners International (CPI). Visit www.cpintl.org._