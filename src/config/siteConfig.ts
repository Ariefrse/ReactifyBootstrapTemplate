// Type definitions for the site configuration
export type SiteConfig = typeof siteConfig;

/*
HOW TO USE THIS TEMPLATE:

1. Replace all placeholder text with your actual content
2. Customize colors in the theme section
3. Update navigation items to match your site structure
4. Add your own logo and images
5. Modify component structure as needed for your project
*/

// Site Configuration
// Edit this file to customize the template for your company
export const siteConfig = {
  // Company Information
  company: {
    name: "Your Company Name",
    shortName: "YourCompany",
    description: "Your company tagline or brief description",
    founded: 2020,
    employees: "10+",
    headquarters: "City, Country",
    email: "contact@yourcompany.com",
    phone: "+1 234 567 8900",
    address: "123 Main Street, City, 12345"
  },
  
  // SEO Configuration
  seo: {
    title: "Your Website Title | Your Tagline",
    description: "A brief description of your website for search engines",
    keywords: "keyword1, keyword2, keyword3, keyword4",
    ogImage: "https://yourwebsite.com/og-image.jpg",
    twitterHandle: "@yourhandle"
  },
  
  // Theme Colors - Customize these colors to match your brand
  theme: {
    primaryColor: "#0046ad", // Primary brand color
    secondaryColor: "#003d96", // Secondary brand color
    accentColor1: "#ff8a65", // Accent color (coral)
    accentColor2: "#ffdc7c", // Accent color (light yellow)
    lightBackground: "#e6f0ff", // Light background color
    darkText: "#333333",
    lightText: "#ffffff"
  },
  
  // Hero Section Configuration
  hero: {
    title: "Elevate your career",
    description: "Software Recruitment Specialists",
    searchPlaceholder: "E.g. networking",
    backgroundImage: "images/imagetest.jpg",
    stats: [
      { icon: "Code", text: "1200+ Developer Jobs" },
      { icon: "Server", text: "800+ DevOps Roles" },
      { icon: "Shield", text: "500+ Security Positions" }
    ]
  },
  
  // Partners Section
  partners: {
    title: "Trusted by Leading Companies",
    description: "A brief description about your partners or clients",
    ctaText: "Partner With Us",
    ctaUrl: "#partner",
    companies: [
      {
        name: "Company 1",
        logo: "/logos/company1.svg",
        url: "#company1"
      },
      {
        name: "Company 2",
        logo: "/logos/company2.svg",
        url: "#company2"
      },
      {
        name: "Company 3",
        logo: "/logos/company3.svg",
        url: "#company3"
      },
      {
        name: "Company 4",
        logo: "/logos/company4.svg",
        url: "#company4"
      },
      {
        name: "Company 5",
        logo: "/logos/company5.svg",
        url: "#company5"
      },
      {
        name: "Company 6",
        logo: "/logos/company6.svg",
        url: "#company6"
      },
      {
        name: "Company 7",
        logo: "/logos/company7.svg",
        url: "#company7"
      },
      {
        name: "Company 8",
        logo: "/logos/company8.svg",
        url: "#company8"
      }
    ]
  },
  
  // Job Listings Configuration
  jobListings: {
    title: "Latest Jobs",
    subtitle: "",
    badge: "",
    jobs: [
      {
        id: 1,
        title: "Software Engineer",
        company: "",
        location: "London",
        type: "",
        salary: "£65,000",
        description: "Odio mi amet commodo convallis nunc. Triducunt mauris eu egestas eget in aliquam.",
        tag: "Python",
        color: "#ff8a65",
        posted: "Posted on 29/09/2023",
      },
      {
        id: 2,
        title: "Software Engineer",
        company: "",
        location: "London",
        type: "",
        salary: "£65,000",
        description: "Odio mi amet commodo convallis nunc. Triducunt mauris eu egestas eget in aliquam.",
        tag: "Python",
        color: "#0046ad",
        posted: "Posted on 29/09/2023",
      },
      {
        id: 3,
        title: "Software Engineer",
        company: "",
        location: "London",
        type: "",
        salary: "£65,000",
        description: "Odio mi amet commodo convallis nunc. Triducunt mauris eu egestas eget in aliquam.",
        tag: "Python",
        color: "#ff8a65",
        posted: "Posted on 29/09/2023",
      },
    ]
  },
  
  // Navigation Menu
  navigation: {
    jobseekers: [
      { label: "Menu Item 1", href: "#link1" },
      { label: "Menu Item 2", href: "#link2" },
      { label: "Menu Item 3", href: "#link3" },
      { label: "Menu Item 4", href: "#link4" },
      { label: "Menu Item 5", href: "#link5" }
    ],
    clients: [
      { label: "Menu Item 1", href: "#link1" },
      { label: "Menu Item 2", href: "#link2" },
      { label: "Menu Item 3", href: "#link3" },
      { label: "Menu Item 4", href: "#link4" },
      { label: "Menu Item 5", href: "#link5" }
    ],
    sectors: [
      { label: "Category 1", href: "#category1" },
      { label: "Category 2", href: "#category2" },
      { label: "Category 3", href: "#category3" },
      { label: "Category 4", href: "#category4" },
      { label: "Category 5", href: "#category5" },
      { label: "Category 6", href: "#category6" }
    ],
    resources: [
      { label: "Resource 1", href: "#resource1" },
      { label: "Resource 2", href: "#resource2" },
      { label: "Resource 3", href: "#resource3" },
      { label: "Resource 4", href: "#resource4" },
      { label: "Resource 5", href: "#resource5" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookies", href: "#cookies" },
      { label: "Accessibility", href: "#accessibility" }
    ]
  },
  
  // Footer Configuration
  footer: {
    quickLinks: [
      { label: "Homepage", href: "#home" },
      { label: "For jobseekers", href: "#jobseekers" },
      { label: "For clients", href: "#clients" },
      { label: "Our sectors", href: "#sectors" },
      { label: "Resources", href: "#resources" },
      { label: "Contact us", href: "#contact" },
    ],
    sectors: [
      { label: "Software engineering", href: "#software" },
      { label: "DevOps", href: "#devops" },
      { label: "Cloud", href: "#cloud" },
      { label: "Infrastructure", href: "#infrastructure" },
      { label: "Testing", href: "#testing" },
      { label: "Security", href: "#security" },
    ],
    social: [
      { icon: "Linkedin", href: "#linkedin" },
      { icon: "Facebook", href: "#facebook" },
      { icon: "Instagram", href: "#instagram" },
      { icon: "Twitter", href: "#twitter" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookies", href: "#cookies" },
      { label: "Accessibility", href: "#accessibility" }
    ]
  }
};
