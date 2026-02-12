export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  companyUrl?: string;
}

export const experiences: Experience[] = [
  {
    title: "Director of Product Management",
    company: "Transfix",
    period: "Mar 2024 – Present",
    description:
      "Leading Product Management, Product Design, and Product Support across a 0→1 SaaS product suite. Driving AI/ML predictive freight pricing models and innovative workflow products for freight broker and 3PL customers.",
    tags: ["AI/ML", "0→1 SaaS", "Team Leadership", "Pricing Models"],
    companyUrl: "https://www.transfix.io",
  },
  {
    title: "Group Product Manager",
    company: "Transfix",
    period: "Oct 2023 – Mar 2024",
    description:
      "Oversaw a team of Product Managers across Carrier and Marketplace products. Delivered highly rated web and mobile apps (4.8 stars), supporting hundreds of millions in annual freight bookings.",
    tags: ["Mobile Apps", "Marketplace", "Team Management"],
    companyUrl: "https://www.transfix.io",
  },
  {
    title: "Senior Product Manager",
    company: "Transfix",
    period: "Nov 2022 – Oct 2023",
    description:
      "Product Lead for Carrier products, transforming the booking process through an AI/ML ecosystem. Achieved higher gross margins and improved operational throughput with personalized recommendations and automated pricing.",
    tags: ["AI/ML", "Automation", "Carrier Products"],
    companyUrl: "https://www.transfix.io",
  },
  {
    title: "Product Manager",
    company: "Transfix",
    period: "Nov 2021 – Oct 2022",
    description:
      "Drove growth for Shipper TMS and Carrier Apps. Developed strategy supporting a successful funding round, onboarded the first enterprise SaaS customer, and increased usage volume by over 6,000%.",
    tags: ["SaaS Growth", "Enterprise", "Strategy", "6,000% Growth"],
    companyUrl: "https://www.transfix.io",
  },
  {
    title: "Product Manager",
    company: "Marsh",
    period: "Aug 2018 – Oct 2021",
    description:
      "Developed insurance analytics products on a scalable data and reporting platform, leveraging AI/ML and actuarial science. Delivered insurtech solutions for high-profile ecommerce, logistics, and payments companies globally.",
    tags: ["Insurtech", "Analytics", "AI/ML", "Global Delivery"],
    companyUrl: "https://www.marsh.com",
  },
  {
    title: "Management Consultant",
    company: "Accenture",
    period: "Jul 2016 – Jul 2018",
    description:
      "Advised Fortune 500 clients on digital transformation and automation. Led post-acquisition integration across 12 cross-functional teams. Spearheaded an NLP/OCR project reducing underwriting cycle time by 60+ days.",
    tags: ["Consulting", "Digital Transformation", "NLP/OCR", "Fortune 500"],
    companyUrl: "https://www.accenture.com",
  },
];
