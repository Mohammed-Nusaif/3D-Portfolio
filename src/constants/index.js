import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    bootstrap,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    weatherMonitor,
    ruleEngine,
    asterPharmacy,
    tripguide,
    threejs,
    reofex
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "UI/UX Developer",
        icon: mobile,
    },
    {
        title: "Testing & QA Engineer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "bootstrap",
        icon: bootstrap,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "Junior Full Stack Developer",
        company_name: "Reofex Technologies",
        icon: reofex,
        iconBg: "#383E56",
        date: "May 2024 - sept 2024",
        points: [
            "Refactored the existing project codebase from JavaScript to TypeScript,enhancing code quality and maintainability.",
            " Gained hands-on experience in VAST and VPAID ad-serving platforms,improving ad delivery and performance.",
            " Added new features to the ad player to improve functionality and user experience.",
            " Developed and tested responsive web interfaces using HTML, CSS,Bootstrap, and JavaScript, with Jest ensuring quality and early issue deployment, and version control (Git).detection",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Nusaif proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Nusaif does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Nusaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Weather Monitor",
        description:
            "Real-time weather app using OpenWeatherMap API for Indian metro cities, showing conditions, daily summaries, and alerts on configurable weather threshold breaches.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: " OpenWeatherMap API",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: weatherMonitor,
        source_code_link: "https://github.com/Mohammed-Nusaif/Weather-Monitor",
    },
    {
        name: "Logic Flow",
        description:
            "A 3-tier MERN stack rule engine using AST to dynamically create, modify, and evaluate user eligibility rules based on age, department, income, and spend.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "RESTful API",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
            {
                name: "MongoDB",
                color: "orange-text-gradient",
            },
        ],
        image: ruleEngine,
        source_code_link: "https://github.com/Mohammed-Nusaif/Logic-Flow",
    },
    {
        name: "Aster Pharmacy",
        description:
            "Aster Pharmacy’s website offers online access to healthcare products, prescriptions, wellness items, and health services, with fast delivery and expert support.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "RESTful API",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
            {
                name: "MongoDB",
                color: "orange-text-gradient",
            },
        ],
        image: asterPharmacy,
        source_code_link: "https://github.com/Mohammed-Nusaif/AsterPharmacy",
    },
];

export { services, technologies, experiences, testimonials, projects };