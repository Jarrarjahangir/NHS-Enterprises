export const servicesData = [
  {
    id: "accounting",
    slug: "accounting",
    title: "Accounting",
    shortTitle: "Accounting",
    tagline: "Accurate. Compliant. Reliable.",
    shortDesc: "Accurate, compliant and reliable accounting support tailored to UAE business requirements.",
    heroImage: "/images/service-accounting.webp",
    overview: "Financial precision is the bedrock of strategic clarity. At NHS Enterprises, our accounting practice combines rigorous adherence to International Financial Reporting Standards (IFRS) with deep operational understanding of UAE commercial regulations. We transform transactional ledger entries into actionable executive visibility.",
    challenge: "Many UAE enterprises struggle with fragmented recordkeeping, changing statutory compliance requirements, and year-end reconciliation delays that obscure true profitability.",
    solution: "We provide dedicated senior accounting specialists who manage your general ledger, accounts payable/receivable, fixed asset registers, and periodic closes with institutional discipline.",
    capabilities: [
      "Full-cycle statutory financial accounting under IFRS",
      "Month-end and year-end close management",
      "Fixed asset accounting and depreciation schedules",
      "Revenue recognition compliance (IFRS 15)",
      "Accounts receivable and payable reconciliation",
      "Management accounts and variance reporting"
    ],
    benefits: [
      { title: "Statutory Precision", desc: "Audit-ready financial statements that satisfy UAE regulatory authorities and financial institutions." },
      { title: "Operational Continuity", desc: "Eliminate key-person risk with an institutional team managing your accounting cycle." },
      { title: "Executive Decision Support", desc: "Clear monthly management reporting showing gross margins, working capital, and cash runway." },
      { title: "Cost Optimization", desc: "Enterprise-grade financial controllership at a fraction of full-time in-house executive costs." }
    ],
    process: [
      { step: "01", name: "Ledger Diagnostic", desc: "Comprehensive review of chart of accounts, existing entries, and historical reconciliations." },
      { step: "02", name: "Framework Standardization", desc: "Establishing standardized accounting policies, closing checklists, and document workflows." },
      { step: "03", name: "Monthly Execution", desc: "Systematic transaction recording, bank reconciliations, and draft monthly management accounts." },
      { step: "04", name: "Review & Advisory", desc: "Executive review session detailing performance highlights, cost variances, and working capital status." }
    ],
    faqs: [
      { q: "What accounting standards do you apply for UAE businesses?", a: "We prepare all financial statements in strict accordance with International Financial Reporting Standards (IFRS) and IFRS for SMEs, ensuring complete alignment with UAE Federal Law No. 32 of 2021 on Commercial Companies." },
      { q: "Can NHS work with our existing accounting software?", a: "Yes. We work seamlessly across major cloud platforms including Zoho Books, Xero, QuickBooks Online, SAP Business One, Oracle NetSuite, and Microsoft Dynamics 365." },
      { q: "How frequently do we receive management accounts?", a: "Standard engagements provide complete month-end management packages within 7 to 10 business days following the close of each calendar month." },
      { q: "Does your accounting service include UAE Corporate Tax preparation?", a: "While accounting forms the underlying financial foundation, our dedicated Tax Practice integrates directly with our accounting team to calculate tax provisions and prepare Corporate Tax returns." },
      { q: "How does onboarding work?", a: "Onboarding typically spans 2 weeks, during which we audit historical accounts, clean up chart of accounts, establish document capture protocols, and agree on reporting templates." }
    ]
  },
  {
    id: "bookkeeping",
    slug: "bookkeeping",
    title: "Bookkeeping",
    shortTitle: "Bookkeeping",
    tagline: "Clear and organized financial records that keep your business on track.",
    shortDesc: "Clear, systematic and organized financial records that keep your business on track every single day.",
    heroImage: "/images/service-bookkeeping.webp",
    overview: "Every strategic financial decision depends on the accuracy of daily transaction records. NHS delivers structured, cloud-integrated bookkeeping that captures receipts, sales, supplier invoices, and banking transactions with zero friction.",
    challenge: "Missing tax invoices, unrecorded petty cash expenses, and disorganized documentation lead to VAT audit penalties and inaccurate financial insight.",
    solution: "We implement disciplined daily and weekly bookkeeping routines utilizing secure digital receipt capture and multi-currency bank feed reconciliations.",
    capabilities: [
      "Daily and weekly transaction categorisation and recording",
      "Bank, credit card, and payment gateway reconciliations (Stripe, Tabby, etc.)",
      "Supplier bill verification, matching, and aging schedules",
      "Customer invoicing, credit control, and receivables tracking",
      "Petty cash management and digital expense voucher tracking",
      "FTA-compliant tax invoice archiving"
    ],
    benefits: [
      { title: "Total Document Audit-Trail", desc: "Never lose a VAT invoice or receipt required by UAE Federal Tax Authority (FTA) auditors." },
      { title: "Real-Time Bank Balances", desc: "Always know your exact available cash across AED, USD, EUR, and multi-currency accounts." },
      { title: "No Backlog Stress", desc: "Transactions recorded weekly so month-end closes happen smoothly without firefighting." },
      { title: "Seamless Tax Preparation", desc: "Clean bookkeeping directly feeds VAT and Corporate Tax returns with minimal friction." }
    ],
    process: [
      { step: "01", name: "Workflow Setup", desc: "Connecting bank feeds, payment gateways, and establishing a secure digital inbox for invoices." },
      { step: "02", name: "Transaction Capture", desc: "Systematic weekly categorization of all revenues, vendor disbursements, and bank fees." },
      { step: "03", name: "Reconciliation", desc: "Balancing all bank ledgers, merchant accounts, and credit facilities against official statements." },
      { step: "04", name: "Ledger Handover", desc: "Delivering reconciled trial balance reports ready for management review and tax filings." }
    ],
    faqs: [
      { q: "What is the difference between bookkeeping and accounting at NHS?", a: "Bookkeeping focuses on the accurate, day-to-day recording and reconciliation of transactional source documents. Accounting interprets those records, ensures IFRS compliance, calculates provisions, and produces strategic executive statements." },
      { q: "Do we need to physically send paper invoices to your office?", a: "No. We utilize secure cloud document capture platforms. Your team simply snaps photos or forwards digital PDFs, and our team processes them into the ledger." },
      { q: "Can you reconcile multi-currency transactions and FX differences?", a: "Yes, our team manages multi-currency ledgers, unrealized/realized foreign exchange gain/loss calculations, and freezone offshore bank facilities regularly." }
    ]
  },
  {
    id: "tax",
    slug: "tax",
    title: "Tax Consultancy & Compliance",
    shortTitle: "Tax",
    tagline: "Navigate UAE tax with confidence.",
    shortDesc: "Practical UAE tax support focused on compliance, Corporate Tax readiness, and informed decision-making.",
    heroImage: "/images/service-tax.webp",
    overview: "The UAE tax landscape has undergone historic transformation with Federal Decree-Law No. 47 of 2022 on Corporate Tax and established VAT mandates. NHS provides senior tax advisory that protects compliance while identifying legitimate tax efficiencies.",
    challenge: "Complex Qualifying Free Zone Person (QFZP) rules, corporate restructuring implications, transfer pricing regulations, and strict FTA penalties create significant executive exposure.",
    solution: "We provide end-to-end UAE Corporate Tax and VAT advisory, from tax registration and group restructuring to taxable income adjustments and annual tax return filings.",
    capabilities: [
      "UAE Corporate Tax registration, impact assessment, and annual return filings",
      "Qualifying Free Zone Person (QFZP) eligibility and substance analysis",
      "Value Added Tax (VAT) quarterly returns and FTA voluntary disclosures",
      "Transfer pricing documentation (Local file & Master file compliance)",
      "Cross-border withholding tax and Double Taxation Treaty (DTT) advisory",
      "Assistance during Federal Tax Authority (FTA) tax audits and assessments"
    ],
    benefits: [
      { title: "Risk Mitigation", desc: "Avoid severe administrative penalties for delayed registrations, incorrect returns, or deficient records." },
      { title: "Free Zone Optimization", desc: "Rigorous verification of Qualifying Income conditions to maintain 0% tax treatment where legally eligible." },
      { title: "Transfer Pricing Safety", desc: "Ensure all related-party transactions withstand arm's-length scrutiny under Ministerial decisions." },
      { title: "Strategic Structuring", desc: "Corporate restructuring advice that aligns holding entities, operating companies, and intellectual property." }
    ],
    process: [
      { step: "01", name: "Tax Exposure Assessment", desc: "Evaluating corporate legal structures, freezone status, revenue streams, and inter-company contracts." },
      { step: "02", name: "Taxable Income Adjustment", desc: "Applying tax adjustments to accounting net profit including non-deductible interest and exempt income." },
      { step: "03", name: "Filing Preparation", desc: "Drafting corporate tax and VAT returns accompanied by working papers and documentation folders." },
      { step: "04", name: "FTA Submission & Support", desc: "Submitting filings via the EmaraTax portal and addressing any clarification requests from tax auditors." }
    ],
    faqs: [
      { q: "Who is subject to UAE Corporate Tax?", a: "All UAE companies, foreign entities with a permanent establishment in the UAE, and individuals conducting commercial business in the UAE earning taxable net profit exceeding AED 375,000 are subject to 9% Corporate Tax." },
      { q: "Are free zone companies automatically exempt from 9% Corporate Tax?", a: "No. Free zone entities must meet strict Qualifying Free Zone Person (QFZP) criteria, including maintaining adequate substance in the UAE, deriving Qualifying Income, not electing standard taxation, and complying with transfer pricing rules." },
      { q: "What transfer pricing requirements exist in the UAE?", a: "Transactions between related parties and connected persons must adhere to the arm's-length principle. Entities meeting specific turnover thresholds must also maintain Local and Master Files." }
    ]
  },
  {
    id: "audit",
    slug: "audit",
    title: "Audit & Assurance",
    shortTitle: "Audit",
    tagline: "Independent. Insightful. Trusted.",
    shortDesc: "Independent, rigorous and insightful audit services delivering transparency to stakeholders and lenders.",
    heroImage: "/images/service-audit.webp",
    overview: "An audit should be more than an exercise in statutory box-checking. At NHS Enterprises, our audit and assurance methodology delivers thorough scrutiny of internal controls, risk management, and financial reporting integrity.",
    challenge: "Freezone authority renewal deadlines, bank credit covenants, and investor governance requirements demand credible, verified financial statements without operational disruption.",
    solution: "We provide risk-based audit procedures that identify control weaknesses, evaluate fraud risks, and provide unqualified audit opinions that instill total confidence in third parties.",
    capabilities: [
      "Statutory annual financial audits required by UAE Free Zones and Mainland authorities",
      "Internal audit and internal control review (COSO framework)",
      "Special purpose audits, liquidation audits, and revenue certification",
      "Escrow account audits for RERA / real estate developers",
      "Financial due diligence assurance for acquisitions and divestitures",
      "Fraud risk assessment and forensic financial investigation"
    ],
    benefits: [
      { title: "Licensing Compliance", desc: "Satisfy annual audit submission requirements for DMCC, DAFZA, JAFZA, DIFC, ADGM, and Mainland DED." },
      { title: "Bank Credit Credibility", desc: "Audit reports accepted by major UAE and regional banking institutions for trade finance facilities." },
      { title: "Internal Control Fortification", desc: "Receive management letters highlighting operational vulnerabilities and practical recommendations." },
      { title: "Investor Assurance", desc: "Provide minority shareholders and venture funds with transparent, verifiable financial metrics." }
    ],
    process: [
      { step: "01", name: "Audit Planning & Risk Assessment", desc: "Understanding the entity's environment, identifying key financial statement risks and materiality thresholds." },
      { step: "02", name: "Interim Testing", desc: "Evaluating internal controls, walk-through tests of revenue/procurement cycles, and substantive sample testing." },
      { step: "03", name: "Substantive Fieldwork", desc: "Third-party bank confirmations, inventory observation, receivables circularisation, and cut-off tests." },
      { step: "04", name: "Reporting & Management Letter", desc: "Issuing formal Independent Auditor's Report alongside actionable recommendations for internal controls." }
    ],
    faqs: [
      { q: "Is an annual audit mandatory for all UAE companies?", a: "Most UAE Free Zone authorities (such as DMCC, JAFZA, DAFZ) legally require submission of audited financial statements for annual trade license renewals. Mainland LLCs with qualifying turnover or bank facilities are also mandated." },
      { q: "How long does a statutory audit engagement take?", a: "A standard SME audit takes 2 to 4 weeks from receipt of complete trial balance and supporting audit schedules." }
    ]
  },
  {
    id: "cfo-services",
    slug: "cfo-services",
    title: "CFO Services",
    shortTitle: "CFO Services",
    tagline: "Strategic financial leadership.",
    shortDesc: "Strategic financial leadership and executive advisory for businesses needing senior-level expertise without full-time overhead.",
    heroImage: "/images/service-cfo.webp",
    overview: "Growing enterprises frequently outgrow standard bookkeeping but do not yet justify an annual C-suite package exceeding AED 800,000. Our Fractional and Outsourced CFO Services bridge this gap, delivering high-level capital strategy, board governance, and financial modeling.",
    challenge: "Founders and CEOs spend excessive time managing cash constraints, pitching banks, and evaluating expansion capital without institutional financial leadership.",
    solution: "Our senior partners act as your embedded Chief Financial Officer, participating in board meetings, restructuring credit facilities, and designing dynamic multi-year forecast models.",
    capabilities: [
      "Fractional / Outsourced Chief Financial Officer engagement",
      "Dynamic 3-statement financial modeling and rolling 13-week cash flow forecasts",
      "Banking relations, working capital facility negotiation, and debt restructuring",
      "Board of Directors reporting packages and investor relations",
      "Pricing strategy, unit economics analysis, and cost restructuring",
      "M&A preparation, valuation analysis, and virtual data room management"
    ],
    benefits: [
      { title: "Executive-Level Stewardship", desc: "Direct guidance from seasoned financial leaders who have steered multinational and high-growth UAE firms." },
      { title: "Cash Flow Longevity", desc: "Identify cash bottlenecks months before they materialize through rolling treasury forecasting." },
      { title: "Enhanced Financing Terms", desc: "Present professional credit dossiers that win favorable interest rates from UAE commercial banks." },
      { title: "Scalable Cost Model", desc: "Access 15–40 hours per month of elite CFO leadership tailored exactly to your growth phase." }
    ],
    process: [
      { step: "01", name: "Financial Health Diagnostic", desc: "Comprehensive review of balance sheet strength, margin trends, debt obligations, and cash cycles." },
      { step: "02", name: "Strategic Roadmap", desc: "Designing financial KPIs, budgeting milestones, capital structure goals, and weekly treasury dashboards." },
      { step: "03", name: "Operational Integration", desc: "Leading monthly finance reviews, negotiating with bank lenders, and guiding departmental managers." },
      { step: "04", name: "Board & Growth Advisory", desc: "Direct participation in board meetings, investor pitches, and ongoing strategic expansion decisions." }
    ],
    faqs: [
      { q: "How many hours per week does an outsourced CFO dedicate to our company?", a: "Engagements are tailored to your requirements, typically ranging from 1 to 2 days per week or on a monthly retained strategic advisory cadence." },
      { q: "Will the CFO represent our business in discussions with UAE banks?", a: "Yes. Our CFOs regularly prepare credit proposals, meet bank relationship managers, and negotiate collateral terms and covenants on behalf of clients." }
    ]
  },
  {
    id: "financial-advisory",
    slug: "financial-advisory",
    title: "Financial Advisory",
    shortTitle: "Financial Advisory",
    tagline: "Turn insight into opportunity.",
    shortDesc: "Turn financial information into better business decisions with transaction advisory, valuations, and restructuring support.",
    heroImage: "/images/service-advisory.webp",
    overview: "When capital transactions, shareholder transitions, or market expansions arise, standard reporting is insufficient. NHS Enterprises provides sophisticated corporate finance guidance that unlocks value and manages downside risk.",
    challenge: "Uncertain asset valuations, hidden balance sheet liabilities during acquisitions, and inefficient capital allocation can jeopardize years of enterprise value creation.",
    solution: "We deliver objective financial valuations, buy-side and sell-side financial due diligence, feasibility studies, and business plan modeling built for regional and international investors.",
    capabilities: [
      "Buy-side and sell-side financial due diligence (Quality of Earnings analysis)",
      "Independent business valuations (DCF, Market Multiples, Net Asset methods)",
      "Feasibility studies and bankable business plans for UAE licensing and financing",
      "Corporate restructuring, debt refinancing, and turnaround advisory",
      "Shareholder agreement financial advisory and dispute support",
      "Joint venture structuring and capital expenditure appraisal"
    ],
    benefits: [
      { title: "Objective Valuation", desc: "Defensible valuation reports prepared for transactions, partner buyouts, or regulatory submissions." },
      { title: "Deal Protection", desc: "Uncover unrecorded liabilities, working capital deficits, and normalization adjustments during M&A." },
      { title: "Bankable Documentation", desc: "Produce rigorous feasibility studies tailored to UAE sovereign funds, banks, and family offices." },
      { title: "Strategic Precision", desc: "Quantify the financial upside and downside scenarios of major capital investment decisions." }
    ],
    process: [
      { step: "01", name: "Mandate Scoping", desc: "Clarifying transaction objectives, stakeholder parameters, and information availability." },
      { step: "02", name: "Data Extraction & Analysis", desc: "In-depth interrogation of historical operational metrics, contracts, and financial trends." },
      { step: "03", name: "Financial Modeling", desc: "Building scenario-based valuation or due diligence models reflecting real-world risks." },
      { step: "04", name: "Advisory Opinion", desc: "Presenting executive conclusions, transaction negotiations counsel, and definitive reports." }
    ],
    faqs: [
      { q: "What valuation methodologies do you employ?", a: "We utilize internationally accepted methodologies including Discounted Cash Flow (DCF), Comparable Company Analysis, Precedent Transactions, and Asset-Based approaches depending on business maturity." },
      { q: "Can you assist with cross-border GCC transactions?", a: "Yes. We advise clients acquiring or establishing operations across the UAE, Saudi Arabia, Oman, Qatar, and broader MENA markets." }
    ]
  }
];
