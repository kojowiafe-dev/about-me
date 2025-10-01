import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Wiafe Jeremiah",
  initials: "WJ",
  url: "https://dillion.io",
  location: "Accra, GHANA",
  locationLink: "https://www.google.com/maps/place/accra",
  description:
    "Student, Full Stack Developer and AI Enthusiast. I love building things and helping people. Very active on Github.",
  summary:
    "Currently, I’m pursuing a Computer Science and Mathematics degree at the University of Ghana, where I’ve been sharpening both my technical and problem-solving skills. Along the way, I’ve worked on impactful projects like a Church Management System and AI email agents, blending my passion for software engineering with real-world innovation. Beyond academics, I’m actively engaging in the global tech community—most recently by participating in Global Hack Week: Data Week hosted by MLH, where I collaborate, learn, and contribute to exciting data-driven projects. My journey continues to be fueled by curiosity, building meaningful solutions, and the drive to grow both as an engineer and entrepreneur.",
  avatarUrl: "/pic2.jpg",
  skills: [
    "React",
    "FastAPI",
    "Typescript",
    "Python",
    "Postgres",
    "Docker",
    "Django",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "wiafejeremiah@gmail.com",
    tel: "+233591783838",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kojowiafe-dev",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jeremiah-wiafe-69a7a925b/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:wiafejeremiah@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Aurora Software Labs",
      badges: [],
      href: "https://aurorasoftwarelabs.io",
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/aurora.webp",
      start: "September 2025",
      end: "Present",
      description: "Building responsive, and sleek websites.",
    },
    {
      company: "Major League Hacking",
      badges: [],
      href: "https://mlh.com",
      location: "Remote",
      title: "Contributor",
      logoUrl: "/mlh.svg",
      start: "September 2025",
      end: "September 2025",
      description:
        "Contributing to the open source code. Networking with developers all over the world. Learning from senior engineers from the Silicon Valley and FAANG.",
    },
    {
      company: "ProImpactNova SWE Team",
      href: "",
      badges: [],
      location: "On-site",
      title: "Backend Developer",
      logoUrl: "/pro.jpg",
      start: "July 2025",
      end: "August 2025",
      description:
        "Collaborated on building the backend of a church mobile app for a client. Write clean, efficient, and maintainable code for application functionality. Implemented business logic to handle data processing, authentication, and workflows. Developed secure and scalable RESTful APIs to allow frontend applications to communicate with the backend. Wrote unit tests to help fix bugs. Worked with DevOps teams to configure servers, CI/CD pipelines, and cloud environments. Monitored server performance and uptime.",
    },
  ],
  education: [
    {
      school: "University Of Ghana",
      href: "https://ug.edu.gh",
      degree: "Computer Science and Mathematics",
      logoUrl: "/logo.svg",
      start: "March 2024",
      end: "September 2027",
    },
    {
      school: "Oda Senior High School",
      href: "https://oda.edu.gh",
      degree: "Senior High School Diploma - General Arts (6As 2Bs)",
      logoUrl: "/oda.jpg",
      start: "March 2021",
      end: "September 2023",
    },
  ],
  projects: [
    {
      title: "AI Email Generator",
      href: "https://mailto-nu.vercel.app",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "An intelligent application that automatically drafts personalized, professional emails, leveraging AI to adapt tone, style, and structure for different contexts and audiences. Designed to improve communication efficiency while maintaining a natural and context-aware writing flow",
      technologies: [
        "React.js",
        "Javascript",
        "SQLite",
        "FastAPI",
        "TailwindCSS",
        "Gemini AI",
        "Shadcn UI",
        "Magic UI",
        "Python",
      ],
      links: [
        {
          type: "AI Email Generator",
          href: "https://mailto-nu.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kojowiafe-dev/mailto.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mailto.png",
      video: "",
    },
    {
      title: "Church Management System",
      href: "https://kgcci.vercel.app",
      dates: "June 2025",
      active: true,
      description:
        "A robust web application built with Fast API and React, featuring role-based access control, Google authentication, and an OTP-based password reset system. The platform enables administrators to manage member records, track attendance, and streamline church operations through a secure and user-friendly interface.",
      technologies: [
        "React.js",
        "Typescript",
        "PostgreSQL",
        "Neon",
        "TailwindCSS",
        "FastAPI",
        "Python",
        "ElevenLabs",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Church Management System",
          href: "https://kgcci.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kojowiafe-dev/church_mg_system.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/kgcci.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Data Hack Week",
      dates: "September 12th - 18th, 2025",
      location: "Remote",
      description:
        "Currently developing an AI-powered sales agent using ElevenLabs conversational engine.",
      image: "/data.png",
      mlh: "",
      links: [],
    },
  ],
} as const;
