---
doc: CPI-BGD adapted standards — WHO indicator & tools index
name: who-index
description: >-
  Index of WHO indicator definitions and tools adapted for CPI-BGD: the complete WHO tools
  registry with relevance tiers, the indicator definition bases (GHO/STEPS/ICD-11), and where
  each adaptation lives. Always cite the real WHO definition, never a remembered paraphrase.
metadata:
  status: ratified
  version: 1.0.0
  canon: skills/who-health-indicators/SKILL.md
  verified: https://www.who.int/tools (fetched 2026-09-06)
---

# Adapted WHO index

## Rule

Never assume a remembered WHO fact is current. Check `resources/verified-resource-index.md`
first; if the answer is missing, do a real web check and add a dated row before relying on it.

## What is adapted

| WHO asset | CPI-BGD relevance | Canonical file | Confidence |
|---|---|---|---|
| Complete tools directory (`who.int/tools`) | Core/Selected/Limited/None tiered per tool | `skills/who-health-indicators/references/who-tool-registry.md` | High (fetched live 2026-09-06) |
| GHO indicator definitions | Indicator verification for reports/M&E | `skills/who-health-indicators/SKILL.md` | High (verified on lookup) |
| STEPS NCD risk-factor surveillance | NCD register + WHO PEN care at HF-418 | `skills/ncd-register-schema/SKILL.md`, `companion who-tools-data-adaptation.md` | Medium |
| Facility WHO tools adaptation | HF-418 template family mapping | `skills/hp-template-digitization/references/who-tools-facility-adaptation.md` | High |
| Community WHO tools adaptation | HOP CIV/CHV/SRHV toolkit alignment | `skills/hop-community-digitization/references/who-tools-community-adaptation.md` | High |
| EWARS case definitions | Surveillance line lists (AWD/AJS/Flu/Measles/Diphtheria) | `skills/line-list-standardization/SKILL.md` | High |

## Indicator citation format

`[Indicator name] — WHO GHO [code], defined in [source], verified [date].` Never paraphrase a
definition without a source link and a verification date.

## Gaps to close (planned)

- Indicator library as machine-readable YAML (`indicator-catalog.yml`) harmonized across
  `cpi-bgd-mission-context` and WHO GHO.

---

_This document: CC BY 4.0. Community Partners International (CPI). Visit www.cpintl.org._