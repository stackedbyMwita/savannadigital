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
    navbarStyle: 'solid',
    footerStyle: 'columns',
  },

  // ── Navigation ───────────────────────────────────────────
  nav: [
    { label: 'Home',     href: '/' },
    { label: 'About',    href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Work',     href: '/work' },
    { label: 'Blog',     href: '/blog' },
    { label: 'Contact',  href: '/contact' },
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
      name:     'Amina Oduya',
      role:     'Founder & CEO',
      bio:      '10 years in product leadership across East Africa. Former Google Kenya, Microsoft Africa.',
      avatar:   '/sites/savanna-digital/team/amina.jpg',
      linkedin: 'https://linkedin.com',
    },
    {
      name:     'David Mwangi',
      role:     'CTO & Lead Engineer',
      bio:      'Full-stack engineer specialising in distributed systems. Previously at Andela.',
      avatar:   '/sites/savanna-digital/team/david.jpg',
      linkedin: 'https://linkedin.com',
    },
    {
      name:     'Fatuma Ali',
      role:     'Head of Design',
      bio:      'Product designer with a focus on emerging market UX. Former Safaricom.',
      avatar:   '/sites/savanna-digital/team/fatuma.jpg',
      linkedin: 'https://linkedin.com',
    },
    {
      name:     'James Kariuki',
      role:     'Head of Data & Analytics',
      bio:      'Data engineer and BI specialist. Built analytics infrastructure for 3 Kenyan unicorns.',
      avatar:   '/sites/savanna-digital/team/james.jpg',
      linkedin: 'https://linkedin.com',
    },
    {
      name:     'Wanjiku Ndegwa',
      role:     'Head of Client Success',
      bio:      'Keeps clients happy and projects on track. PMP certified, 8 years in delivery management.',
      avatar:   '/sites/savanna-digital/team/wanjiku.jpg',
      linkedin: 'https://linkedin.com',
    },
    {
      name:     'Brian Otieno',
      role:     'Head of Cloud & DevOps',
      bio:      'AWS Solutions Architect. Built and maintained cloud infrastructure for 50+ production apps.',
      avatar:   '/sites/savanna-digital/team/brian.jpg',
      linkedin: 'https://linkedin.com',
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
    { name: 'Safaricom',    logo: '/sites/savanna-digital/clients/safaricom.svg'  },
    { name: 'AgroHub',      logo: '/sites/savanna-digital/clients/agrohub.svg'    },
    { name: 'Mbiri',        logo: '/sites/savanna-digital/clients/mbiri.svg'      },
    { name: 'KPLC',         logo: '/sites/savanna-digital/clients/kplc.svg'       },
    { name: 'Twiga Foods',  logo: '/sites/savanna-digital/clients/twiga.svg'      },
    { name: 'M-KOPA',       logo: '/sites/savanna-digital/clients/mkopa.svg'      },
    { name: 'Equity Bank',  logo: '/sites/savanna-digital/clients/equity.svg'     },
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