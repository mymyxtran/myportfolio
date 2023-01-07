import NanoleafLogo from "assets/images/logos/nanoleaf.png";
import PANWLogo from "assets/images/logos/PANWLogo.png";
import UofTLogo from "assets/images/logos/UofTLogo.jpeg";

import CodenyaLogo from "assets/images/logos/codenya.png";
import BrainplowLogo from "assets/images/logos/brainplow.jpg";
import UniLogo from "assets/images/logos/fast.png";
import figma from "assets/images/skills/figma.png";
import vscode from "assets/images/skills/vscode.png";
import react from "assets/images/skills/react.png";
import ruby from "assets/images/skills/ruby.png";
import rails from "assets/images/skills/rails.png";
import javascript from "assets/images/skills/javascript.png";
import typescript from "assets/images/skills/typescript.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";
import python from "assets/images/skills/python.png";
import bootstrap from "assets/images/skills/bootstrap.png";
import postgres from "assets/images/skills/postgresql.png";
import redis from "assets/images/skills/redis.png";
import mysql from "assets/images/skills/mysql.png";
import heroku from "assets/images/skills/heroku.png";
import docean from "assets/images/skills/digital-ocean.png";
import aws from "assets/images/skills/aws.png";
import nginx from "assets/images/skills/nginx.png";

export const companies = [
  {
    title: "Palo Alto Networks",
    alt: "BT image",
    role: "Software Engineer Intern (Prism Public Cloud)",
    skills: ["Go", "react", "javascript",  "bootstrap", "python", "vscode api", "figma",],
    period: "2022 - 2022",
    logo: PANWLogo
  },
  {
    title: "Nanoleaf",
    alt: "CS image",
    role: "Software Engineer Intern (Embedded Systems)",
    skills: ["c/c++", "python", "vscode"],
    period: "2021 - 2022",
    logo: NanoleafLogo
  },
];

export const institutes = [
  {
    short_title: "UofT - CompEng",
    title: "University of Toronto, Computer Engineering",
    alt: "Nuces image",
    role: "Bachelor's Degree in Applied Sciences and Engineering",
    skills: ["project management", "web development", "data structures"],
    period: "2018 - 2023",
    startingYear: "2018",
    logo: UofTLogo,
    awards: [
      {
        title: "ECE444: Software Engineerin ",
        description:
          "Rank 4th in best overall course searching web application",
        date: "Dec 1, 2022"
      },
    ]
  },
  // {
  //   short_title: "Govt Degree College",
  //   title: "Govt Degree College",
  //   alt: "college image",
  //   role: "FSC",
  //   skills: ["mathematic", "chemistry", "physics"],
  //   period: "2011 - 2013",
  //   startingYear: "2011",
  //   logo: ""
  // }
];

export const skills = [
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react
  },
  {
    name: "Python",
    description: "Web development, scrapping",
    link: "https://www.python.org/",
    type: "development",
    image: python
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3
  },
  {
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap
  },
  {
    name: "Mysql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql
  },
  // {
  //   name: "Redis",
  //   description: "Database",
  //   link: "https://redis.io/",
  //   type: "database",
  //   image: redis
  // },
  {
    name: "Heroku",
    description: "Devops",
    link: "https://www.heroku.com/",
    type: "devops",
    image: heroku
  },
  // {
  //   name: "AWS",
  //   description: "Devops",
  //   link: "https://aws.amazon.com/",
  //   type: "devops",
  //   image: aws
  // },
  // {
  //   name: "Digital Ocean",
  //   description: "Devops",
  //   link: "https://www.digitalocean.com/",
  //   type: "devops",
  //   image: docean
  // },
  {
    name: "Nginx",
    description: "Web server",
    link: "https://www.nginx.com/",
    type: "devops",
    image: nginx
  },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma
  }
];
