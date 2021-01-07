import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ennio | Data Scientist', // e.g: 'Name | Developer'
  lang: 'en, es', // e.g: en, es, fr, jp
  description: 'Welcome to my site', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, this is ',
  name: 'Ennio Maldonado',
  subtitle: 'I am a Data Scientist',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'Ennio_Foto_CV.png',
  paragraphOne: "Ennio is a curiosity driven and taco's eating analytical data driven engineer with strong problem solving skills. Originally from mexico and currently living in sunny Barcelona, he enjoys technology, science, and believes there must be life beyond earth.",
  paragraphTwo: 'Ennio has over 5 years of experience working in global projects, for the last two years he has helped improve products and services for customers by using advanced problem solving, based on statistical techniques, leveraging big-data analytical tools, creating and maintaining models, and onboarding compelling new data sets from production environments.',
  paragraphThree: 'Competencies: Problem Solving, Data Science, Machine Learning, Cloud Computing, Spark, Python/Scala/R, Git, SQL, Data and Model Versioning, MLops.',
  resume: 'https://drive.google.com/file/d/1JpzLmSvEclyReW_eL_ds-8jblBJ7hvzD/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to discuss a proposal?',
  btn: "Let's talk",
  email: 'enniomaldonadoa@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Ennio_Maldonado',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ennio-maldonado/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/techno1731',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
