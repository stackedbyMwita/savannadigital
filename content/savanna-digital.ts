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
    // Outfit loaded globally — no override needed
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
  work: [
    {
      slug:       'kenyabank-digital',
      title:      'KenyaBank Digital Overhaul',
      client:     'KenyaBank',
      category:   'Web Application',
      coverImage: '/sites/savanna-digital/work/kenyabank.jpg',
      tags:       ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
      summary:    'Complete rebuild of a legacy internet banking portal serving 1.2M customers. Reduced load time from 8s to 1.1s.',
      results: [
        { value: '340%', label: 'Digital transactions increase' },
        { value: '1.1s', label: 'Page load time'               },
        { value: '14wks', label: 'Delivery timeline'           },
      ],
    },
    {
      slug:       'mbiri-ecommerce',
      title:      'Mbiri Fashion eCommerce',
      client:     'Mbiri Collections',
      category:   'eCommerce',
      coverImage: '/sites/savanna-digital/work/mbiri.jpg',
      tags:       ['Next.js', 'Shopify', 'Tailwind'],
      summary:    'End-to-end eCommerce platform for a Nairobi-based fashion brand entering the East African market.',
      results: [
        { value: '280%', label: 'Revenue in first quarter' },
        { value: '4.8',  label: 'App store rating'         },
        { value: '60K',  label: 'Monthly active users'     },
      ],
    },
    {
      slug:       'agrohub-platform',
      title:      'AgroHub Farmer Platform',
      client:     'AgroHub Kenya',
      category:   'SaaS Platform',
      coverImage: '/sites/savanna-digital/work/agrohub.jpg',
      tags:       ['React Native', 'Supabase', 'Mapbox'],
      summary:    'Mobile-first platform connecting 40,000+ smallholder farmers to markets, weather data, and credit.',
      results: [
        { value: '40K+', label: 'Farmers onboarded'   },
        { value: '3',    label: 'Countries launched'  },
        { value: '22%',  label: 'Income increase avg' },
      ],
    },
  ],

  // ── Team ─────────────────────────────────────────────────
  team: [
    {
      slug:       'amina-oduya',
      name:       'Amina Oduya',
      role:       'Founder & CEO',
      department: 'Leadership',
      bio:        '10 years in product leadership across East Africa. Former Google Kenya, Microsoft Africa.',
      fullBio: [
        'Amina founded Savanna Digital Solutions in 2019 after a decade leading product teams at Google Kenya and Microsoft Africa. She saw a gap nobody was filling: world-class digital products built specifically for the African context, by people who actually understood it.',
        'Before Savanna DS, she led the consumer product team at Google Kenya, where she shipped features used by 12 million users. At Microsoft Africa, she managed a portfolio of enterprise products across 8 countries.',
        'She holds an MBA from Strathmore Business School and a BSc in Computer Science from the University of Nairobi. She is a World Economic Forum Young Global Leader and sits on the board of the Kenya ICT Board.',
      ],
      avatar:   '/sites/savanna-digital/team/amina.jpg',
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
      avatar:   '/sites/savanna-digital/team/david.jpg',
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
      avatar:   '/sites/savanna-digital/team/fatuma.jpg',
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
      avatar:   '/sites/savanna-digital/team/james.jpg',
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
      avatar:   '/sites/savanna-digital/team/wanjiku.jpg',
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
      avatar:   '/sites/savanna-digital/team/brian.jpg',
      linkedin: 'https://linkedin.com',
      twitter:  'https://twitter.com',
      skills:   ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD', 'Monitoring', 'Cost Optimisation'],
      projects: ['kenyabank-digital', 'kplc-portal', 'agrohub-platform'],
    },
  ],

  // ── Testimonials ─────────────────────────────────────────
  testimonials: [
    {
      quote:   'Savanna DS didn\'t just build our platform — they understood our market, our users, and our constraints. The result exceeded every benchmark we set.',
      author:  'James Weru',
      role:    'Chief Digital Officer',
      company: 'KenyaBank',
      avatar:  '/sites/savanna-digital/testimonials/james-weru.jpg',
    },
    {
      quote:   'We\'d worked with agencies in London and Dubai. Savanna DS delivered faster, understood Africa better, and the quality was world-class.',
      author:  'Priya Nair',
      role:    'CEO',
      company: 'Mbiri Collections',
      avatar:  '/sites/savanna-digital/testimonials/priya.jpg',
    },
    {
      quote:   'The AgroHub app changed how 40,000 farmers access markets. Savanna DS built something that actually works in the field — on 2G, in the rain.',
      author:  'Dr. Samuel Koech',
      role:    'Executive Director',
      company: 'AgroHub Kenya',
      avatar:  '/sites/savanna-digital/testimonials/samuel.jpg',
    },
  ],

  // ── Clients ──────────────────────────────────────────────
  clients: [
    { name: 'KenyaBank',    logo: '/sites/savanna-digital/clients/kenyabank.svg'  },
    { name: 'Farasicom',    logo: '/sites/savanna-digital/clients/safaricom.png'  },
    { name: 'AgroHub',      logo: '/sites/savanna-digital/clients/agrohub.svg'    },
    { name: 'Mbiri',        logo: '/sites/savanna-digital/clients/mbiri.svg'      },
    { name: 'KLCP',         logo: '/sites/savanna-digital/clients/kplc.svg'       },
    { name: 'Twiga Candy',  logo: '/sites/savanna-digital/clients/twiga.svg'      },
    { name: 'K-MOPA',       logo: '/sites/savanna-digital/clients/mkopa.svg'      },
    { name: 'Erand Bank',  logo: '/sites/savanna-digital/clients/equity.svg'     },
  ],

  // ── Blog ─────────────────────────────────────────────────
  blog: [
    {
      slug:       'building-for-africa',
      title:      'Why Building for Africa Requires a Different Approach',
      excerpt:    'The assumptions baked into most Western frameworks break when you hit the Kenyan market. Here\'s what we\'ve learned building for 14 countries.',
      coverImage: '/sites/savanna-digital/blog/building-for-africa.jpg',
      category:   'Strategy',
      date:       '2025-03-01',
      readTime:   '5 min read',
      author:     'Amina Oduya',
    },
    {
      slug:       'next-js-low-bandwidth',
      title:      'Optimising Next.js for Low-Bandwidth Networks',
      excerpt:    'How we shaved 6 seconds off KenyaBank\'s load time using edge functions, aggressive caching, and rethinking what "fast" means in Africa.',
      coverImage: '/sites/savanna-digital/blog/nextjs-bandwidth.jpg',
      category:   'Engineering',
      date:       '2025-02-14',
      readTime:   '8 min read',
      author:     'David Mwangi',
    },
    {
      slug:       'design-systems-africa',
      title:      'Design Systems for African Products',
      excerpt:    'Western design systems assume high literacy, large screens, and fast connections. We\'ve been building something different.',
      coverImage: '/sites/savanna-digital/blog/design-systems.jpg',
      category:   'Design',
      date:       '2025-01-22',
      readTime:   '6 min read',
      author:     'Fatuma Ali',
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