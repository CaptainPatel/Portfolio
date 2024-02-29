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
  nodejs,
  mongodb,
  git,
  eiser,
  moviefox,
  threejs,
  think,
  ai,
  java,
  python
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "C++ Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "c++",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Mern stack Developer",
    company_name: "ThinkNext Technologies",
    icon: think,
    iconBg: "#383E56",
    date: "July 2023 - August 2023",
    points: [
      "Developing and maintaining web applications using Mern Stack and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to Myself.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Without communication, there could be no cooperation or trust",
    name: "Ayanokouji Kiyotaka",
    designation: "Tomodachi",
    company: "Captain",
    image: "https://i.pinimg.com/564x/58/53/d7/5853d74bbebd52697d8f7be6d07aad8a.jpg",
  },
  {
    testimonial:
      "You need to accept the fact that you're not the best and have all the will to strive to be better than anyone you face",
    name: "Roronoa Zoro",
    designation: "Tomodachi",
    company: "Captain",
    image: "https://i.pinimg.com/564x/89/60/56/896056ec3e9dbe88f0a1fdf9f0fdfc17.jpg",
  },
  {
    testimonial:
      "I do not fear this new challenge. Rather like a true warrior I will rise to meet it",
    name: "Lord Vegeta",
    designation: "Sensei",
    company: "Captain",
    image: "https://i.pinimg.com/564x/70/e9/d1/70e9d19535e48baa84842cfef880da08.jpg",
  },
];

const projects = [
  {
    name: "MERN Stack eCommerce site",
    description:
      "Developed a robust MERN stack eCommerce platform with secure user authentication, efficient product categorization, seamless payment integration, and a responsive UI. Achieved optimal scalability, performance, and security. The project demonstrates expertise in full-stack development, emphasizing a commitment to user-centric design and functionality.",
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
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: eiser,
    source_code_link: "https://github.com/CaptainPatel/Eiser-Frontend",
  },
  {
    name: "Movie Fox",
    description:
      "Created an engaging movie site using React, Tailwind CSS, and various APIs to offer comprehensive information on a wide range of movies. The application seamlessly integrates with external APIs to fetch and display details such as movie summaries, ratings, cast, and trailers. The use of Tailwind CSS ensures a visually appealing and responsive user interface, enhancing the overall user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: moviefox,
    source_code_link: "https://github.com/CaptainPatel/Moviefox",
  },
  {
    name: "AI Summarizer",
    description:
      "Dive into streamlined reading with my AI Summarizer site! 🚀 Built with React, Redux, and Tailwind CSS, it delivers quick article summaries. Just input the URL, and enjoy concise insights through a sleek, user-friendly interface. Experience content clarity effortlessly! 📚✨",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://github.com/CaptainPatel/AI-Summarizer",
  },
];

export { services, technologies, experiences, testimonials, projects };
