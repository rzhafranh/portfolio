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
    image: "/images/Experiences/Organizations & Events/Himalkom25.webp",
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
    image: "/images/Experiences/Organizations & Events/Himalkom24.webp",
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
    image: "/images/Experiences/Organizations & Events/AgriUX.webp",
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
    image: "/images/Experiences/Organizations & Events/SD24.webp",
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
    image: "/images/Experiences/Organizations & Events/UXToday.webp",
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
    image: "/images/Experiences/Organizations & Events/PI60.webp",
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
    image: "/images/Experiences/Organizations & Events/Inight23.webp",
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
    image: "/images/Experiences/Organizations & Events/SD23.webp",
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
    image: "/images/Experiences/Organizations & Events/IAO23.webp",
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
    id: "finalyearproject",
    type: "uiux",
    title: "Summarizer AI Sidebar Prototype for IPB Repository",
    subtitle: "Undergraduate Thesis",
    year: "2026",
    images: [
        "/images/Projects/summarizer.png",
        "/images/Projects/summarizer1.png",
        "/images/Projects/summarizer2.png",
        "/images/Projects/summarizer3.png",
        "/images/Projects/summarizer4.png",
        "/images/Projects/summarizer5.png",
        "/images/Projects/summarizer6.png",
        "/images/Projects/summarizer7.png",
        "/images/Projects/summarizer8.png",
        "/images/Projects/summarizer9.png",
    ],
    description: "This project focuses on designing an embedded, high-fidelity AI literature summarizer for the IPB University Scientific Repository to mitigate student information overload and cognitive fatigue during academic screening. Utilizing a split-screen layout, the interface reduces interaction costs by eliminating file download-and-upload frictions. To prevent visual clutter, the system applies progressive disclosure through tiered summaries (TL;DR, Quick Summary, and Sectioned Summary), complemented by an interactive chatbox and source-attribution links that enable instant grounding verification to foster user trust. <br /><br />Executed within a structured Design Thinking framework, the interface ensures visual consistency and seamless state transitions by leveraging a modular Atomic Design System (from atoms to pages). The interaction design optimizes user cognition through Fitts's and Hick-Hyman laws, while managing system latency using skeleton screens and streaming animations to keep users in the flow. Finally, the prototype was validated via mixed-method Task-Based Usability Testing, measuring efficiency and satisfaction through Task Success Rate (TSR), Time-on-Task (ToT), and the System Usability Scale (SUS), backed by Thematic Analysis for prescriptive design insights.",
    technologies: ["Figma", "Maze"],
    links: [
      {
        id: "figmadesignut",
        label: "Figma - Design",
        icon: "Figma",
        url: "https://www.figma.com/design/4SZJ6CfbPZlvW34caq2YZn/Tugas-Akhir?node-id=1-6&t=dpXZCMhZJawcnoCO-1",
      },
      {
        id: "figmaprotout",
        label: "Figma - Prototype",
        icon: "Figma",
        url: "https://www.figma.com/proto/4SZJ6CfbPZlvW34caq2YZn/Tugas-Akhir?node-id=536-2824&viewport=406%2C-771%2C0.3&t=e8AEt58Tt67qAOaG-1&scaling=contain&content-scaling=fixed&starting-point-node-id=536%3A2824&show-proto-sidebar=1&page-id=1%3A6",
      },
      {
        id: "figjamut",
        label: "Figma - Board",
        icon: "Figma",
        url: "https://www.figma.com/board/UR6zibvUafYEpnNhrUcC5B/Tugas-Akhir?node-id=0-1&t=b8UeYsJDezzlf3Kg-1",
      },
    ],
  },
    {
    id: "internproject",
    type: "webdev",
    title: "Follow-Up MCU and Annual Reports Development on the SIMPORTAL System",
    subtitle: "Intern Project",
    year: "2025",
    images: [
      "/images/Projects/internastemo.png",
      "/images/Projects/internastemo1.png",
      "/images/Projects/internastemo2.png",
      "/images/Projects/internastemo3.png",
      "/images/Projects/internastemo4.png",
      "/images/Projects/internastemo5.png",
      "/images/Projects/internastemo6.png",
      "/images/Projects/internastemo7.png",
      "/images/Projects/internastemo8.png",
      "/images/Projects/internastemo9.png",
      "/images/Projects/internastemo10.png",
      "/images/Projects/internastemo11.png",
      "/images/Projects/internastemo12.png",
    ],
    description: "This project focuses on developing a follow-up medical check-up (MCU) and annual reports system for the SIMPORTAL system. The system is designed to improve the efficiency and effectiveness of the MCU and annual reports process for the company. The project involved designing and developing a user-friendly interface for the system, as well as creating a backend system to store and manage the data. The final product is a web-based system that can be accessed from anywhere, at any time, and is designed to be easy to use and understand. <br /><br />The system was engineered using a PHP and MySQL full-stack architecture based on a synchronized master-detail database design. The relational schema utilizes Header Table to track master cases and Detail Table with composite primary keys to log multi-layered clinical treatments, integrated alongside a unified view-only reporting table. On the frontend, Bootstrap and the DataTables library were implemented to deliver an interactive UI featuring strict role-based access control that restricting general users to self-contained records while granting administrators full CRUD and bulk-import capabilities, secured via internal employee data APIs.",
    technologies: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        id: "github",
        label: "Github",
        icon: "github",
        url: "https://github.com/rzhafranh/rzh-projects/tree/main/Intern%20Project%20at%20PT%20Astemo",
      },
    ],
  },

  {
    id: "capstoneproject",
    type: "data", // uiux, coding, webdev, data, ai
    title: "Student Grade Data Visualization with Microsoft PowerBI",
    subtitle: "Capstone Project",
    year: "2025",
    images: [
      "/images/Projects/capstone.png",
      "/images/Projects/capstone1.png",
      "/images/Projects/capstone2.png",
      "/images/Projects/capstone3.png",
    ],
    description: "As the Lead Data Visualizer for this capstone project, I designed and engineered an interactive Academic Performance Dashboard using Microsoft Power BI to extract institutional insights from complex student datasets. To enable granular data exploration for university stakeholders, I integrated multi-parameter slicers for academic years, semesters, courses, and student cohorts across clean, color-coded visual containers optimized for data scannability. <br /><br />Mechanically, the dashboard relies on five distinct analytical visualizations designed to evaluate academic trends: a historical trend line chart tracking Grade Point Averages (GPA) across academic years, a distribution bar chart highlighting individual grade frequencies (A to BL), and a 100% stacked bar chart illustrating precise grade proportions across curriculum courses. To uncover deeper diagnostic patterns, I constructed a matrix-based heatmap evaluating course grade distributions mapped by semester cohorts alongside an advanced scatter plot cross-analyzing the correlation between student attendance percentages (X-axis) and final academic grades (Y-axis), successfully delivering an intuitive, data-driven framework for academic decision-makers.",
    technologies: ["Microsoft PowerBI", "Microsoft Excel"],
    links: [
      {
        id: "github",
        label: "Github",
        icon: "github",
        url: "https://github.com/rzhafranh/rzh-projects/tree/main/Capstone%20Project",
      },
    ],
  },
  {
    id: "dataminingproject",
    type: "ai",
    title: "Graduation Status Prediction Model with Python",
    subtitle: "Data Mining Final Project",
    year: "2025",
    images: [
      "/images/Projects/daming.png",
      "/images/Projects/daming1.png",
      "/images/Projects/daming2.png",
      "/images/Projects/daming3.png",
      "/images/Projects/daming4.png",
      "/images/Projects/daming5.png",
    ],
    description: "In this predictive analytics project, I engineered an end-to-end machine learning pipeline using Python (Pandas, Scikit-Learn) to classify student academic outcomes into three distinct target classes (Dropout, Enrolled, or Graduate). To eliminate potential demographic bias and enhance model generalization, the feature engineering phase systematically isolated 32 core academic and socioeconomic predictors, explicitly excluding non-academic features like 'Marital Status' and 'Gender'. To handle inherent class imbalances within the student dataset, I deployed a Random Forest Classifier configured with a balanced class weight strategy. <br/><br />The model's hyperparameter space, including estimators, maximum depth, and split thresholds, was rigorously optimized via RandomizedSearchCV paired with a 10-fold StratifiedKFold cross-validation strategy across 100 iterations to prevent data leakage and minimize variance. Post-validation, the champion model was retrained on the entire training dataset matrix to capture maximum variance before executing test-set inference. Finally, I utilized the model’s intrinsic feature_importances_ attribute paired with Seaborn to construct a diagnostic feature-priority visualization, mathematically proving that second-semester academic performance and evaluation metrics served as the most dominant statistical predictors of student retention and success.",
    technologies: ["Python", "Google Colab", "Pandas"],
    links: [
      {
        id: "colab",
        label: "Google Colab",
        icon: "colab",
        url: "https://colab.research.google.com/drive/1w6UmUZ88hwaxoUuuCXHof1i8jm6HhkdJ?usp=sharing",
      },
    ],
  },
    {
    id: "datamininggroupproject",
    type: "ai",
    title: "Classification Analysis of Rainfall in Indonesia in 2020 Using the Random Forest Algorithm",
    subtitle: "Data Mining Final Project",
    year: "2025",
    images: [
      "/images/Projects/daminggr.png",
      "/images/Projects/daminggr1.png",
      "/images/Projects/daminggr2.png",
      "/images/Projects/daminggr3.png",
      "/images/Projects/daminggr4.png",
      "/images/Projects/daminggr5.png",
      "/images/Projects/daminggr6.png",
      "/images/Projects/daminggr7.png",
    ],
    description: "In this collaborative data mining project, my team and I analyzed rainfall patterns in Indonesia in 2020 using the Random Forest Algorithm. We used Python, Google Colab, and Pandas to engineer a predictive model that accurately classified rainfall occurrences based on various meteorological factors. The project involved data preprocessing, feature engineering, model training, and evaluation, ultimately resulting in a robust solution for rainfall classification.",
    technologies: ["Python", "Google Colab", "Pandas"],
    links: [
      {
        id: "colabreg",
        label: "Google Colab",
        icon: "colab",
        url: "https://colab.research.google.com/drive/15aaOY7scP0nGImUCF0Qu8B0rCdu0Wb6E",
      },
      {
        id: "colabclass",
        label: "Google Colab",
        icon: "colab",
        url: "https://colab.research.google.com/drive/135Iu8-wTpivF2cBBMVKnypbE5Lgl-0vx",
      },
      {
        id: "docsreportdaming",
        label: "Google Docs - Report",
        icon: "docs",
        url: "https://docs.google.com/document/d/1N_IT-Qda57GYJJ6TH8_SuL8zjnXhbEHZ/edit?usp=sharing&ouid=103949759996857829730&rtpof=true&sd=true",
      },
    ],
  },
  {
    id: "imageprocessingproject",
    type: "ai",
    title: "Digital Image Processing Personal Projects",
    subtitle: "Digital Image Processing",
    year: "2025",
    images: [
      "/images/Projects/pcd.png",
      "/images/Projects/pcd1.png",
      "/images/Projects/pcd2.png",
      "/images/Projects/pcd3.png",
      "/images/Projects/pcd4.png",
      "/images/Projects/pcd5.png",
      "/images/Projects/pcd6.png",
      "/images/Projects/pcd7.png",
      "/images/Projects/pcd8.png",
      "/images/Projects/pcd9.png",
    ],
    description: "In this comprehensive Digital Image Processing portfolio, I engineered and analyzed a suite of advanced image enhancement, restoration, and segmentation algorithms utilizing Python (OpenCV, NumPy, Scikit-Image, and Matplotlib) to manipulate image matrices across both spatial and frequency domains. In the spatial domain, I implemented Mask Processing techniques for image enhancement using matrix convolutions for directional filtering, Sobel edge detection, and localized blurring, alongside tonal distribution analyses to evaluate exposure variations via RGB/HSV color histograms and optimize dynamic range through Contrast Stretching and Histogram Equalization. To mitigate high-frequency noise, I built robust image restoration pipelines, systematically benchmarking Arithmetic, Geometric, Harmonic, and Contra-Harmonic Mean Filters to adaptively suppress Gaussian, Rayleigh, and Salt & Pepper noise distributions based on selective parameter and Q-value tuning. <br /><br />In the frequency domain, I leveraged the 2D Fast Fourier Transform (FFT) and fftshift to execute low-pass and high-pass filtering via Ideal and Butterworth frameworks, controlling structural blurring and edge sharpening while applying these insights to biological computing by constructing a Radial Intensity Frequency Distribution with 1D Gaussian-smoothed profiles to mathematically distinguish healthy leaves from diseased ones. For higher-level computer vision tasks, I developed automated Color and Morphological Segmentation pipelines utilizing adaptive thresholding and customized structuring elements for mathematical morphology operations (Dilation, Erosion, Opening, and Closing). Finally, I integrated geometric feature extraction methods using the Hough Line and Circle Transforms for precise shape localization, successfully delivering an intuitive, data-driven framework for advanced object detection and analysis.",
    technologies: ["Python", "Jupyter", "OpenCV", "NumPy", "Scikit-Image", "Matplotlib", "Pandas", "SciPy"],
    links: [
      {
        id: "colabpcd",
        label: "Google Colab",
        icon: "colab",
        url: "https://colab.research.google.com/drive/1hrTM49U-NtNbvKwO7T7UoCw-dPDR79Z7?usp=sharing",
      },
    ],
  },
  {
    id: "seproject",
    types: ["uiux", "webdev"],
    title: "Reservation System for Clinic in IPB University",
    subtitle: "Software Engineering Final Project",
    year: "2024",
    images: [
      "/images/Projects/rpl.png",
      "/images/Projects/rpl1.png",
      "/images/Projects/rpl2.png",
    ],
    description: "For this Poliklinik application, which is a collaborative Software Engineering group project I served as a hybrid UI/UX Designer and Frontend Developer, managing the user research, interface design, and initial code implementation phases. My responsibility began with gathering user requirements from target patient demographics and translating those strategic insights into intuitive user journeys. I architected the core user flow, focusing heavily on a streamlined online registration and appointment reservation system designed to eliminate front-desk friction. After establishing the high-fidelity visual design blueprints, <br /><br />I bridge the gap between design and development by actively collaborating in writing the frontend codebase. Through this technical contribution, I ensured that the interactive user interfaces, modular layout components, and critical user flows were accurately translated from mockups into responsive, functional code aligned with usability best practices.",
    technologies: ["Figma", "Javascript", "HTML", "CSS", "Node.js"],
    links: [
      {
        id: "rplgithub",
        label: "Github",
        icon: "github",
        url: "https://github.com/YudoTLE/poliklinik",
      },
    ],
  },
  {
    id: "uxdproject",
    type: "uiux",
    title: "IPB Mobile Attendance Feature Redesign",
    subtitle: "User Experience Design Final Project",
    year: "2024",
    images: [
      "/images/Projects/dpp.png",
      "/images/Projects/dpp1.png",
      "/images/Projects/dpp2.png",
    ],
    description: "In this collaborative UI/UX case study, my team and I redesigned the attendance module in the IPB Mobile (IPBM) application to eliminate redundant user steps and prevent attendance manipulation. Following a comprehensive Competitor Analysis of university attendance frameworks, we synthesized student pain points into targeted user personas, empathy maps, and user journeys. We utilized a 2x2 impact-effort matrix and rapid 'Crazy 8' ideation to transform 'How Might We' statements into concrete structural blueprints, unifying attendance logging and historical tracking into a single, high-fidelity dashboard. <br /><br />To validate our design, we ran usability tests via Maze, which achieved a 92.3% direct success rate for absence reporting and an 84.6% direct success rate for standard check-ins. Finally, quantitative data from the User Experience Questionnaire (UEQ) yielded outstanding pragmatic and hedonic scores, mathematically confirming that the redesigned application successfully maximized usability, scannability, and student accountability.",
    technologies: ["Figma", "UI/UX", "User Research"],
    links: [
      {
        id: "figmadesign",
        label: "Figma - Design",
        icon: "figma",
        url: "https://www.figma.com/design/j29i9U04xxpWZI7R74iqiL/Designs?node-id=97-381&t=5EHMvlzcX8iH87DU-1",
      },
      {
        id: "figmaproto",
        label: "Figma - Prototype",
        icon: "figma",
        url: "https://www.figma.com/proto/j29i9U04xxpWZI7R74iqiL/Designs?node-id=97-381&viewport=739%2C221%2C0.32&t=3CVw8qUqOTVdX5J6-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=97%3A381&page-id=71%3A2",
      },
      {
        id: "figmajam",
        label: "FigJam",
        icon: "figma",
        url: "https://www.figma.com/board/aDHjC6qQeSThfMgJK3ujne/FigJam?node-id=0-1&p=f&t=l3PtKs4wbrH1blXr-0",
      },
    ],
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
      icon: "mail"
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
