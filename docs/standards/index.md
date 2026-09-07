---
doc: CPI-BGD Resource Hub — adapted standards policy
name: standards-index
description: >-
  How the hub adapts external standards (FHIR, HL7, WHO, DH2). Adaptation means mapping real
  CPI-BGD material to the standard with a source and a confidence stamp — never inventing codes.
metadata:
  status: ratified
  version: 1.0.0
---

# Adapted standards

The hub does **not** copy standards wholesale. It adapts: real CPI-BGD material (the HF-418
toolkit, HOP registers, line lists, tallies) is mapped to each standard with a **source** and a
**confidence stamp** (High/Medium/Low per row).

| Standard | What the hub keeps | Rule |
|---|---|---|
| FHIR (R5) | resource mappings per template family | Zip: never fabricate LOINC/SNOMED/ICD codes — leave cell empty + flag |
| HL7 | only what a real partner needs | Build nothing speculative; FHIR is the house exchange |
| WHO | indicator definitions + tools tiers | Cite the real definition + verification date |
| DHIS2 | tally → data element (+ EWARS `***`) | Capture provider UIDs, never invent them |

Every new row added here must be traced to a file in `skills/` or `resources/
verified-resource-index.md`, or it does not enter the hub.

---

_This document: CC BY 4.0. Community Partners International (CPI). Visit www.cpintl.org._