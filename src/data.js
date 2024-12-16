import { BsCircleFill } from "react-icons/bs";

export const projects = [
  {
    id: 1,
    name: "Recipe Finder",
    description:
      "A web application that allows users to search for recipes based on ingredients, powered by React and styled with Tailwind CSS.",
    image: "public/recipeFinder.jpg",
    github_url: "https://github.com/paudelb36/recipe-finder",
    category: ["React"],
    key_value: ["React", "Tailwind"],
  },
  {
    id: 2,
    name: "Readers Network",
    description:
      "A social networking platform for book enthusiasts to share and discover reviews, built using PHP and MySQL with a modern design using Tailwind CSS.",
    image: "public/readersNetwork.jpg",
    github_url: "https://github.com/paudelb36/readers-network-social",
    category: ["PHP"],
    key_value: ["PHP", "MySQL", "HTML", "CSS", "Tailwind"],
  },
  {
    id: 3,
    name: "Hostel Finders",
    description:
      "A web application to search and book hostels based on user preferences, developed using PHP and MySQL with a responsive design.",
    image: "public/hostelFinders.jpg",
    github_url: "https://github.com/paudelb36/hostel-finders-website",
    category: ["PHP"],
    key_value: ["PHP", "MySQL", "HTML", "CSS"],
  },
  {
    id: 4,
    name: "Task Manager",
    description:
      "A simple task management application to organize and track daily tasks, created using JavaScript, HTML, and CSS.",
    image: "public/taskManager.jpg",
    github_url: "https://github.com/paudelb36/Task-Manager-Application",
    category: ["Javascript"],
    key_value: ["Javascript", "HTML", "CSS"],
  },
  {
    id: 5,
    name: "Contact App",
    description:
      "A contact management system that integrates Firebase for real-time database functionality, built with React and styled using Tailwind CSS.",
    image: "public/firebaseContact.jpg",
    github_url: "https://github.com/paudelb36/firebase-contact-app",
    category: ["React"],
    key_value: ["React", "Tailwind", "Firebase"],
  },
  {
    id: 6,
    name: "Nurse Management System",
    description:
      "A web-based management system for nursing services to manage schedules, records, and clients, created using PHP and MySQL.",
    image: "public/nursaryWebsite.jpg",
    github_url: "https://github.com/paudelb36/nursarywebsite",
    category: ["PHP"],
    key_value: ["PHP", "MySQL", "HTML", "CSS"],
  },
  {
    id: 7,
    name: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills, designed with React and Tailwind CSS for a professional look.",
    image: "public/portfolioWebsite.jpg",
    github_url: "https://github.com/paudelb36/react-portfolio-website",
    category: ["React"],
    key_value: ["React", "Tailwind"],
  },
];


export const education = [
    {
      id: 1,
      degree: "Bachelor in Computer Application",
      institution: "Tribhuvan University",
      location: "Kathmandu, Nepal",
      duration: "2020 - Present",
      description: "Currently pursuing Bachelor's degree with focus on software development and computer systems."
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      institution: "Milestone International College",
      location: "Lalitpur, Nepal",
      duration: "2018 - 2020",
      description: "Completed +2 with Science major, focusing on Physics, Chemistry, and Mathematics."
    },
    {
      id: 3,
      degree: "Secondary Education",
      institution: "Sainik Awasiya Mahavidyalaya",
      location: "Bhaktapur, Nepal",
      duration: "2010 - 2017",
      description: "Completed secondary education with distinction in Science and Mathematics."
    }
  ];
  
  export const languages = [
    {
        name:"React",
        level: "50%",
        Icon: BsCircleFill,
    },
    {
        name:"HTML/CSS",
        level: "80%",
        Icon: BsCircleFill,
    },
    {
        name:"Javascript",
        level: "80%",
        Icon: BsCircleFill,
    },
    {
        name:"Python",
        level: "0%",
        Icon: BsCircleFill,
    },
    {
        name:"PHP",
        level: "70%",
        Icon: BsCircleFill,
    },
    {
        name:"MySQL",
        level: "50%",
        Icon: BsCircleFill,
    },
]

export const tools = [
    {
        name:"Figma",
        level: "60%",
        Icon: BsCircleFill,
    },
    {
        name:"Photoshop",
        level: "60%",
        Icon: BsCircleFill,
    },
]