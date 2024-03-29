import Project from "../Project";

//Define array of available projects
const projectList = [
  {
    id: 1,
    title: "Next-best Tech Blog",
    image: "/assets/next-best-tech-blog.png",
    gitHubLink: 'https://github.com/AmyLloyd/next-best',
    appLink: 'https://stark-spire-89547-14040d39d29b.herokuapp.com/',
    developerPractice: 'Showing skills using: MVC'
  },
  {
      id: 2,
      title: "Keep your words- JATE text editor",
      image: "/assets/jate.png",
      gitHubLink: 'https://github.com/AmyLloyd/keep-your-words',
      appLink: 'https://keep-your-words.onrender.com/',
      developerPractice: 'Showing skills using: PWA using IndexedDB'
  },
  {
      id: 3,
      title: "Quick get that down! Notetaker app",
      image: "/assets/note-taker-app.png",
      gitHubLink: "https://github.com/AmyLloyd/quick-get-that-down",
      appLink: "https://stormy-escarpment-29702-726705b51eaa.herokuapp.com/",
      developerPractice: 'Showing skills using: express.js server and promises'
  },
  {
    id:4,
    title: "Portfolio",
    image: "/assets/Portfolio-screenshot.png",
    gitHubLink: "https://github.com/AmyLloyd/react-portfolio",
    appLink:"https://loquacious-sorbet-06e30f.netlify.app/",
    developerPractice: 'Showing skills using: ReactJS'
  },
  {
    id:5,
    title: "Uquiz",
    image: "/assets/uquiz-screenshot.png",
    gitHubLink: "https://github.com/danield001/UQuiz",
    appLink: "https://uquiz-app-89fe7511a64b.herokuapp.com/",
    developerPractice: "Showing skills using: MVC and working in teams"
  },
  {
    id:6,
    title: "Shop-online",
    image: "/assets/13-orm-homework-demo-01.gif",
    gitHubLink: "https://github.com/AmyLloyd/shop-online",
    appLink: "",
    developerPractice: "Showing skills using: Object Relational Mapping"
  }
];

function Portfolio() {
  return <Project projectList={projectList} />;
}

export default Portfolio;