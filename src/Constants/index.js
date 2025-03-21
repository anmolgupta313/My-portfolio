import {
  bootstrap,
  css,
  html,
  js,
  react,
  sass,
  nodejs,
  figma,
  git,
  tailwind,
  github,
  workoutmaker,
  web,
  weatherdashboard,
  quizchallenge,
  workdayscheduler,
  project3,
  airBnb,
  Akicks,
  Translate,
} from "../../public";
export const skills = [
  {
    id: "html",
    title: "HTML",
    icon: html,
  },
  {
    id: "css",
    title: "CSS",
    icon: css,
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: js,
  },
  {
    id: "react",
    title: "React",
    icon: react,
  },
  {
    id: "node",
    title: "Node",
    icon: nodejs,
  },
  {
    id: "github",
    title: "Github",
    icon: git,
  },
  {
    id: "bootstrap",
    title: "Bootstrap",
    icon: bootstrap,
  },
  {
    id: "figma",
    title: "Figma",
    icon: figma,
  },
  {
    id: "sass",
    title: "Sass",
    icon: sass,
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    icon: tailwind,
  },
];

export const experience = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Vosyn",
    description: {
      p1: "Participate in the entire application development lifecycle, focusing on designing and developing the platform's user interface, resulting in a 30% increase in user engagement through intuitive and visually appealing layouts.",
      p2: "Improved state management efficiency using Redux, eliminating prop drilling for cleaner code structure.",
      p3: "Utilized Next.js for faster server-side rendering (SSR) and static site generation (SSG), improving application performance and increasing page load speeds by 20%.",
      p4: "Developed and maintained over 10 scalable, reusable components using ReactJS, improving development speed by 25%.",
      p5: "Ensured responsive design and cross-browser compatibility, achieving a 90% consistency rate in user experience across multiple devices and browsers through expert application of HTML and CSS.",
      p6: "Implemented unit testing using Jest, ensuring code reliability and catching bugs early, which enhanced overall code quality.",
    },

    year: "2024 - Present",
  },
  {
    id: "2",
    title: "Web Developer",
    company: "Clickworthy",
    description: {
      p1: "Designed and created lead-generation landing pages, expanding the company’s global reach by 40%.",
      p2: "Developed a user-friendly, responsive website from scratch, resulting in a 35% increase in traffic and a 25% improvement in user experience metrics. ",
      p3: "Utilized the Context API for state management, reducing prop drilling by 90% and simplifying state management across the application.",
      p4: "Designed and implemented reusable components, enhancing code efficiency by 30% and reducing development redundancy by 40%.",
      p5: "Designed wireframes using Adobe XD, accelerating the design process and improving project delivery timelines by 20%. ",
      p6: "Collaborated with stakeholders while remaining fiscally responsible.",
    },

    year: "2021 - 2024",
  },
  {
    id: "3",
    title: "Bootcamp in Fullstack Developemnt",
    company: "University Of Toronto",
    description: {
      p1: "Built and deployed full-stack web applications using the MERN (MongoDB, Express.js, React, Node.js) stack.",
      p2: "Designed and developed responsive, user-friendly UIs using React, JavaScript, HTML, and CSS.",
      p3: "Created and managed RESTful APIs for efficient data communication between frontend and backend.",
      p4: "Learned and implemented data structures and algorithms to optimize application performance.",
      p5: "Worked with MySQL and MongoDB to store, retrieve, and manage structured and unstructured data.",
      p6: "Gained hands-on experience with version control (Git/GitHub), Agile development, and CI/CD deployment.",
    },

    year: "2022 - 2023",
  },
  {
    id: "4",
    title: "Website Designer & Developer",
    company: "Blue Ocean business Club",
    description: {
      p1: "Collaborated with management to define the vision & scope of the platform. Iterated several mock-ups based on their feedback.",
      p2: "After understanding client requirements, created multiple website designs.",
      p3: "Developed the website and added features like Payment Gateway, Community to share images, documents, and videos, etc.",
      p4: "Technologies used: WordPress, Woo-Commerce, Buddyboss.",
      p5: "Tools used: Adobe Xd, Elementor Pro.",
    },

    year: "2021 - 2022",
  },
  {
    id: "5",
    title: "Website Designer & Developer",
    company: "Nomads Skillshare",
    description: {
      p1: "Build a ticketing/e-commerce platform for the an organization with the objective to increase revenue and expand its reach.",
      p2: "Collaborated with the management and understood their vision. Designed several mock-ups and refined them after feedback.",
      p3: "Developed and launched website in less than a month.",
      p4: "Technologies used: WordPress, Woo-Commerce.",
      p5: "Tools used: Adobe Xd, Elementor Pro.",
    },

    year: "2020 - 2023",
  },
  {
    id: "6",
    title: "Bachelors In Commerce",
    company: "Panjab University",
    description: {
      p1: "Gained a strong foundation in business management, accounting, and financial analysis.",
      p2: "Developed analytical skills through market research, data interpretation, and business case studies.",
      p3: "Learned economic principles, taxation policies, and financial planning for business decision-making.",
      p4: "Studied entrepreneurship and business strategy, focusing on growth and scalability.",
      p5: "Improved communication and leadership skills through presentations, group projects, and business simulations.",
      p6: "Applied problem-solving and critical thinking to real-world business challenges and financial case studies.",
    },

    year: "2016 - 2019",
  },
];

export const portfolio = [
  {
    image: airBnb,
    title: "Air Bnb Home Rep",
    description:
      "This project represents the culmination of my efforts following the completion of my Bootcamp course at the University of Toronto. It involves the creation of a web page that closely mirrors the Airbnb homepage.",
    github: {
      icon: git,
      link: "https://github.com/anmolgupta313/Bnb-Home-rep",
    },
    deployedLink: { icon: web, link: "https://bnb-home-rep.vercel.app/" },
  },
  {
    image: Akicks,
    title: "A-kicks",
    description:
      " AKicks  is an e-commerce platform tailored for sneaker enthusiasts. Users can explore a diverse range of sneakers categorized by brand, name, and value. The platform enables users to place orders for their preferred sneaker in their specific sizes by adding into cart and creating an account.",
    github: {
      icon: git,
      link: "https://github.com/anmolgupta313/A-Kicks-",
    },
    deployedLink: {
      icon: web,
      link: "https://github.com/anmolgupta313/A-Kicks-",
    },
  },
  {
    image: project3,
    title: "Anime Bootcamp",
    description:
      "Anime Database is an online database for anime and manga, where users can search, read story briefs and sign up to create their watchlists & read lists.",
    github: {
      icon: git,
      link: "https://github.com/renfunny/anime-bootcamp",
    },
    deployedLink: {
      icon: web,
      link: "https://github.com/renfunny/anime-bootcamp",
    },
  },
  {
    image: Translate,
    title: "Lets Translate",
    description:
      "Lets Translate is a website for translating language into their native language using speech to text",
    github: {
      icon: git,
      link: "https://github.com/anmolgupta313/TranslateApp",
    },
    deployedLink: {
      icon: web,
      link: "https://translate-app-snowy.vercel.app/",
    },
  },
  {
    image: workoutmaker,
    title: "Workout Maker",
    description:
      "Workout Builder is a website for beginners and workout enthusiasts to learn about exercise options based on different muscle groups and the right methods to perform these exercises.",
    github: { icon: git, link: "https://github.com/renfunny/GitUp.Now" },
    deployedLink: {
      icon: web,
      link: "https://renfunny.github.io/GitUp.Now/index.html",
    },
  },

  {
    image: weatherdashboard,
    title: "Weather Dashboard",
    description:
      "Weathether Dashboard is a website where user can search and have a look on the weather forecast of any city for the next 5 days and can switch between cities after searching for multiple cities. ",
    github: {
      icon: git,
      link: "https://github.com/anmolgupta313/Weather-Dashboard-Challenge-06",
    },
    deployedLink: {
      icon: web,
      link: "https://anmolgupta313.github.io/Weather-Dashboard-Challenge-06/",
    },
  },
  {
    image: quizchallenge,
    title: "Quiz Challenge",
    description:
      "Quiz Challenge is a game for the IT nerds where user can test their knowledge by answering few multiple choice questions and then save the score and can play again to beat their previous score",
    github: {
      icon: git,
      link: "https://github.com/anmolgupta313/Web-ApI-Quiz-Chaallenge",
    },
    deployedLink: {
      icon: web,
      link: "https://anmolgupta313.github.io/Web-ApI-Quiz-Chaallenge/",
    },
  },
  {
    image: workdayscheduler,
    title: "Work Day Scheduler",
    description:
      "Work Day Scheduler is a simple calendar where user can set their daily task based on the time and mark it done when they are done working on it",
    github: {
      icon: git,
      link: "https://github.com/anmolgupta313/Challenge-5-Work-Day-Scheduler",
    },
    deployedLink: {
      icon: web,
      link: "https://anmolgupta313.github.io/Challenge-5-Work-Day-Scheduler/",
    },
  },
];
