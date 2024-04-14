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
  threejs,
  think,
  ai,
  java,
  python,
  lazykid,
  darshan
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
    name: "Lazy Kid",
    description:
    "The ultimate solution for students too busy studying to fetch snacks or print notes! 🚀 Order food or print documents on campus and let LazyKid handle the rest, delivering straight to your study spot. Because who has time for anything but acing exams? 📚🍔 #LazyButSmart",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
    ],
    image: lazykid,
    source_code_link: "https://lazykid.in/",
  },
  {
    name: "Book My Darshan",
    description:
      "Introducing Book My Darshan: Your one-stop solution for hassle-free online booking of Ram Mandir tickets! 🕉️ Skip the queues, book your darshan slot with ease, and embark on a divine journey hassle-free. Created during a hackathon, because even spirituality deserves some tech-savvy convenience! 🌟 #DivineBooking",
      tags: [
        {
          name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Blockchain",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: darshan,
    source_code_link: "https://github.com/CaptainPatel/BookMyDarshan",
  },
  {
    name: "Eiser",
    description:
      "An eCommerce platform with secure user authentication, efficient product categorization, seamless payment integration, and a responsive UI. Achieved optimal scalability, performance, and security.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "MVC",
        color: "green-text-gradient",
      },
      {
        name: "Material-UI",
        color: "pink-text-gradient",
      },
    ],
    image: eiser,
    source_code_link: "https://github.com/CaptainPatel/Eiser-Frontend",
  }
];

export { services, technologies, experiences, testimonials, projects };
