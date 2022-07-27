const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'http://localhost:3000/',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mingui Bernardo',
  role: 'Web Developer',
  description:
    "I've been working for over 4 years as a front-end web developer using HTML, JS, CSS technology, and at the moment I'm currently migrating to ReactJS/NextJS and I have several portfolios published in my Github repository, I'm graduated in Management Informatics.",
  resume: 'https://www.linkedin.com/in/mingui-bernardo-3516b9124/?locale=en_US',
  social: {
    linkedin: 'https://www.linkedin.com/in/mingui-bernardo-3516b9124/?locale=en_US',
    github: 'https://github.com/minguibernardo',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Rapidback',
    description:
      'Managing user-submitted feedback on your website',
    stack: ['Firebase', 'TypeScript', 'React','Chakra UI'],
    sourceCode: 'https://github.com/minguibernardo/rapidback',
    livePreview: 'https://rapidback-cristovjobs.vercel.app',
  },
  {
    name: 'Olx App',
    description:
      'Developed with learning intuition work with android studio',
    stack: ['Android Studio', 'Java', 'ParseApi','XML'],
    sourceCode: 'https://github.com/minguibernardo/OLX-APP',
    livePreview: 'https://github.com',
  },
  {
    name: 'Single Page',
    description:
      'single page made for training in html and css and js',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/minguibernardo/singlepage',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Boostrap',
  'Laravel',
  'CodeIgniter',
  'Flutter',
  'Android',
  'Android Studio',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'minguibernardo@mailgmail.com',
}

export { header, about, projects, skills, contact }
