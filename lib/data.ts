// Content migrated from sparrowshopfits.com and sparrowpmc.com

export type Service = { title: string; text: string };

export type Division = {
  slug: string;
  index: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  accent: string;
  image: string;
  gallery: string[];
  services: Service[];
  stats: { value: number; suffix: string; label: string }[];
};

export const brand = {
  name: "Sparroh",
  group: "Sparroh Group",
  legal: "Sparroh Shopfits Pvt. Ltd.",
  tagline: "Turning Spaces into Success",
  address: "1207, Sector 28, DLF Phase IV, Gurugram, Haryana, 122002, India",
  phone: "+91-8595240025",
  phoneHref: "tel:+918595240025",
  founded: 2022,
};

export const socials = [
  { name: "Instagram", href: "https://instagram.com/sparrowshopfits" },
  { name: "LinkedIn", href: "https://linkedin.com/company/sparroh-shopfits" },
  { name: "YouTube", href: "https://youtube.com/@sparrow_shopfits" },
  { name: "Facebook", href: "https://facebook.com/sparrowshopfits" },
  { name: "Pinterest", href: "https://pinterest.com/sparrowshopfits" },
];

export const divisions: Division[] = [
  {
    slug: "pmc",
    index: "01",
    name: "PMC",
    short: "Project Management Consultancy",
    tagline: "Managing projects with precision. Delivered on time.",
    description:
      "20+ years of founder experience and 1,100+ completed sites across 35+ Indian cities. We manage retail, commercial, F&B, spa and residential projects from survey to a clean handover.",
    accent: "#ff5a1f",
    image: "/images/boutique.png",
    gallery: ["/images/wa2.jpeg", "/images/wa4.jpeg", "/images/wa3.jpeg"],
    services: [
      { title: "Retail & Store PMC", text: "Stores, kiosks, flagships and multi-location rollouts." },
      { title: "Office & Commercial PMC", text: "Office interiors, commercial workspaces and corporate facilities." },
      { title: "Restaurant (F&B) PMC", text: "Restaurants, cafés, QSR brands and cloud kitchens." },
      { title: "Spa & Salon PMC", text: "Specialised spa and salon fit-outs." },
      { title: "Luxury Residential PMC", text: "Premium residential developments." },
      { title: "Vehicle Showrooms PMC", text: "Automotive showroom management." },
    ],
    stats: [
      { value: 1100, suffix: "+", label: "Sites completed" },
      { value: 35, suffix: "+", label: "Indian cities" },
      { value: 20, suffix: "+", label: "Years of experience" },
    ],
  },
  {
    slug: "retail-intelligence",
    index: "02",
    name: "Retail Intelligence",
    short: "Site selection & AI-led planning",
    tagline: "Know the site before you build it.",
    description:
      "Mobile-guided site surveys, AI-led layout generation and live budget tracking — data that turns a location into a confident decision.",
    accent: "#3dd6c6",
    image: "/images/a1.png",
    gallery: ["/images/a2.png", "/images/audit.webp", "/images/workprog.webp"],
    services: [
      { title: "Site Selection", text: "Pick the right location for your format and footfall." },
      { title: "Site Recce / Survey", text: "App-guided digital recce with real-time data sharing." },
      { title: "AI-Led Layout Generation", text: "Algorithms and machine learning that optimise the space plan." },
      { title: "Design Management Platform", text: "RFI workflows between brand, design and site teams." },
      { title: "Budget & Progress Tracking", text: "Estimates, BOQ and real-time progress in one place." },
    ],
    stats: [
      { value: 100, suffix: "+", label: "Clients" },
      { value: 3, suffix: "", label: "Regions: MENA, UK, India" },
      { value: 60, suffix: "", label: "Days design to handover" },
    ],
  },
  {
    slug: "design",
    index: "03",
    name: "Design",
    short: "Retail store design",
    tagline: "Customised retail interiors that sell.",
    description:
      "Concept to adaptation: custom store design, kiosk design and visual merchandising, shaped by AI layouts and delivered with a skilled in-house team.",
    accent: "#c58cff",
    image: "/images/wa1.jpeg",
    gallery: ["/images/interior.webp", "/images/a3.png", "/images/wa7.jpeg"],
    services: [
      { title: "Concept Design", text: "Fresh store concepts built around your brand and range." },
      { title: "Design Adaptation", text: "Roll an approved design out across different sites and formats." },
      { title: "Kiosk Design", text: "Compact, high-impact kiosks for malls and airports." },
      { title: "Visual Merchandising", text: "Layouts and displays that lift conversion." },
      { title: "Retail Rollouts", text: "Consistent design delivery across every new store." },
    ],
    stats: [
      { value: 5, suffix: "", label: "Portfolio categories" },
      { value: 60, suffix: "", label: "Days design to handover" },
      { value: 2022, suffix: "", label: "Founded" },
    ],
  },
  {
    slug: "shopfits",
    index: "04",
    name: "Shopfits",
    short: "Turnkey execution & fabrication",
    tagline: "Simplifying retail store fit-out.",
    description:
      "Turnkey execution backed by our own factory fabrication — fixtures, kiosks and prototypes built in-house and installed on schedule.",
    accent: "#ffd23f",
    image: "/images/wa2.jpeg",
    gallery: ["/images/wa5.jpeg", "/images/wa4.jpeg", "/images/site1.jpeg"],
    services: [
      { title: "Turnkey Execution", text: "One team from site handover to store opening." },
      { title: "Factory Fabrication", text: "Fixtures, kiosks and prototypes made in our own factory." },
      { title: "Multi-Store Rollouts", text: "Repeatable fit-outs across cities, at pace." },
      { title: "Audit & Handover", text: "Snag closure and a clean, documented handover." },
    ],
    stats: [
      { value: 14, suffix: "–60", label: "Day delivery windows" },
      { value: 100, suffix: "%", label: "Client satisfaction" },
      { value: 100, suffix: "+", label: "Clients served" },
    ],
  },
  {
    slug: "academy",
    index: "05",
    name: "Academy",
    short: "PMC training",
    tagline: "Learn project management from people who deliver.",
    description:
      "Our Academy shares the playbook behind 1,100+ sites through a PMC training video programme, case studies and e-books.",
    accent: "#6ea8ff",
    image: "/images/wa6.jpeg",
    gallery: ["/images/boutique.png", "/images/a2.png", "/images/g3.webp"],
    services: [
      { title: "PMC Training Videos", text: "Step-by-step video programme on managing fit-out projects." },
      { title: "Case Studies", text: "Real retail rollouts and multi-city launches, broken down." },
      { title: "E-Books & Guides", text: "Retail design strategy and store profitability audits." },
    ],
    stats: [
      { value: 1100, suffix: "+", label: "Sites of learning" },
      { value: 20, suffix: "+", label: "Years of know-how" },
      { value: 3, suffix: "", label: "Learning formats" },
    ],
  },
];

export const getDivision = (slug: string) =>
  divisions.find((d) => d.slug === slug);

export const process = [
  { title: "Site Survey", image: "/images/g1.webp", text: "App-guided recce captures dimensions, photos and constraints on site." },
  { title: "AI Layout Design", image: "/images/g3.webp", text: "AI-led layout generation turns the survey into an optimised plan." },
  { title: "Proposals & BOQ", image: "/images/g2.webp", text: "Management proposal, estimates and a clear bill of quantities." },
  { title: "Work Progress", image: "/images/workprog.webp", text: "Live tracking of budget, RFIs and progress until completion." },
  { title: "Audit & Handover", image: "/images/audit.webp", text: "Snag closure, final audit and a clean handover." },
];

export const clients = [
  "JioMart", "Wakefit", "Westside", "Lenskart", "Adidas", "McDonald's", "DLF", "Reliance Smart",
  "TIRA", "Nestasia", "Kisna Jewels", "Sunglass Hut", "Armani Exchange", "Max", "V-Mart", "Bliss Club",
];

export const testimonials = [
  {
    quote: "The fixtures crafted by M/S Sparroh showcased exceptional craftsmanship and attention to detail.",
    name: "Manish Kapoor",
    org: "McDonald's",
  },
  {
    quote: "I highly recommend M/S Sparroh for their unmatched commitment to timely delivery and exceptional quality.",
    name: "Ritesh Ghai",
    org: "Adidas",
  },
  {
    quote: "M/S Sparroh's professionalism, clear communication, and prompt resolution were noteworthy.",
    name: "Manish Kumar Sinha",
    org: "Bliss Club",
  },
  {
    quote: "M/S Sparroh's collaborative and flexible approach ensured our unique requirements were seamlessly incorporated.",
    name: "Pooja Syal",
    org: "Linen Bloom",
  },
];

export const projects = [
  { name: "Sunglass Icon", brand: "Sunglass Hut", place: "Hyderabad Airport", category: "Retail & Fashion", image: "/images/wa5.jpeg" },
  { name: "V-Mart", brand: "V-Mart", place: "Chhapra, Bihar", category: "Retail & Fashion", image: "/images/wa2.jpeg" },
  { name: "Max", brand: "Max", place: "Bailey Square Mall, Patna", category: "Retail & Fashion", image: "/images/wa4.jpeg" },
  { name: "Armani Exchange", brand: "Armani Exchange", place: "Visakhapatnam", category: "Luxury & Lifestyle", image: "/images/wa7.jpeg" },
  { name: "OWND", brand: "OWND", place: "Store launch", category: "Retail & Fashion", image: "/images/wa3.jpeg" },
];

export const portfolioCategories = [
  "Retail & Fashion",
  "Beauty & Wellness",
  "Luxury & Lifestyle",
  "Technology & Mobility",
  "Grocery & Daily Retail",
];

export const team = [
  { name: "Bhaskar Arya", role: "Chief Builder / Founder" },
  { name: "Vishal Kumar", role: "Deputy General Manager — Projects" },
  { name: "Satyendra Soni", role: "Lead Project Manager" },
  { name: "Himanshu Mohan Gautam", role: "Project Engineer", photo: "/images/himanshu.png" },
  { name: "Faizan", role: "Purchase Manager", photo: "/images/faizan.jpg" },
  { name: "Vikash Ranjan", role: "HR & Admin Manager" },
];

export const cities = [
  "Mumbai", "Delhi", "Gurugram", "Noida", "Bengaluru", "Coimbatore", "Nashik", "Hyderabad", "Pune", "Chennai",
  "Ahmedabad", "Kolkata", "Vadodara", "Bhopal", "Jaipur", "Lucknow", "Indore", "Nagpur", "Surat", "Vijayawada",
  "Visakhapatnam", "Chandigarh", "Kochi", "Bhubaneswar", "Patna", "Raipur", "Mysuru", "Hubballi", "Jodhpur",
  "Udaipur", "Guwahati", "Ranchi", "Jalandhar", "Amritsar", "Kanpur",
];
