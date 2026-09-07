---
doc: CPI-BGD master glossary of terms and abbreviations
name: glossary
description: >-
  Canonical table of terms and abbreviations used across the Resource Hub, skills, templates,
  and documents. New terms are added here before first use anywhere. Every document ends with
  its own Glossary section, drawing definitions from this master list.
metadata:
  status: draft
  version: 0.1.0
  source: CPI-BGD program material, cpi-bgd-branding assets/abbreviations.md, WHO/HL7/FHIR specs
---

# Glossary of terms and abbreviations

Add new terms/acronyms to this table before using them in any document. Every document ends
with its own Glossary section; on lightweight hub pages (like the intranet snippet or a page
that only links to the master glossary), a link to this master list satisfies the convention.
Keep definitions plain-language (accessibility #5 of the brand tone of voice).

## Organizations and roles

| Term | Full form | Definition |
|---|---|---|
| CPI | Community Partners International | 501(c)(3) INGO; empowers vulnerable communities in Asia. Never "the CPI". |
| YPSA | Young Power in Social Action | CPI's implementing partner in Cox's Bazar for the decentralized HCV/CVD/NCD care model. |
| UNHCR | United Nations High Commissioner for Refugees | Lead refugee-response agency for the Rohingya response in Cox's Bazar. |
| MEAL | Monitoring, Evaluation, Accountability, and Learning | Cross-cutting wing of the project office that verifies indicators and reporting. |
| M&E | Monitoring and Evaluation | Routine measurement of program performance against indicators. |
| CHW | Community Health Worker | Trained community-level health provider. |
| CIV | Community Information Volunteer | HOP volunteer who collects household-level health data. |
| CHV | Community Health Volunteer | HOP volunteer providing household health outreach. |
| SRHV | Sexual and Reproductive Health Volunteer | HOP volunteer for SRH outreach. |
| TL | Team Leader | Leads a team of community volunteers in the HOP model. |
| Focal/PO | Focal person / Project Officer | Supervisor role in the CHV-to-TL-to-Focal reporting cascade. |

## Programs, sites, and data objects

| Term | Full form | Definition |
|---|---|---|
| HOP | Health Outreach Program | CPI-BGD community-level health outreach program (CIV/CHV/SRHV toolkit). |
| HPP / HP | Health Post Program / Health Post | Facility-level program at HF-418; also shorthand for the health post itself. |
| HSS | Health System Strengthening | Program improving facility/community health systems. |
| HF-418 | Health Facility 418 | Facility UID of the CPI-YPSA health post in Camp 1W, Cox's Bazar. |
| FCN | Family Counting Number | Community-level household identification number used in the Rohingya response. |
| ProGres ID | UNHCR ProGres case ID | Registered refugee individual/case identifier in UNHCR's ProGres system. |
| CRF | Case Report Form | Structured form for recording a specific condition (e.g., HEP-C CRF, SL-53). |
| SOP | Standard Operating Procedure | Approved step-by-step procedure document. |
| SL-1..58 | Service List 1..58 | Numbered paper toolkit/register identifiers from the HF-418 SL registry. |

## Clinical and surveillance terms

| Term | Full form | Definition |
|---|---|---|
| HCV | Hepatitis C virus | Blood-borne virus; CPI-YPSA runs a decentralized HCV care model. |
| CVD | Cardiovascular disease | Chronic disease group; part of the NCD program. |
| NCD | Non-communicable disease | Chronic diseases (CVD, diabetes, etc.) requiring longitudinal care. |
| WHO PEN | WHO Package of Essential NCD interventions | WHO-recommended approach for low-resource NCD care. |
| AWD | Acute Watery Diarrhoea | EWARS-notifiable acute condition; HF-418 line list SL-22. |
| AJS | Acute Jaundice Syndrome | EWARS-notifiable acute condition; HF-418 line list SL-21. |
| ANC / PNC | Antenatal / Postnatal care | Pregnancy care before and after delivery. |
| FP | Family Planning | Contraception and reproductive health services. |
| EPI | Expanded Programme on Immunization | Routine immunization program; EPI registers in HOP toolkit. |
| EWARS | Early Warning, Alert and Response System | WHO/Health Sector epidemic surveillance system for refugee camps. |
| IDSR | Integrated Disease Surveillance and Response | National surveillance framework that EWARS feeds. |
| R5 (FHIR R5) | FHIR Release 5 | Latest FHIR standard release used by the planned ZarishSphere HIS. |

## Standards and technical systems

| Term | Full form | Definition |
|---|---|---|
| FHIR | Fast Healthcare Interoperability Resources | HL7 standard for exchanging healthcare data as resources. |
| HL7 | Health Level Seven | Standards organization and family of health data standards. |
| LOINC | Logical Observation Identifiers Names and Codes | Code system for lab/clinical observations. |
| SNOMED CT | Systematized Nomenclature of Medicine — Clinical Terms | Clinical terminology code system. |
| ICD-11 | International Classification of Diseases, 11th Revision | WHO diagnostic classification. |
| WHO GHO | WHO Global Health Observatory | WHO data repository; source of indicator definitions. |
| STEPS | WHO STEPwise approach to NCD risk factor surveillance | WHO survey methodology for NCD risk factors. |
| DHIS2 | District Health Information Software 2 | Open-source aggregate health information system. |
| 4W | Who does What, Where, When | Inter-agency activity reporting matrix. |
| HIS | Health Information System | Overall system capturing, storing, and reporting health data. |
| MCP | Model Context Protocol | Protocol for giving AI agents context/tools. |
| OpenAPI | Open API Initiative spec | Machine-readable API description format. |
| JSON / YAML / CSV | JavaScript Object Notation / YAML Aint Markup Language / Comma-Separated Values | Structured data formats used for document-as-code. |
| ZUSS | ZarishSphere Universal Serialization Standard | CPI-BGD house convention for naming/formatting files and headers. |

## Diagramming and document-as-code

| Term | Full form | Definition |
|---|---|---|
| Mermaid | — | Text-based diagram language; default for workflows; renders on GitHub. |
| PlantUML | — | Text-based UML diagram language (sequence, class, use-case). |
| Graphviz | — | Text-based graph layout engine (.dot/.gv). |
| Draw.io | — (diagrams.net) | Free diagram editor; `.drawio` XML files editable by staff. |
| C4 model | — | 4-level system/container/component/code diagramming model. |
| BPMN 2.0 | Business Process Model and Notation 2.0 | Formal process notation (OMG); used only for external hands-off. |
| Kroki | — | Free diagram-rendering web service (PlantUML/Graphviz/d2 etc.). |
| MkDocs | — | Python static docs generator; Material theme renders the public library. |
| WCAG 2.1 | Web Content Accessibility Guidelines 2.1 | Accessibility standard; color must never be the only signal. |
| diagram-as-code | — | Authoring diagrams as text (Mermaid/PlantUML/Graphviz) so they are versioned and diffable. |
| document-as-code | — | Authoring documents as Markdown/JSON/CSV so they are versioned, validated, and reusable. |

## Licensing and legal

| Term | Full form | Definition |
|---|---|---|
| CC BY 4.0 | Creative Commons Attribution 4.0 International | Open license for docs; requires attribution. |
| Apache 2.0 | Apache License, Version 2.0 | Permissive open-source license for code/config. |
| GDPR | General Data Protection Regulation | EU data-protection regulation applicable to any EU-person data the platform holds; verify scope against `resources/verified-resource-index.md` before relying on it. |
| HIPAA | Health Insurance Portability and Accountability Act | US health-data privacy rule listed in the HIS design scope; obligations depend on the covered-entity relationship — verify before asserting applicability. |

---

_This document: CC BY 4.0. Community Partners International (CPI). Visit www.cpintl.org._