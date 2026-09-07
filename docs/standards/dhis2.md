---
doc: CPI-BGD adapted standards — DHIS2 mapping index
name: dhis2-index
description: >-
  Index of DHIS2 mapping assets for CPI-BGD: tally-sheet → data-element mappings for HF-418,
  the daily morbidity dictionary with EWARS dual reporting, the HP report-form library, and the
  4W matrix data path. Aggregate reporting domain only — patient-level registers are FHIR.
metadata:
  status: ratified
  version: 1.0.0
  canon: skills/dhis2-tally-mapping/SKILL.md
---

# Adapted DHIS2 index

## Scope

This is the **aggregate** reporting domain: paper tally → DHIS2 data elements → EWARS/IDSR.
Patient-level registers belong to FHIR mapping (`standards/fhir/README.md`).

## Mapping assets

| Asset | Content | Canonical file | Confidence |
|---|---|---|---|
| Morbidity dictionary | DHIS2 daily morbidity data elements at HF-418, with `***` EWARS flags | `skills/hp-template-digitization/references/dhis2-hf418-morbidity-dictionary.md` | High (from printed SL-1/SL-2/3/4) |
| Tally sheet mapping | SL-1..4, SL-35, SL-50 → data elements + EWARS dual report | `skills/dhis2-tally-mapping/SKILL.md` | High |
| HP report-form library | Daily/monthly summaries, triage, NCD daily, EPI, PMTCT, 4W anchor | `skills/dhis2-tally-mapping/references/hp-report-forms.md` | High (from master workbook) |
| Age-sex schemes | acute 0-4/5+ vs SRH adolescent/20+ | `skills/dhis2-tally-mapping/SKILL.md` §age-sex | High |

## EWARS dual-reporting rule

Rows flagged `***` on the tally sheet must be mirrored to EWARS in addition to DHIS2. The
morbidity dictionary records the flag per data element — never drop it during digitization.

## Gaps to close (planned)

- A validated `data-element-registry.yml` keyed by DHIS2 UID for the CPI-YPSA facility
  (data-element identifiers are provider-issued; capture, don't invent).

---

_This document: CC BY 4.0. Community Partners International (CPI). Visit www.cpintl.org._