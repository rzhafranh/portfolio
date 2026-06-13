// Data untuk halaman About Me
export const aboutData = {
  name: "Raihan Zhafran",
  photo: "/images/profile.png",
  description: "<span class=\"highlight-word\">UI/UX Designer</span> & <span class=\"highlight-word\">System Developer</span> with a Computer Science background from IPB University, specialized in bridging technical architecture with user-centered functionality. Leveraging a full-stack mentality, from database logic to front-end deployment, to translate complex business requirements into scalable digital solutions. Proven track record of leading cross-functional teams and technical initiatives, delivering robust systems and intuitive design systems in high-stakes environments.",

  // Hard Skills - divided into 4 categories
  // Ganti path icon dengan path gambar logo skill Anda (taruh di folder public/icons/)
  hardSkills: {
    graphicDesignUIUX: [
      { name: "Figma", icon: "/icons/figma.png" },
      { name: "Adobe Photoshop", icon: "/icons/photoshop.png" },
      { name: "Adobe Illustrator", icon: "/icons/illustrator.png" },
      { name: "Adobe Lightroom", icon: "/icons/lightroom.png" },
      { name: "Adobe Premiere Pro", icon: "/icons/premiere-pro.png" },
      { name: "Canva", icon: "/icons/canva.png" },
      { name: "CapCut", icon: "/icons/capcut.png" },
    ],
    codingProgramming: [
      { name: "JavaScript", icon: "/icons/javascript.png" },
      { name: "Python", icon: "/icons/python.png" },
      { name: "HTML", icon: "/icons/html.png" },
      { name: "CSS", icon: "/icons/css.png" },
      { name: "PHP", icon: "/icons/php.png" },
      { name: "SQL", icon: "/icons/sql.png" },
      { name: "Java", icon: "/icons/java.png" },
      { name: "Scala", icon: "/icons/scala.png" },
      { name: "React js", icon: "/icons/react.png" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
      { name: "C++", icon: "/icons/C++.png" },
      { name: "C", icon: "/icons/C.png" },
      { name: "R", icon: "/icons/R.png" },
    ],
    dataScience: [
      { name: "Microsoft PowerBI", icon: "/icons/powerbi.png" },
      { name: "GraphPad Prism", icon: "/icons/graphpad-prism.png" },
      { name: "Jupyter", icon: "/icons/jupyter.png" },
    ],
    other: [
      { name: "Microsoft Office 365", icon: "/icons/msoffice.png" },
      { name: "Google Suite", icon: "/icons/google-suite.png" },
      { name: "Vercel", icon: "/icons/vercel.png" },
    ],
  },

  // Soft Skills
  softSkills: [
    { name: "Critical Thinking", icon: "lightbulb" },
    { name: "Communication", icon: "message-circle" },
    { name: "Teamwork", icon: "users" },
    { name: "Problem Solving", icon: "puzzle" },
    { name: "Leadership", icon: "crown" },
    { name: "Time Management", icon: "clock" },
    { name: "Detail Oriented", icon: "search" },
    { name: "Fast-Learning", icon: "rocket" },
    { name: "Creative", icon: "palette" },
    { name: "Decision Making", icon: "scale" },
    { name: "Adaptive", icon: "rotate-ccw" },
    { name: "Target Oriented", icon: "target" },
    { name: "Public Speaking", icon: "lectern" },
  ],

  // Language Proficiency
  // Ganti path flag dengan gambar bendera negara (taruh di folder public/icons/flags/)
  languages: [
    { name: "Indonesian", level: "Native", flag: "/icons/flags/indonesia.png" },
    { name: "English", level: "Intermediate", flag: "/icons/flags/uk.png" },
  ],
};

// Data untuk Hero Section
export const heroData = {
  mainTitle: "Welcome.",
  subtitle: "to Raihan Zhafran's Gallery",
  description: "Click Below to Begin Your Journey",
};

// Data untuk Experiences - Professional
export const professionalExperiences = [
  {
    id: "prof-1",
    type: "internship", // professional, organization, event
    title: "System Developer Intern",
    company: "PT Astemo Bekasi Manufacturing",
    period: "Oct - Dec 2025",
    image: "/images/Experiences/Professionals/PT Astemo.webp",
    shortDescription: "Spearheaded the full-lifecycle development of a web-based industrial platform, bridging the gap between manufacturing operational pain points and technical specifications. Achieved a 90/100 performance rating by strictly validating all modules against industrial quality standards.",
    fullDescription: "During my tenure as a System Developer at PT Astemo Bekasi Manufacturing, I took ownership of the <span class=\"highlight-word\">full-lifecycle development </span>of an industrial web platform, centering my efforts on ensuring architectural integrity, long-term stability, and system reliability. I began the project by conducting rigorous requirement analysis to intimately understand manufacturing operational pain points and successfully translate them into robust technical specifications. This intentional, <span class=\"highlight-word\">user-centered approach</span> ensured that the finalized system directly addressed and mitigated core business risks while optimizing human-computer interaction flows on the factory floor. <br /><br />By executing the project through disciplined, documented progress tracking, I systematically validated that every single module adhered to strict industrial quality benchmarks. This commitment to rigorous engineering standards and software excellence resulted in a smooth, high-impact deployment, ultimately earning the system an outstanding <span class=\"highlight-word\">final performance rating of 90/100</span>.",
    skills: [
      {
        id: "skill-1",
        name: "Full-Lifecycle Software Development"
      },
      {
        id: "skill-2",
        name: "Human-Computer Interaction",
      },
      {
        id: "skill-3",
        name: "Engineering Requirement Analysis",
      },
      {
        id: "skill-4",
        name: "Quality Assurance & Validation",
      },
      {
        id: "skill-5",
        name: "Agile Progress Tracking",
      },
      {
        id: "skill-6",
        name: "Business Risk Mitigation",
      }
    ]
  },
];

// Data untuk Experiences - Organizations & Events
export const organizationExperiences = [
  {
    id: "org-1",
    type: "organization",
    title: "Head of Creative and Branding Division",
    company: "Himpunan Mahasiswa Ilmu Komputer IPB",
    period: "Jan - Dec 2025",
    image: "images/Experiences/Organizations & Events/Himalkom25.webp",
    shortDescription: "Led creative operations and visual communication strategy for Himalkom to ensure consistent user-facing experiences across all programs. Mentored an 11-member division to streamline design workflows and maintain strict quality control.",
    fullDescription: "As the Head of the Creative and Branding Division, I spearheaded the end-to-end creative operations and visual communication strategy for the organization, ensuring impactful and unified user-facing experiences across all digital and physical events. I directly managed and mentored an <span class=\"highlight-word\">11-member creative team</span>, taking full control of design workflows and implementing rigorous quality control systems. Under my leadership, our division successfully supported the visual needs of <span class=\"highlight-word\">over 20 events and programs</span>. <br /><br />We seamlessly processed <span class=\"highlight-word\">more than 200 design and documentation requests</span> with an outstanding <span class=\"highlight-word\">99% on-time completion rate</span>, drastically optimizing internal request-to-delivery pipelines.My primary focus remained on maintaining cohesive branding standards, which significantly improved user recognition and communication effectiveness across all organizational touchpoints.", 
    skills: [
      {
        id: "skill-org-1",
        name: "Leadership",
      },
      {
        id: "skill-org-2",
        name: "Team Management",
      },
      {
        id: "skill-org-3",
        name: "Quality Control",
      },
      {
        id: "skill-org-4",
        name: "Visual Branding Strategy",
      },
      {
        id: "skill-org-5",
        name: "Project Management",
      },
      {
        id: "skill-org-6",
        name: "Cross-functional Collaboration",
      },
      {
        id: "skill-org-7",
        name: "Creative Direction",
      }
    ]
  },
    {
    id: "org-3",
    type: "organization",
    title: "Staff of Creative and Branding Division",
    company: "Himpunan Mahasiswa Ilmu Komputer IPB",
    period: "Jan - Dec 2024",
    image: "images/Experiences/Organizations & Events/Himalkom24.webp",
    shortDescription: "Contributed to organizational branding and event promotion by designing digital assets and delivering comprehensive documentation for 20+ events. Named Creative Staff of the Year for reliability and exceptional output quality.",
    fullDescription: "Serving as a Staff member in the Media and Branding Division gave me an excellent platform to strengthen Himalkom’s organizational branding and digital presence. I provided active creative support for over <span class=\"highlight-word\">20 internal events</span> by producing compelling promotional and documentation materials that drove student engagement. <br /><br />Additionally, I personally designed over <span class=\"highlight-word\">10 high-quality visual assets</span> tailored for digital communication channels to ensure optimal audience reach. Thanks to my consistent execution, reliability, and the high aesthetic standard of my design outputs under tight timelines, I was honored as the organization's <span class=\"highlight-word\">Creative Staff of the Year</span>.",
    skills: [
      {
        id: "skill-org-7",
        name: "Graphic Design",
      },
      {
        id: "skill-org-8",
        name: "Event Promotion",
      },
      {
        id: "skill-org-9",
        name: "Photography & Documentation",
      },
      {
        id: "skill-org-10",
        name: "Time Management",
      }
    ]
  },
  {
    id: "org-2",
    type: "organization",
    title: "Chairman",
    company: "AgriUX",
    period: "Jan - Nov 2024",
    image: "images/Experiences/Organizations & Events/AgriUX.webp",
    shortDescription: "Led AgriUX, a specialized UI/UX student community focused on developing user-centered design skills through workshops and industry practitioner sessions.",
    fullDescription: "As the Chairperson of AgriUX, I gathered a dedicated student community of over <span class=\"highlight-word\">30 active members</span> focused entirely on learning and mastering UI/UX design. I drove the community’s educational roadmap by organizing more than <span class=\"highlight-word\">14 specialized workshops and case study discussions</span> centered on user research, usability principles, and interface evaluation.<br /><br />To effectively bridge academic learning with real-world UX practices, I facilitated collaborative learning sessions with experienced industry practitioners and professionals. Furthermore, I positioned the community as a strategic talent pool for UI/UX competitions, connecting members with shared design interests and complementary technical skills to form high-performing teams.",
    skills: [
      {
        id: "skill-org-7",
        name: "Community Leadership",
      },
      {
        id: "skill-org-8",
        name: "Curriculum Design",
      },
      {
        id: "skill-org-9",
        name: "Strategic Networking",
      },
      {
        id: "skill-org-10",
        name: "User-Centered Design",
      },
      {
        id: "skill-org-11",
        name: "Talent Mapping",
      },
      {
        id: "skill-org-12",
        name: "Mentorship",
      }
    ]
  },
  {
    id: "event-1",
    type: "event",
    title: "Chairman",
    company: "Saung Desain 2024",
    period: "May - Nov 2024",
    image: "images/Experiences/Organizations & Events/SD24.webp",
    shortDescription: "Led the execution of a single-day design workshop centered on design system fundamentals, UI implementation, and modern industry standards.",
    fullDescription: "Serving as the Chairperson for Saung Desain 2024, I managed the end-to-end project execution of a focused, single-day design workshop attended by over 20 participants. I designed the entire learning flow from the ground up, ensuring the curriculum effectively covered design system fundamentals, scalable UI implementation, and current industry design standards. My focus on delivering practical, actionable insights resulted in exceptional participant feedback that highly commended the clarity, structural focus, and real-world relevance of the presented materials.",
    skills: [
      {
        id: "skill-org-7",
        name: "Project Management",
      },
      {
        id: "skill-org-8",
        name: "Educational Flow Design",
      },
      {
        id: "skill-org-9",
        name: "Stakeholder Communication",
      },
      {
        id: "skill-org-10",
        name: "Evaluative Feedback Analysis",
      }
    ]
  },
  {
    id: "event-2",
    type: "event",
    title: "Head of UXToday Division",
    company: "ITTODAY 2024",
    period: "Apr - Oct 2024",
    image: "images/Experiences/Organizations & Events/UXToday.webp",
    shortDescription: "Managed a national-scale, 2-month UI/UX competition with 100+ participants, focusing heavily on optimizing the participant experience and submission workflow clarity.",
    fullDescription: "As the Head Division of UXToday for ITToday 2024, I designed and managed a high-profile, 2-month national UI/UX competition involving over 30 teams and 100+ individual participants. I took complete ownership of the user journey for competitors by structuring seamless submission flows, transparent timelines, and objective judging criteria to guarantee maximum fairness and usability.  Throughout the event, I actively coordinated with 3 prominent industry judges, handled end-to-end participant communications, and oversaw complex competition logistics to ensure flawless execution at scale.",
    skills: [
      {
        id: "skill-org-7",
        name: "Operations Management",
      },
      {
        id: "skill-org-8",
        name: "User Journey Mapping",
      },
      {
        id: "skill-org-9",
        name: "Professional Communication",
      },
      {
        id: "skill-org-10",
        name: "Stakeholder Management",
      },
      {
        id: "skill-org-11",
        name: "Strategic Planning",
      }
    ]
  },
  {
    id: "event-4",
    type: "event",
    title: "Staff of Creative Division",
    company: "Pekan Ilkomerz 60",
    period: "May - Sep 2024",
    image: "images/Experiences/Organizations & Events/PI60.webp",
    shortDescription: "Designed promotional assets and handled event photography for a large student event with 100+ participants under tight, parallel deadlines.",
    fullDescription: "Serving as a Staff member in the Creative Division for Pekan Ilkomerz 60, I played a vital role in elevating digital promotion and event coverage for a student gathering of over 100 participants. I conceptualized and designed over 10 bespoke Instagram posts to build marketing momentum and support outreach efforts. This fast-paced role required me to deliver diverse creative outputs under multiple overlapping deadlines, which I successfully achieved while strictly preserving the visual consistency and branding integrity of the event.",
    skills: [
      {
        id: "skill-org-7",
        name: "Social Media Design",
      },
      {
        id: "skill-org-8",
        name: "Crisis & Time Management",
      },
      {
        id: "skill-org-9",
        name: "Teamwork",
      }
    ]
  },
    {
    id: "event-6",
    type: "event",
    title: "Staff of Media Branding Division",
    company: "Ilkomerz Night 2023",
    period: "Oct - Dec 2023",
    image: "images/Experiences/Organizations & Events/Inight23.webp",
    shortDescription: "Supported visual branding, designed 40+ official award certificates, and delivered digital assets under tight timelines for an event with 400+ attendees.",
    fullDescription: "Working as a Staff member in the Media Branding Division for Ilkomerz Night 2023, I was tasked with reinforcing the visual identity and documentation for a grand award ceremony hosting over 400 participants. I actively contributed to the event's professional aesthetic by designing over 5 targeted Instagram promotional posts and engineering custom visual assets for more than 40 official award certificates. Operating within a highly collaborative environment, I successfully executed and delivered all high-impact design outputs under extremely tight timelines while meticulously keeping up visual consistency across all touchpoints.",
    skills: [
      {
        id: "skill-org-7",
        name: "Digital Layout Design",
      },
      {
        id: "skill-org-8",
        name: "High-Pressure Asset Delivery:",
      },
      {
        id: "skill-org-9",
        name: "Branding Guidelines Compliance",
      }
    ]
  },
    {
    id: "event-7",
    type: "event",
    title: "Staff of Event Division",
    company: "Saung Desain 2023",
    period: "Jul - Nov 2023",
    image: "images/Experiences/Organizations & Events/SD23.webp",
    shortDescription: "Managed event logistics and stakeholder communication for a design community workshop, coordinating with experienced alumni and securing essential operations.",
    fullDescription: "Serving as an Event Division Staff for Saung Desain 2023, I was directly responsible for driving operational smoothness and logistics management for the community's workshop series. My role centered heavily on cross-functional communication, where I acted as a primary point of contact to invite and coordinate with community alumni who brought valuable practical industry experience back to the students. Additionally, I owned the end-to-end logistics pipeline required for a seamless and high-quality material delivery process. This included managing essential workshop assets and equipment, as well as overseeing the distribution of tokens of appreciation for guest speakers and moderators to ensure a highly professional and uninterrupted event flow.",
    skills: [
      {
        id: "skill-org-7",
        name: "Operations Management",
      },
      {
        id: "skill-org-8",
        name: "Interpersonal Communication:",
      },
      {
        id: "skill-org-9",
        name: "Hospitality & Stakeholder Relations",
      }
    ]
  },
  {
    id: "event-5",
    type: "event",
    title: "Vice Head of the Creative Division",
    company: "IPB Archery Open 2023",
    period: "Aug - Oct 2023",
    image: "images/Experiences/Organizations & Events/IAO23.webp",
    shortDescription: "Co-led creative operations and coordinated a 12-member team managing parallel workflows in design, social media, and live photography for a national tournament with 200+ participants.",
    fullDescription: "As the Vice Chairperson of the Creative Division for the IPB Archery Open 2023, I assisted in leading the overarching creative operations for a multi-day, national-scale sports event. I directly coordinated a talented 12-member creative team, managing parallel workflows spanning graphic design, social media management, and live event documentation.  The tournament catered to over 200 participants, during which our team successfully produced and delivered more than 50 Instagram posts alongside extensive photo archives across 4 days. On a technical level, I personally designed over 20 Instagram posts while actively contributing to on-field photography and cross-team alignment.",
    skills: [
      {
        id: "skill-org-7",
        name: "Matrix Team Management",
      },
      {
        id: "skill-org-8",
        name: "Multi-channel Content Delivery",
      },
      {
        id: "skill-org-9",
        name: "Graphic Design Execution",
      },
      {
        id: "skill-org-9",
        name: "Live Event Documentation",
      },
      {
        id: "skill-org-9",
        name: "Operational Coordination",
      }
    ]
  }
];

// Data untuk Projects
export const projectsData = [
    {
    id: "project-1",
    type: "webdev",
    title: "Development of Follow-Up Medical Check-Up (MCU) Services and Annual Reports on the SIMPORTAL System",
    subtitle: "Intern Project",
    year: "2025",
    images: [
      "/images/Projects/rpl.png"
    ],
    description: "[DESKRIPSI_PROJECT_6]",
    technologies: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        id: "github",
        label: "Github",
        icon: "link",
        url: "https://github.com/your-repo",
      },
    ],
  },

  {
    id: "project-6",
    type: "data", // uiux, coding, webdev, data, ai
    title: "Data Visualization with Microsoft PowerBI",
    subtitle: "Capstone Project",
    year: "2025",
    images: [
      "images/Projects/capstone.png",
      "images/Projects/capstone1.png",
      "images/Projects/capstone2.png",
      "images/Projects/capstone3.png",
    ],
    description: "[DESKRIPSI_PROJECT_1]",
    technologies: ["Microsoft PowerBI", "Microsoft Excel"],
        links: [
      {
        id: "github",
        label: "Github",
        icon: "link",
        url: "https://github.com/your-repo",
      },
    ],
  },
  {
    id: "project-2",
    type: "ai",
    title: "Graduation Status Prediction Model with Python",
    subtitle: "Data Mining Final Project",
    year: "2025",
    images: [
      "/images/Projects/dpp.png"
    ],
    description: "[DESKRIPSI_PROJECT_2]",
    technologies: ["Python"]
  },
    {
    id: "project-5",
    type: "ai",
    title: "Classification Analysis of Rainfall in Indonesia in 2020 Using the Random Forest Algorithm",
    subtitle: "Data Mining Final Project",
    year: "2025",
    images: [
      "/images/Projects/dpp1.png"
    ],
    description: "[DESKRIPSI_PROJECT_5]",
    technologies: ["Python"]
  },
  {
    id: "project-3",
    type: "ai",
    title: "Digital Image Processing Projects",
    subtitle: "Digital Image Processing",
    year: "2025",
    images: [
      "/images/Projects/dpp.png"
    ],
    description: "[DESKRIPSI_PROJECT_3]",
    technologies: ["Python"]
  },
  {
    id: "project-4",
    types: ["uiux", "webdev"],
    title: "Reservation System for Clinic in IPB University",
    subtitle: "Software Engineering Final Project",
    year: "2024",
    images: [
      "images/Projects/rpl.png",
      "images/Projects/rpl1.png",
      "images/Projects/rpl2.png",
    ],
    description: "[DESKRIPSI_PROJECT_4]",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    id: "project-5",
    type: "uiux",
    title: "IPB Mobile Attendance Feature Redesign",
    subtitle: "User Experience Design Final Project",
    year: "2024",
    images: [
      "images/Projects/dpp.png",
      "images/Projects/dpp1.png",
    ],
    description: "[DESKRIPSI_PROJECT_5]",
    technologies: ["Figma", "UI/UX", "User Research"]
  },

];

// Data untuk Socials
export const socialsData = {
  photo: "/images/socialpic.png", // Ganti dengan path foto Anda
  message: "Get in touch with me!",
  socials: [
    {
      id: "social-1",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/raihan-zhafran/",
      icon: "linkedin"
    },
    {
      id: "social-2",
      name: "GitHub",
      url: "https://github.com/rzhafranh",
      icon: "github"
    },
    {
      id: "social-3",
      name: "Instagram",
      url: "https://www.instagram.com/rzhafranh/",
      icon: "instagram"
    },
    {
      id: "social-4",
      name: "Email",
      url: "mailto:raihanzhafranh@gmail.com",
      icon: "envelope"
    },
    {
      id: "social-5",
      name: "Whatsapp",
      url: "https://api.whatsapp.com/send/?phone=6282260302171&text&type=phone_number&app_absent=0",
      icon: "whatsapp"
    },
    {
      id: "social-6",
      name: "Behance",
      url: "https://www.behance.net/raihanzhafran",
      icon: "behance"
    }
  ]
};

// Helper function untuk mendapatkan warna badge berdasarkan tipe
export const getBadgeColor = (type) => {
  const colors = {
    professional: { bg: "bg-red-500", text: "PROFESSIONAL" },
    internship: { bg: "bg-teal-500", text: "INTERNSHIP" },
    organization: { bg: "bg-green-500", text: "ORGANIZATION" },
    event: { bg: "bg-blue-500", text: "EVENT" },
    uiux: { bg: "bg-purple-500", text: "UI/UX & GRAPHIC DESIGN" },
    coding: { bg: "bg-gray-500", text: "CODING & PROGRAMMING" },
    webdev: { bg: "bg-orange-500", text: "WEB DEVELOPMENT" },
    data: { bg: "bg-yellow-500", text: "DATA" },
    ai: { bg: "bg-pink-500", text: "MACHINE LEARNING & AI" }
  };
  return colors[type] || colors.professional;
};
