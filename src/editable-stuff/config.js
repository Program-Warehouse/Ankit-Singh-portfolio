// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ankit",
  middleName: "",
  lastName: "Singh",
  message: "Hi I'm Ankit Singh. I work  I am Seeking an work opportunity with an esteemed organization where I can showcase my skills and enhance learning in the field of work. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/1AnkitSingh02 ",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ankit-singh-1b968a170/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/nkit02",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/person.png"),
  imageSize: 375,
  message:
    "Hi I'm Ankit Singh. I work  I am Seeking an work opportunity with an esteemed organization where I can showcase my skills and enhance learning in the field of work. ",
  resume: require("../editable-stuff/person.png"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "1AnkitSingh02", 
  reposLength: 2,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Hi I'm Ankit Singh. I work  I am Seeking an work opportunity with an esteemed organization where I can showcase my skills and enhance learning in the field of work. ",
  images: [
    { 
      img: require("../editable-stuff/person.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/person.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "Flutter", value: 75 },
    { name: "Dart", value: 75 },
    { name: "SQL", value: 70 },
    { name: "Django", value: 75 },
    { name: "Skill 6", value: 65 },
  ],
  softSkills: [
    { name: "softSkills 1", value: 80 },
    { name: "softSkills 2", value: 90 },
    { name: "softSkills 3", value: 75 },
    { name: "softSkills 4", value: 85 },
    { name: "softSkills 5", value: 75 },
    { name: "softSkills 6", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Hi I'm Ankit Singh. I work  I am Seeking an work opportunity with an esteemed organization where I can showcase my skills and enhance learning in the field of work. ",
  email: "ankitsingh4301@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
