---
doc: CPI-BGD Resource Hub — template library index
name: templates-index
description: >-
  Master index of every reusable CPI-BGD template: brand masters (document, report,
  presentation, social, email, field tools), register/form field shapes from the digitization
  skills, and the naming rules that turn a master into a filled deliverable.
metadata:
  status: ratified
  version: 1.0.0
  convention: skills/cpi-bgd-branding/SKILL.md section "File naming"
---

# Template library

## Naming rule (from the brand system)

`CPI-BGD-{ProgramCode}-{DocumentType}-{YYYYMM}-v{Version}.{ext}`

Program codes: HOP, HPP, HCV, CVD, HSS, WASH, HP, EDU, LIV, EM, ADMIN, ME, ZARISH.
Document types: MonthlyReport, QReport, AnnualReport, SitRep, SOP, TrainingManual,
ConceptNote, MeetingMinutes, Presentation, FieldReport.

## Master templates

The six brand masters live in the branding skill (single source of truth — do not duplicate):

| Master | Canonical file | Best for |
|---|---|---|
| Document | `skills/cpi-bgd-branding/templates/document.md` | Word/PDF/Google Docs |
| Report | `skills/cpi-bgd-branding/templates/report.md` | Monthly/quarterly/annual + SitRep |
| Presentation | `skills/cpi-bgd-branding/templates/presentation.md` | PowerPoint/Google Slides (1920×1080) |
| Social media | `skills/cpi-bgd-branding/templates/social-media.md` | Posts + email newsletters |
| Email signature | `skills/cpi-bgd-branding/templates/email-signature.md` | CPI signature |
| Field tools | `skills/cpi-bgd-branding/templates/field-tools.md` | KoboToolbox, CHW tools |

## Register and form field shapes (from digitization skills)

| Shape | Canonical file | Confidence |
|---|---|---|
| HF-418 toolkit registry (SL-1..58) | `skills/hp-template-digitization/references/hf418-sl-registry.md` | High |
| HOP register column sets | `skills/hop-community-digitization/references/hop-registers.md` | High |
| Surveillance line-list core columns | `skills/line-list-standardization/SKILL.md` | High |
| NCD longitudinal schema | `skills/ncd-register-schema/SKILL.md` | High |
| DHIS2 tally report forms | `skills/dhis2-tally-mapping/references/hp-report-forms.md` | High |

## Every filled template must include

1. CPI brand elements per master (logo, palette, header/footer rules).
2. A `Glossary of terms and abbreviations` section (drawn from `resource-hub/references/glossary.md`).
3. A color-coded legend on any diagram (per `resource-hub/models/diagram-color-semantics.md`).
4. No fabricated codes and no patient-identifiable content on any published copy.

## Exemplar

- `reports/CPI-BGD-ADMIN-MonthlyReport-YYYYMM-v1.0.md` — a fill-in monthly report skeleton
  demonstrating every rule above.

---

_This document: CC BY 4.0. Community Partners International (CPI). Visit www.cpintl.org._