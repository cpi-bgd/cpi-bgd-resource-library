---
doc: CPI-BGD adapted standards — HL7 concept index
name: hl7-index
description: >-
  Index of HL7 concepts relevant to CPI-BGD: which HL7 artifacts apply, where they are mapped,
  and current coverage. Honest about the gaps — HL7 v2.x messaging is thinner than FHIR today
  and grows only when a real exchange partner needs it.
metadata:
  status: draft
  version: 0.1.0
  canon: skills/fhir-hl7-reference/SKILL.md
---

# Adapted HL7 concept index

## What actually applies to CPI-BGD

| HL7 artifact | Relevance | Where used | Coverage |
|---|---|---|---|
| v2.x messages (ADT, ORU, VXU) | Low today; only when a real partner system (e.g., DHIS2 sync or lab) requires it | none active | Gap |
| CDA documents | Low — FHIR is the chosen exchange standard | none | Gap |
| HL7 FHIR | High — primary mapping standard | see `standards/fhir/README.md` | High |
| EWARS / IDSR reporting | Medium — the de-facto exchange is DHIS2/EWARS, not HL7 | `standards/dhis2/README.md` | High |

## Policy

1. Adopt HL7 only where a genuine interoperability partner requires it; do not build HL7 v2
   infrastructure speculatively.
2. FHIR (R5) remains the house exchange standard.
3. Any HL7 mapping added must be sourced from the HL7 specification and verification-logged in
   `resources/verified-resource-index.md` before use.

## Gaps to close (planned)

- Document the DHIS2-to-HL7 boundary if the future HIS (ZarishSphere) exposes an HL7/FHIR edge
  for partner labs or UNHCR data systems.

---

_This document: CC BY 4.0. Community Partners International (CPI). Visit www.cpintl.org._