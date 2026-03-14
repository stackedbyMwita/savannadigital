import { SiteConfig } from '@/types/site'

export const chaiClay: SiteConfig = {

  // ── Identity ─────────────────────────────────────────────
  id:          'chai-clay',
  name:        'Chai & Clay Interiors',
  tagline:     'Where Kenya Comes Home.',
  description: 'Nairobi-born interiors studio fusing Swahili craftsmanship with modern luxury. Residential, commercial, and hospitality design.',
  url:         'https://chaiandclay.vercel.app',

  logo: {
    full:    '/sites/chai-clay/logo-full.svg',
    mark:    '/sites/chai-clay/logo-mark.svg',
    light:   '/sites/chai-clay/logo-light.svg',
    dark:    '/sites/chai-clay/logo-dark.svg',
    favicon: '/sites/chai-clay/favicon.ico',
  },

  // ── Brand tokens ─────────────────────────────────────────
  tokens: {
    primary:  '#C2714F',   // Terracotta
    accent:   '#B8962E',   // Brass
    dark:     '#2C1810',   // Espresso
    surface:  '#FAF3E0',   // Cream
    text:     '#1C1410',   // Warm near-black
    muted:    '#8A7560',   // Warm gray
    border:   '#E8DCCF',   // Warm border
  },

  // ── Layout ───────────────────────────────────────────────
  layout: {
    heroIsDark:  true,    // full-bleed image hero — use light logo + nav
    footerStyle: 'columns',
  },

  // ── Navigation ───────────────────────────────────────────
  nav: [
    { label: 'Home',      href: '/',            type: 'route'  },
    { label: 'About',     href: '/#about',      type: 'anchor' },
    { label: 'Services',  href: '/#services',   type: 'anchor' },
    { label: 'Work',      href: '/work',         type: 'route'  },
    { label: 'Journal',   href: '/blog',         type: 'route'  },
    { label: 'Team',      href: '/team',         type: 'route'  },
    { label: 'Contact',   href: '/contact',      type: 'route'  },
  ],

  // ── Hero ─────────────────────────────────────────────────
  hero: {
    eyebrow:        'Nairobi Interior Design Studio',
    headline:       ['Spaces That', 'Tell Your', 'Story.'],
    subheadline:    'We design interiors that weave Kenyan craft, material, and soul into spaces worth living in. Residential, commercial, and hospitality — from concept to completion.',
    cta:            { label: 'Book a Consultation', href: '/contact' },
    secondaryCta:   { label: 'See Our Portfolio',   href: '/work'    },
    backgroundType: 'image',
    backgroundSrc:  '/sites/chai-clay/hero.png',
  },

  // ── Stats ────────────────────────────────────────────────
  stats: [
    { value: '80+',  label: 'Projects Completed' },
    { value: '12yrs', label: 'Years of Practice'  },
    { value: '4',    label: 'Design Awards'       },
    { value: '100%', label: 'Client Satisfaction' },
  ],

  // ── Services ─────────────────────────────────────────────
  services: [
    {
      icon:        'Home',
      title:       'Residential Design',
      description: 'Full-service interior design for homes, apartments, and private residences. From a single room to a complete home transformation.',
      href:        '/#services',
    },
    {
      icon:        'Building2',
      title:       'Commercial Interiors',
      description: 'Office and commercial spaces designed to inspire, impress, and perform. Brand identity expressed in every square metre.',
      href:        '/#services',
    },
    {
      icon:        'Hotel',
      title:       'Hospitality Design',
      description: 'Boutique hotels, lodges, restaurants, and bars. Spaces that guests remember long after they leave.',
      href:        '/#services',
    },
    {
      icon:        'Wrench',
      title:       'Renovation & Refurbishment',
      description: 'Breathing new life into existing spaces — structural rethinks, material upgrades, and full interior overhauls.',
      href:        '/#services',
    },
    {
      icon:        'Palette',
      title:       'Design Consultancy',
      description: 'One-off consultation sessions for clients who need expert direction — materials, layouts, colour, lighting, furniture.',
      href:        '/#services',
    },
    {
      icon:        'Package',
      title:       'Furniture & Procurement',
      description: 'Bespoke furniture sourcing and procurement. Kenyan craftsmen, imported pieces, and custom commissions.',
      href:        '/#services',
    },
  ],

  // ── Work ─────────────────────────────────────────────────
  work: [
    {
      slug:       'sankara-suite',
      title:      'Sankara Hotel Signature Suite',
      client:     'Sankara Nairobi',
      category:   'Hospitality',
      coverImage: '/sites/chai-clay/work/sankara-suite.png',
      tags:       ['Hospitality', 'Luxury', 'Custom Furniture'],
      summary:    'Complete redesign of 6 signature suites at Sankara Nairobi. Lamu wood, hand-woven sisal, and bespoke brass fixtures throughout.',
      results: [
        { value: '40%', label: 'Increase in suite bookings' },
        { value: '6',   label: 'Suites redesigned'          },
        { value: '4.9', label: 'Guest satisfaction score'   },
      ],
      caseStudy: {
        year:      '2024',
        duration:  '16 weeks',
        services:  ['Hospitality Design', 'Furniture & Procurement', 'Design Consultancy'],
        teamSlugs: ['Aisha Kamau', 'Kofi Mensah'],
        challenge: [
          "Sankara Nairobi's signature suites had served the hotel well for nearly a decade — but they no longer reflected the calibre of guest the hotel was attracting. The brief was to redesign 6 suites to justify a premium rate tier without a complete structural rebuild.",
          "The challenge was specificity: the new interiors had to feel distinctly Kenyan and distinctly luxurious simultaneously. Generic safari references were off-limits. The spaces had to feel like they could only exist in Nairobi.",
        ],
        approach: [
          "We began with a materials audit — sourcing lamu-wood craftsmen in Malindi, hand-woven sisal suppliers in Nyeri, and a Nairobi brass workshop that had been producing custom fixtures for 30 years. Every material had to have provenance.",
          "The design language was built around restraint and texture rather than pattern or colour. Warm terracotta walls, raw linen curtains, sisal rugs with a 4cm pile, and custom brass bedside lamps that referenced traditional Swahili lantern forms.",
          "We worked directly with the hotel's operations team throughout — every furniture piece was assessed for maintenance, durability, and ease of housekeeping. Luxury that can't survive guest use isn't luxury.",
        ],
        outcome: [
          "Suite bookings increased 40% in the first quarter after the redesign launched. Guest satisfaction scores for the signature tier reached 4.9/5 — the highest in the hotel's history.",
          "The project was featured in Architectural Digest Africa and shortlisted for the Kenya Interior Design Awards 2024.",
        ],
        screenshots: [
          '/sites/chai-clay/screenshots/sankara-bedroom.png',
          '/sites/chai-clay/screenshots/sankara-lounge.png',
        ],
      },
    },
    {
      slug:       'muthaiga-residence',
      title:      'Muthaiga Private Residence',
      client:     'Private Client',
      category:   'Residential',
      coverImage: '/sites/chai-clay/work/muthaiga-residence.png',
      tags:       ['Residential', 'Full Home', 'Bespoke Furniture'],
      summary:    'Complete interior design of a 6-bedroom Muthaiga residence. A family home that holds Kenya in every corner.',
      results: [
        { value: '6',    label: 'Bedrooms designed'     },
        { value: '8mo',  label: 'Project duration'      },
        { value: '100%', label: 'Client satisfaction'   },
      ],
      caseStudy: {
        year:      '2024',
        duration:  '32 weeks',
        services:  ['Residential Design', 'Furniture & Procurement', 'Renovation & Refurbishment'],
        teamSlugs: ['Aisha Kamau', 'Kofi Mensah', 'Njeri Waweru'],
        challenge: [
          "A Muthaiga family had purchased a 1960s colonial residence and wanted it transformed into a home that honoured the structure's history while feeling completely contemporary and unmistakably Kenyan.",
          "The brief included 6 bedrooms, 4 reception rooms, a home office, and a outdoor entertaining space. Every room needed its own identity within a coherent whole.",
        ],
        approach: [
          "We started with the architecture — working with a structural engineer to open up the main living area, removing a load-bearing wall that had made the ground floor feel fragmented. The renovation created a 14-metre open plan that could accommodate family life and large-scale entertaining.",
          "Materials were sourced from across Kenya: Kisii soapstone for kitchen surfaces, Malindi coral stone for the outdoor terrace, Kitengela glass for the feature staircase, and kitenge fabric from a Nairobi weaver for the main bedroom upholstery.",
          "Furniture was a mix of custom commissions from Kenyan craftsmen, carefully selected East African antiques, and a handful of contemporary international pieces chosen for quality and longevity.",
        ],
        outcome: [
          "The residence was completed on schedule after 32 weeks. The family described it as 'the most Kenya we have ever felt in our own home'. The project has since been referenced in 4 separate magazine features.",
          "Three subsequent referrals were generated directly from this project — all to clients who visited the home as guests.",
        ],
        screenshots: [
          '/sites/chai-clay/screenshots/muthaiga-living.png',
          '/sites/chai-clay/screenshots/muthaiga-kitchen.png',
        ],
      },
    },
    {
      slug:       'tribe-hotel-bar',
      title:      'Tribe Hotel — Lobby Bar Redesign',
      client:     'Tribe Hotel',
      category:   'Hospitality',
      coverImage: '/sites/chai-clay/work/tribe-bar.png',
      tags:       ['Hospitality', 'Bar Design', 'Custom Joinery'],
      summary:    "Complete redesign of Tribe Hotel's lobby bar. A gathering space that feels simultaneously ancient and completely contemporary.",
      results: [
        { value: '65%', label: 'Revenue increase post-launch' },
        { value: '12wk', label: 'Design to delivery'          },
        { value: '4.8',  label: 'Ambiance rating on TripAdvisor' },
      ],
      caseStudy: {
        year:      '2023',
        duration:  '12 weeks',
        services:  ['Hospitality Design', 'Furniture & Procurement'],
        teamSlugs: ['Aisha Kamau', 'Kofi Mensah'],
        challenge: [
          "Tribe Hotel's lobby bar was underperforming. Guests used it briefly before dinner but rarely stayed. The hotel's GM described it as 'a place people pass through, not a place people choose'.",
          "The brief was to redesign the bar to become a destination in its own right — a space that attracted Nairobi's social set independently of the hotel's room guests.",
        ],
        approach: [
          "We stripped everything back to the shell and rebuilt from a clear concept: a Kenyan drinking den that could have existed for a hundred years. Low lighting from custom brass pendants. Walls clad in locally sourced red sandstone. A bar counter built from reclaimed railway sleepers sourced from the Kenya Railways heritage yard.",
          "Seating was a deliberate mix of intimate two-person booths, a communal high table, and loose club chairs — designed to work for dates, group gatherings, and solo drinkers with equal comfort.",
          "We worked closely with the hotel's F&B team to ensure the design supported efficient service — bar layout, sightlines, and storage were all specified before a single piece of furniture was ordered.",
        ],
        outcome: [
          "Bar revenue increased 65% in the first quarter after reopening. TripAdvisor ambiance ratings climbed from 3.9 to 4.8. The bar now features regularly in 'best bars in Nairobi' editorial content.",
          "The project generated two direct hospitality referrals — both boutique hotel clients who visited Tribe and asked for the same sensibility in their own spaces.",
        ],
        screenshots: [
          '/sites/chai-clay/screenshots/tribe-bar-full.png',
          '/sites/chai-clay/screenshots/tribe-bar-detail.png',
        ],
      },
    },
    {
      slug:       'karen-office-campus',
      title:      'Karen Office Campus',
      client:     'Private Corporation',
      category:   'Commercial',
      coverImage: '/sites/chai-clay/work/karen-office.png',
      tags:       ['Commercial', 'Office Design', 'Biophilic'],
      summary:    '3,200sqm corporate campus in Karen designed around biophilic principles and Kenyan material culture.',
      results: [
        { value: '3.2K', label: 'Square metres designed' },
        { value: '28%',  label: 'Staff retention improvement' },
        { value: '6mo',  label: 'Project duration'      },
      ],
      caseStudy: {
        year:      '2023',
        duration:  '24 weeks',
        services:  ['Commercial Interiors', 'Design Consultancy', 'Furniture & Procurement'],
        teamSlugs: ['Aisha Kamau', 'Njeri Waweru'],
        challenge: [
          "A Nairobi-based financial services firm was expanding into a new Karen campus and wanted a workplace that would attract and retain top talent — in a market where competition for skilled professionals was intense.",
          "The brief was explicit: the space needed to feel nothing like a bank. It needed to feel like the best place these people could imagine working.",
        ],
        approach: [
          "We built the design around four principles: connection to nature, connection to Kenya, acoustic comfort, and flexibility. Every floor included a planted atrium zone with local species. Natural materials — stone, timber, woven grass panels — were used throughout.",
          "Collaborative spaces were designed with acoustic screening so they actually functioned as collaborative spaces rather than performative open-plan noise zones. Individual focus pods were woven throughout the floor plate.",
          "Kenyan art was integrated from the outset — not as afterthought wall decoration but as part of the spatial planning. 14 commissioned works from Kenyan artists were specified before construction began.",
        ],
        outcome: [
          "Staff retention improved 28% in the first year post-move — a metric the client tracked specifically because of the investment in the space. The campus was featured in Corporate Interior Design magazine as a case study in biophilic workplace design in emerging markets.",
        ],
        screenshots: [
          '/sites/chai-clay/screenshots/karen-atrium.png',
          '/sites/chai-clay/screenshots/karen-collaborative.png',
        ],
      },
    },
    {
      slug:       'runda-villa',
      title:      'Runda Villa — Holiday Let',
      client:     'Private Client',
      category:   'Residential',
      coverImage: '/sites/chai-clay/work/runda-villa.png',
      tags:       ['Residential', 'Holiday Let', 'Airbnb Design'],
      summary:    '4-bedroom Runda villa designed for premium Airbnb rental. Booked 47 weeks of the year in its first year.',
      results: [
        { value: '47wk', label: 'Annual occupancy (Year 1)'  },
        { value: '4.96', label: 'Airbnb rating'              },
        { value: '3x',   label: 'Return vs original estimate' },
      ],
      caseStudy: {
        year:      '2023',
        duration:  '10 weeks',
        services:  ['Residential Design', 'Furniture & Procurement'],
        teamSlugs: ['Kofi Mensah', 'Njeri Waweru'],
        challenge: [
          "A client had purchased a Runda property as a rental investment and wanted it designed specifically to perform as a premium Airbnb listing — not just to look good in photos, but to generate consistent 5-star reviews through the quality of the physical experience.",
          "The target guest was international: business travellers, high-net-worth families visiting Kenya, and luxury leisure travellers who would compare the property to the best boutique hotels they had stayed in.",
        ],
        approach: [
          "We approached this project like a small boutique hotel rather than a residential rental. Every material was selected for durability, ease of cleaning, and photogenic quality. Every furniture choice was assessed for comfort and longevity under heavy use.",
          "Linens, towels, and bathroom amenities were specified to hotel standard. Storage was maximised throughout — guests staying for 2 weeks need real wardrobe space. The kitchen was equipped like a serious cook's kitchen because guests who rent a villa for 2 weeks want to cook.",
          "Photography was planned as part of the design process — we lit and styled the property for the listing shoot before it was live.",
        ],
        outcome: [
          "The property achieved 47 weeks of occupancy in its first year on Airbnb — against a projected 30 weeks. It consistently rated 4.96 stars. Three bookings in Year 1 were direct referrals from guests who had stayed and recommended it to friends.",
          "Rental revenue was 3x the client's original estimate. They have since commissioned a second property.",
        ],
        screenshots: [
          '/sites/chai-clay/screenshots/runda-master.png',
          '/sites/chai-clay/screenshots/runda-pool.png',
        ],
      },
    },
    {
      slug:       'lavington-apartment',
      title:      'Lavington Apartment — Full Fit-Out',
      client:     'Private Client',
      category:   'Residential',
      coverImage: '/sites/chai-clay/work/lavington-apt.png',
      tags:       ['Residential', 'Apartment', 'Small Space'],
      summary:    '90sqm Lavington apartment transformed into a home that punches well above its square footage.',
      results: [
        { value: '90sqm', label: 'Total area'         },
        { value: '8wk',   label: 'Design to delivery' },
        { value: '4',     label: 'Rooms redesigned'   },
      ],
      caseStudy: {
        year:      '2024',
        duration:  '8 weeks',
        services:  ['Residential Design', 'Furniture & Procurement'],
        teamSlugs: ['Aisha Kamau'],
        challenge: [
          "A young professional had purchased a 90sqm Lavington apartment and wanted it to feel generous, characterful, and completely unlike every other apartment in the development — without a structural renovation.",
          "The brief: make it feel like a home that has been curated over years, not assembled in a weekend.",
        ],
        approach: [
          "Scale was the primary tool. Contrary to conventional small-space advice, we used large-format furniture — a generous sofa, a full-height bookshelf, oversized art — to make the space feel confident rather than apologetic.",
          "Every piece of furniture had to earn its place. Dual-function pieces throughout: a storage ottoman that works as a coffee table, a dining table that extends for entertaining, built-in shelving that conceals the TV, AV equipment, and a bar trolley.",
          "Colour was used boldly — terracotta feature walls, brass fixtures, and a hand-painted geometric floor in the entrance that announced character immediately.",
        ],
        outcome: [
          "The apartment was delivered in 8 weeks. The client described it as 'finally feeling like an adult with a proper home'. It has since been featured on the client's Instagram to considerable attention — generating 3 inbound enquiries for Chai & Clay.",
        ],
        screenshots: [
          '/sites/chai-clay/screenshots/lavington-living.png',
          '/sites/chai-clay/screenshots/lavington-bedroom.png',
        ],
      },
    },
    {
      slug:       'westlands-restaurant',
      title:      'Westlands Restaurant — Brand New Concept',
      client:     'Confidential',
      category:   'Hospitality',
      coverImage: '/sites/chai-clay/work/westlands-restaurant.png',
      tags:       ['Restaurant Design', 'Hospitality', 'Brand New Concept'],
      summary:    'Ground-up interior design for a new Westlands restaurant concept. Open 3 months — already fully booked weekends.',
      results: [
        { value: '180',  label: 'Covers designed'          },
        { value: '3mo',  label: 'To full weekend bookings'  },
        { value: '4.9',  label: 'Google ambiance rating'   },
      ],
      caseStudy: {
        year:      '2024',
        duration:  '14 weeks',
        services:  ['Hospitality Design', 'Furniture & Procurement', 'Design Consultancy'],
        teamSlugs: ['Aisha Kamau', 'Kofi Mensah'],
        challenge: [
          "A restaurant group opening a new concept in Westlands needed an interior that would generate organic social media content, support a 180-cover dining room, and feel completely unique in a neighbourhood saturated with dining options.",
          "The brief: every corner of this restaurant should be photographable. Every table should be the best table in the room.",
        ],
        approach: [
          "We designed the space in zones — each with a distinct material palette and lighting mood, but unified by a consistent design language. The bar area was theatrical. The main dining room was warm and intimate. A private dining room used full-bleed botanical wallpaper and candlelight exclusively.",
          "Lighting design was treated as seriously as furniture. We worked with a specialist lighting consultant to create layered, controllable environments that transitioned from lunch to dinner service seamlessly.",
          "Every bespoke element was designed for longevity and Instagrammability simultaneously — the hand-painted ceiling mural, the brass cocktail bar, the fluted terracotta tile feature wall.",
        ],
        outcome: [
          "The restaurant achieved full weekend bookings within 3 months of opening. Google ambiance ratings sit at 4.9. Three separate food media features cited the interior as a reason to visit.",
        ],
        screenshots: [
          '/sites/chai-clay/screenshots/westlands-dining.png',
          '/sites/chai-clay/screenshots/westlands-bar.png',
        ],
      },
    },
    {
      slug:       'gigiri-diplomat-residence',
      title:      'Gigiri Diplomatic Residence',
      client:     'Diplomatic Mission (Confidential)',
      category:   'Residential',
      coverImage: '/sites/chai-clay/work/gigiri-residence.png',
      tags:       ['Residential', 'Diplomatic', 'Protocol Design'],
      summary:    'Interior design of a Gigiri diplomatic residence that balances formal protocol requirements with genuine Kenyan character.',
      results: [
        { value: '12',  label: 'Rooms designed'      },
        { value: '6mo', label: 'Project duration'     },
        { value: '3',   label: 'Countries represented' },
      ],
      caseStudy: {
        year:      '2023',
        duration:  '26 weeks',
        services:  ['Residential Design', 'Design Consultancy', 'Furniture & Procurement'],
        teamSlugs: ['Aisha Kamau', 'Njeri Waweru'],
        challenge: [
          "A diplomatic mission required their Gigiri residence to function as both a private family home and a formal entertaining space for state-level events — with protocol requirements that constrained the design in specific ways.",
          "The additional brief: the residence should feel genuinely rooted in Kenya, not generic diplomatic beige.",
        ],
        approach: [
          "We separated the design into two modes — private family spaces designed for warmth and ease, and formal reception areas designed for protocol and impression.",
          "The formal spaces used Kenyan materials at a scale appropriate to the building's grandeur: floor-to-ceiling Lamu carved door panels, a commissioned sisal tapestry in the main reception hall, and a dining table built from a single reclaimed Mugumo fig slab.",
          "Private family spaces were designed without constraint — warm, personal, and completely unpretentious. The kitchen was the client's specific request: 'It must feel like home, not like a diplomatic kitchen'.",
        ],
        outcome: [
          "The residence has since hosted 3 head-of-state events and received extensive coverage in diplomatic and design media. The mission has commissioned Chai & Clay for a second property in Mombasa.",
        ],
        screenshots: [
          '/sites/chai-clay/screenshots/gigiri-reception.png',
          '/sites/chai-clay/screenshots/gigiri-dining.png',
        ],
      },
    },
  ],

  // ── Team ─────────────────────────────────────────────────
  team: [
    {
      slug:       'aisha-kamau',
      name:       'Aisha Kamau',
      role:       'Founder & Principal Designer',
      department: 'Leadership',
      bio:        '12 years in interior design. BIID accredited. Trained in London, rooted in Nairobi.',
      fullBio: [
        "Aisha founded Chai & Clay in 2012 after returning to Nairobi from six years in London, where she trained at Kingston School of Art and worked at two of the city's most respected residential studios.",
        "She came back with a question that has driven the studio ever since: why does Kenyan interior design so often look elsewhere for its references? The answer Chai & Clay offers is in every project — materials, craft, and spatial ideas drawn from East African culture and translated into contemporary living.",
        "Aisha is accredited by the British Institute of Interior Design (BIID) and sits on the committee of the Kenya Interior Designers Association. She has lectured on material culture and interior design at Kenyatta University.",
      ],
      avatar:   '/sites/chai-clay/team/aisha-kamau.png',
      linkedin: 'https://linkedin.com',
      skills:   ['Residential Design', 'Hospitality Design', 'Material Sourcing', 'Project Direction', 'Client Relations'],
      projects: ['sankara-suite', 'muthaiga-residence', 'tribe-hotel-bar', 'gigiri-diplomat-residence'],
    },
    {
      slug:       'kofi-mensah',
      name:       'Kofi Mensah',
      role:       'Senior Designer',
      department: 'Design',
      bio:        'Interior architect specialising in hospitality and commercial spaces. 8 years at Chai & Clay.',
      fullBio: [
        "Kofi joined Chai & Clay in 2016 and has been the design lead on every major hospitality project since. His background is in interior architecture — he trained at the University of Ghana before completing a master's in Interior Architecture at the Politecnico di Milano.",
        "His particular talent is spatial sequencing — the way a guest or customer moves through a space, what they see at each turn, how a room makes them feel before they consciously register any specific element. It's what makes the hospitality projects consistently generate social media content without being designed for it.",
        "Outside the studio, Kofi is a serious furniture collector — particularly mid-century West African pieces — and this sensibility comes through in every project he leads.",
      ],
      avatar:   '/sites/chai-clay/team/kofi-mensah.png',
      linkedin: 'https://linkedin.com',
      skills:   ['Interior Architecture', 'Hospitality Design', 'Spatial Planning', 'Lighting Design', 'Custom Joinery'],
      projects: ['tribe-hotel-bar', 'westlands-restaurant', 'sankara-suite', 'runda-villa'],
    },
    {
      slug:       'njeri-waweru',
      name:       'Njeri Waweru',
      role:       'Design Manager',
      department: 'Design',
      bio:        'Project delivery and procurement specialist. Ensures every project lands on time and to specification.',
      fullBio: [
        "Njeri runs the operational side of design delivery at Chai & Clay. She is the person who translates beautiful concepts into precise schedules, budgets, and supplier relationships — and the reason the studio's projects consistently deliver on time.",
        "She has a background in quantity surveying — which gives her an unusual and valuable perspective in an industry where cost control is frequently overlooked until it becomes a crisis. She joined Chai & Clay in 2019 after four years in commercial project management at a Nairobi architectural practice.",
        "Her supplier network across Kenya is unmatched. If a material exists in Kenya, Njeri knows where to find it, what it costs, and how quickly it can be delivered.",
      ],
      avatar:   '/sites/chai-clay/team/njeri-waweru.png',
      linkedin: 'https://linkedin.com',
      skills:   ['Project Management', 'Procurement', 'Budget Management', 'Supplier Relations', 'Material Sourcing'],
      projects: ['muthaiga-residence', 'karen-office-campus', 'gigiri-diplomat-residence'],
    },
  ],

  // ── Testimonials ─────────────────────────────────────────
  testimonials: [
    {
      quote:   "Chai & Clay didn't just design our suites — they made them feel like the suites could only exist in Nairobi. Our guests feel it immediately.",
      author:  'James Ochieng',
      role:    'General Manager',
      company: 'Sankara Nairobi',
      avatar:  'https://i.pravatar.cc/80?u=JamesOchieng',
    },
    {
      quote:   "We'd worked with studios in Cape Town and Dubai. None of them understood Kenya the way Aisha and her team do. The house finally feels like ours.",
      author:  'Sarah & Michael Ngugi',
      role:    'Homeowners',
      company: 'Muthaiga Residence',
      avatar:  'https://i.pravatar.cc/80?u=SarahNgugi',
    },
    {
      quote:   "Our bar revenue went up 65% after the redesign. But more than the numbers — people now choose to come here. That's what we wanted.",
      author:  'Peter Kamande',
      role:    'F&B Director',
      company: 'Tribe Hotel',
      avatar:  'https://i.pravatar.cc/80?u=PeterKamande',
    },
    {
      quote:   "The Karen campus changed how our people feel about coming to work. We've seen it in their retention numbers. The space earned its investment many times over.",
      author:  'Wanjiru Maina',
      role:    'Chief People Officer',
      company: 'Karen Corporate Client',
      avatar:  'https://i.pravatar.cc/80?u=WanjiruMaina',
    },
    {
      quote:   "47 weeks booked in Year 1. My accountant still doesn't believe it. Chai & Clay understood exactly who would be staying and designed for them.",
      author:  'David Kamau',
      role:    'Property Investor',
      company: 'Runda Villa',
      avatar:  'https://i.pravatar.cc/80?u=DavidKamau',
    },
    {
      quote:   "We needed formal spaces that could host a head of state and a kitchen that felt like home. Somehow they delivered both. Simultaneously.",
      author:  'Confidential',
      role:    'Diplomat',
      company: 'Gigiri Residence',
      avatar:  'https://i.pravatar.cc/80?u=Diplomat2024',
    },
  ],

  // ── Clients ──────────────────────────────────────────────
  clients: [
    { name: 'Sankara Nairobi', logo: '/sites/chai-clay/clients/sankara.svg'  },
    { name: 'Tribe Hotel',     logo: '/sites/chai-clay/clients/tribe.svg'    },
    { name: 'Fairmont Norfolk', logo: '/sites/chai-clay/clients/fairmont.svg' },
    { name: 'The Emakoko',     logo: '/sites/chai-clay/clients/emakoko.svg'  },
    { name: 'Nairobi Garage',  logo: '/sites/chai-clay/clients/garage.svg'   },
    { name: 'Kenya Airways',   logo: '/sites/chai-clay/clients/kq.svg'       },
    { name: 'Equity Bank',     logo: '/sites/chai-clay/clients/equity.svg'   },
    { name: 'Safaricom',       logo: '/sites/chai-clay/clients/safaricom.svg' },
  ],

  // ── Blog ─────────────────────────────────────────────────
  blog: [
    {
      slug:       'kenyan-materials-guide',
      title:      'A Designer\'s Guide to Kenyan Interior Materials',
      excerpt:    'Lamu wood, Kisii soapstone, Kitengela glass, sisal — what they are, where they come from, and how we use them.',
      coverImage: '/sites/chai-clay/blog/materials-guide.png',
      category:   'Design',
      date:       '2025-02-20',
      readTime:   '7 min read',
      author:     { name: 'Aisha Kamau', avatar: '/sites/chai-clay/team/aisha-kamau.png' },
      tags:       ['Materials', 'Kenya', 'Design'],
      toc: [
        'Lamu wood',
        'Kisii soapstone',
        'Kitengela glass',
        'Sisal and woven grass',
        'Coral stone',
        'Makuti thatch',
      ],
      body: [
        "Kenya is extraordinarily rich in materials. The frustrating thing — from a designer's perspective — is how rarely they appear in Kenyan interiors. Walk through most Nairobi apartments and you'll find Italian marble, Chinese porcelain, and European hardware. The materials under our feet in this country go largely unnoticed.",
        "We've spent 12 years learning where to find them, who makes them, and how to use them in contemporary spaces. This guide is a starting point.",
        "Lamu wood is the material that surprises people most. It's a hardwood — technically a mix of several local species — worked by craftsmen in Lamu town using hand tools and techniques that have remained largely unchanged for centuries. The carving is extraordinary. We've used it for door panels, headboards, and decorative screens. The lead time is long (10–14 weeks for custom work) but the result is genuinely irreplaceable.",
        "Kisii soapstone from western Kenya is one of the most versatile materials we work with. It's soft enough to carve, hard enough to use as a surface, and comes in a range of natural colours from pale cream to deep pink. We've used it for kitchen countertops, bathroom surfaces, and decorative objects. It requires regular oiling to maintain its finish — which is either a maintenance commitment or a ritual, depending on how you look at it.",
        "Kitengela glass is made from recycled glass by craftspeople south of Nairobi. Every piece is unique. We use it for pendant lights, decorative panels, and occasionally as a feature wall material. It catches light in a way that imported glass simply doesn't, and knowing it was made 40 kilometres from the project site is a satisfaction that has nothing to do with aesthetics.",
        "Sisal is underrated. The fibre is strong, the weave can be incredibly refined, and the natural palette — warm creams, tawny golds, earthy browns — works in almost any residential context. We use woven sisal for rugs, wall hangings, and occasionally upholstery panels. The Nyeri and Thika weaving communities produce work of exceptional quality if you know where to look.",
        "This list is not exhaustive. Kenya's material culture is rich enough to sustain a design practice for a lifetime. We are still learning.",
      ],
    },
    {
      slug:       'small-spaces-nairobi',
      title:      'Designing Small Nairobi Apartments That Don\'t Feel Small',
      excerpt:    'The Nairobi apartment market produces a lot of 60–100sqm flats. Here\'s how to make them live much larger.',
      coverImage: '/sites/chai-clay/blog/small-spaces.png',
      category:   'Design',
      date:       '2025-01-10',
      readTime:   '5 min read',
      author:     { name: 'Kofi Mensah', avatar: '/sites/chai-clay/team/kofi-mensah.png' },
      tags:       ['Residential', 'Small Spaces', 'Nairobi'],
      toc: [
        'Scale up, not down',
        'Dual-function everything',
        'Light as a material',
        'Colour strategy',
        'Storage that disappears',
        'The one piece of art rule',
      ],
      body: [
        "The conventional advice for small spaces is to scale everything down. Small rooms, small furniture, small art. The result is usually a space that feels exactly like what it is: a small apartment filled with undersized objects. It still feels small — just crowded.",
        "The counterintuitive approach works better. Go large. A substantial sofa in a small living room anchors the space and makes it feel intentional rather than constrained. A floor-to-ceiling bookshelf draws the eye upward and gives the room vertical scale. A large piece of art on a single wall makes the room feel like it was designed rather than furnished.",
        "Every piece of furniture in a small apartment should do at least two things. Storage ottomans, extending dining tables, beds with drawers, sofas with chaise storage — not because the solutions are beautiful (they often aren't), but because they free the floor plan from furniture you'd otherwise need.",
        "Light is the most powerful tool available in a small space and the one most often misused. A single overhead fitting is almost never the answer. Layer your lighting: floor lamps, table lamps, under-shelf strips, pendant clusters. The goal is to create pools of light that draw the eye around the room rather than illuminating it uniformly like a hospital corridor.",
        "In small spaces, a bold colour decision creates more impact than a cautious one. One terracotta wall does more for a room than four cautious cream ones. The fear of colour in small spaces is understandable but misplaced. Colour creates depth and character; cream creates neither.",
        "One piece of art, properly framed and properly lit, does more than six mismatched prints. This applies regardless of scale but becomes critical in small spaces where visual clutter is amplified.",
        "The Lavington project we completed last year — 90sqm, 4 rooms, 8 weeks — is the best demonstration we have of these principles applied together. The apartment punches well above its square footage. Not because we performed miracles, but because we applied the principles consistently and without compromise.",
      ],
    },
    {
      slug:       'why-nairobi-restaurants-fail',
      title:      'Why Great Nairobi Restaurants Fail at Their Interiors',
      excerpt:    'The food can be extraordinary and the service excellent. But if the space doesn\'t make people want to stay, they won\'t.',
      coverImage: '/sites/chai-clay/blog/restaurant-design.png',
      category:   'Hospitality',
      date:       '2024-11-28',
      readTime:   '6 min read',
      author:     { name: 'Aisha Kamau', avatar: '/sites/chai-clay/team/aisha-kamau.png' },
      tags:       ['Hospitality', 'Restaurant Design', 'Nairobi'],
      toc: [
        'The noise problem',
        'Lighting that kills mood',
        'Every table is the worst table',
        'The social media test',
        'What actually works',
      ],
      body: [
        "Nairobi has some extraordinary food. It also has a persistent problem with restaurant interiors that undermine the food being served in them. This is not a lack of investment — some of the worst interior decisions I've seen have been in expensively fitted-out spaces. It's a lack of understanding of what a restaurant interior is actually for.",
        "The most common failure is noise. Open-plan concrete spaces with hard surfaces and no acoustic treatment are genuinely unpleasant to eat in after the first 30 minutes. The noise level makes conversation difficult, which makes the experience exhausting, which is why tables turn quickly — not because the service is efficient, but because guests are ready to leave. Good acoustic design is invisible but transformative.",
        "Lighting is the second most common failure. Restaurants in Nairobi are often lit like offices or shops — bright, even, and completely mood-free. Great restaurant lighting is layered, warm, and controllable. It should feel different at lunch and dinner. It should make the food look good. It should make the people look good. Overhead fluorescents achieve none of these things.",
        "In a badly designed restaurant, every table feels like the worst table in the room. There's always somewhere else you'd rather be sitting. Good restaurant design makes every table feel considered — the booths have intimacy, the open tables have sight-lines worth having, the bar seats have theatre. The goal is for guests to feel that wherever they're placed, they've been given something worth having.",
        "The social media test is not cynical — it's a useful design heuristic. If a guest can't find a corner of your restaurant that they want to photograph and share, you've failed to create a memorable space. Memorability is not decoration. It's specific, deliberate choices about materials, lighting, and scale.",
        "What actually works: acoustic treatment from day one, lighting design by a specialist, zone planning that gives every seating configuration its own character, and materials chosen for durability as much as beauty. A restaurant that looks good on opening night and still looks good after two years of service is the goal — not a space that photographs well before the guests arrive.",
      ],
    },
    {
      slug:       'working-with-interior-designer',
      title:      'How to Work With an Interior Designer',
      excerpt:    'Most clients have never done this before. Here\'s what to expect, what to bring, and how to get the best from the process.',
      coverImage: '/sites/chai-clay/blog/working-with-designer.png',
      category:   'Process',
      date:       '2024-10-15',
      readTime:   '5 min read',
      author:     { name: 'Njeri Waweru', avatar: '/sites/chai-clay/team/njeri-waweru.png' },
      tags:       ['Process', 'Client Guide', 'Design'],
      toc: [
        'What to bring to the first meeting',
        'Budget honestly',
        'Timeline realities',
        'How decisions get made',
        'What we need from you',
        'When it goes wrong',
      ],
      body: [
        "Most of our clients have never worked with an interior designer before. This is normal. Interior design is not something most people do repeatedly — it happens when they move, renovate, or reach a point where they want their space to be different. We've written this to help you understand what the process actually looks like.",
        "What to bring to the first meeting: images of spaces you like (Pinterest boards, magazine clippings, Instagram saves), a rough sense of how you use the space now and how you want to use it, and an honest sense of your budget. You don't need a brief. That's our job. You just need to be able to tell us what you love and what you hate.",
        "Budget honestly. We cannot design within a budget we don't know. If your budget is 2 million shillings, tell us. If it's 20 million, tell us. The project we design will be completely different — and both can be excellent. The worst outcome is designing a 15-million-shilling space for a client with a 5-million-shilling budget. Nobody enjoys what happens next.",
        "Timeline realities: custom furniture takes time. Procurement from Kenya takes less time than procurement from overseas but still requires weeks, not days. A typical residential project from first meeting to completion takes 12–20 weeks. Hospitality projects take longer. We will give you a specific timeline at the start of the project and we will tell you if it changes.",
        "How decisions get made: we present options, we explain our recommendations, and then you decide. This is your space. Our job is to make sure the choices you make are informed ones — that you understand what each decision means for the finished result. We will push back if we think a decision will compromise the project, but the final decision is always yours.",
        "What we need from you: timely responses to decisions, prompt payment at agreed milestones, and trust. The trust piece is important. We have done this before. If we say a material will work, it will work. If we say a layout won't function, it won't. Engaging a designer means engaging their experience — which only works if you let them exercise it.",
        "When it goes wrong: things go wrong in every project. Deliveries are delayed. Materials aren't exactly the right shade. Craftsmen miss specifications. How a studio handles problems is more revealing than how it handles easy runs. Our commitment is to tell you about problems as soon as we know about them and to fix them without passing the cost to you unless the problem was your decision.",
      ],
    },
    {
      slug:       'safari-lodge-design',
      title:      'What Luxury Safari Lodges Get Right (And How We Apply It)',
      excerpt:    'Kenya\'s best safari lodges are among the finest examples of contextual design anywhere. We\'ve been studying them for 12 years.',
      coverImage: '/sites/chai-clay/blog/safari-design.png',
      category:   'Design',
      date:       '2024-09-08',
      readTime:   '8 min read',
      author:     { name: 'Aisha Kamau', avatar: '/sites/chai-clay/team/aisha-kamau.png' },
      tags:       ['Design', 'Hospitality', 'Kenya', 'Luxury'],
      toc: [
        'The landscape connection',
        'Material honesty',
        'Scale and silence',
        'Light as experience',
        'What we steal from lodges',
      ],
      body: [
        "Kenya's best safari lodges are, without argument, among the finest pieces of contextual interior design in the world. Not because they have unlimited budgets — some of the most extraordinary lodges are built from reclaimed timber and local stone — but because they understand something fundamental: the design serves the place, not the other way around.",
        "The landscape connection is the first principle. Great lodges make the outside feel like it has moved inside. Not by eliminating walls, but by choosing materials that belong to the landscape, positioning windows to frame specific views, and designing circulation paths that constantly remind you where you are. In Nairobi work, we apply this by asking: what does this neighbourhood, this street, this site feel like? And then we design toward that feeling.",
        "Material honesty is the second principle. At Ol Pejeta Conservancy, at Angama Mara, at Segera — the materials are what they appear to be. Raw stone is raw stone. Timber is timber. There is no laminate pretending to be something it isn't. This honesty creates a specific kind of trust between the space and the person in it. We apply the same standard to everything we source. If a surface looks like stone, it is stone.",
        "Scale and silence. Great safari lodges understand that generosity of space — the wide veranda, the high-pitched ceiling, the single enormous piece of furniture in a large room — creates a particular kind of calm. You exhale when you enter. We've applied this principle most deliberately in the Muthaiga residence, where we took a structurally generous house and resisted the urge to fill it.",
        "Light as experience. The way light enters a room at dawn in Amboseli is something architects and designers have been working to recreate in buildings for centuries. The best lodges position their spaces to receive specific light at specific times of day — the morning sun over coffee, the sunset over a drink. In urban projects, we track the light through the space before we finalise the layout.",
        "What we steal from lodges: the conviction that context is everything. That a space which ignores where it is will always feel like it's trying to be somewhere else. That honesty in materials is a form of respect for the people who will inhabit the space. That scale is generosity. These are not principles we invented — they're lessons Kenya's best lodges have been teaching for decades.",
      ],
    },
    {
      slug:       'biophilic-nairobi-homes',
      title:      'Biophilic Design in Nairobi Homes — More Than Plants',
      excerpt:    'The trend for bringing nature indoors has been enthusiastically adopted in Nairobi. Most of it is doing it wrong.',
      coverImage: '/sites/chai-clay/blog/biophilic.png',
      category:   'Design',
      date:       '2024-08-02',
      readTime:   '6 min read',
      author:     { name: 'Kofi Mensah', avatar: '/sites/chai-clay/team/kofi-mensah.png' },
      tags:       ['Design', 'Biophilic', 'Residential', 'Nairobi'],
      toc: [
        'What biophilic design actually means',
        'The plant problem',
        'Natural light first',
        'Material choices',
        'Acoustic nature',
        'Nairobi advantages',
      ],
      body: [
        "Biophilic design has become a buzzword in Nairobi interiors over the last four years. The term refers to design that connects humans to nature — and there is genuine evidence that it improves wellbeing, reduces stress, and increases productivity. The problem is that it's mostly being interpreted as 'add a lot of plants and some rattan furniture'.",
        "The plant problem: plants are one expression of biophilic design, but they're not the point. A room filled with plants that has no natural light, is acoustically harsh, and uses synthetic materials throughout has not been biophilically designed — it's been decorated with plants. The plants will also probably die, because the light they need was traded for another piece of furniture.",
        "Natural light is the foundational biophilic intervention. Before any material choice, any plant selection, any furniture decision — the question is: how does light move through this space? Can we increase the quality of natural light? Can we preserve connection to the sky? In the Karen corporate campus, this question drove every spatial decision before a single finish was specified.",
        "Material choices are the second most important lever. Natural materials — wood, stone, clay, linen, sisal — have a tactile and visual quality that synthetic materials cannot replicate. This is not nostalgia or trend-following. Research consistently shows that exposure to natural materials and textures reduces physiological stress markers. Nairobi has access to extraordinary natural materials. Using them is not just aesthetically right — it is functionally right.",
        "Acoustic nature is the least discussed biophilic strategy and one of the most powerful. Natural materials — timber, woven surfaces, fabric — absorb sound in ways that hard synthetic surfaces don't. The acoustic quality of a space is inseparable from how natural it feels. A reverberant, hard-surfaced room produces stress regardless of how many plants you add to it.",
        "Nairobi's advantages are real. The climate means that the boundary between inside and outside can be genuinely permeable in ways that aren't possible in London or New York. An open terrace can be a room. A courtyard can be the heart of a house. This is a design opportunity that most Nairobi interiors completely ignore in favour of a fully climate-controlled, sealed space that happens to have some pot plants.",
      ],
    },
    {
      slug:       'procurement-guide-kenya',
      title:      'How to Procure Furniture and Materials in Kenya',
      excerpt:    'Where to find the best craftspeople, suppliers, and importers. The knowledge it took us 12 years to accumulate.',
      coverImage: '/sites/chai-clay/blog/procurement.png',
      category:   'Process',
      date:       '2024-07-10',
      readTime:   '7 min read',
      author:     { name: 'Njeri Waweru', avatar: '/sites/chai-clay/team/njeri-waweru.png' },
      tags:       ['Process', 'Materials', 'Kenya', 'Procurement'],
      toc: [
        'Local craftspeople',
        'Importers worth knowing',
        'Lead times that matter',
        'Quality control',
        'The cost equation',
        'When to import',
      ],
      body: [
        "Procurement is unglamorous. It's the part of a project that clients don't see — the calls, the visits, the samples, the negotiations, the reorders. But it's often the part that makes the difference between a project that looks exactly like the concept and one that looks like a compromise.",
        "Local craftspeople are Kenya's greatest underused design resource. The woodworkers in Industrial Area, the metalworkers in Gikomba, the upholsterers in Westlands — they can produce work of extraordinary quality if they are briefed precisely, supplied with the right materials, and given realistic timeframes. The mistake most people make is inadequate briefing. A craftsperson needs dimensions, drawings, material specifications, and finish references — not a description and a wish.",
        "The importers worth knowing are the ones with proper sample rooms, honest lead time estimates, and a record of delivering what they promise. The market has many suppliers who will tell you whatever you want to hear to get the order. We have learned — through expensive experience — who actually delivers. This knowledge is one of the things you get when you hire a studio with 12 years of Nairobi procurement history.",
        "Lead times matter more than most clients expect. Custom joinery: 6–10 weeks. Imported furniture from Europe: 10–16 weeks. Imported fabric from South Africa: 4–6 weeks. Custom upholstery in Nairobi: 3–5 weeks. Understanding these timelines is what allows a project to run smoothly. Ignoring them is what causes a finished apartment to sit unfurnished for 6 weeks after the client wants to move in.",
        "Quality control on locally made pieces requires physical inspection. We visit workshops, we check samples, we reject work that doesn't meet the specification and require it to be remade. This adds time to the procurement process and is non-negotiable.",
        "When to import: when the quality genuinely doesn't exist locally. Not because something is cheaper from China, but because a specific material, mechanism, or level of finish isn't available in Kenya. Sustainable importation means being deliberate about it — not defaulting to imported options because they're more familiar.",
        "The cost equation: local production is not always cheaper than importing. A well-made piece of Kenyan furniture from a skilled craftsperson is priced at what skilled work actually costs. The difference is that the money stays in Kenya, the lead time is shorter, and the piece is unique. These are reasons — not just feelings.",
      ],
    },
    {
      slug:       'colour-in-kenyan-homes',
      title:      'Colour in Kenyan Interiors — Moving Beyond Greige',
      excerpt:    'The default palette in Nairobi interiors is cautious to the point of invisibility. Here\'s how colour actually works.',
      coverImage: '/sites/chai-clay/blog/colour-guide.png',
      category:   'Design',
      date:       '2024-06-05',
      readTime:   '5 min read',
      author:     { name: 'Aisha Kamau', avatar: '/sites/chai-clay/team/aisha-kamau.png' },
      tags:       ['Design', 'Colour', 'Residential', 'Kenya'],
      toc: [
        'Why Nairobi defaults to beige',
        'Colour that references Kenya',
        'The one brave wall',
        'Colour in rentals',
        'What not to do',
      ],
      body: [
        "Walk through any Nairobi show apartment and you'll find the same palette: warm white walls, stone-effect floor tiles, beige upholstery, natural wood tones. It's safe, it's inoffensive, and it's almost completely without character. The palette exists because developers want spaces that appear to anyone — which means they appeal strongly to no one.",
        "Colour that references Kenya is not the colour of travel brochures — the theatrical Maasai red and bead-bright blue used to signal 'Africa' to an international market. It's the terracotta of sun-baked earth in Tsavo. The deep green of the Aberdare forest. The warm ochre of afternoon light on stone. The dusty sage of the savanna in dry season. These colours have context. They make sense in Nairobi in a way that a fashionable colour from a European trend forecast doesn't.",
        "The one brave wall is the easiest entry point for clients who are nervous about colour. One wall in a room painted in a strong colour — properly chosen, properly lit — will do more for the room than the other three walls combined. The fear that colour will make a space feel smaller is mostly unfounded. A confident deep terracotta in a well-lit room feels expansive. A cautious cream in a room with inadequate lighting feels tight and sad.",
        "Colour in rentals is a constraint, not an impossibility. If you can't paint, colour comes from textiles, art, cushions, and rugs. A single large rug in a strong colour can transform the reading of a whole room. The mistake in rentals is compensating for the constraint by making everything else equally cautious. Go bolder in the textiles when the walls are fixed.",
        "What not to do: don't pick colours from a screen. Screens don't show you what colour looks like in your light, on your walls, at different times of day. Get samples. Paint large sections. Live with them for a week. Colour decisions made from a paint chip under a fluorescent light in a showroom will surprise you when they meet natural light in your specific space.",
        "The work we're proudest of in terms of colour is the Lavington apartment — a 90sqm space that most designers would have defaulted to white walls. We didn't. The result is a home that feels like a decision was made, not a space that looks like nobody was brave enough to try.",
      ],
    },
  ],

  // ── Contact ──────────────────────────────────────────────
  contact: {
    email:    'hello@chaiandclay.co.ke',
    phone:    '+254 700 111 222',
    address:  'Lavington, Nairobi, Kenya',
    whatsapp: '254700111222',
    message:  "Hi Chai & Clay, I visited your website and I'd like to discuss an interior design project.",
    services: [
      'Residential Design',
      'Commercial Interiors',
      'Hospitality Design',
      'Renovation & Refurbishment',
      'Design Consultancy',
      'Furniture & Procurement',
    ],
    budgetRanges: [
      'Under KES 500K',
      'KES 500K – 2M',
      'KES 2M – 5M',
      'KES 5M – 15M',
      'KES 15M+',
      'Not sure yet',
    ],
  },

  // ── SEO ──────────────────────────────────────────────────
  seo: {
    titleTemplate: '%s | Chai & Clay Interiors',
    ogImage:       '/sites/chai-clay/og.jpg',
    keywords: [
      'interior design nairobi',
      'interior designer kenya',
      'nairobi interior design studio',
      'luxury interior design nairobi',
      'hospitality design nairobi',
      'kenyan interior design',
    ],
    twitterHandle: '@chaiandclay',
  },

  // ── Footer ───────────────────────────────────────────────
  footer: {
    tagline: 'Where Kenya Comes Home.',
    links: [
      {
        group: 'Studio',
        items: [
          { label: 'About',    href: '/#about'   },
          { label: 'Work',     href: '/work'      },
          { label: 'Journal',  href: '/blog'      },
          { label: 'Team',     href: '/team'      },
          { label: 'Contact',  href: '/contact'   },
        ],
      },
      {
        group: 'Services',
        items: [
          { label: 'Residential',   href: '/#services' },
          { label: 'Commercial',    href: '/#services' },
          { label: 'Hospitality',   href: '/#services' },
          { label: 'Renovation',    href: '/#services' },
          { label: 'Consultancy',   href: '/#services' },
          { label: 'Procurement',   href: '/#services' },
        ],
      },
      {
        group: 'Legal',
        items: [
          { label: 'Privacy Policy',   href: '/privacy' },
          { label: 'Terms of Service', href: '/terms'   },
        ],
      },
    ],
    socials: [
      { platform: 'instagram', href: 'https://instagram.com/chaiandclay'                  },
      { platform: 'linkedin',  href: 'https://linkedin.com/company/chai-clay-interiors'   },
      { platform: 'behance',   href: 'https://behance.net/chaiandclay'                    },
    ],
    legal: '© 2025 Chai & Clay Interiors Ltd. All rights reserved.',
  },

  // ── Section & page copy ──────────────────────────────────
  copy: {

    about: {
      badge:       'About the Studio',
      title:       'Nairobi-Born. Kenya-Made.',
      description: "We are an interior design studio that believes spaces should tell you exactly where you are. Our work is rooted in Kenyan materials, Kenyan craft, and Kenyan sensibility.",
      values: [
        {
          heading: 'Context first',
          body:    'Every project begins with a question: what does this place feel like? The design answers that question.',
        },
        {
          heading: 'Material honesty',
          body:    'If a surface looks like stone, it is stone. We source real materials from real craftspeople — mostly from Kenya.',
        },
        {
          heading: 'Functional beauty',
          body:    'A space that looks beautiful in photographs but fails to live in has not been designed — it has been decorated.',
        },
      ],
    },

    services: {
      badge:       'What We Do',
      title:       'Design Services',
      description: 'From a single room to a full hotel — we design spaces that hold Kenya in every corner.',
    },

    work: {
      badge:       'Selected Projects',
      title:       'The Work',
      description: 'A selection of residential, commercial, and hospitality projects completed across Nairobi and Kenya.',
    },

    clients: {
      badge:       'Clients & Partners',
      title:       'Who We Work With',
      description: 'From private homeowners to Nairobi\'s most recognised hospitality brands.',
    },

    testimonials: {
      badge: 'Client Voices',
      title: 'What Clients Say',
    },

    blog: {
      badge:       'The Journal',
      title:       'Design, Materials & Making',
      description: 'Writing on interior design, Kenyan material culture, and the things we\'ve learned from 12 years of practice.',
    },

    contact: {
      badge:       'Start a Conversation',
      title:       "Let's Design Something Together",
      description: "Tell us about your project. We'll come back with questions, ideas, and an honest sense of whether we're the right fit.",
    },

    workPage: {
      badge:       'Portfolio',
      title:       'Spaces We\'ve Made',
      description: 'Residential, commercial, and hospitality projects across Nairobi and Kenya.',
    },

    blogPage: {
      badge:       'The Journal',
      title:       'Design Thinking from the Studio',
      description: 'Writing on interior design, material culture, and how Kenya informs the way we work.',
    },

    teamPage: {
      badge:       'The Studio',
      title:       'The People Behind the Work',
      description: 'A small, senior team. Every project is led by a principal — never delegated to a junior.',
      deptOrder:   ['Leadership', 'Design', 'Operations'],
    },

  },
}