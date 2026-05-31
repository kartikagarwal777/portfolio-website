export type SourceId = 'resume' | 'website' | 'linkedin' | 'substack';

export type KnowledgeSource = {
  id: SourceId;
  label: string;
  href: string;
};

export type ChatbotReply = {
  headline: string;
  points: string[];
  sources: KnowledgeSource[];
  suggestions: string[];
  isFallback?: boolean;
};

type KnowledgeEntry = {
  id: string;
  category: string;
  title: string;
  headline: string;
  points: string[];
  keywords: string[];
  sources: SourceId[];
  suggestions: string[];
  priority?: number;
};

const sourceMap: Record<SourceId, KnowledgeSource> = {
  resume: {
    id: 'resume',
    label: 'Resume',
    href: '/Kartik_Agarwal.pdf',
  },
  website: {
    id: 'website',
    label: 'Website',
    href: 'https://kartik-agarwal.com/',
  },
  linkedin: {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kartik-agarwal/',
  },
  substack: {
    id: 'substack',
    label: 'Substack',
    href: 'https://kartikag.substack.com',
  },
};

const fallbackSuggestions = [
  'What is Kartik best at?',
  'Tell me about his quant experience',
  'What has he written recently?',
  'How can I contact him?',
];

const unsupportedPersonalSuggestions = [
  'What is Kartik best at?',
  'Summarize his experience',
  'What are his technical skills?',
  'How can I contact him?',
];

export const starterQuestions = [
  'What is Kartik best at?',
  'Summarize his experience',
  'What projects has he built?',
  'What does he write about?',
];

const knowledgeEntries: KnowledgeEntry[] = [
  {
    id: 'profile',
    category: 'Profile',
    title: 'Professional Summary',
    headline:
      'Kartik is an alpha quant researcher and former engineering lead focused on systematic investing, macro research, machine learning signals, and production-grade research systems.',
    points: [
      'He has worked across FX, commodities, equities, and fixed income futures, with experience turning economic intuition and data into scalable investment decisions.',
      'His strongest combination is quantitative research plus software execution: signal design, portfolio construction, data pipelines, backtesting, and production monitoring.',
      'His background also includes product leadership, including building Zoho ZeptoMail from inception to launch before moving deeper into quant investing.',
    ],
    keywords: [
      'kartik',
      'summary',
      'summarize',
      'profile',
      'resume',
      'about',
      'overview',
      'best',
      'strength',
      'strengths',
      'hire',
      'hiring',
      'investor',
      'investors',
      'manager',
      'portfolio',
      'alpha',
      'quant',
      'research',
      'macro',
      'ml',
      'machine learning',
      'software engineer',
      'engineering lead',
      'systematic investing',
    ],
    sources: ['resume', 'website', 'linkedin', 'substack'],
    suggestions: [
      'Tell me about QMS Capital',
      'What are his technical skills?',
      'Why is he a strong quant candidate?',
    ],
    priority: 6,
  },
  {
    id: 'qms',
    category: 'Experience',
    title: 'QMS Capital Management',
    headline:
      'At QMS Capital Management in Durham, NC, Kartik worked as a Quant Researcher from July 2021 to October 2025.',
    points: [
      'He directed alpha research across FX, commodity, equity, and fixed income futures, producing 11 production-ready trading strategies.',
      'He researched ML-driven strategies using methods such as neural networks, XGBoost, affinity propagation, Kalman filters, and Lasso, incorporated order-flow data, and evaluated alternative data based on signal orthogonality and economics.',
      'He introduced Emerging Markets FX trading at the firm, covering universe selection, portfolio construction, signal weighting, regime modelling, and risk management.',
      'He built Python-based infrastructure and modular research tooling with data pipelines, transaction cost modeling, performance attribution, and production monitoring.',
    ],
    keywords: [
      'qms',
      'capital',
      'hedge fund',
      'durham',
      'quant researcher',
      'alpha',
      'production strategies',
      'trading strategies',
      'fx',
      'foreign exchange',
      'commodities',
      'commodity',
      'equity',
      'fixed income',
      'futures',
      'em fx',
      'emerging markets',
      'portfolio construction',
      'risk management',
      'backtesting',
      'monitoring',
      'transaction costs',
      'research infrastructure',
      'cross asset',
      'cross-asset',
      'alternative data',
      'vendor communication',
      'signal orthogonality',
      'order flow',
      'order-flow',
      'sell side',
      'broker views',
    ],
    sources: ['resume', 'website', 'linkedin'],
    suggestions: [
      'What ML methods has he used?',
      'Tell me about his infrastructure work',
      'What is his cross-asset experience?',
    ],
    priority: 8,
  },
  {
    id: 'machine-learning',
    category: 'Skills',
    title: 'Machine Learning and Signals',
    headline:
      'Kartik has applied machine learning to market signals, NLP, macro predictors, and trading strategy research.',
    points: [
      'His resume and website mention neural networks, XGBoost, affinity propagation, Kalman filters, Lasso, PCA, and NLP.',
      'At QMS, he researched ML-driven trading strategies and proprietary macro indexes such as bond risk premia, country sentiment, inflation expectations, and GDP nowcasts.',
      'At UCLA with the Federal Reserve Bank of Philadelphia, he used NLP to study COVID-19 policy documents and household impact.',
      'At GIC, he developed an NLP-driven U.S. equities strategy using 10-K filings to identify peer mispricings.',
    ],
    keywords: [
      'machine learning',
      'ml',
      'ai',
      'model',
      'models',
      'signals',
      'signal design',
      'neural nets',
      'neural networks',
      'xgboost',
      'affinity propagation',
      'kalman',
      'kalman filter',
      'lasso',
      'pca',
      'nlp',
      'natural language processing',
      '10-k',
      'filings',
      'covid',
      'policy documents',
      'macro indexes',
      'bond risk premia',
      'country sentiment',
      'gdp nowcast',
      'inflation expectation',
    ],
    sources: ['resume', 'website', 'linkedin'],
    suggestions: [
      'What did he do at GIC?',
      'What did he do at UCLA?',
      'What technical tools does he use?',
    ],
    priority: 7,
  },
  {
    id: 'engineering',
    category: 'Experience',
    title: 'Engineering and Product Leadership',
    headline:
      'Before focusing fully on quant investing, Kartik built software products and led engineering execution.',
    points: [
      'At Zoho ManageEngine, he helped build Zoho ZeptoMail from inception to launch; the site and resume note that it is now used by 2.5k+ organizations.',
      'He led a cross-functional team of 12 developers, designers, testers, marketing, and content contributors.',
      'At WeInvest, he implemented and deployed a white-labeled robo-advisory platform for banks across Singapore and the Middle East.',
      'This background is useful for investors and hiring teams because he can build research ideas into reliable production workflows.',
    ],
    keywords: [
      'software',
      'engineering',
      'engineer',
      'product',
      'lead',
      'leadership',
      'zoho',
      'manageengine',
      'zeptomail',
      'weinvest',
      'startup',
      'robo advisory',
      'banks',
      'singapore',
      'middle east',
      'team',
      '12',
      'cross-functional',
      'production',
      'platform',
      'launch',
      'organizations',
      '2500',
      '2.5k',
    ],
    sources: ['resume', 'website', 'linkedin'],
    suggestions: [
      'What technical tools does he use?',
      'Tell me about his quant experience',
      'What projects has he built?',
    ],
    priority: 7,
  },
  {
    id: 'previous-research',
    category: 'Experience',
    title: 'UCLA, Federal Reserve Bank of Philadelphia, and GIC',
    headline:
      'Kartik has research experience before QMS spanning NLP, policy analysis, asset markets, and equity strategy research.',
    points: [
      'At UCLA with the Federal Reserve Bank of Philadelphia, he analyzed state and local government documents across the U.S. to study COVID-19 policy effects on households.',
      'He also analyzed how world events affected equity, debt, and real estate trends.',
      'At GIC, he developed an NLP-driven trading strategy on U.S. equities by analyzing 10-K filings to uncover peer mispricings.',
    ],
    keywords: [
      'ucla',
      'federal reserve',
      'philadelphia',
      'fed',
      'frb',
      'gic',
      'singapore sovereign wealth fund',
      'researcher',
      'covid',
      'government documents',
      'households',
      'world events',
      'equity',
      'debt',
      'real estate',
      '10-k',
      'peer mispricings',
      'nlp',
      'san francisco',
      'los angeles',
    ],
    sources: ['resume', 'website', 'linkedin'],
    suggestions: [
      'What ML methods has he used?',
      'What is his education?',
      'Summarize his experience',
    ],
    priority: 6,
  },
  {
    id: 'education',
    category: 'Education',
    title: 'Education',
    headline:
      'Kartik has formal training in financial engineering and computer science.',
    points: [
      'He earned a Master of Financial Engineering from UCLA Anderson School of Management.',
      'He earned a Bachelor of Technology in Computer Science and Engineering from Vellore Institute of Technology.',
      'At UCLA, he represented the school at the Chicago Booth Investment Competition Quant Track and the CFA IRC, where he performed financial analysis on Snapchat.',
    ],
    keywords: [
      'education',
      'school',
      'university',
      'degree',
      'ucla',
      'anderson',
      'master',
      'financial engineering',
      'mfe',
      'vellore',
      'vit',
      'bachelor',
      'computer science',
      'engineering',
      'booth',
      'investment competition',
      'cfa',
      'irc',
      'snapchat',
    ],
    sources: ['resume', 'website', 'linkedin'],
    suggestions: [
      'What competitions did he do?',
      'What are his technical skills?',
      'Tell me about his research projects',
    ],
    priority: 5,
  },
  {
    id: 'competitions',
    category: 'Projects',
    title: 'Competitions',
    headline:
      'Kartik represented UCLA in investment competitions that tested both quant and fundamental analysis.',
    points: [
      'Chicago Booth Investment Competition: represented UCLA on the Quant Track.',
      'CFA IRC: represented UCLA and performed financial analysis on Snapchat.',
      'These are listed in his resume and website as part of his research and selected-projects background.',
    ],
    keywords: [
      'competitions',
      'competition',
      'booth',
      'chicago booth',
      'chicago booth investment competition',
      'quant track',
      'cfa',
      'irc',
      'cfa irc',
      'snapchat',
      'represented ucla',
    ],
    sources: ['resume', 'website', 'linkedin'],
    suggestions: [
      'What is his education?',
      'What projects has he built?',
      'Why is he a strong quant candidate?',
    ],
    priority: 7,
  },
  {
    id: 'projects',
    category: 'Projects',
    title: 'Projects and Strategy Work',
    headline:
      "Kartik's selected projects show a mix of systematic strategy research, venture building, and investment competition work.",
    points: [
      'He researched, developed, and deployed an automated Nifty stocks statistical arbitrage strategy on the top 100 NSE stocks using Google Cloud and dynamic universe selection to avoid survivorship bias.',
      'That Nifty strategy reports a Sharpe ratio of 3.52 on 10% daily turnover.',
      'He founded and built an invoicing software startup end-to-end, ultimately shutting it down after the learning cycle.',
      'He initiated a student-led quantitative investment fund framework at UCLA.',
    ],
    keywords: [
      'projects',
      'project',
      'selected projects',
      'research projects',
      'nifty',
      'nse',
      'stocks',
      'stat arb',
      'statistical arbitrage',
      'google cloud',
      'gcp',
      'survivorship bias',
      'sharpe',
      '3.52',
      'daily turnover',
      'invoicing',
      'startup',
      'student led fund',
      'quantitative investment fund',
      'competition',
      'portfolio',
    ],
    sources: ['resume', 'website'],
    suggestions: [
      'Tell me about the Nifty strategy',
      'What did he build as an engineer?',
      'What competitions did he do?',
    ],
    priority: 7,
  },
  {
    id: 'linkedin-projects',
    category: 'Projects',
    title: 'Additional LinkedIn Projects',
    headline:
      "Kartik's public LinkedIn profile also lists additional academic and investment projects.",
    points: [
      'Asset Hedging with Bayesian Estimation: used a Kalman filter to estimate hedge ratios for fixed income assets.',
      'Investment Strategies using Machine Learning: used XGBoost and PCA on cryptocurrency factors, with a listed Sharpe of 2.45 versus 1.27 for the CCi30 benchmark.',
      'Trading using accounting fundamentals: modified the Piotroski model using variables such as free cash flow, operating margin, and a changed ranking system; LinkedIn lists 17.64% annualized return, 6.49% above the original model.',
      'His LinkedIn also lists an IJET publication titled Emerging Wireless Technology from November 2016.',
    ],
    keywords: [
      'linkedin projects',
      'asset hedging',
      'bayesian',
      'bayesian estimation',
      'kalman filter',
      'fixed income',
      'hedge ratio',
      'cryptocurrency',
      'crypto',
      'xgboost',
      'pca',
      'cci30',
      '2.45',
      '1.27',
      'trading using accounting fundamentals',
      'accounting fundamentals',
      'piotroski',
      'free cash flow',
      'operating margin',
      'ranking system',
      '17.64',
      '6.49',
      'publication',
      'publications',
      'published',
      'paper',
      'papers',
      'emerging wireless technology',
      'ijet',
      'wimax',
    ],
    sources: ['linkedin'],
    suggestions: [
      'What are his main portfolio projects?',
      'What ML methods has he used?',
      'What does LinkedIn highlight?',
    ],
    priority: 4,
  },
  {
    id: 'early-technical-projects',
    category: 'Projects',
    title: 'Early Technical Projects',
    headline:
      "Kartik's LinkedIn also lists earlier technical projects across cloud simulation, stock prediction, and web applications.",
    points: [
      'Evaluating power-efficient algorithms for cloud data centres: compared RASA, TPPC, and PALB using CloudSim across power efficiency, cost effectiveness, and CO2 emissions; TPPC was listed as the most efficient in the project summary.',
      'Stock Market Prediction: used 500 days of OHLCV training data and Python models including Random Forest, Ridge, SGD, and Lasso to predict the probability of a stock moving up on the 10th day.',
      'Knowledge Sharing Among Teachers: built with PHP, HTML, CSS, and JavaScript.',
      'These projects are earlier academic/technical work, so the main professional signal still comes from his later quant research, ML, and production-systems experience.',
    ],
    keywords: [
      'early projects',
      'technical projects',
      'cloud data centres',
      'cloud data centers',
      'power efficient algorithms',
      'power-efficient',
      'carbon emissions',
      'co2',
      'cloudsim',
      'rasa',
      'tppc',
      'palb',
      'stock market prediction',
      'stock prediction',
      'ohlcv',
      '500 days',
      'random forest',
      'ridge',
      'sgd',
      'lasso',
      'knowledge sharing',
      'teachers',
      'php',
      'html',
      'css',
      'javascript',
    ],
    sources: ['linkedin'],
    suggestions: [
      'What are his main portfolio projects?',
      'What ML methods has he used?',
      'Tell me about the Nifty strategy',
    ],
    priority: 4,
  },
  {
    id: 'recommendations',
    category: 'Public Profile',
    title: 'LinkedIn Recommendations',
    headline:
      'Yes. Kartik has public LinkedIn recommendations that speak to both his quant/investing profile and his engineering leadership.',
    points: [
      'Doug Hanly, CFA, CAIA recommends him as a rare mix of mathematics, programming, and investing, with a software-development edge in building alpha models for portfolios.',
      'That investment-focused recommendation also emphasizes that Kartik is highly intelligent, humble, and stands out among quant portfolio managers.',
      'Sudharsan KP recommends him from his Zoho period, highlighting motivation, responsibility, integrity, dependability, leadership, communication, and delivery under pressure.',
      'The Zoho recommendation gives concrete engineering examples: improving product performance, making email tracking more secure, increasing mail-sending capacity by 300%, building throttling and stats modules, and coordinating across teams.',
    ],
    keywords: [
      'references',
      'reference',
      'recommendations',
      'recommendation',
      'recommended',
      'recommends',
      'referral',
      'referrals',
      'testimonial',
      'testimonials',
      'endorsement',
      'endorsements',
      'linkedin recommendations',
      'linkedin recommendation',
      'doug hanly',
      'cfa',
      'caia',
      'sudharsan',
      'sudharsan kp',
      'quant portfolio managers',
      'alpha models',
      'mathematics',
      'programming',
      'investing',
      'humble',
      'zoho',
      'email tracking',
      'mail sending capacity',
      '300%',
      'throttling',
      'stats module',
      'leadership',
      'integrity',
      'dependability',
      'communication',
      'under pressure',
    ],
    sources: ['linkedin'],
    suggestions: [
      'What does LinkedIn highlight?',
      'Why is he a strong quant candidate?',
      'What did he build at Zoho?',
    ],
    priority: 10,
  },
  {
    id: 'skills',
    category: 'Skills',
    title: 'Technical Skills',
    headline:
      "Kartik's technical stack is centered on Python for research and production workflows, with broader programming and infrastructure experience.",
    points: [
      'Languages: Python, Java, R, MATLAB, and SQL.',
      'Infrastructure and tools: Kafka, Redis, Google Cloud, AWS, Bloomberg Terminal, and version control systems including Git, Mercurial, and SVN.',
      'Areas of expertise include systematic trading, machine learning, quantitative analysis, statistical arbitrage, alpha research, risk management, financial engineering, and data pipeline development.',
      'His resume also lists operating systems as Windows, Mac, and Ubuntu.',
    ],
    keywords: [
      'skills',
      'technical',
      'tools',
      'stack',
      'technology',
      'programming',
      'language',
      'languages',
      'python',
      'java',
      'r',
      'matlab',
      'sql',
      'kafka',
      'redis',
      'gcp',
      'google cloud',
      'aws',
      'bloomberg',
      'git',
      'mercurial',
      'svn',
      'os',
      'operating system',
      'operating systems',
      'windows',
      'mac',
      'macos',
      'ubuntu',
      'data pipelines',
      'risk management',
      'financial engineering',
    ],
    sources: ['resume', 'website'],
    suggestions: [
      'What ML methods has he used?',
      'Tell me about his infrastructure work',
      'What makes him strong for quant roles?',
    ],
    priority: 7,
  },
  {
    id: 'languages',
    category: 'Public Profile',
    title: 'Languages',
    headline:
      "Kartik's public LinkedIn profile lists English and Hindi language proficiency.",
    points: [
      'English: native or bilingual proficiency.',
      'Hindi: native or bilingual proficiency.',
      'The resume and website are in English, and the rest of the chatbot focuses on professional experience rather than personal background.',
    ],
    keywords: [
      'languages',
      'language',
      'speak',
      'speaks',
      'spoken',
      'english',
      'hindi',
      'native',
      'bilingual',
      'proficiency',
    ],
    sources: ['linkedin'],
    suggestions: [
      'What are his technical skills?',
      'What does LinkedIn highlight?',
      'How can I contact him?',
    ],
    priority: 5,
  },
  {
    id: 'writing',
    category: 'Writing',
    title: 'Substack Writing',
    headline:
      "Kartik's Substack focuses on global macro, investment frameworks, markets, economics, data, and code.",
    points: [
      'The Substack description says he works in global macro hedge funds and uses the publication to explore macro ideas, investment frameworks, and questions he is trying to understand in real time.',
      'His latest RSS item available to this site is "What Is Bitcoin Supposed to Be?" published February 7, 2026, with the subtitle "Narratives, incentives and the difficulty of anchoring value."',
      'That post argues that Bitcoin is impressive engineering but does not cleanly behave like gold, a transactional currency, or an inflation hedge; he frames it as a narrative-driven, reflexive speculative asset.',
    ],
    keywords: [
      'writing',
      'blog',
      'substack',
      'article',
      'articles',
      'essay',
      'essays',
      'write',
      'written',
      'recent',
      'recently',
      'post',
      'posts',
      'macro',
      'global macro',
      'investment frameworks',
      'markets',
      'economics',
      'bitcoin',
      'crypto',
      'cryptocurrency',
      'digital gold',
      'inflation hedge',
      'stablecoins',
      'narratives',
      'incentives',
      'value',
      'rss',
      'latest post',
      'latest article',
    ],
    sources: ['substack'],
    suggestions: [
      'What does his Substack cover?',
      'What is Kartik best at?',
      'Tell me about his macro experience',
    ],
    priority: 8,
  },
  {
    id: 'linkedin',
    category: 'Public Profile',
    title: 'LinkedIn Profile',
    headline:
      "Kartik's public LinkedIn profile positions him as an alpha quant researcher with global macro and software engineering experience.",
    points: [
      'The public profile shows Raleigh, North Carolina, 2K followers, and 500+ connections.',
      'It lists QMS Capital Management LP, UCLA Anderson, GIC, WeInvest, and Zoho ManageEngine experience, aligning with the resume and website.',
      'Public recommendations emphasize his rare mix of mathematics, programming, investing, humility, leadership, integrity, product ownership, and execution under pressure.',
    ],
    keywords: [
      'linkedin',
      'linked in',
      'public profile',
      'highlight',
      'highlights',
      'followers',
      'connections',
      'recommendations',
      'recommendation',
      'references',
      'reference',
      'endorsement',
      'testimonial',
      'raleigh',
      'north carolina',
      'humble',
      'leadership',
      'mathematics',
      'programming',
      'investing',
    ],
    sources: ['linkedin'],
    suggestions: [
      'What does LinkedIn highlight?',
      'Summarize his experience',
      'Why is he a strong quant candidate?',
    ],
    priority: 5,
  },
  {
    id: 'contact',
    category: 'Contact',
    title: 'Contact Information',
    headline:
      'The best way to contact Kartik is by email at kartikagarwal777@gmail.com.',
    points: [
      'He is based in Raleigh, NC.',
      'His resume also lists phone contact as (424) 440-9728.',
      'You can also reach or evaluate him through his LinkedIn profile, resume PDF, website, and Substack.',
    ],
    keywords: [
      'contact',
      'email',
      'phone',
      'call',
      'reach',
      'location',
      'based',
      'where',
      'raleigh',
      'north carolina',
      'nc',
      'gmail',
      'kartikagarwal777',
      'pdf',
      'download',
    ],
    sources: ['resume', 'website', 'linkedin', 'substack'],
    suggestions: [
      'Summarize his resume',
      'What does LinkedIn highlight?',
      'What is Kartik best at?',
    ],
    priority: 6,
  },
  {
    id: 'resources',
    category: 'Sources',
    title: 'Resume and Public Links',
    headline:
      "You can use the source links in this chat to open Kartik's resume, website, LinkedIn, and Substack.",
    points: [
      'Resume: /Kartik_Agarwal.pdf, available from the site header and the chat source chips.',
      'LinkedIn: https://www.linkedin.com/in/kartik-agarwal/.',
      'Substack: https://kartikag.substack.com.',
      'Website: https://kartik-agarwal.com/.',
    ],
    keywords: [
      'resource',
      'resources',
      'source',
      'sources',
      'links',
      'link',
      'download',
      'resume',
      'pdf',
      'website',
      'linkedin',
      'linked in',
      'substack',
      'public links',
    ],
    sources: ['resume', 'website', 'linkedin', 'substack'],
    suggestions: [
      'Summarize his resume',
      'What does LinkedIn highlight?',
      'What does his Substack cover?',
    ],
    priority: 6,
  },
  {
    id: 'interests',
    category: 'Personal',
    title: 'Personal Interests',
    headline:
      "Kartik's listed interests include sports, martial arts, cars, watches, horror movies, and video games.",
    points: [
      'The resume lists soccer, martial arts, tennis, car racing, and horology.',
      'The website adds watches, horror movies, and video games to that personal-interest section.',
    ],
    keywords: [
      'interests',
      'personal',
      'hobbies',
      'soccer',
      'football',
      'martial arts',
      'tennis',
      'car racing',
      'cars',
      'horology',
      'watches',
      'horror movies',
      'video games',
    ],
    sources: ['resume', 'website'],
    suggestions: [
      'What is Kartik best at?',
      'What does he write about?',
      'How can I contact him?',
    ],
    priority: 3,
  },
];

const stopWords = new Set([
  'a',
  'about',
  'am',
  'an',
  'and',
  'any',
  'are',
  'as',
  'ask',
  'at',
  'be',
  'can',
  'could',
  'did',
  'do',
  'does',
  'for',
  'from',
  'give',
  'has',
  'have',
  'he',
  'her',
  'him',
  'his',
  'how',
  'i',
  'in',
  'is',
  'it',
  'kartik',
  'know',
  'like',
  'me',
  'of',
  'on',
  'or',
  'please',
  'should',
  'show',
  'tell',
  'that',
  'the',
  'their',
  'this',
  'to',
  'want',
  'was',
  'what',
  'when',
  'where',
  'who',
  'why',
  'with',
  'would',
  'you',
]);

const intentBoosts: Record<string, string[]> = {
  bitcoin: ['writing', 'crypto', 'substack'],
  blog: ['writing', 'substack'],
  code: ['skills', 'python', 'programming'],
  coding: ['skills', 'python', 'programming'],
  contact: ['contact', 'email', 'phone', 'location'],
  cross: ['cross asset', 'cross-asset', 'fx', 'commodities', 'equities', 'fixed income'],
  education: ['education', 'school', 'ucla', 'vit'],
  email: ['contact', 'email'],
  experience: ['experience', 'qms', 'gic', 'ucla', 'zoho', 'weinvest'],
  highlight: ['linkedin', 'profile'],
  highlights: ['linkedin', 'profile'],
  hire: ['profile', 'strengths', 'leadership', 'experience'],
  investor: ['profile', 'alpha', 'portfolio', 'strategy', 'macro'],
  linkedin: ['linkedin', 'recommendations', 'public profile'],
  location: ['contact', 'raleigh'],
  latest: ['writing', 'substack', 'recent'],
  language: ['languages', 'english', 'hindi'],
  languages: ['languages', 'english', 'hindi'],
  ml: ['machine learning', 'xgboost', 'nlp', 'signals'],
  order: ['order flow', 'qms', 'signals'],
  os: ['operating systems', 'windows', 'mac', 'ubuntu'],
  phone: ['contact', 'phone'],
  post: ['writing', 'substack', 'article'],
  posts: ['writing', 'substack', 'articles'],
  projects: ['projects', 'nifty', 'statistical arbitrage'],
  publication: ['publication', 'paper', 'linkedin'],
  publications: ['publication', 'paper', 'linkedin'],
  published: ['publication', 'paper', 'linkedin'],
  qms: ['qms', 'hedge fund', 'alpha', 'strategies'],
  recent: ['writing', 'substack'],
  recently: ['writing', 'substack'],
  recommend: ['recommendations', 'references', 'linkedin'],
  recommended: ['recommendations', 'references', 'linkedin'],
  recommendation: ['recommendations', 'references', 'linkedin'],
  recommendations: ['recommendations', 'references', 'linkedin'],
  reference: ['recommendations', 'references', 'linkedin'],
  references: ['recommendations', 'references', 'linkedin'],
  referral: ['recommendations', 'references', 'linkedin'],
  referrals: ['recommendations', 'references', 'linkedin'],
  resume: ['resume', 'profile', 'summary', 'experience'],
  testimonial: ['recommendations', 'references', 'linkedin'],
  testimonials: ['recommendations', 'references', 'linkedin'],
  download: ['download', 'resources', 'pdf'],
  summarize: ['summary', 'profile', 'experience'],
  skills: ['skills', 'python', 'technical'],
  substack: ['substack', 'writing', 'bitcoin'],
  written: ['writing', 'substack', 'article'],
  write: ['writing', 'substack', 'article'],
  writing: ['writing', 'substack', 'macro'],
};

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/linked\s*in/g, 'linkedin')
    .replace(/e-mail/g, 'email')
    .replace(/[^a-z0-9+.#$-]+/g, ' ')
    .trim();
}

function tokenize(text: string) {
  const baseTokens = normalize(text)
    .split(/\s+/)
    .filter((token) => token.length > 1 && !stopWords.has(token));

  const boostedTokens = baseTokens.flatMap((token) => intentBoosts[token] ?? []);
  return Array.from(new Set([...baseTokens, ...boostedTokens]));
}

function countOccurrences(haystack: string, needle: string) {
  if (!needle) return 0;
  return haystack.split(needle).length - 1;
}

function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function includesWholeTerm(text: string, term: string) {
  return new RegExp(`\\b${escapeRegExp(term).replace(/\s+/g, '\\s+')}\\b`).test(text);
}

function entrySearchText(entry: KnowledgeEntry) {
  return normalize(
    [
      entry.id,
      entry.category,
      entry.title,
      entry.headline,
      entry.points.join(' '),
      entry.keywords.join(' '),
      entry.sources.map((sourceId) => sourceMap[sourceId].label).join(' '),
    ].join(' ')
  );
}

function scoreEntry(entry: KnowledgeEntry, question: string, tokens: string[]) {
  const normalizedQuestion = normalize(question);
  const searchText = entrySearchText(entry);
  const keywordText = normalize(entry.keywords.join(' '));
  const titleText = normalize(`${entry.title} ${entry.category} ${entry.id}`);

  let score = entry.priority ?? 0;

  for (const token of tokens) {
    if (keywordText.includes(token)) score += 8;
    if (titleText.includes(token)) score += 5;
    score += Math.min(countOccurrences(searchText, token), 4);
  }

  for (const keyword of entry.keywords) {
    const normalizedKeyword = normalize(keyword);
    if (normalizedKeyword.length > 2 && normalizedQuestion.includes(normalizedKeyword)) {
      score += normalizedKeyword.includes(' ') ? 14 : 7;
    }
  }

  return score;
}

function uniqueSources(sourceIds: SourceId[]) {
  return Array.from(new Set(sourceIds)).map((sourceId) => sourceMap[sourceId]);
}

function selectSuggestions(entries: KnowledgeEntry[]) {
  const suggestions = entries.flatMap((entry) => entry.suggestions);
  return Array.from(new Set([...suggestions, ...fallbackSuggestions])).slice(0, 4);
}

function replyFromEntry(entry: KnowledgeEntry): ChatbotReply {
  return {
    headline: entry.headline,
    points: entry.points.slice(0, 4),
    sources: uniqueSources(entry.sources),
    suggestions: selectSuggestions([entry]),
  };
}

function isGreeting(question: string) {
  const normalizedQuestion = normalize(question);
  return ['hi', 'hello', 'hey', 'yo'].includes(normalizedQuestion);
}

function isProfileQuestion(question: string) {
  const normalizedQuestion = normalize(question);

  return (
    /^(who|what)\s+(is|s)\s+(kartik|kartik agarwal|he)$/.test(normalizedQuestion) ||
    /^(tell|describe)\s+me\s+about\s+(kartik|kartik agarwal|him)$/.test(normalizedQuestion) ||
    /^(about|profile|overview)\s+(kartik|kartik agarwal)$/.test(normalizedQuestion)
  );
}

function isUnsupportedPersonalQuestion(question: string) {
  const normalizedQuestion = normalize(question);
  if (/\bhow\s+old\b/.test(normalizedQuestion)) {
    return true;
  }

  const unsupportedTerms = [
    'age',
    'birthday',
    'bisexual',
    'caste',
    'citizen',
    'citizenship',
    'date of birth',
    'disability',
    'disabled',
    'ethnicity',
    'gay',
    'girlfriend',
    'green card',
    'health',
    'h1b',
    'immigration',
    'lesbian',
    'lgbt',
    'lgbtq',
    'marital status',
    'married',
    'medical',
    'nationality',
    'political belief',
    'politics',
    'queer',
    'race',
    'religion',
    'salary',
    'sponsor',
    'sponsorship',
    'sexual orientation',
    'sexuality',
    'straight',
    'transgender',
    'visa',
    'wife',
    'work authorization',
  ];

  return unsupportedTerms.some((term) => includesWholeTerm(normalizedQuestion, term));
}

function isRecommendationsQuestion(question: string) {
  const normalizedQuestion = normalize(question);
  const recommendationTerms = [
    'endorsement',
    'endorsements',
    'recommendation',
    'recommendations',
    'recommended',
    'reference',
    'references',
    'referral',
    'referrals',
    'testimonial',
    'testimonials',
  ];

  return recommendationTerms.some((term) => normalizedQuestion.includes(term));
}

function getDirectTopicEntry(question: string) {
  const normalizedQuestion = normalize(question);

  if (
    (normalizedQuestion.includes('programming language') || normalizedQuestion.includes('coding language')) ||
    (normalizedQuestion.includes('languages') &&
      (includesWholeTerm(normalizedQuestion, 'code') ||
        includesWholeTerm(normalizedQuestion, 'coding') ||
        includesWholeTerm(normalizedQuestion, 'programming'))) ||
    (includesWholeTerm(normalizedQuestion, 'python') ||
      includesWholeTerm(normalizedQuestion, 'java') ||
      includesWholeTerm(normalizedQuestion, 'matlab') ||
      includesWholeTerm(normalizedQuestion, 'sql'))
  ) {
    return knowledgeEntries.find((entry) => entry.id === 'skills');
  }

  if (
    normalizedQuestion.includes('competition') ||
    normalizedQuestion.includes('chicago booth') ||
    normalizedQuestion.includes('cfa irc') ||
    includesWholeTerm(normalizedQuestion, 'snapchat')
  ) {
    return knowledgeEntries.find((entry) => entry.id === 'competitions');
  }

  if (
    (includesWholeTerm(normalizedQuestion, 'linkedin') && normalizedQuestion.includes('project')) ||
    normalizedQuestion.includes('accounting fundamentals') ||
    includesWholeTerm(normalizedQuestion, 'piotroski') ||
    normalizedQuestion.includes('asset hedging') ||
    normalizedQuestion.includes('bayesian estimation') ||
    ((includesWholeTerm(normalizedQuestion, 'crypto') || includesWholeTerm(normalizedQuestion, 'cryptocurrency')) &&
      (includesWholeTerm(normalizedQuestion, 'factor') ||
        includesWholeTerm(normalizedQuestion, 'factors') ||
        includesWholeTerm(normalizedQuestion, 'ml') ||
        normalizedQuestion.includes('machine learning') ||
        includesWholeTerm(normalizedQuestion, 'xgboost') ||
        includesWholeTerm(normalizedQuestion, 'pca'))) ||
    includesWholeTerm(normalizedQuestion, 'publication') ||
    includesWholeTerm(normalizedQuestion, 'published') ||
    includesWholeTerm(normalizedQuestion, 'paper')
  ) {
    return knowledgeEntries.find((entry) => entry.id === 'linkedin-projects');
  }

  if (
    normalizedQuestion.includes('power efficient') ||
    normalizedQuestion.includes('power-efficient') ||
    includesWholeTerm(normalizedQuestion, 'cloudsim') ||
    normalizedQuestion.includes('stock prediction') ||
    normalizedQuestion.includes('stock market prediction') ||
    normalizedQuestion.includes('knowledge sharing') ||
    includesWholeTerm(normalizedQuestion, 'php') ||
    includesWholeTerm(normalizedQuestion, 'javascript')
  ) {
    return knowledgeEntries.find((entry) => entry.id === 'early-technical-projects');
  }

  if (
    includesWholeTerm(normalizedQuestion, 'nifty') ||
    normalizedQuestion.includes('stat arb') ||
    normalizedQuestion.includes('statistical arbitrage') ||
    includesWholeTerm(normalizedQuestion, 'invoicing') ||
    includesWholeTerm(normalizedQuestion, 'startup') ||
    normalizedQuestion.includes('student fund') ||
    normalizedQuestion.includes('student led fund') ||
    normalizedQuestion.includes('student-led')
  ) {
    return knowledgeEntries.find((entry) => entry.id === 'projects');
  }

  return undefined;
}

function getEmployerEntry(question: string) {
  const normalizedQuestion = normalize(question);
  const isEducationContext = [
    'degree',
    'education',
    'mfe',
    'master',
    'school',
    'study',
    'studied',
    'university',
  ].some((term) => includesWholeTerm(normalizedQuestion, term));

  if (isEducationContext && (includesWholeTerm(normalizedQuestion, 'ucla') || includesWholeTerm(normalizedQuestion, 'vit'))) {
    return knowledgeEntries.find((entry) => entry.id === 'education');
  }

  if (includesWholeTerm(normalizedQuestion, 'qms')) {
    return knowledgeEntries.find((entry) => entry.id === 'qms');
  }

  if (
    includesWholeTerm(normalizedQuestion, 'gic') ||
    normalizedQuestion.includes('federal reserve') ||
    includesWholeTerm(normalizedQuestion, 'frb') ||
    includesWholeTerm(normalizedQuestion, 'ucla')
  ) {
    return knowledgeEntries.find((entry) => entry.id === 'previous-research');
  }

  if (
    includesWholeTerm(normalizedQuestion, 'zoho') ||
    normalizedQuestion.includes('manageengine') ||
    normalizedQuestion.includes('zeptomail') ||
    includesWholeTerm(normalizedQuestion, 'weinvest')
  ) {
    return knowledgeEntries.find((entry) => entry.id === 'engineering');
  }

  return undefined;
}

function getUnsupportedPersonalReply(): ChatbotReply {
  return {
    headline: "I do not have verified information about that in Kartik's public profile.",
    points: [
      "This chatbot only answers from Kartik's curated professional sources: resume, website, public LinkedIn profile, and Substack.",
      'For evaluating Kartik professionally, I can help with his quant experience, engineering background, technical skills, projects, writing, education, or contact details.',
    ],
    sources: [],
    suggestions: unsupportedPersonalSuggestions,
    isFallback: true,
  };
}

export function getWelcomeReply(): ChatbotReply {
  return {
    headline: 'What would you like to know about Kartik?',
    points: [
      'I can answer from his resume, website, public LinkedIn profile, and Substack knowledge base.',
      'Try asking about his quant experience, technical skills, selected projects, writing, education, or contact details.',
    ],
    sources: uniqueSources(['resume', 'website', 'linkedin', 'substack']),
    suggestions: starterQuestions,
  };
}

export function getChatbotReply(question: string): ChatbotReply {
  const tokens = tokenize(question);

  if (isGreeting(question)) {
    return getWelcomeReply();
  }

  if (isProfileQuestion(question)) {
    const profileEntry = knowledgeEntries.find((entry) => entry.id === 'profile');
    if (profileEntry) return replyFromEntry(profileEntry);
  }

  if (isUnsupportedPersonalQuestion(question)) {
    return getUnsupportedPersonalReply();
  }

  if (isRecommendationsQuestion(question)) {
    const recommendationsEntry = knowledgeEntries.find((entry) => entry.id === 'recommendations');
    if (recommendationsEntry) return replyFromEntry(recommendationsEntry);
  }

  const directTopicEntry = getDirectTopicEntry(question);
  if (directTopicEntry) {
    return replyFromEntry(directTopicEntry);
  }

  const employerEntry = getEmployerEntry(question);
  if (employerEntry) {
    return replyFromEntry(employerEntry);
  }

  if (tokens.length === 0) {
    return getWelcomeReply();
  }

  const matches = knowledgeEntries
    .map((entry) => ({
      entry,
      score: scoreEntry(entry, question, tokens),
    }))
    .filter((match) => match.score >= 12)
    .sort((a, b) => b.score - a.score);

  if (!matches.length) {
    return {
      headline: "I do not have that in Kartik's curated profile yet.",
      points: [
        'I can answer reliably about his resume, website, public LinkedIn profile, Substack writing, skills, projects, education, and contact details.',
        'For something more specific, the safest next step is to contact Kartik directly at kartikagarwal777@gmail.com.',
      ],
      sources: [],
      suggestions: fallbackSuggestions,
      isFallback: true,
    };
  }

  const topScore = matches[0].score;
  const selectionFloor = Math.max(12, topScore - 10);
  const selectedEntries = matches
    .filter((match) => match.score >= selectionFloor)
    .slice(0, topScore > 42 ? 2 : 1)
    .map((match) => match.entry);

  const [primaryEntry] = selectedEntries;
  const points = selectedEntries
    .flatMap((entry) => entry.points)
    .slice(0, selectedEntries.length > 1 ? 6 : 4);

  return {
    headline: primaryEntry.headline,
    points,
    sources: uniqueSources(selectedEntries.flatMap((entry) => entry.sources)),
    suggestions: selectSuggestions(selectedEntries),
  };
}
