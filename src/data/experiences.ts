export interface Role {
  title: string;
  period: string;
  description: string;
  tags: string[];
}

export interface CompanyExperience {
  company: string;
  companyUrl?: string;
  overallPeriod: string;
  roles: Role[];
}

export const experiences: CompanyExperience[] = [
  {
    company: "Transfix",
    companyUrl: "https://www.transfix.io",
    overallPeriod: "Nov 2021 – Present",
    roles: [
      {
        title: "Director of Product Management",
        period: "Mar 2024 – Present",
        description:
          "Leading Product Management, Product Design, and Product Support across a 0→1 SaaS product suite. Driving AI/ML predictive freight pricing models and innovative workflow products for freight broker and 3PL customers.",
        tags: ["AI/ML", "0→1 SaaS", "Team Leadership", "Pricing Models"],
      },
      {
        title: "Group Product Manager",
        period: "Oct 2023 – Mar 2024",
        description:
          "Oversaw a team of Product Managers across Carrier and Marketplace products. Delivered highly rated web and mobile apps (4.8 stars), supporting hundreds of millions in annual freight bookings.",
        tags: ["Mobile Apps", "Marketplace", "Team Management"],
      },
      {
        title: "Senior Product Manager",
        period: "Nov 2022 – Oct 2023",
        description:
          "Product Lead for Carrier products, transforming the booking process through an AI/ML ecosystem. Achieved higher gross margins and improved operational throughput with personalized recommendations and automated pricing.",
        tags: ["AI/ML", "Automation", "Carrier Products"],
      },
      {
        title: "Product Manager",
        period: "Nov 2021 – Oct 2022",
        description:
          "Drove growth for Shipper TMS and Carrier Apps. Developed strategy supporting a successful funding round, onboarded the first enterprise SaaS customer, and increased usage volume by over 6,000%.",
        tags: ["SaaS Growth", "Enterprise", "Strategy"],
      },
    ],
  },
  {
    company: "Marsh",
    companyUrl: "https://www.marsh.com",
    overallPeriod: "Aug 2018 – Oct 2021",
    roles: [
      {
        title: "Product Manager",
        period: "Aug 2018 – Oct 2021",
        description:
          "Developed insurance analytics products on a scalable data and reporting platform, leveraging AI/ML and actuarial science. Delivered insurtech solutions for high-profile ecommerce, logistics, and payments companies globally.",
        tags: ["Insurtech", "Analytics", "AI/ML", "Global Delivery"],
      },
    ],
  },
  {
    company: "Accenture",
    companyUrl: "https://www.accenture.com",
    overallPeriod: "Jul 2016 – Jul 2018",
    roles: [
      {
        title: "Management Consultant",
        period: "Jul 2016 – Jul 2018",
        description:
          "Advised Fortune 500 clients on digital transformation and automation. Led post-acquisition integration across 12 cross-functional teams. Spearheaded an NLP/OCR project reducing underwriting cycle time by 60+ days.",
        tags: ["Consulting", "Digital Transformation", "NLP/OCR", "Fortune 500"],
      },
    ],
  },
  {
    company: "Giant Eagle",
    companyUrl: "https://www.gianteagle.com",
    overallPeriod: "Jan 2014 – Jun 2016",
    roles: [
      {
        title: "Strategic Sourcing Analyst",
        period: "Jan 2014 – Jun 2016",
        description:
          "Managed strategic sourcing and procurement initiatives across categories. Conducted spend analysis, vendor negotiations, and cost-reduction strategies to optimize supply chain performance.",
        tags: ["Procurement", "Supply Chain", "Cost Optimization"],
      },
    ],
  },
  {
    company: "University of Pittsburgh School of Dental Medicine",
    companyUrl: "https://www.dental.pitt.edu",
    overallPeriod: "Aug 2012 – Dec 2013",
    roles: [
      {
        title: "Department Administrator",
        period: "Aug 2012 – Dec 2013",
        description:
          "Managed day-to-day department operations including budgets, scheduling, and administrative processes. Supported faculty and staff coordination across the school.",
        tags: ["Operations", "Administration", "Budget Management"],
      },
    ],
  },
];
