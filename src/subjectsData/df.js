const dfSubject = {
  id: 'df',
  name: 'Digital Finance',
  shortName: 'Digital Finance',
  icon: 'Landmark',
  accent: 'amber',
  description:
    'FinTech evolution, UPI & digital payments, P2P lending & crowdfunding, blockchain & crypto, and financial cybersecurity & regulations.',
  units: [
    {
      id: 'u1',
      name: 'Unit 1: Introduction to Digital Finance',
      topics:
        'Digital Finance Evolution, Traditional vs Digital Finance, Key Drivers, FinTech Role & Applications, Financial Inclusion, Opportunities & Challenges, Banking Impact, Mobile Banking, Future Trends.',
      questions: [
        {
          id: 'q1',
          question:
            'Define Digital Finance. Discuss its evolution and importance in the modern economy.',
          answer:
            'Digital Finance refers to financial services—banking, payments, lending, insurance, and investing—delivered via digital platforms, mobile apps, APIs, and the internet.\nEvolution: Progressed from ATMs and credit cards (1970s–90s) to internet banking (2000s), mobile wallets and UPI (2010s), and AI/Blockchain-driven FinTech today.\nImportance:\n1. Accelerates Cashless Economy: Reduces cash handling costs and boosts tax transparency.\n2. Financial Inclusion: Reaches unbanked rural populations at low marginal cost.\n3. Speed & Convenience: Enables instant 24×7 transactions.',
        },
        {
          id: 'q2',
          question:
            'Explain the difference between Traditional Finance and Digital Finance.',
          answer:
            '1. Delivery Channel: Traditional finance relies on physical bank branches, cash, and paper forms; Digital finance operates via mobile apps, web portals, and APIs.\n2. Accessibility & Hours: Traditional is constrained by branch locations and banking hours; Digital is available 24×7 anywhere.\n3. Speed & Cost: Traditional involves manual verification and higher operating overhead; Digital automates KYC and settlement instantaneously at lower fees.\n4. Data Usage: Traditional relies on static collateral/history; Digital leverages real-time alternative data and AI.',
        },
        {
          id: 'q3',
          question: 'What are the key drivers of digital finance?',
          answer:
            'Major drivers accelerating digital finance adoption include:\n1. Smartphone & Affordable Internet Penetration: Widespread 4G/5G access enables mobile-first banking.\n2. Digital Public Infrastructure (DPI): Initiatives like Aadhaar (e-KYC), UPI, and DigiLocker in India.\n3. Changing Consumer Expectations: Demand for instant, frictionless, 24×7 services.\n4. Emerging Technologies: Cloud computing, AI/ML credit scoring, Open Banking APIs, and Blockchain.\n5. Regulatory Support: RBI sandboxes and government push toward cashless governance.',
        },
        {
          id: 'q4',
          question:
            'Explain the role of FinTech companies in the financial sector.',
          answer:
            'FinTech (Financial Technology) companies use software, automation, and modern UX to innovate and unbundle traditional financial services.\nKey Roles:\n1. Enhancing Efficiency & UX: Replace lengthy paperwork with instant digital onboarding and one-tap payments.\n2. Reaching Underserved Segments: Offer micro-loans, micro-insurance, and zero-balance accounts to MSMEs and rural users.\n3. Driving Competition & Collaboration: Push legacy banks to modernize while partnering via Banking-as-a-Service (BaaS) and APIs.',
        },
        {
          id: 'q5',
          question:
            'What is Financial Technology (FinTech)? Discuss its various applications.',
          answer:
            'Financial Technology (FinTech) is the integration of technology into financial services to improve delivery, automation, and accessibility.\nMajor Applications:\n1. Digital Payments & Remittances: UPI apps (PhonePe, Google Pay), mobile wallets, cross-border transfers.\n2. Digital Lending & BNPL: Instant personal/MSME loans and P2P platforms.\n3. WealthTech & Robo-Advisory: Automated portfolio management and discount broking (e.g., Zerodha).\n4. InsurTech: On-demand digital policy issuance and AI claims processing.\n5. RegTech & Blockchain: Automated compliance, KYC, and smart contracts.',
        },
        {
          id: 'q6',
          question:
            'Explain the concept of financial inclusion and the role of digital finance in achieving it.',
          answer:
            'Financial Inclusion means ensuring individuals and small businesses—especially low-income and rural populations—have affordable, timely access to useful financial products (bank accounts, credit, payments, insurance).\nRole of Digital Finance:\n1. Zero-Branch Reach: Mobile banking and Business Correspondents serve remote villages without costly brick-and-mortar branches.\n2. Instant Onboarding: Aadhaar e-KYC and Jan Dhan accounts verify identity digitally.\n3. Micro-Transactions & DBT: Enables small-value UPI payments and direct government subsidy transfers without middlemen.',
        },
        {
          id: 'q7',
          question:
            'What are the opportunities and challenges in the digital finance sector?',
          answer:
            'Opportunities:\n1. Massive unbanked/MSME credit gap ready for digital underwriting.\n2. Cross-border UPI/CBDC interoperability and embedded finance.\n3. AI-driven hyper-personalized wealth and insurance products.\n\nChallenges:\n1. Cybersecurity & Fraud: Phishing, SIM-swapping, and data breaches.\n2. Digital Literacy & Divide: Rural/elderly users face smartphone and language barriers.\n3. Regulatory & Privacy Compliance: Balancing rapid FinTech innovation with consumer data protection and systemic stability.',
        },
        {
          id: 'q8',
          question:
            'Explain the impact of digital finance on banking and financial services.',
          answer:
            '1. Shift to Branchless & Neo-Banking: Footfall shifted to mobile apps, reducing branch operational costs.\n2. Open Banking & API Ecosystems: Banks partner with FinTechs to offer embedded payments and credit.\n3. Real-Time Settlement: Replaced multi-day cheque clearing with instant UPI/IMPS transfers.\n4. Data-Driven Personalization: AI analyzes transaction patterns for tailored loans and fraud detection.\n5. Workforce Transformation: Demand shifted toward cybersecurity, cloud, and data science roles.',
        },
        {
          id: 'q9',
          question: 'What is the role of mobile banking in digital finance?',
          answer:
            'Mobile Banking enables customers to perform financial transactions anytime via smartphone apps or USSD codes.\nKey Roles:\n1. Primary Access Point: Acts as the pocket bank branch for checking balances, transferring funds (UPI/NEFT/IMPS), and paying utility bills.\n2. Real-Time Alerts & Security: Instant SMS/push notifications, biometric login (fingerprint/Face ID), and card lock controls.\n3. Rural Empowerment: Supports vernacular interfaces and offline USSD (*99#) banking for feature-phone users.',
        },
        {
          id: 'q10',
          question: 'Discuss the future trends in digital finance.',
          answer:
            'Key emerging trends shaping digital finance:\n1. Central Bank Digital Currencies (CBDCs): Digital sovereign currencies like RBI’s e-Rupee (e₹).\n2. Embedded Finance: Seamless payments, lending, and insurance built directly inside e-commerce and ride-hailing apps.\n3. Generative AI & Predictive Analytics: Hyper-personalized financial advisors and real-time fraud prevention.\n4. Account Aggregator & Open Credit (OCEN): Consent-based financial data sharing for instant MSME loans.\n5. DeFi & Tokenization: Programmable smart-contract assets and cross-border instant rails.',
        },
      ],
    },
    {
      id: 'u2',
      name: 'Unit 2: Digital Payment Systems',
      topics:
        'Modes of Digital Payments, UPI Architecture, Mobile Wallets, Payment Gateways, NEFT vs RTGS vs IMPS, Credit vs Debit Card, POS Terminals, QR Code Payments, Digital Currency, Payment Security.',
      questions: [
        {
          id: 'q1',
          question:
            'Explain the different modes of digital payments (cards, UPI, wallets, etc.).',
          answer:
            '1. Banking Cards: Debit, Credit, and Prepaid cards (RuPay, Visa, Mastercard) used at POS/online.\n2. UPI (Unified Payments Interface): Instant bank-to-bank transfers using Virtual Payment Address (VPA) or QR codes.\n3. Mobile Wallets: Stored-value apps (Paytm Wallet, Amazon Pay) for quick small-value checkouts.\n4. Net Banking & Bank Rails: NEFT, RTGS, and IMPS via bank portals.\n5. AEPS & USSD: Aadhaar Enabled Payment System (biometric) and *99# feature-phone payments.',
        },
        {
          id: 'q2',
          question:
            'What is UPI (Unified Payments Interface)? Explain its architecture and benefits.',
          answer:
            'UPI (developed by NPCI) is a real-time inter-bank payment system enabling instant fund transfers via mobile devices.\nArchitecture (4-Party Model):\n1. Payer & Payee PSPs (Payment Service Providers / Apps like GPay, PhonePe).\n2. Remitter Bank (payer’s bank) & Beneficiary Bank (payee’s bank).\n3. NPCI Central Switch: Routes transactions using Virtual Payment Addresses (VPAs) and verifies 2FA MPIN.\nBenefits: Zero/minimal fees, 24×7 instant settlement, single app for multiple bank accounts, and no need to share IFSC/account numbers.',
        },
        {
          id: 'q3',
          question: 'Explain the working of a mobile wallet with examples.',
          answer:
            'A Mobile Wallet (Prepaid Payment Instrument, PPI) is a digital app that stores money electronically or links payment cards/bank accounts for fast checkouts.\nWorking:\n1. Registration & KYC: User signs up and completes minimum/full KYC.\n2. Add Money: Loads balance via UPI, debit card, or net banking into an escrow-backed wallet.\n3. Pay: Scans merchant QR or enters mobile number; wallet balance deducts instantly.\nExamples: Paytm Wallet, PhonePe Wallet, Amazon Pay, and Apple Pay (tokenized NFC cards).',
        },
        {
          id: 'q4',
          question:
            'What is the role of a Payment Gateway? Explain the payment processing cycle.',
          answer:
            'A Payment Gateway (e.g., Razorpay, Stripe, PayU) is a secure merchant service that authorizes, encrypts, and routes online payments between a customer, merchant, and banks.\nPayment Processing Cycle:\n1. Checkout: Customer enters card/UPI details on merchant site.\n2. Encryption & Forwarding: Gateway encrypts data (TLS/PCI-DSS) and sends it to the Payment Processor/Acquiring Bank.\n3. Authorization: Card network (Visa/RuPay) routes to Issuing Bank for balance & OTP/PIN check.\n4. Response & Settlement: Approval returns to merchant in seconds; funds settle to merchant’s bank (T+1/T+2).',
        },
        {
          id: 'q5',
          question: 'Differentiate between NEFT, RTGS, and IMPS.',
          answer:
            '1. Settlement Type: NEFT (National Electronic Funds Transfer) settles in half-hourly batches; RTGS (Real Time Gross Settlement) settles continuously per transaction; IMPS (Immediate Payment Service) settles instantaneously.\n2. Transaction Limits: NEFT & IMPS have no minimum (IMPS max ₹5 lakh/txn); RTGS is for high-value transfers (minimum ₹2 lakh, no upper cap).\n3. Availability: All three operate 24×7×365.\n4. Use Case: NEFT for routine transfers, RTGS for large corporate/property payments, IMPS for urgent retail transfers.',
        },
        {
          id: 'q6',
          question:
            'What is the difference between a credit card and a debit card?',
          answer:
            '1. Source of Funds: Debit card deducts money directly from the user’s linked bank account balance; Credit card uses a revolving line of credit extended by the issuing bank.\n2. Interest & Billing: Debit cards carry no interest or monthly bill; Credit cards issue a monthly statement and charge high interest (APR) if unpaid past the due date.\n3. Credit Score Impact: Debit card usage doesn’t affect credit score; responsible credit card usage builds CIBIL/credit history.\n4. Rewards & Protection: Credit cards typically offer richer cashback, grace periods, and fraud liability protection.',
        },
        {
          id: 'q7',
          question: 'Explain the concept of Point of Sale (POS) terminals.',
          answer:
            'A Point of Sale (POS) terminal is a hardware/software device at retail checkout counters used to accept card, contactless, and QR payments.\nWorking & Types:\n1. Physical / EDC Terminals: Read magnetic stripe, EMV chip (DIP), or NFC Tap-and-Pay cards, prompt for PIN, and connect via Wi-Fi/4G to the acquiring bank for authorization.\n2. mPOS (Mobile POS): Compact Bluetooth card readers paired with smartphones.\n3. SoftPOS: Turns any NFC-enabled Android smartphone directly into a contactless payment terminal without extra hardware.',
        },
        {
          id: 'q8',
          question: 'What is a QR code payment? How does it work?',
          answer:
            'A QR (Quick Response) code payment uses a 2D matrix barcode encoding merchant account details (VPA, merchant ID, or BharatQR) for instant contactless checkout.\nTypes:\n1. Static QR: Fixed printed code at shops; customer scans and manually enters the bill amount.\n2. Dynamic QR: Generated per bill on POS/screen with pre-filled exact amount and order ID.\nWorking: Customer opens UPI/wallet app → scans QR → verifies merchant name & amount → enters UPI PIN → funds settle instantaneously with confirmation soundbox/SMS.',
        },
        {
          id: 'q9',
          question: 'Explain the concept of digital currency.',
          answer:
            'Digital Currency is money that exists purely in electronic form without physical banknotes or coins, enabling instant digital ownership and transfer.\nMain Categories:\n1. Central Bank Digital Currency (CBDC): Legal tender issued and backed by a central bank (e.g., RBI’s Digital Rupee e₹-Retail and e₹-Wholesale), holding a 1:1 value with physical fiat.\n2. Decentralized Cryptocurrencies: Peer-to-peer blockchain assets like Bitcoin.\n3. Stablecoins: Private crypto tokens pegged to fiat currencies (e.g., USDC) to reduce volatility.',
        },
        {
          id: 'q10',
          question:
            'Discuss the security measures used in digital payment systems.',
          answer:
            '1. End-to-End Encryption & TLS: Protects payment credentials in transit against interception.\n2. Two-Factor Authentication (2FA): Combines something you have (phone/card) with something you know (OTP, UPI PIN) or are (biometrics).\n3. Tokenization: Replaces sensitive 16-digit card numbers with unique merchant-specific tokens (mandated by RBI).\n4. PCI-DSS Compliance & EMV Chips: Secure card data storage and dynamic cryptograms preventing card cloning.\n5. AI Fraud Monitoring: Flags anomalous geolocations, velocity spikes, and SIM-swap risks.',
        },
      ],
    },
    {
      id: 'u3',
      name: 'Unit 3: Digital Lending and Crowdfunding',
      topics:
        'Digital Lending Advantages & Risks, P2P Lending, Crowdfunding Types, Regulatory Frameworks in India, Credit Scoring, Equity vs Reward Crowdfunding, NBFCs, BNPL, Ethical Concerns.',
      questions: [
        {
          id: 'q1',
          question:
            'Define Digital Lending. Explain its advantages and risks.',
          answer:
            'Digital Lending is the end-to-end online origination, underwriting, disbursement, and recovery of loans via mobile apps or web platforms without physical branch visits.\nAdvantages:\n1. Speed: Paperless e-KYC and automated underwriting disburse loans in minutes.\n2. Accessibility: Uses alternative data (UPI cashflows, GST) to serve thin-file MSMEs and individuals.\n3. Transparency: Digital loan agreements and Key Fact Statements (KFS).\nRisks: Predatory interest rates, illegal unregistered loan apps, aggressive recovery harassment, data privacy abuse, and borrower over-indebtedness.',
        },
        {
          id: 'q2',
          question:
            'What is Peer-to-Peer (P2P) lending? How does it work?',
          answer:
            'Peer-to-Peer (P2P) Lending connects individual borrowers directly with individual/institutional lenders through an online marketplace, bypassing traditional bank balance sheets.\nWorking:\n1. Borrower registers, submits KYC/financials, and gets assigned a risk grade and interest rate.\n2. Lenders browse listed loans and fund portions across multiple borrowers to diversify risk.\n3. Platform facilitates escrow-based disbursement and collects monthly EMIs, charging a platform fee.\nIn India, P2P platforms must register as NBFC-P2P regulated by the RBI.',
        },
        {
          id: 'q3',
          question:
            'Explain the concept of Crowdfunding. What are its different types?',
          answer:
            'Crowdfunding raises small amounts of capital from a large number of people via online platforms to fund startups, creative projects, or social causes.\nFour Main Types:\n1. Donation-Based: Contributors donate without expecting financial return (charity, medical aid—e.g., Milaap, Ketto).\n2. Reward-Based: Backers receive a non-financial perk or early product (e.g., Kickstarter).\n3. Debt/Peer-to-Peer Crowdfunding: Investors lend money expecting principal + interest.\n4. Equity Crowdfunding: Investors receive company shares/equity stakes (restricted/regulated in India by SEBI).',
        },
        {
          id: 'q4',
          question:
            'What are the regulatory frameworks for digital lending in India?',
          answer:
            'The Reserve Bank of India (RBI) Digital Lending Guidelines (2022) protect borrowers and govern Regulated Entities (Banks/NBFCs) and Lending Service Providers (LSPs):\n1. Direct Fund Flow: Loan disbursements and repayments must flow directly between borrower’s bank and Regulated Entity’s bank—never through an LSP’s pool account.\n2. Key Fact Statement (KFS): Mandatory upfront disclosure of APR, fees, and recovery agents.\n3. Data Privacy: Apps cannot scrape contacts/gallery; explicit consent is required for data collection.\n4. Cooling-Off Period: Borrowers can exit loans penalty-free within a specified window.',
        },
        {
          id: 'q5',
          question: 'Explain the role of credit scoring in digital lending.',
          answer:
            'Credit Scoring assigns a numerical risk rating (e.g., CIBIL 300–900) estimating a borrower’s probability of loan repayment.\nRole in Digital Lending:\n1. Automated Instant Underwriting: Enables real-time loan approval/rejection in seconds.\n2. Risk-Based Pricing: Determines sanctioned loan limits, tenure, and interest rates.\n3. Alternative Data Scoring: For "new-to-credit" users without credit bureau history, ML models evaluate utility bills, GST invoices, e-commerce cashflows, and Account Aggregator bank statements safely.',
        },
        {
          id: 'q6',
          question:
            'What is the difference between equity crowdfunding and reward-based crowdfunding?',
          answer:
            '1. Return to Backers: Equity crowdfunding grants investors actual ownership shares and potential dividends/capital gains; Reward-based crowdfunding offers non-financial perks, merchandise, or pre-order products.\n2. Risk & Regulation: Equity crowdfunding is heavily regulated by securities authorities (e.g., SEBI) due to investor-protection risks; Reward-based faces lighter consumer/e-commerce rules.\n3. Use Case: Equity fits scalable startups raising growth capital; Reward-based fits creators, indie games, and hardware prototypes.',
        },
        {
          id: 'q7',
          question: 'Discuss the challenges in the P2P lending market.',
          answer:
            '1. Credit & Default Risk: Higher borrower default rates compared to collateralized bank loans, with no deposit insurance for lenders.\n2. Information Asymmetry: Difficulty verifying borrower income accuracy fully online.\n3. Liquidity Constraints: Lenders’ funds remain locked until borrowers repay EMIs (limited secondary markets).\n4. Regulatory Caps: RBI restricts aggregate lender/borrower exposure limits and forbids guaranteed returns.\n5. Platform Solvency Risk: Operational continuity if the marketplace shuts down.',
        },
        {
          id: 'q8',
          question:
            'What is the role of a Non-Banking Financial Company (NBFC) in digital lending?',
          answer:
            'An NBFC is an RBI-registered financial institution providing loans and credit facilities without holding a full banking license (cannot accept demand deposits).\nRole in Digital Lending:\n1. Regulatory Backbone: Many FinTech loan apps partner with NBFCs (or obtain an NBFC license) because only RBI-regulated Banks/NBFCs can legally hold loan books and lend.\n2. Co-Lending & Credit Access: Partner with banks and LSPs to serve niche MSMEs, vehicle buyers, and salaried consumers with agile digital underwriting.',
        },
        {
          id: 'q9',
          question: 'Explain the concept of Buy Now Pay Later (BNPL).',
          answer:
            'Buy Now Pay Later (BNPL) is a short-term point-of-sale financing option allowing consumers to purchase goods immediately and pay later—either in full after 15–30 days or in interest-free/low-interest EMIs.\nWorking: At checkout, the BNPL provider pays the merchant upfront (minus a merchant discount fee) and collects scheduled installments from the buyer.\nBenefits & Risks: Boosts e-commerce conversion and offers convenient credit, but risks hidden late fees and impulse overspending by young consumers.',
        },
        {
          id: 'q10',
          question:
            'What are the ethical concerns in digital lending and crowdfunding?',
          answer:
            '1. Predatory Lending & Debt Traps: Concealed processing fees, exorbitant annualized interest, and frictionless UX encouraging unaffordable borrowing.\n2. Abusive Recovery & Privacy Invasion: Unethical loan apps accessing contact lists/photos to shame borrowers.\n3. Algorithmic Bias: AI underwriting models unintentionally discriminating based on geography or demographics.\n4. Crowdfunding Fraud: Misleading campaigns, fake medical emergencies, or creators failing to deliver promised rewards/updates.',
        },
      ],
    },
    {
      id: 'u4',
      name: 'Unit 4: Blockchain Technology and Cryptocurrencies',
      topics:
        'Blockchain Characteristics & Architecture, Public vs Private Blockchains, Smart Contracts, Cryptocurrency & Bitcoin, Centralized vs Decentralized, PoW vs PoS, Beyond Crypto, Advantages & Limitations, NFTs.',
      questions: [
        {
          id: 'q1',
          question:
            'What is Blockchain? Explain its key characteristics.',
          answer:
            'A Blockchain is a distributed, append-only digital ledger that records transactions across a peer-to-peer network in cryptographically linked blocks.\nKey Characteristics:\n1. Decentralization: No single central authority controls the network; nodes validate jointly.\n2. Immutability: Once recorded and chained via cryptographic hashes, altering past blocks is practically impossible.\n3. Transparency & Auditability: Every participant can verify ledger history.\n4. Consensus-Driven Security: Transactions are committed only upon network agreement (e.g., PoW, PoS).',
        },
        {
          id: 'q2',
          question:
            'Explain the architecture of a Blockchain with a diagram.',
          answer:
            'A Blockchain consists of a chronological chain of Blocks starting from the Genesis Block (Block 0).\nEach Block Contains Two Parts:\n1. Block Header: Version, Previous Block Hash (linking blocks backward), Merkle Root (hash tree summarizing all transactions), Timestamp, Difficulty Target, and Nonce.\n2. Block Body: List of validated transactions.\nChaining Mechanism: [Block 0] ← (PrevHash) [Block 1] ← (PrevHash) [Block 2]. Modifying any transaction changes its Merkle Root and Block Hash, breaking all subsequent links immediately.',
        },
        {
          id: 'q3',
          question:
            'Differentiate between Public and Private Blockchains.',
          answer:
            '1. Access & Governance: Public blockchains (e.g., Bitcoin, Ethereum) are permissionless—anyone can join, read, and validate; Private blockchains (e.g., Hyperledger Fabric) are permissioned and controlled by an organization or consortium.\n2. Speed & Scalability: Public networks are slower (high consensus overhead); Private networks achieve high TPS with lightweight consensus.\n3. Privacy: Public ledgers are open to all; Private ledgers restrict data visibility to authorized participants.\n4. Decentralization: High in Public; lower/partially centralized in Private.',
        },
        {
          id: 'q4',
          question: 'Explain the concept of a smart contract.',
          answer:
            'A Smart Contract is a self-executing program stored on a blockchain (e.g., Solidity on Ethereum) that automatically enforces and executes agreement terms when predefined conditions are met ("if X happens, execute Y").\nKey Features:\n1. Trustless & Deterministic: Runs identically across all network nodes without intermediaries or lawyers.\n2. Immutable & Transparent: Code cannot be altered unilaterally once deployed.\nApplications: DeFi lending, automated insurance payouts, supply-chain escrow, and NFT minting.',
        },
        {
          id: 'q5',
          question:
            'What is a Cryptocurrency? Explain the working of Bitcoin.',
          answer:
            'A Cryptocurrency is a decentralized digital currency secured by cryptography and maintained on a distributed blockchain ledger without a central bank.\nWorking of Bitcoin:\n1. Wallets & Keys: Users hold a public address (to receive BTC) and a private key (to digitally sign transactions).\n2. Broadcasting & Mempool: Signed transactions broadcast to P2P nodes for signature and balance verification.\n3. Mining (Proof of Work): Miners bundle transactions into a block and compete to solve a SHA-256 cryptographic puzzle (finding a valid nonce) roughly every 10 minutes, earning newly minted BTC + fees.',
        },
        {
          id: 'q6',
          question:
            'What is the difference between a centralized and a decentralized system?',
          answer:
            '1. Control & Authority: Centralized systems rely on a single central server/authority (e.g., traditional banks); Decentralized systems distribute authority and data across multiple independent peer nodes (e.g., Bitcoin).\n2. Single Point of Failure: Centralized systems fail if the main server goes down or is compromised; Decentralized systems remain resilient.\n3. Performance & Cost: Centralized systems offer faster throughput and simpler governance; Decentralized systems eliminate middlemen and censorship at higher coordination overhead.',
        },
        {
          id: 'q7',
          question:
            'Explain the consensus mechanisms: Proof of Work (PoW) and Proof of Stake (PoS).',
          answer:
            'Consensus mechanisms ensure distributed nodes agree on a single valid ledger state:\n1. Proof of Work (PoW): Miners expend computational power (hashing with specialized ASICs/GPUs) to solve cryptographic puzzles and earn block rewards (e.g., Bitcoin). Highly secure, but energy-intensive and slower.\n2. Proof of Stake (PoS): Validators lock ("stake") native cryptocurrency as collateral to be randomly selected to propose and attest blocks (e.g., Ethereum). Slashing penalizes dishonest validators. Uses >99% less energy and enables faster finality.',
        },
        {
          id: 'q8',
          question:
            'What are the applications of Blockchain beyond cryptocurrencies?',
          answer:
            '1. Supply Chain & Provenance: Tracking pharmaceuticals, food, and diamonds from origin to retail to stop counterfeiting.\n2. Healthcare Records: Tamper-proof, patient-controlled sharing of electronic medical records.\n3. Land Registry & Digital Identity: Immutable property titles and verifiable self-sovereign IDs.\n4. Cross-Border Trade & CBDCs: Instant trade finance letters of credit and wholesale interbank settlements.\n5. Voting & Copyright: Auditable e-voting and automated royalty payouts for creators.',
        },
        {
          id: 'q9',
          question:
            'What are the advantages and limitations of Blockchain technology?',
          answer:
            'Advantages:\n1. Tamper-proof immutability and cryptographic security.\n2. Eliminates intermediaries, reducing settlement friction and counterparty risk.\n3. High availability (no single point of failure) and transparent audit trails.\n\nLimitations:\n1. Scalability Trilemma: Lower transaction throughput (TPS) than centralized Visa/UPI rails.\n2. High Energy Use (in PoW) and storage bloat over time.\n3. Key Loss Irreversibility: Losing private keys permanently locks funds; smart-contract bugs are hard to patch.',
        },
        {
          id: 'q10',
          question: 'Write a short note on Non-Fungible Tokens (NFTs).',
          answer:
            'A Non-Fungible Token (NFT) is a unique, indivisible cryptographic token stored on a blockchain (commonly Ethereum ERC-721/ERC-1155) representing verifiable ownership of a distinct digital or physical asset.\nFungible vs Non-Fungible: 1 BTC = 1 BTC (interchangeable/fungible), whereas each NFT has a unique Token ID and metadata.\nUse Cases: Digital art, music royalties, in-game collectibles, event tickets, and tokenized real-estate deeds—enabling transparent provenance and automated creator resale royalties.',
        },
      ],
    },
    {
      id: 'u5',
      name: 'Unit 5: Security and Regulations in Digital Finance',
      topics:
        'Security Threats, Encryption, Two-Factor Authentication (2FA), Phishing Prevention, RBI & SEBI Roles, Indian Regulations, KYC Norms, Data Privacy, Cybersecurity, Ethical & Social Implications.',
      questions: [
        {
          id: 'q1',
          question: 'What are the major security threats in digital finance?',
          answer:
            '1. Phishing & Social Engineering: Deceptive SMS/emails/calls tricking users into sharing OTPs, PINs, or credentials.\n2. Malware & Ransomware: Banking trojans, keyloggers, and malicious fake loan/screen-sharing apps.\n3. Man-in-the-Middle (MitM) Attacks: Intercepting unencrypted transactions on public Wi-Fi.\n4. Identity Theft & SIM Swapping: Hijacking a victim’s mobile number to capture 2FA SMS OTPs.\n5. API & Cloud Misconfigurations: Exposing sensitive customer financial databases.',
        },
        {
          id: 'q2',
          question:
            'Explain the concept of encryption and its role in securing digital transactions.',
          answer:
            'Encryption converts readable plaintext data into unreadable ciphertext using mathematical algorithms and cryptographic keys, ensuring only authorized parties can decrypt it.\nTwo Main Types:\n1. Symmetric Encryption (e.g., AES): Uses one shared secret key for fast bulk data encryption.\n2. Asymmetric Encryption (e.g., RSA, ECC): Uses a public key to encrypt/verify and a private key to decrypt/sign.\nRole: Secures HTTPS/TLS connections, protects stored PINs/card numbers, and provides digital signatures guaranteeing integrity and non-repudiation.',
        },
        {
          id: 'q3',
          question:
            'What is Two-Factor Authentication (2FA)? Why is it important?',
          answer:
            'Two-Factor Authentication (2FA) requires a user to verify their identity using two independent authentication factors before accessing an account or approving a payment:\n1. Something You Know (Password, UPI PIN)\n2. Something You Have (Registered smartphone OTP, hardware token)\n3. Something You Are (Fingerprint, Face ID).\nImportance: Even if a hacker steals a password or card number via phishing/data leaks, they cannot complete transactions without the second factor, drastically cutting unauthorized fraud.',
        },
        {
          id: 'q4',
          question: 'Explain the concept of Phishing and how to prevent it.',
          answer:
            'Phishing is a cyberattack where fraudsters impersonate trusted banks, UPI apps, or regulators via fake emails, SMS (Smishing), voice calls (Vishing), or lookalike websites to steal passwords, OTPs, or card details.\nPrevention Measures:\n1. Never share OTPs, PINs, CVVs, or click unknown KYC/prize links.\n2. Verify official HTTPS domains and sender addresses carefully.\n3. Enable hardware/app-based MFA, transaction alerts, and block suspicious screen-sharing apps.\n4. Organizations deploy DMARC/SPF email filtering and user security awareness.',
        },
        {
          id: 'q5',
          question:
            'What is the role of regulatory bodies like RBI and SEBI in digital finance?',
          answer:
            '1. Reserve Bank of India (RBI): Regulates banks, NBFCs, payment aggregators, UPI/NPCI, P2P lenders, and CBDCs under the Payment and Settlement Systems Act (2007). Sets cybersecurity standards, data localization rules, tokenization, and digital lending consumer protections.\n2. Securities and Exchange Board of India (SEBI): Regulates capital markets, online brokers, mutual fund platforms, robo-advisors, and crowdfunding/FinTech market intermediaries—preventing market manipulation, protecting retail investors, and enforcing FinTech sandbox guidelines.',
        },
        {
          id: 'q6',
          question:
            'Explain the key regulations governing digital payments and lending in India.',
          answer:
            'Key Indian Regulatory Frameworks:\n1. Payment and Settlement Systems Act (2007): Empowers RBI to authorize and supervise payment systems (NPCI, card networks, wallets).\n2. RBI Master Directions on Digital Payment Security & Tokenization: Mandates 2FA, card-on-file tokenization, and local payment data storage.\n3. RBI Digital Lending Guidelines (2022): Requires direct bank-to-borrower fund flows, Key Fact Statements (KFS), and strict app data consent.\n4. IT Act (2000) & DPDP Act (2023): Penalizes cyber fraud and governs personal financial data protection.',
        },
        {
          id: 'q7',
          question:
            'What is the importance of Know Your Customer (KYC) norms in digital finance?',
          answer:
            'Know Your Customer (KYC) is the mandatory process of verifying a user’s identity, address, and risk profile (via e-KYC, Video KYC, or CKYC) before offering financial services.\nImportance:\n1. Prevents Financial Crime: Combats Money Laundering (AML), terrorist financing, and mule accounts.\n2. Reduces Fraud & Impersonation: Links accounts to verified real identities.\n3. Regulatory Compliance & Inclusion: Enables fast, paperless onboarding (Aadhaar/PAN e-KYC) while building trust across banks and FinTech platforms.',
        },
        {
          id: 'q8',
          question:
            'Explain the concept of data privacy and its importance in the financial sector.',
          answer:
            'Data Privacy governs how sensitive financial data (bank balances, income, spending habits, Aadhaar/PAN, credit scores) is collected, stored, consented to, and shared.\nImportance:\n1. Protects Against Identity Theft & Extortion: Financial records are prime targets for cybercriminals.\n2. Prevents Unauthorized Profiling & Monetization: Ensures platforms don’t sell transaction data to third parties without explicit consent (enforced by India’s DPDP Act, 2023).\n3. Sustains User Trust: Customers adopt digital payments only when confident their data is safe.',
        },
        {
          id: 'q9',
          question:
            'What is the role of cyber security in protecting financial data?',
          answer:
            'Cybersecurity encompasses the technologies, policies, and controls protecting financial networks, apps, and databases from unauthorized access or disruption.\nKey Roles:\n1. Defense-in-Depth: Firewalls, Zero-Trust architecture, encryption at rest/in transit, and secure API gateways.\n2. Real-Time Threat Detection: SIEM and AI behavioral analytics spot anomalous logins or payment fraud instantly.\n3. Compliance & Resilience: Regular penetration testing, ISO 27001/PCI-DSS audits, and disaster recovery plans keep critical banking rails running uninterrupted.',
        },
        {
          id: 'q10',
          question:
            'Discuss the ethical and social implications of digital finance.',
          answer:
            'Positive Social Impact: Empowers women, rural entrepreneurs, and small vendors through instant payments, direct benefit transfers, and affordable micro-credit.\nEthical & Social Concerns:\n1. Digital Divide: Elderly, low-literacy, or unconnected citizens risk financial exclusion as cash/branches shrink.\n2. Algorithmic Fairness: Biased AI credit models can unfairly deny loans to marginalized groups.\n3. Surveillance & Debt Stress: Seamless 1-click BNPL/lending can fuel consumer debt, while cashless tracking raises privacy concerns.',
        },
      ],
    },
  ],
};

export default dfSubject;
