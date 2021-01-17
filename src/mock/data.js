import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ennio | Data Scientist', // e.g: 'Name | Developer'
  lang: 'en, es', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio site', // e.g: Welcome to my website
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
  resume: 'https://drive.google.com/file/d/1Y03r9WunfDNQb5kLP0b35PxwM2_hJU2r/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'keras_heroku.png',
    title: 'Image Classification',
    info: 'Heroku and streamlit deployment of a simple convolutional nerual network algorith trained with Keras on CIFAR10 dataset.',
    info2: 'Tech: Python, Keras, Streamlit, Git, Heroku',
    url: 'https://cnn-cifar10-bts.herokuapp.com/',
    repo: 'https://github.com/techno1731/Keras_CNN_Cifar10', // if no repo, othe button will not show up
  },
  {
    id: nanoid(),
    img: 'dash-deploy.png',
    title: 'ML Dashboard',
    info: 'Dashboard with a machine learning model on back-end and Dash on Front end, it is a RandonForestRegressor that predicts MPG base on vehicle features.',
    info2: 'Tech: Python, Sklearn, Dash, Git, AWS ECR, AWS ECS',
    url: 'http://54.172.50.30:8080/',
    repo: 'https://github.com/techno1731/RFR_Sklearn_Dash', // if no repo, othe button will not show up
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
