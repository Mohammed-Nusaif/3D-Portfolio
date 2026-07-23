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
    weatherMonitor,
    ruleEngine,
    asterPharmacy,
    apexChrono,
    threejs,
    reofex,
    angular,
    sqlServer,
    dotnet,
    adhun,
    afeef,
    rafeeq,
    benzy,
    aspire,
    futuralabs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
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
    // {
    //     name: "HTML 5",
    //     icon: html,
    // },
    // {
    //     name: "CSS 3",
    //     icon: css,
    // },
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
    // {
    //     name: "bootstrap",
    //     icon: bootstrap,
    // },
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
    // {
    //     name: "git",
    //     icon: git,
    // },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "SQL Server",
        icon: sqlServer,
    },
    {
        name: ".NET",
        icon: dotnet,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "Angular Developer",
        company_name: "Benzy Infotech Pvt Ltd",
        icon: benzy,
        iconBg: "#383E56",
        date: "Jan 2026 - Present",
        points: [
            "Implemented AI-powered CRM features (Email Summarization, Rewrite, Translation) in Ticxly CRM using Angular 19, REST APIs, Signals, and RxJS.",
            "Developed responsive user interfaces, including a WhatsApp Template Library, attachment previews, and agent activity timelines.",
            "Built responsive Gmail-like AI interfaces with loading states, retry mechanisms, and language selections.",
            "Collaborated with senior engineers to implement robust, reusable frontend architectures using TypeScript and Angular Material.",
        ],
    },
    {
        title: "Intern - Software Development",
        company_name: "Aspire IT Academy, Kochi",
        icon: aspire,
        iconBg: "#E6DEDD",
        date: "Aug 2025 - Present",
        points: [
            "Developed and maintained full-stack web applications using .NET Core, Angular, and MySQL, delivering scalable solutions.",
            "Built responsive, reusable, and testable Angular components, ensuring a seamless user experience across devices and platforms.",
            "Integrated frontend (Angular) with backend (.NET Core APIs), enabling smooth data flow and robust application architecture.",
            "Designed and implemented RESTful APIs with .NET Core, optimized MySQL queries, and improved overall backend efficiency.",
        ],
    },
    {
        title: "Business Development Associate",
        company_name: "Intellipaat, Bangalore, India",
        icon: mobile,
        iconBg: "#383E56",
        date: "Nov 2024 - May 2025",
        points: [
            "Promoted and consulted on technical upskilling programs, helping clients choose career-oriented learning paths.",
            "Collaborated with cross-functional sales and product teams to create effective client acquisition strategies and increase conversions.",
            "Managed CRM systems to track pipelines and deliver accurate reports for strategic business decisions.",
        ],
    },
    {
        title: "Junior Full Stack Developer",
        company_name: "Reofex Technologies, Malappuram, India",
        icon: reofex,
        iconBg: "#E6DEDD",
        date: "May 2024 - Nov 2024",
        points: [
            "Refactored the existing project codebase from JavaScript to TypeScript, enhancing code quality and maintainability.",
            "Gained hands-on experience in VAST and VPAID ad-serving platforms, improving ad delivery and performance.",
            "Added new features to the ad player to improve functionality and user experience.",
            "Developed and tested responsive web interfaces using HTML, CSS, Bootstrap, and JavaScript, with Jest ensuring quality and early issue detection.",
        ],
    },
    {
        title: "Intern - Software Development",
        company_name: "Futura Labs LLP",
        icon: futuralabs,
        iconBg: "#383E56",
        date: "Dec 2023 - Apr 2024",
        points: [
            "Developed and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
            "Designed and implemented RESTful APIs, optimized database queries and improved application efficiency.",
            "Developed responsive and user-friendly interfaces, ensuring a seamless user experience across devices and screen sizes.",
            "Collaborated with cross-functional teams to enhance teamwork and communication skills.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "During his time at Reofex Technologies, Nusaif proved to be an exceptionally driven developer. His work on codebase modernization and optimizing ad players demonstrated strong problem-solving skills.",
        name: "Rafeeq",
        designation: "CEO",
        company: "Reofex Technologies, Kizhissery",
        image: rafeeq,
    },
    {
        testimonial:
            "Nusaif is a dedicated and highly capable engineer. He has a solid understanding of modern web tech like React, Angular, and .NET, coupled with a great attitude towards collaboration and code quality.",
        name: "Adhun",
        designation: "Senior Software Engineer",
        company: "Benzy Infotech Pvt Ltd",
        image: adhun,
    },
    {
        testimonial:
            "Working with Nusaif has been a great experience. He possesses the rare combination of technical expertise, layout precision, and responsiveness that is crucial for building user-centric software.",
        name: "Afeef",
        designation: "Founder and CEO",
        company: "Guestify",
        image: afeef,
    },
];

const projects = [
    {
        name: "ApexChrono",
        description:
            "A modern e-commerce web application for purchasing watches, featuring intuitive homepage banners, product search filters, cart management, and a clean responsive checkout design.",
        tags: [
            {
                name: "Angular",
                color: "pink-text-gradient",
            },
            {
                name: ".NET Core",
                color: "blue-text-gradient",
            },
            {
                name: "SQL Server",
                color: "green-text-gradient",
            },
        ],
        image: apexChrono,
        source_code_link: "https://github.com/Mohammed-Nusaif/ApexChrono",
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