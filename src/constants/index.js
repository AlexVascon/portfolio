import {
  javascript,
  typescript,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  frontend,
  backend,
  react,
  basicfit,
  dott,
  ironhack,
  superdry,
  lifebuoy,
  snake,
  calendar,
  issue,
  next,
  postgres,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: frontend,
  },
  {
    title: 'React Developer',
    icon: react,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Lifeguard',
    icon: lifebuoy,
  },
]

const technologies = [
  {
    name: 'Postgres',
    icon: postgres,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'next',
    icon: next,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Freelance Full Stack Developer',
    company_name: 'Dott',
    icon: dott,
    iconBg: '#383E56',
    date: 'September 2023 - Present',
    points: [
      'Advanced web application and backend system development, focusing on scalability and maintainability.',
      'Proactively adapted to new technologies and methodologies, demonstrating a commitment to ongoing professional development.',
      'Collaborated effectively on diverse projects, maintaining high standards of quality and innovation.',
    ],
  },
  {
    title: 'Node.js Developer',
    company_name: 'Basic-Fit',
    icon: basicfit,
    iconBg: '#E6DEDD',
    date: 'Feb 2022 - Feb 2023',
    points: [
      'Develop and Maintain Backend Systems: Design, build, and maintain efficient, reusable, and reliable Node.js code to ensure robust backend functionality for Basic-Fit applications',
      'API Development and Integration: Create and manage RESTful APIs to support seamless integration with various frontend systems and third-party services, ensuring smooth data flow and communication',
      'Adherence to Best Practices: Follow agile methodologies and best practices in software development, including code reviews, testing, and continuous integration/continuous deployment (CI/CD) processes to maintain high standards of code quality and project delivery.',
      'Database Management: Work with both SQL and NoSQL databases, optimizing queries, and ensuring data integrity and security across all systems.',
    ],
  },
  {
    title: 'Career Change - Full Stack Developer',
    company_name: 'Ironhack',
    icon: ironhack,
    iconBg: '#383E56',
    date: 'Aug 2022 - Oct 2022',
    points: [
      'After diligently acquiring an array of technical skills and immersing myself in extensive hands-on experience, I aspire to embrace the path of a Software Developer.',
      'Developed web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Customer service',
    company_name: 'Doc Martins, Superdry',
    icon: superdry,
    iconBg: '#E6DEDD',
    date: 'March 2019 - September 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Lifeguard',
    company_name: '',
    icon: lifebuoy,
    iconBg: '#E6DEDD',
    date: 'March 2019 - September 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
]

const projects = [
  {
    name: 'Snake Game',
    description:
      'Classic snake game based off my moms old mobile phone. Complete with dancing apple, sound effects, score board and death animation',
    tags: [
      {
        name: 'dom manipulation',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: snake,
    source_code_link: 'https://alexvascon.github.io/My-Snake-Game/',
  },
  {
    name: 'Calendar',
    description:
      'Day, week and month calendar. Make appointments down to the minute. Block overlap.',
    tags: [
      {
        name: 'React/Next',
        color: 'blue-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: calendar,
    source_code_link: 'https://calendar-umber-five.vercel.app/',
  },
  {
    name: 'Issue Tracker',
    description:
      'Full stack issue tracker. Make, edit, assign and comment on issues',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'Postgres',
        color: 'pink-text-gradient',
      },
    ],
    image: issue,
    source_code_link: 'https://nest-issue-tracker.vercel.app/',
  },
]

export { services, technologies, experiences, projects }
