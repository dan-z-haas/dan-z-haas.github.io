// ██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
// ██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
// ██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
// ██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
// ██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
// ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝


//Dev Connector
const dev = {
    name:"Dev Connector",
    id:"dev",
    imageSrc:"images/dev-tile-500.jpg",
    devIcons:[
        "Node.js","Express","MongoDB"
    ],
    desc:'I am currently taking this Udemy course by Brad Traversy.  It teaches how to build and deploy a social network with the MERN stack and Redux.',
    button1: {
        text:"Course Page",
        href:"https://www.udemy.com/course/mern-stack-front-to-back/"
    },
    button2:{
        text:"See My Code",
        href:"http://github.com/danzhaas/dev-connector"
    }
}


//Barkr
const barkr = {
    name:"Barkr",
    id:"barkr",
    imageSrc:"images/barkr-tile-500.jpg",
    devIcons:[
        "React","React Router","Reactstrap","Javascript","Bootstrap","HTML","CSS"
    ],
    desc:'My "pet project": a companion to your companion. Share your best friend with the world on this dog social network.',
    button1: {
        text:"Live Version",
        href:"https://danzhaas.github.io/barkr-react/"
    },
    button2:{
        text:"See Code",
        href:"http://github.com/danzhaas/barkr-react"
    }
}


//distractionTimer
const distractionTimer = {
    name:"Distraction Timer",
    id:"timer",
    imageSrc:"images/timer-tile-500.jpg",
    devIcons:[
        "Gatsby","React","React Google Charts","Javascript","Bootstrap","HTML","CSS","Sass"
    ],
    desc:'A productivity tool to measure and chart how much time you are distracted during a task.',
    button1: {
        text:"Live Version",
        href:"https://danzhaas.github.io/Focus-Suite",
        attribute: 'rel="popup console 600 375"'
    },
    button2:{
        text:"See Code",
        href:"https://github.com/danzhaas/danzhaas.github.io/tree/source/project-adhd/distraction-timer"
    }
}


//Killifish Classic
const killi = {
    name:"Killifish Classic",
    id:"killi",
    imageSrc:"images/killi-tile-500.jpg",
    devIcons:[
        "jQuery","Javascript","HTML","CSS","less"
    ],
    desc:'An event page for an aquarium convention. The design incorporates the palette of beautifully bright colors of these fish.',
    button1: {
        text:"Live Version",
        href:"https://danzhaas.github.io/killifish-classic/"
    },
    button2:{
        text:"See Code",
        href:"http://github.com/danzhaas/danzhaas.github.io/tree/master/killifish-classic"
    }
}


//Lorem Ipsum Cancer Studies
const LICS = {
    name:"Lorem Ipsum Cancer Studies",
    id:"LICS",
    imageSrc:"images/LICS-tile-500.jpg",
    devIcons:[
        "HTML","CSS"
    ],
    desc:'A university medical research study site. The content was written to be readable by all, from the layman to the Ph.D.',
    button1: {
        text:"Live Version",
        href:"https://danzhaas.github.io/lorem-ipsum-cancer-studies/index.html"
    },
    button2:{
        text:"See Code",
        href:"https://github.com/danzhaas/danzhaas.github.io/tree/master/lorem-ipsum-cancer-studies"
    }
}


// My Portfolio
const portfolio = {
    name:"My Portfolio",
    id:"portfolio",
    imageSrc:"images/portfolio-tile-500.jpg",
    devIcons:[
        "Node.js","Express","MongoDB","jQuery","Javascript","Bootstrap","Sass","CSS","HTML"
    ],
    desc:"You're looking at it.  Visit my Trello board to see how I used the natural planning model and a Kanban board to create this project.",
    button1: {
        text:"Trello Board",
        href:"https://trello.com/b/pXxa9X5h/danzhaasgithubio"
    },
    button2:{
        text:"See Code",
        href:"https://github.com/danzhaas/danzhaas.github.io/tree/master/index.html"
    }
}


// List of Projects
const myProjects = [dev, barkr, distractionTimer, killi, LICS, portfolio]


// Development Icon Library
const allDevIcons = [
    gatsby={
        name:"Gatsby",
        svg:"images/icons/gatsby.svg",
    },
    jQuery={
        name:"jQuery",
        svg:"images/icons/jquery.svg",
    },
    react={
        name:"React",
        svg:"images/icons/react.svg",
    },
    reactrouter={
        name:"React Router",
        svg:"images/icons/reactrouter.svg"
    },
    reactstrap={
        name:"Reactstrap",
        svg:"images/icons/reactstrap.png"
    },
    reactgooglecharts={
        name:"React Google Charts",
        svg:"images/icons/reactgooglecharts.png"
    },
    javascript={
        name:"Javascript",
        svg:"images/icons/js.svg",
    },
    bootstrap={
        name:"Bootstrap",
        svg:"images/icons/bootstrap.svg",
    },
    HTMLicon={
        name:"HTML",
        svg:"images/icons/html.svg",
    },
    CSSicon={
        name:"CSS",
        svg:"images/icons/css.svg",
    },
    nodeJS={
        name:"Node.js",
        svg:"images/icons/nodejs.svg",
    },
    express={
        name:"Express",
        svg:"images/icons/express.svg",
    },
    mongodb={
        name:"MongoDB",
        svg:"images/icons/mongodb.svg",
    },
    sass={
        name:"Sass",
        svg:"images/icons/sass.svg"
    },
    less={
        name:"less",
        svg:"images/icons/less.svg"
    }
]


// ███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
// ██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
// ███████╗█████╔╝ ██║██║     ██║     ███████╗
// ╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
// ███████║██║  ██╗██║███████╗███████╗███████║
// ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝


// Development Skills
const devBadges = "MongoDB, Express, React, Node.js, Gatsby, Redux, React Router, JQuery, Javascript, Bootstrap, LESS, SASS, CSS, HTML, NPM, React Native, Github, Browser Developer Tools, XML";
// Design Skills
const designBadges = "Photoshop, GIMP, Adobe Illustrator";
// Databases
const databaseBadges = "MySQL, Robo3T, MS Access, MongoDB";
// Languages
const languagesBadges = "Visual Basic for Applications, Javascript";
// OS
const osBadges = "Windows, Linux, Mac";