import { SiteConfig } from '@/types/site'

export const savannaDigital: SiteConfig = {

  // ── Identity ─────────────────────────────────────────────
  id:          'savanna-digital',
  name:        'Savanna Digital Solutions',
  tagline:     'Rooted in Africa. Built for the World.',
  description: 'East Africa\'s premier full-stack digital partner. We design and engineer products that scale.',
  url:         'https://savannahdm.vercel.app',

  logo: {
    full:    '/sites/savanna-digital/logo-full.svg',
    mark:    '/sites/savanna-digital/logo-mark.svg',
    light:   '/sites/savanna-digital/logo-light.svg',
    dark:    '/sites/savanna-digital/logo-dark.svg',
    favicon: '/sites/savanna-digital/favicon.ico',
  },

  // ── Brand tokens ─────────────────────────────────────────
  tokens: {
    primary:  '#1A6B3C',
    accent:   '#F59E0B',
    dark:     '#0D1F12',
    surface:  '#F5F0E8',
    text:     '#1C1C1E',
    muted:    '#64748B',
    border:   '#E2E8F0',
  },

  // ── Layout ───────────────────────────────────────────────
  layout: {
    heroIsDark:  false,   // light surface hero — dark logo/links always
    footerStyle: 'columns',
  },

  // ── Navigation ───────────────────────────────────────────
  nav: [
    { label: 'Home',     href: '/',           type: 'route'  },
    { label: 'About',    href: '/#about',     type: 'anchor' },
    { label: 'Services', href: '/#services',  type: 'anchor' },
    { label: 'Work',     href: '/work',      type: 'route' },
    { label: 'Blog',     href: '/blog',       type: 'route'  },
    { label: 'Team',     href: '/team',       type: 'route'  },
    { label: 'Contact',  href: '/contact',    type: 'route'  },
  ],

  // ── Hero ─────────────────────────────────────────────────
  hero: {
    eyebrow:        'East Africa\'s Digital Partner',
    headline:       ['We Build', 'Digital Products', 'That Scale.'],
    subheadline:    'Full-stack design and engineering for ambitious African businesses. From brand to product — we deliver end to end.',
    cta:            { label: 'Start a Project', href: '/contact' },
    secondaryCta:   { label: 'See Our Work',    href: '/work'    },
    backgroundType: 'gradient',
  },

  // ── Stats ────────────────────────────────────────────────
  stats: [
    { value: '120+', label: 'Projects Delivered' },
    { value: '14',   label: 'Countries Served'   },
    { value: '98%',  label: 'Client Retention'   },
    { value: '5yrs', label: 'In Business'         },
  ],

  // ── Services ─────────────────────────────────────────────
  services: [
    {
      icon:        'Code2',
      title:       'Web Development',
      description: 'Next.js, React, Node.js — fast, scalable, production-ready platforms built for African infrastructure.',
      href:        '/services#web',
    },
    {
      icon:        'Smartphone',
      title:       'Mobile Apps',
      description: 'iOS and Android apps built with React Native. Works on low-bandwidth networks.',
      href:        '/services#mobile',
    },
    {
      icon:        'Paintbrush',
      title:       'UI/UX Design',
      description: 'Human-centred design systems and prototypes. Research-led, pixel-precise.',
      href:        '/services#design',
    },
    {
      icon:        'Layers',
      title:       'Brand Identity',
      description: 'Logo, visual identity, brand strategy, and full design systems from scratch.',
      href:        '/services#brand',
    },
    {
      icon:        'Cloud',
      title:       'Cloud & DevOps',
      description: 'AWS, Vercel, Supabase deployments. CI/CD pipelines. Monitoring and scaling.',
      href:        '/services#cloud',
    },
    {
      icon:        'BarChart3',
      title:       'Data & Analytics',
      description: 'Dashboards, BI tools, and data pipelines that turn raw numbers into decisions.',
      href:        '/services#data',
    },
  ],

  // ── Work ─────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────
// WORK — paste this into savanna-digital.ts replacing the
// existing `work: [...]` block
// ─────────────────────────────────────────────────────────────

  work: [
    {
      slug:       'kenyabank-digital',
      title:      'KenyaBank Digital Overhaul',
      client:     'KenyaBank',
      category:   'Web Application',
      coverImage: '/sites/savanna-digital/work/kenyabank.png',
      tags:       ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
      summary:    'Complete rebuild of a legacy internet banking portal serving 1.2M customers. Reduced load time from 8s to 1.1s.',
      results: [
        { value: '340%',  label: 'Digital transactions increase' },
        { value: '1.1s',  label: 'Page load time'               },
        { value: '14wks', label: 'Delivery timeline'            },
      ],
      caseStudy: {
        year:      '2024',
        duration:  '14 weeks',
        services:  ['Web Development', 'UI/UX Design', 'Cloud & DevOps'],
        teamSlugs: ['David Mwangi', 'Fatuma Ali', 'Brian Otieno'],
        challenge: [
          "KenyaBank's internet banking portal was built in 2011. By 2024, it was serving 1.2 million customers on infrastructure that was never designed to scale.",
          "Page load times averaged 8 seconds on a good connection. On mobile — the primary device for 74% of their users — it regularly timed out entirely. Customer complaints had doubled year-on-year. The bank's digital transaction volume was 60% below industry benchmarks.",
          "They came to us with a mandate: rebuild it completely, improve performance by at least 5x, and do it without disrupting 1.2 million active users mid-migration.",
        ],
        approach: [
          "We started with three weeks of discovery — auditing every API, every user flow, every failure mode in the legacy system. We interviewed 40 customers across Nairobi, Mombasa, and Kisumu to understand how they actually used the portal.",
          "The new architecture was built on Next.js with server-side rendering for the authenticated dashboard, aggressive edge caching via Cloudflare, and a Node.js API layer that replaced 14 years of accumulated PHP endpoints.",
          "We ran the old and new systems in parallel for the last four weeks of development, migrating users in cohorts of 50,000 at a time, with instant rollback capability at every stage.",
        ],
        outcome: [
          "Load time dropped from 8.2 seconds to 1.1 seconds — a 7.4x improvement. Digital transaction volume increased 340% in the first quarter after launch.",
          "The migration was completed without a single hour of unplanned downtime. Zero rollbacks were needed. The portal now handles 3x peak load compared to the legacy system.",
        ],
        screenshots: [
          '/sites/savanna-digital/screenshots/banking-dashboard.png',
          '/sites/savanna-digital/screenshots/bank-transfer-flow.png',
        ],
      },
    },

    {
      slug:       'mbiri-ecommerce',
      title:      'Mbiri Fashion eCommerce',
      client:     'Mbiri Collections',
      category:   'eCommerce',
      coverImage: '/sites/savanna-digital/work/mbiri.png',
      tags:       ['Next.js', 'Shopify', 'Tailwind'],
      summary:    'End-to-end eCommerce platform for a Nairobi-based fashion brand entering the East African market.',
      results: [
        { value: '280%', label: 'Revenue in first quarter' },
        { value: '4.8',  label: 'App store rating'         },
        { value: '60K',  label: 'Monthly active users'     },
      ],
      caseStudy: {
        year:      '2024',
        duration:  '10 weeks',
        services:  ['Web Development', 'UI/UX Design', 'Brand Identity'],
        teamSlugs: ['Fatuma Ali', 'David Mwangi', 'Wanjiku Ndegwa'],
        challenge: [
          "Mbiri Collections had been selling through Instagram DMs and a basic Shopify template for three years. It worked — until it didn't. Manual order management was collapsing under the volume of their growing customer base.",
          "They needed a platform that felt as premium as their product, worked for customers in Kenya, Uganda, and Tanzania, and could handle M-PESA natively alongside card payments.",
        ],
        approach: [
          "We rebuilt the storefront in Next.js with a headless Shopify backend — retaining their existing product catalogue and order history while completely replacing the frontend experience.",
          "The design language was developed in tandem: editorial, warm, and distinctly East African. Every component was tested on 3G connections. We integrated Pesapal for M-PESA and card payments across all three markets.",
        ],
        outcome: [
          "Revenue increased 280% in the first quarter after launch. The app store rating climbed from 3.2 to 4.8. Monthly active users reached 60,000 within 90 days of go-live.",
          "Average order value increased 34% — attributed primarily to the improved product discovery and upsell flows we built into the new checkout experience.",
        ],
        screenshots: [
          '/sites/savanna-digital/screenshots/ecommerce-fashion-storefront.png',
          '/sites/savanna-digital/screenshots/fashion-product-detail.png',
        ],
      },
    },

    {
      slug:       'agrohub-platform',
      title:      'AgroHub Farmer Platform',
      client:     'AgroHub Kenya',
      category:   'SaaS Platform',
      coverImage: '/sites/savanna-digital/work/agrohub.png',
      tags:       ['React Native', 'Supabase', 'Mapbox'],
      summary:    'Mobile-first platform connecting 40,000+ smallholder farmers to markets, weather data, and credit.',
      results: [
        { value: '40K+', label: 'Farmers onboarded'   },
        { value: '3',    label: 'Countries launched'  },
        { value: '22%',  label: 'Income increase avg' },
      ],
      caseStudy: {
        year:      '2023',
        duration:  '20 weeks',
        services:  ['Mobile Apps', 'Web Development', 'Data & Analytics'],
        teamSlugs: ['David Mwangi', 'James Kariuki', 'Fatuma Ali'],
        challenge: [
          "AgroHub's mission is to connect smallholder farmers to markets, weather data, and credit — across Kenya, Uganda, and Tanzania. Their existing tools were a patchwork of WhatsApp groups and spreadsheets.",
          "The core challenge was brutal: most of their target users have low-bandwidth connections, entry-level Android phones, and limited digital literacy. Any product that didn't work in these conditions was not a product.",
        ],
        approach: [
          "We built mobile-first from day one — React Native on the frontend, Supabase on the backend, Mapbox for the field mapping features. Every screen was designed with a maximum of three taps to any critical action.",
          "We ran weekly field testing sessions in Nakuru and Eldoret, watching farmers use prototypes in real conditions. Eleven of our design decisions were reversed based on field feedback.",
          "Offline-first architecture meant the app worked on intermittent connections. Data synced automatically when connectivity was restored, with conflict resolution built in.",
        ],
        outcome: [
          "40,000 farmers onboarded in the first six months. Average income for active users increased 22% in the first crop cycle after adoption.",
          "The platform launched in Kenya and Uganda simultaneously, with Tanzania following eight weeks later. All three launches came in under budget and on schedule.",
        ],
        screenshots: [
          '/sites/savanna-digital/screenshots/farmer-platform-map.png',
          '/sites/savanna-digital/screenshots/farmer-marketplace-dashboard.png',
        ],
      },
    },

    {
      slug:       'equity-mobile',
      title:      'Equity Bank Mobile Redesign',
      client:     'Equity Bank',
      category:   'Mobile App',
      coverImage: '/sites/savanna-digital/work/equity-mobile.png',
      tags:       ['React Native', 'TypeScript', 'Node.js'],
      summary:    "End-to-end redesign of Equity Bank's mobile banking app. Reduced drop-off at onboarding by 44%.",
      results: [
        { value: '44%', label: 'Drop-off reduction' },
        { value: '4.6', label: 'App store rating'   },
        { value: '2M+', label: 'Active users'       },
      ],
      caseStudy: {
        year:      '2024',
        duration:  '12 weeks',
        services:  ['Mobile Development', 'UI/UX Design', 'User Research'],
        teamSlugs: ['Fatuma Ali', 'David Mwangi', 'Wanjiku Ndegwa'],
        challenge: [
          "Equity Bank's mobile app had 2 million registered users but a critical problem: 62% of new users dropped off before completing onboarding. The app was technically functional but the experience felt like a port of the web portal — not a native mobile product.",
          "The brief was focused: reduce onboarding drop-off, improve daily active usage, and bring the app up to the standard of the best financial apps on the continent — without rebuilding the entire backend.",
        ],
        approach: [
          "We started with six weeks of user research: session recordings, in-person usability testing in Nairobi and Mombasa, and interviews with 30 users who had abandoned the onboarding flow. The data pointed to three specific friction points — ID verification, PIN setup, and account linking.",
          "The redesign was built in React Native with a shared codebase across iOS and Android. We rebuilt the onboarding flow entirely: 12 steps down to 5, biometric authentication replacing PIN entry, and an M-PESA linking step that took 2 minutes instead of 8.",
        ],
        outcome: [
          "Onboarding drop-off fell from 62% to 18% — a 44 percentage point improvement. The app store rating climbed from 2.9 to 4.6 within 60 days of the new version going live.",
          "Daily active users increased 38% in the first quarter. The success of the mobile redesign led to a follow-on engagement to redesign the web portal.",
        ],
        screenshots: [
          '/sites/savanna-digital/screenshots/mobile-finance-onboarding.png',
          '/sites/savanna-digital/screenshots/bank-transfer-flow.png',
        ],
      },
    },

    {
      slug:       'twiga-dashboard',
      title:      'Twiga Foods Ops Dashboard',
      client:     'Twiga Foods',
      category:   'Web Application',
      coverImage: '/sites/savanna-digital/work/twiga-dashboard.png',
      tags:       ['Next.js', 'Supabase', 'Mapbox', 'Recharts'],
      summary:    'Real-time operations dashboard for tracking 3,000+ daily deliveries across Nairobi.',
      results: [
        { value: '3K+',  label: 'Daily deliveries tracked'  },
        { value: '18%',  label: 'Delivery efficiency gain'  },
        { value: '8wks', label: 'Delivery timeline'         },
      ],
      caseStudy: {
        year:      '2024',
        duration:  '8 weeks',
        services:  ['Web Development', 'Data & Analytics', 'UI/UX Design'],
        teamSlugs: ['David Mwangi', 'James Kariuki', 'Brian Otieno'],
        challenge: [
          "Twiga Foods was processing over 3,000 deliveries a day across Nairobi with no centralised view of operations. Dispatch teams were coordinating over WhatsApp. Route efficiency was managed through instinct. When deliveries went wrong, nobody knew until a vendor called to complain.",
          "They needed a single operations dashboard that gave dispatch, logistics, and management teams a real-time view of every delivery, every driver, and every exception — without requiring a six-month enterprise software implementation.",
        ],
        approach: [
          "We built on Next.js with Supabase as the real-time backend — Supabase's realtime subscriptions meant delivery status updates pushed to the dashboard instantly without polling. Mapbox handled the live map with driver locations and delivery routes.",
          "The entire build took 8 weeks. We shipped a working prototype to the operations team in week 3 and iterated based on their daily feedback for the remaining 5 weeks. Recharts handled all the analytics views — delivery volume, on-time rates, route efficiency by zone.",
        ],
        outcome: [
          "Delivery efficiency improved 18% in the first month — primarily through better route assignment and faster exception handling. The operations team now resolves delivery issues in an average of 4 minutes versus 23 minutes previously.",
          "The dashboard has since been extended to cover Twiga's expansion into Uganda, with a second phase adding predictive demand forecasting built on top of the data infrastructure we created.",
        ],
        screenshots: [
          '/sites/savanna-digital/screenshots/logistics-operations-dashboard.png',
          '/sites/savanna-digital/screenshots/live-delivery-map-dashboard.png',
        ],
      },
    },

    {
      slug:       'mkopa-brand',
      title:      'M-KOPA Brand Identity',
      client:     'M-KOPA',
      category:   'Brand Identity',
      coverImage: '/sites/savanna-digital/work/mkopa-brand.png',
      tags:       ['Brand Strategy', 'Visual Identity', 'Design System'],
      summary:    "Full brand refresh for M-KOPA's expansion into 4 new African markets. New identity, new design system.",
      results: [
        { value: '4',    label: 'New markets launched'   },
        { value: '60%',  label: 'Brand recall increase'  },
        { value: '12wk', label: 'Full rollout'           },
      ],
      caseStudy: {
        year:      '2023',
        duration:  '12 weeks',
        services:  ['Brand Strategy', 'Visual Identity', 'Design System', 'Motion Design'],
        teamSlugs: ['Fatuma Ali', 'Amina Oduya'],
        challenge: [
          "M-KOPA had built a powerful business — connected asset financing that had put smartphones, solar panels, and appliances in the hands of millions of people across East Africa. But their brand hadn't kept pace. It read as a startup brand trying to look corporate, rather than a category-defining company that had earned the right to lead.",
          "They were preparing to expand into 4 new markets simultaneously. They needed a brand that could work across Nigeria, Ghana, South Africa, and Ivory Coast — markets with different visual languages, different competitive landscapes, and different customer relationships with technology brands.",
        ],
        approach: [
          "We started with a brand audit and a two-week strategy sprint — reviewing M-KOPA's positioning, interviewing customers across Kenya, Uganda, and Nigeria, and mapping the competitive landscape in each new market.",
          "The new identity was built around the idea of 'everyday power' — practical, optimistic, and grounded. The visual system used a bold primary palette with market-specific accent colours, allowing each country team to have a brand that felt local while remaining unmistakably M-KOPA.",
          "We delivered the full identity system — logo, typography, colour system, iconography, photography direction, and a Figma-based design system — in 12 weeks. Every component was documented for handoff to internal teams.",
        ],
        outcome: [
          "The rebrand launched simultaneously across all 4 new markets. Brand recall research conducted 6 months later showed a 60% improvement in unaided brand awareness in the new markets.",
          "The design system has since been adopted by M-KOPA's internal product team and is used across their app, website, and all marketing materials.",
        ],
        screenshots: [
          '/sites/savanna-digital/screenshots/enterprise-design-system.png',
          '/sites/savanna-digital/screenshots/analytics-kpi-dashboard.png',
        ],
      },
    },

    {
      slug:       'kplc-portal',
      title:      'KPLC Self-Service Portal',
      client:     'KPLC',
      category:   'Web Application',
      coverImage: '/sites/savanna-digital/work/kplc-portal.png',
      tags:       ['Next.js', 'PostgreSQL', 'AWS', 'M-PESA API'],
      summary:    'Customer self-service portal for Kenya Power — bill payments, fault reporting, connection requests.',
      results: [
        { value: '500K',  label: 'Monthly active users'  },
        { value: '70%',   label: 'Call centre reduction' },
        { value: '99.9%', label: 'Uptime SLA'            },
      ],
      caseStudy: {
        year:      '2023',
        duration:  '18 weeks',
        services:  ['Web Development', 'Cloud & DevOps', 'UI/UX Design', 'API Integration'],
        teamSlugs: ['David Mwangi', 'Brian Otieno', 'James Kariuki'],
        challenge: [
          "Kenya Power's customer service operation was drowning. Their call centre was receiving 40,000 calls a month — 70% of which were for tasks that didn't require a human: bill payments, balance checks, fault reporting, new connection requests. The existing web portal was a dated, unreliable system that customers had largely given up on.",
          "The mandate was clear: build a self-service portal that actually works, integrates with M-PESA natively, and can handle peak load during billing cycles without falling over.",
        ],
        approach: [
          "We built on Next.js with a PostgreSQL backend on AWS RDS, behind a Node.js API layer. The M-PESA Daraja API integration was the most critical piece — we built a robust payment flow with comprehensive error handling, reconciliation, and receipt generation that worked even on unstable connections.",
          "The architecture was built for resilience from day one. Multi-region AWS deployment, aggressive caching at the edge via CloudFront, and a queue-based system for fault reports and connection requests that guaranteed no submissions were lost even during outages.",
          "We ran load testing simulating 10x expected peak traffic before go-live. The portal handled it without degradation.",
        ],
        outcome: [
          "500,000 monthly active users within 6 months of launch. Call centre volume dropped 70% — from 40,000 calls a month to under 12,000. The remaining calls are now genuinely complex issues that require human resolution.",
          "The portal maintains 99.9% uptime, including during the peak billing periods that used to bring down the previous system. KPLC has since commissioned a mobile app built on the same backend infrastructure.",
        ],
        screenshots: [
          '/sites/savanna-digital/screenshots/utility-billing-portal.png',
          '/sites/savanna-digital/screenshots/banking-dashboard-overview.png',
        ],
      },
    },

    {
      slug:       'farasicom-design-system',
      title:      'Farasicom Design System',
      client:     'Farasicom',
      category:   'UI/UX Design',
      coverImage: '/sites/savanna-digital/work/farasicom-design-system.png',
      tags:       ['Figma', 'React', 'Storybook', 'Design Tokens'],
      summary:    'Enterprise design system used across 12 internal products and 3 customer-facing apps.',
      results: [
        { value: '12',   label: 'Products using system'   },
        { value: '65%',  label: 'Design velocity increase' },
        { value: '200+', label: 'Components built'         },
      ],
      caseStudy: {
        year:      '2023',
        duration:  '24 weeks',
        services:  ['Design System', 'UI/UX Design', 'Frontend Development', 'Documentation'],
        teamSlugs: ['Fatuma Ali', 'David Mwangi', 'Amina Oduya'],
        challenge: [
          "Farasicom had 12 internal product teams building independently. The result was 12 different button styles, 8 different navigation patterns, and a user experience that felt like 12 different companies. New features took longer to design and build because every team was solving the same problems from scratch.",
          "They needed a design system — not a style guide, not a component library, but a full system: tokens, components, patterns, documentation, and the processes to keep it alive as the products evolved.",
        ],
        approach: [
          "We embedded with Farasicom's product teams for the first 4 weeks — auditing every product, cataloguing every UI pattern, and identifying the 20% of components that covered 80% of use cases across the portfolio.",
          "The system was built in parallel in Figma and React/Storybook. Design tokens defined the visual language — colours, typography, spacing, shadows, border radii — and these tokens flowed from Figma directly into the React component library via Style Dictionary.",
          "We ran weekly office hours with product teams throughout the build, incorporating their feedback and edge cases. By week 16, two teams had already migrated their products to the new system before it was officially launched.",
        ],
        outcome: [
          "200+ components shipped across Figma and Storybook, covering every product in the Farasicom portfolio. Design velocity across the organisation increased 65% in the first 6 months — measured by time from design handoff to production.",
          "The system is now maintained by a dedicated internal team at Farasicom. We continue to provide quarterly reviews and support for major new component additions.",
        ],
        screenshots: [
          '/sites/savanna-digital/screenshots/enterprise-design-system.png',
          '/sites/savanna-digital/screenshots/analytics-kpi-dashboard.png',
        ],
      },
    },
  ],

  // ── Team ─────────────────────────────────────────────────
  team: [
    {
      slug:       'amin-oduya',
      name:       'Amin Oduya',
      role:       'Founder & CEO',
      department: 'Leadership',
      bio:        '10 years in product leadership across East Africa. Former Google Kenya, Microsoft Africa.',
      fullBio: [
        'Amina founded Savanna Digital Solutions in 2019 after a decade leading product teams at Google Kenya and Microsoft Africa. She saw a gap nobody was filling: world-class digital products built specifically for the African context, by people who actually understood it.',
        'Before Savanna DS, she led the consumer product team at Google Kenya, where she shipped features used by 12 million users. At Microsoft Africa, she managed a portfolio of enterprise products across 8 countries.',
        'She holds an MBA from Strathmore Business School and a BSc in Computer Science from the University of Nairobi. She is a World Economic Forum Young Global Leader and sits on the board of the Kenya ICT Board.',
      ],
      avatar:   '/sites/savanna-digital/team/amin-oduya.png',
      linkedin: 'https://linkedin.com',
      twitter:  'https://twitter.com',
      skills:   ['Product Strategy', 'Business Development', 'Team Leadership', 'Fundraising', 'East African Markets'],
      projects: ['kenyabank-digital', 'mbiri-ecommerce', 'agrohub-platform'],
    },
    {
      slug:       'david-mwangi',
      name:       'David Mwangi',
      role:       'CTO & Lead Engineer',
      department: 'Engineering',
      bio:        'Full-stack engineer specialising in distributed systems. Previously at Andela.',
      fullBio: [
        'David is the technical backbone of Savanna DS. As CTO, he sets the engineering direction, makes architecture decisions, and still writes production code every week — a habit he refuses to give up.',
        'He joined Savanna DS from Andela, where he spent four years as a senior engineer, working with clients across the US and Europe. Before that, he built payment infrastructure at a Nairobi fintech startup that was acquired in 2018.',
        'He is a Next.js contributor and has spoken at multiple engineering conferences across Africa on building for low-bandwidth environments.',
      ],
      avatar:   '/sites/savanna-digital/team/david-mwangi.png',
      linkedin: 'https://linkedin.com',
      twitter:  'https://twitter.com',
      skills:   ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Distributed Systems', 'React Native'],
      projects: ['kenyabank-digital', 'agrohub-platform', 'twiga-dashboard'],
    },
    {
      slug:       'fatuma-ali',
      name:       'Fatuma Ali',
      role:       'Head of Design',
      department: 'Design',
      bio:        'Product designer with a focus on emerging market UX. Former Safaricom.',
      fullBio: [
        'Fatuma leads all design work at Savanna DS — from initial research and wireframes to final pixel-perfect deliverables and design systems. Her speciality is designing for emerging market users: low literacy, shared devices, constrained connections.',
        'Before joining Savanna DS, she spent three years at Safaricom on the M-PESA product team, designing flows used by over 30 million people. She has a deep understanding of what "good UX" actually means in the African context — and it\'s often different from what Western frameworks assume.',
        'She has a BA in Graphic Design from Kenyatta University and a UX certification from Google. She mentors young designers through the Nairobi Design Week programme.',
      ],
      avatar:   '/sites/savanna-digital/team/fatuma-ali.png',
      linkedin: 'https://linkedin.com',
      skills:   ['Product Design', 'Design Systems', 'User Research', 'Figma', 'Emerging Market UX', 'Prototyping'],
      projects: ['kenyabank-digital', 'mbiri-ecommerce', 'safaricom-design-system'],
    },
    {
      slug:       'james-kariuki',
      name:       'James Kariuki',
      role:       'Head of Data & Analytics',
      department: 'Engineering',
      bio:        'Data engineer and BI specialist. Built analytics infrastructure for 3 Kenyan unicorns.',
      fullBio: [
        'James leads data engineering and analytics at Savanna DS. He has built data infrastructure that processes millions of events daily, and BI dashboards that turn raw operational data into decisions executives can act on.',
        'Before Savanna DS, he built the data infrastructure at three of Kenya\'s most successful startups — two of which have since become unicorns. He has a particular talent for making data accessible to non-technical stakeholders without dumping it down.',
        'He holds a BSc in Statistics from the University of Nairobi and is a certified AWS Data Analytics specialist.',
      ],
      avatar:   '/sites/savanna-digital/team/james-kariuki.png',
      linkedin: 'https://linkedin.com',
      skills:   ['Data Engineering', 'Business Intelligence', 'Python', 'PostgreSQL', 'AWS Redshift', 'Tableau'],
      projects: ['agrohub-platform', 'twiga-dashboard', 'kplc-portal'],
    },
    {
      slug:       'wanjiku-ndegwa',
      name:       'Wanjiku Ndegwa',
      role:       'Head of Client Success',
      department: 'Operations',
      bio:        'Keeps clients happy and projects on track. PMP certified, 8 years in delivery management.',
      fullBio: [
        'Wanjiku runs the client side of Savanna DS. She is the person clients call when they need answers, the one who makes sure projects land on time, and the reason our client retention rate is 98%.',
        'She has 8 years of project and programme management experience, including 4 years managing enterprise software rollouts at Equity Bank. She is PMP certified and holds a Diploma in Project Management from USIU.',
        'Her philosophy: under-promise, over-deliver, communicate relentlessly. Clients always know exactly where their project stands — no surprises.',
      ],
      avatar:   '/sites/savanna-digital/team/wanjiku-ndegwa.png',
      linkedin: 'https://linkedin.com',
      skills:   ['Project Management', 'Client Relations', 'Agile', 'Risk Management', 'Stakeholder Communication'],
      projects: ['kenyabank-digital', 'mbiri-ecommerce', 'equity-mobile'],
    },
    {
      slug:       'brian-otieno',
      name:       'Brian Otieno',
      role:       'Head of Cloud & DevOps',
      department: 'Engineering',
      bio:        'AWS Solutions Architect. Built and maintained cloud infrastructure for 50+ production apps.',
      fullBio: [
        'Brian owns everything infrastructure at Savanna DS. CI/CD pipelines, deployment architecture, monitoring, scaling, cost optimisation — if it runs in the cloud, Brian built it or reviewed it.',
        'He is an AWS Solutions Architect (Professional) and has designed and maintained cloud infrastructure for over 50 production applications. He has a particular focus on reliability engineering — his systems maintain 99.9%+ uptime SLAs.',
        'Before Savanna DS, he ran cloud infrastructure for a pan-African telecoms company, managing systems that served 40 million subscribers across 7 countries.',
      ],
      avatar:   '/sites/savanna-digital/team/brian-otieno.png',
      linkedin: 'https://linkedin.com',
      twitter:  'https://twitter.com',
      skills:   ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD', 'Monitoring', 'Cost Optimisation'],
      projects: ['kenyabank-digital', 'kplc-portal', 'agrohub-platform'],
    },
  ],

  // ── Testimonials ─────────────────────────────────────────
 testimonials: [
  {
    quote: "Savanna DS didn't just build our platform, they understood our market, our users, and our constraints. The result exceeded every benchmark we set.",
    author: "James Weru",
    role: "Chief Digital Officer",
    company: "KenyaBank",
    avatar: `https://i.pravatar.cc/80?u=JamesWeru`,
  },
  {
    quote: "We'd worked with agencies in London and Dubai. Savanna DS delivered faster, understood Africa better, and the quality was world-class.",
    author: "Priya Nair",
    role: "CEO",
    company: "Mbiri Collections",
    avatar: `https://i.pravatar.cc/80?u=PriyaNair`,
  },
  {
    quote: "The AgroHub app changed how 40,000 farmers access markets. Savanna DS built something that actually works in the field, on 2G, in the rain.",
    author: "Dr. Samuel Koech",
    role: "Executive Director",
    company: "AgroHub Kenya",
    avatar: `https://i.pravatar.cc/80?u=SamuelKoech`,
  },

  {
    quote: "The new operations dashboard gave us something we never had before, a real-time picture of our entire delivery network. The efficiency gains were immediate.",
    author: "Daniel Mwangi",
    role: "Head of Logistics",
    company: "Twiga Foods",
    avatar: `https://i.pravatar.cc/80?u=DanielMwangi`,
  },
  {
    quote: "Our onboarding drop-off had been a persistent problem. Savanna DS redesigned the experience with incredible attention to user behaviour. The results were measurable within weeks.",
    author: "Grace Wanjiku",
    role: "Product Director",
    company: "Equity Bank",
    avatar: `https://i.pravatar.cc/80?u=GraceWanjiku`,
  },
  {
    quote: "Savanna DS approached our design system like an engineering problem, not just a design exercise. The result is a system our teams actually use every day.",
    author: "Patrick Njoroge",
    role: "Head of Product Platforms",
    company: "Safaricom",
    avatar: `https://i.pravatar.cc/80?u=PatrickNjoroge`,
  },
  {
    quote: "Our customer support calls dropped dramatically after the portal launched. Customers finally have a self-service experience that actually works.",
    author: "Rose Atieno",
    role: "Customer Experience Lead",
    company: "KPLC",
    avatar: `https://i.pravatar.cc/80?u=RoseAtieno`,
  },
  {
    quote: "The brand refresh repositioned M-KOPA for its next phase of growth. The identity system gave our teams the clarity and consistency we needed across multiple markets.",
    author: "David Okello",
    role: "Head of Brand",
    company: "M-KOPA",
    avatar: `https://i.pravatar.cc/80?u=DavidOkello`,
  },
],

  // ── Clients ──────────────────────────────────────────────
  clients: [
    { name: 'KenyaBank',    logo: '/sites/savanna-digital/clients/kenyabank.svg'  },
    { name: 'Farasicom',    logo: '/sites/savanna-digital/clients/safaricom.svg'  },
    { name: 'AgroHub',      logo: '/sites/savanna-digital/clients/agrohub.svg'    },
    { name: 'Mbiri',        logo: '/sites/savanna-digital/clients/mbiri.svg'      },
    { name: 'KLCP',         logo: '/sites/savanna-digital/clients/kplc.svg'       },
    { name: 'Twiga Candy',  logo: '/sites/savanna-digital/clients/twiga.svg'      },
    { name: 'K-MOPA',       logo: '/sites/savanna-digital/clients/mkopa.svg'      },
    { name: 'Erand Bank',  logo: '/sites/savanna-digital/clients/equity.svg'     },
  ],

  // ── Blog ─────────────────────────────────────────────────
  // ─────────────────────────────────────────────────────────────
// BLOG — paste this into savanna-digital.ts replacing blog: [...]
// Cover images rotate across the 3 available assets
// ─────────────────────────────────────────────────────────────

  blog: [
    {
      slug:       'building-for-africa',
      title:      'Why Building for Africa Requires a Different Approach',
      excerpt:    "The assumptions baked into most Western frameworks break when you hit the Kenyan market. Here's what we've learned building for 14 countries.",
      coverImage: '/sites/savanna-digital/blog/building-for-africa.png',
      category:   'Strategy',
      date:       '2025-03-01',
      readTime:   '5 min read',
      author: {
        name: 'Amina Oduya',
        avatar:   '/sites/savanna-digital/team/amina-oduya.png',
      },
      tags:       ['Africa', 'Strategy', 'Product'],
      toc: [
        'Wrong defaults',
        'The 14-second lesson',
        'Performance as constraint',
        'Bundle size discipline',
        'Designing for context',
        'What gets it right',
      ],
      body: [
        "When you start building software for African markets, the first thing you realise is that most of the assumptions baked into modern frameworks were made somewhere else. The defaults are wrong. The mental models don't fit. And if you just ship what works in London or San Francisco, you'll ship something that fails in Nairobi.",
        "We learned this the hard way on our second project — a financial dashboard for a regional bank. We'd built a beautiful React SPA, optimised it carefully, and were proud of the 2.1 second load time we'd achieved on a fibre connection. Then we tested it on a 3G SIM card in Westlands. It took 14 seconds. The client's customers in Kisumu and Mombasa were on something slower.",
        "That moment changed how we build everything. It forced us to think about performance not as a nice-to-have, but as the primary design constraint. A product that doesn't load isn't a product. It's just a liability.",
        "The practical implications are significant. We stopped defaulting to single-page applications for anything that doesn't need real-time interactivity. We embraced Next.js server components early and aggressively. We started treating JavaScript bundle size like money — every kilobyte has a cost, and someone is paying it.",
        "But performance is only part of the picture. The deeper challenge is designing for contexts your team may never have lived. Low literacy doesn't mean low intelligence. Shared devices mean you can't assume account persistence. M-PESA isn't just a payment method — it's the payment method, and anything that doesn't integrate with it fluently will be ignored.",
        "The teams that get this right aren't necessarily smarter. They're just more curious. They test in the field. They watch real users — not focus group users — struggle with their interfaces, and they take it personally. They build for the person who has fifteen minutes of battery left and a shaky signal, not the person sitting at a desk with a charger and a gigabit connection.",
        "We're still learning. Every project teaches us something we didn't know. But the principle is solid: if it works here, in these conditions, with these constraints — it will work anywhere.",
      ],
    },

    {
      slug:       'next-js-low-bandwidth',
      title:      'Optimising Next.js for Low-Bandwidth Networks',
      excerpt:    "How we shaved 6 seconds off KenyaBank's load time using edge functions, aggressive caching, and rethinking what \"fast\" means in Africa.",
      coverImage: '/sites/savanna-digital/blog/nextjs-bandwidth.png',
      category:   'Engineering',
      date:       '2025-02-14',
      readTime:   '8 min read',
      author: {
        name: 'David Mwangi',
        avatar: '/sites/savanna-digital/team/david-mwangi.png',
      },
      tags:       ['Next.js', 'Engineering', 'Performance'],
      toc: [
        'The real benchmark',
        'Server components first',
        'Edge caching strategy',
        'Image optimisation',
        'Fonts without flash',
        'Measuring what matters',
      ],
      body: [
        "Speed benchmarks are a lie if you're measuring them from the wrong place. When we started the KenyaBank rebuild, our CI pipeline reported a Lighthouse score of 94. On a fibre connection in Nairobi's Westlands, the portal loaded in 1.8 seconds. We were proud. Then we tested from Kisumu on a 3G SIM.",
        "8.4 seconds. On a good day. The Lighthouse score meant nothing to a customer trying to check their balance before their matatu arrived.",
        "The first and most impactful change was moving almost everything to Next.js server components. No more shipping a 400KB JavaScript bundle to render a dashboard that could be HTML. Server components meant the heavy lifting happened at the edge, not on a customer's phone.",
        "The second lever was aggressive cache configuration at the Cloudflare layer. Static assets got a one-year cache header. API responses that rarely changed — account summaries, transaction categories — got a 60-second stale-while-revalidate policy. The cache hit rate went from 34% to 91% within a week of deployment.",
        "Image optimisation sounds obvious but most teams do it wrong. The issue isn't just compression — it's format and sizing. We switched entirely to WebP with AVIF fallback, and more importantly, we stopped serving desktop-sized images to mobile devices. Next.js Image with proper sizes attributes cut our image payload by 71%.",
        "Fonts were causing a flash of unstyled text on every page load. The fix was simple but non-obvious: preload the font files in the document head, use font-display optional instead of swap, and host the fonts ourselves rather than fetching from Google Fonts on every request.",
        "The result: 1.1 seconds on fibre, 3.4 seconds on 3G — a 7.4x improvement on the metric that actually matters to customers. The Lighthouse score went up too, but that was just a side effect.",
      ],
    },

    {
      slug:       'design-systems-africa',
      title:      'Design Systems for African Products',
      excerpt:    "Western design systems assume high literacy, large screens, and fast connections. We've been building something different.",
      coverImage: '/sites/savanna-digital/blog/design-systems.png',
      category:   'Design',
      date:       '2025-01-22',
      readTime:   '6 min read',
      author: {
        name: 'Fatuma Ali',
        avatar:   '/sites/savanna-digital/team/fatuma-ali.png',
      },
      tags:       ['Design', 'Design Systems', 'Africa'],
      toc: [
        'The wrong starting point',
        'Literacy as a constraint',
        'Screen size reality',
        'Colour and cultural context',
        'Token architecture',
        'Testing in the field',
      ],
      body: [
        "Most design system guides start with typography. Specifically, they start with a type scale calibrated for a MacBook Pro at 1440px width, using a beautiful variable font that takes 200KB to load, displayed at a size that assumes the reader is sitting 60cm from the screen.",
        "That starting point is wrong for most of the world, and definitively wrong for East Africa.",
        "The constraint that changes everything isn't bandwidth — it's literacy. Not the ability to read, but reading fluency under pressure: on a small screen, in bright sunlight, while doing something else. Icon-first interfaces that work without reading are more than accessible design — they're often the faster path for every user.",
        "Screen size reality in the markets we build for skews heavily toward mid-range Android phones with 5-inch screens. Not 6.7-inch flagship displays. This means touch targets need to be larger, not smaller. It means content hierarchies that work in portrait-only. It means no hover states — ever.",
        "Colour carries cultural weight that varies significantly across the continent. The greens, golds, and terracottas we use at Savanna Digital aren't arbitrary — they're deliberately chosen to feel familiar and trustworthy in East African contexts. A design system built for a Nigerian fintech should feel different from one built for a South African retailer, even if the component architecture underneath is identical.",
        "Our token architecture reflects this. Semantic tokens — color.primary, color.surface, color.feedback.success — are defined once and mapped to market-specific values at the theme level. The same button component renders in Savanna green in Kenya and a different palette entirely in another market. One codebase, multiple brands, zero duplication.",
        "We test every component in the field before shipping. Not in a browser with device emulation — in actual conditions, on actual devices, with actual users. The number of design decisions that get reversed in a single afternoon of field testing would surprise you.",
      ],
    },

    {
      slug:       'mpesa-integration-guide',
      title:      "The Developer's Guide to M-PESA Integration",
      excerpt:    'Daraja API is powerful but unforgiving. After integrating it into six production products, here is everything we wish we had known.',
      coverImage: '/sites/savanna-digital/blog/building-for-africa.png',
      category:   'Engineering',
      date:       '2024-12-10',
      readTime:   '10 min read',
      author: {
        name: 'David Mwangi',
        avatar:   '/sites/savanna-digital/team/david-mwangi.png',
      },
      tags:       ['M-PESA', 'Engineering', 'API', 'Fintech'],
      toc: [
        'Daraja API overview',
        'STK Push flow',
        'Callback handling',
        'Error codes that matter',
        'Reconciliation strategy',
        'Testing without going live',
      ],
      body: [
        "M-PESA processes more transactions daily than most African banks combined. When you integrate Daraja — Safaricom's developer API — you're plugging into infrastructure that is genuinely critical to how Kenya's economy moves. That comes with expectations.",
        "The STK Push flow is deceptively simple on paper: your server calls the API, the customer gets a PIN prompt on their phone, they enter their PIN, your callback URL receives the result. In practice, the gap between 'receives the result' and 'reliably handles the result in all network conditions' is where most integrations fall apart.",
        "Callback handling is the hardest part, and most documentation undersells it. Your callback URL needs to be publicly accessible, respond with HTTP 200 within 5 seconds, and handle duplicate callbacks idempotently — Safaricom will retry on timeout, and you will receive the same transaction notification more than once if you're not careful.",
        "The error codes that matter most are C2B00016 (request already in progress — implement a per-phone-number lock), 1032 (request cancelled by user — don't retry automatically), and the silent failure where the callback simply never arrives. Build a reconciliation job from day one, not after your first production incident.",
        "Reconciliation is non-negotiable. Every transaction should have a status in your database that can be one of: pending, confirmed, failed, or reconciled. A background job should run every 15 minutes querying the Daraja transaction status endpoint for anything that's been pending for more than 3 minutes. This single pattern has saved us from every M-PESA-related incident across six integrations.",
        "Testing without going live is possible but limited. The sandbox environment doesn't simulate network failures, doesn't send real PIN prompts, and has different latency characteristics than production. The most valuable thing you can do before go-live is a controlled test with 10 real transactions on the production environment using a test phone number, observing the full flow end-to-end.",
        "Done right, M-PESA integration is one of the most satisfying pieces of engineering you'll ship in the African market. It works. It's fast. Customers trust it completely. The engineering just needs to be solid enough not to let them down.",
      ],
    },

    {
      slug:       'mvp-to-scale-lessons',
      title:      "From MVP to Scale: What Changes and What Doesn't",
      excerpt:    'We have taken three products from zero to 100,000 users. The technical lessons are not what you expect.',
      coverImage: '/sites/savanna-digital/blog/nextjs-bandwidth.png',
      category:   'Product',
      date:       '2024-11-05',
      readTime:   '7 min read',
      author: {
        name: 'Amina Oduya',
        avatar:   '/sites/savanna-digital/team/amina-oduya.png',
      },
      tags:       ['Product', 'Strategy', 'Scaling'],
      toc: [
        'What scales automatically',
        'What breaks at 10K users',
        'Database decisions that matter',
        'The team inflection point',
        'Feature creep at scale',
        'What stays the same',
      ],
      body: [
        "The most dangerous phase in a product's life is not the MVP. The MVP is liberating — constraints are clear, decisions are fast, and failure is cheap. The dangerous phase is between 1,000 and 10,000 users, when you're too big to move freely but too small for the engineering investments that scale requires.",
        "Three things break at 10,000 users that worked fine at 1,000. The first is database queries that weren't indexed properly — they were fast enough on small data sets that nobody noticed. The second is email or notification delivery that was synchronous — it worked fine when you had 50 signups a day, but it blocks your API at 500. The third is any feature that touched every record in a table.",
        "Database decisions at the MVP stage have a longer tail than any other architectural choice. The schema you design for your first 1,000 users is the schema you'll still be migrating away from at 500,000. Not because it was wrong — it probably wasn't — but because the access patterns you couldn't predict at the start become obvious at scale, and changing them is expensive.",
        "The team inflection point is less obvious but more consequential. At small scale, everyone knows everything. At larger scale, nobody can — and the systems you build to replace shared knowledge (documentation, conventions, code review culture) determine whether growth accelerates or creates friction.",
        "Feature creep at scale is different from feature creep at the MVP stage. Early features are added because you don't know what matters. Late features are added because you do know what matters, but you're under pressure to show growth. The products that scale best are ruthlessly disciplined about what they don't build.",
        "What stays the same across every stage: the importance of understanding why users do what they do, not just what they do. Analytics tell you the what. User research tells you the why. The teams that confuse the two end up optimising for the wrong thing at every stage.",
        "Scale amplifies everything — good decisions and bad ones. The best time to fix a structural problem is before you need to.",
      ],
    },

    {
      slug:       'supabase-production-lessons',
      title:      'Supabase in Production: A Year of Lessons',
      excerpt:    'We have shipped five production applications on Supabase. Here is what the documentation does not tell you.',
      coverImage: '/sites/savanna-digital/blog/design-systems.png',
      category:   'Engineering',
      date:       '2024-10-18',
      readTime:   '9 min read',
      author: {
        name: 'David Mwangi',
        avatar:   '/sites/savanna-digital/team/david-mwangi.png',
      },
      tags:       ['Supabase', 'Engineering', 'Backend', 'PostgreSQL'],
      toc: [
        'RLS from day one',
        'Connection pooling',
        'Realtime in practice',
        'Edge functions trade-offs',
        'Backup strategy',
        'When to reach for something else',
      ],
      body: [
        "Supabase is genuinely good. We've shipped five production applications on it in the past 18 months — ranging from a real-time logistics dashboard to a multi-tenant SaaS product — and we'd use it again. But the documentation is optimistic, and production is not.",
        "Row Level Security needs to be designed before you write a single query, not added later. The RLS mental model — every query has an implicit user context, and the database enforces access at the row level — is powerful but requires you to think about permissions at the data model level, not the application layer. Teams that add RLS after the fact spend two weeks debugging queries that silently return empty sets.",
        "Connection pooling is not optional in production. Supabase uses PostgreSQL, and PostgreSQL has a hard limit on concurrent connections that you will hit if you're running multiple serverless functions. PgBouncer is built into Supabase but you need to use the pooling connection string, not the direct connection string. The documentation mentions this. Most teams miss it until their first traffic spike.",
        "Realtime works exactly as advertised for simple use cases — subscribing to table changes and pushing updates to connected clients. It gets complicated when you combine it with RLS, because realtime subscriptions need to be filtered through the same access policies as regular queries, and the filtering happens client-side by default, not server-side.",
        "Edge functions have a cold start problem that matters more in low-bandwidth environments than the documentation suggests. A 400ms cold start is invisible on a fast connection. It's noticeable at 3G. We've moved latency-sensitive operations back to a traditional Node.js API on several projects specifically because of this.",
        "Backup strategy: Supabase handles automated backups, but daily snapshots on the Pro plan mean your RTO could involve up to 24 hours of data loss. If that's unacceptable, supplement with pg_dump to S3 on a shorter schedule. We use 6-hour intervals for anything customer-facing.",
        "When to reach for something else: Supabase is the right default for most applications we build. Reach for something else when you need multi-region active-active replication, fundamentally graph-shaped access patterns, or a schema that changes so frequently that migration overhead becomes a bottleneck. For everything else — Supabase.",
      ],
    },

    {
      slug:       'client-management-agency',
      title:      'How We Run Client Projects Without Losing Our Minds',
      excerpt:    'Process is not bureaucracy. The right amount of structure is what lets a small team do big work without burning out.',
      coverImage: '/sites/savanna-digital/blog/building-for-africa.png',
      category:   'Operations',
      date:       '2024-09-03',
      readTime:   '6 min read',
      author: {
        name: 'Amina Oduya',
        avatar:   '/sites/savanna-digital/team/amina-oduya.png',
      },
      tags:       ['Operations', 'Process', 'Agency'],
      toc: [
        'The kickoff that actually works',
        'Weekly rhythm',
        'Scope management',
        'Feedback without chaos',
        'Handoff standards',
        'What we stopped doing',
      ],
      body: [
        "The agency that taught us the most about project management was one we never worked with. We inherited their half-finished codebase on a project that had gone badly wrong — no documentation, no test suite, a client who had lost faith, and a team that had lost the thread of what they were building. It took us four weeks to understand what we had.",
        "The kickoff meeting that actually works is not a features walkthrough. It's a constraints and success criteria session. What does done look like? What does failure look like? Who has final say on design decisions? Who has final say on technical decisions? Getting these answers documented in week one prevents 80% of the arguments in week eight.",
        "Weekly rhythm is more important than any project management tool. We do three things every week without exception: a 30-minute internal sync on Monday to align the team, a written progress update to the client on Wednesday, and a 45-minute client call on Friday to demo what was built and agree on next week's priorities. The tools change. The rhythm doesn't.",
        "Scope management is not about saying no. It's about making the cost of additions visible. When a client asks for a new feature mid-project, the answer is always: yes, and here's what it would push back or what we'd remove to accommodate it. That framing — trade-offs, not refusals — keeps scope conversations collaborative rather than adversarial.",
        "Feedback without chaos requires a single source of truth. All feedback goes into one place, and the rule is simple: verbal feedback in a meeting doesn't exist until it's written down. This sounds harsh until a client thanks you for it because they can't remember what they asked for three weeks ago either.",
        "Handoff standards have saved more client relationships than any amount of communication. Every project ends with the same package: a recorded walkthrough of the codebase, a README that explains how to run everything locally, environment variable documentation, and a 90-day post-launch support plan.",
        "What we stopped doing: estimating tasks in hours. Hours are fiction. We estimate in confidence levels and flag uncertainty explicitly. A low-confidence estimate with visible reasoning builds more trust than a precise number that turns out to be wrong.",
      ],
    },

    {
      slug:       'react-native-east-africa',
      title:      'React Native for East African Mobile Apps: What Works',
      excerpt:    'Three apps. 80,000 users. Here is what we know about shipping React Native in markets where the devices are mid-range and the connections are variable.',
      coverImage: '/sites/savanna-digital/blog/nextjs-bandwidth.png',
      category:   'Engineering',
      date:       '2024-08-12',
      readTime:   '8 min read',
      author: {
        name: 'David Mwangi',
        avatar:   '/sites/savanna-digital/team/david-mwangi.png',
      },
      tags:       ['React Native', 'Engineering', 'Mobile', 'Africa'],
      toc: [
        'Why React Native',
        'The device matrix',
        'Offline-first architecture',
        'Image handling',
        'Push notifications',
        'App store realities',
      ],
      body: [
        "React Native is the right choice for most mobile apps we build in East Africa, and the reason has nothing to do with JavaScript. It's because a single codebase means a smaller team can maintain a higher-quality product across both iOS and Android — and in markets where Android represents 85% of the user base but iOS represents a disproportionate share of premium customers, you need both.",
        "The device matrix is the first thing you need to understand. The median Android device in Kenya is not a Samsung Galaxy S-series. It's a Tecno or Infinix with 3GB of RAM, a MediaTek processor, and a 720p display. Your app needs to be smooth on that device, not just on the Pixel 8 you use for development. Test on real mid-range hardware from week one.",
        "Offline-first architecture is not a feature — it's a baseline requirement. Variable connectivity means you cannot assume a network request will succeed. Every critical user action needs to work offline and sync when connectivity returns. We use a combination of React Query's persistence layer and SQLite via expo-sqlite for anything that needs to survive an app restart.",
        "Image handling is where React Native performance problems usually hide. The default Image component is not optimised for the volume of images most apps need. We use expo-image on every project now — it handles progressive loading, disk caching, and format selection in a way the default component doesn't. The difference in perceived performance on mid-range devices is significant.",
        "Push notifications in Africa have a reliability problem that nobody talks about publicly. Firebase Cloud Messaging works well, but delivery rates on some Android OEM skins — particularly Tecno and itel — are significantly lower than on stock Android because of aggressive battery management that kills background processes. The fix involves a combination of foreground services for critical notifications and educating users to whitelist the app in battery settings.",
        "App store realities: the Google Play Store is the primary distribution channel, but a meaningful percentage of users in some markets sideload apps from outside the store. Plan your update strategy accordingly — if you ship a breaking API change, users on old APKs who never visit the Play Store will break silently. Version your API from day one.",
        "React Native isn't perfect — there are categories of apps where Flutter or native is the right choice. But for the data-driven, API-connected applications that most of our clients need, it remains the fastest path to a high-quality cross-platform product.",
      ],
    },
  ],

  // ── Contact ──────────────────────────────────────────────
  contact: {
    email:   'hello@savannadigital.co.ke',
    phone:   '+254 700 000 000',
    address: '5th Floor, Westlands Square, Nairobi, Kenya',
    services: [
      'Web Development',
      'Mobile App',
      'UI/UX Design',
      'Brand Identity',
      'Cloud & DevOps',
      'Data & Analytics',
      'Other',
    ],
    budgetRanges: [
      'Under $1,000',
      '$1,000 – $5,000',
      '$5,000 – $15,000',
      '$15,000 – $50,000',
      '$50,000+',
      'Not sure yet',
    ],
  },

  // ── SEO ──────────────────────────────────────────────────
  seo: {
    titleTemplate: '%s | Savanna Digital Solutions',
    ogImage:       '/sites/savanna-digital/og.jpg',
    keywords: [
      'web development kenya',
      'digital agency nairobi',
      'next.js kenya',
      'mobile app development africa',
      'ui ux design nairobi',
      'software company kenya',
    ],
    twitterHandle: '@savannadigital',
  },

  // ── Footer ───────────────────────────────────────────────
  footer: {
    tagline: 'Rooted in Africa. Built for the World.',
    links: [
      {
        group: 'Company',
        items: [
          { label: 'About',   href: '/about'   },
          { label: 'Work',    href: '/work'    },
          { label: 'Blog',    href: '/blog'    },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        group: 'Services',
        items: [
          { label: 'Web Development', href: '/services#web'    },
          { label: 'Mobile Apps',     href: '/services#mobile' },
          { label: 'UI/UX Design',    href: '/services#design' },
          { label: 'Brand Identity',  href: '/services#brand'  },
          { label: 'Cloud & DevOps',  href: '/services#cloud'  },
          { label: 'Data Analytics',  href: '/services#data'   },
        ],
      },
      {
        group: 'Legal',
        items: [
          { label: 'Privacy Policy',    href: '/privacy'    },
          { label: 'Terms of Service',  href: '/terms'      },
          { label: 'Cookie Policy',     href: '/cookies'    },
        ],
      },
    ],
    socials: [
      { platform: 'linkedin',  href: 'https://linkedin.com/company/savanna-digital' },
      { platform: 'instagram', href: 'https://instagram.com/savannadigital'         },
      { platform: 'twitter',   href: 'https://twitter.com/savannadigital'           },
      { platform: 'behance',   href: 'https://behance.net/savannadigital'           },
    ],
    legal: '© 2025 Savanna Digital Solutions Ltd. All rights reserved.',
  },
}