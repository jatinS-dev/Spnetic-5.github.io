// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
    animated: true // set to false to use static SVG
};

const greeting = {
    username: "Saurabh P",
    title: "Hi all, I'm Saurabh Powar",
    subTitle: emoji(
        "AI/ML Enthusiast & Passionate Full Stack Python Developer 🚀 having an keen interests in Machine learning, Deep learning, Building web apps with Flask/Django and some other cool libraries and frameworks."
    ),
    resumeLink: "https://drive.google.com/file/d/1KvR11x6M5YPZEUzLKdzDi57sIcMNIGCf/view?usp=sharing",
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/Spnetic-5",
    linkedin: "https://www.linkedin.com/in/saurabh-powar-72b4701b4/",
    gmail: "saurabhpowar1823@gmail.com",
    gitlab: "https://gitlab.com/Spnetic-5",
    medium: "https://medium.com/@saurabhpowar1823",
    instagram: "https://www.instagram.com/ig_saurabh5/",
    twitter: "https://twitter.com/Saurabh67110062",
    // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
    // Instagram and Twitter are also supported in the links!
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "PYTHON, ML/DL DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji(
            "⚡ Machine Learning Algorithms, Neural Networks, Reinforcement Learning "
        ),
        emoji("⚡ Deploy ML/DL projects as a web application using Flask/Django "),

    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
            skillName: "ML/DL",
            // fontAwesomeClassname: "fab fa-swift"
            fontAwesomeClassname: "fas fa-brain"
        },
        {
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "sass",
            fontAwesomeClassname: "fab fa-sass"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },

        // {
        //     skillName: "nodejs",
        //     fontAwesomeClassname: "fab fa-node"
        // },
        // {
        //     skillName: "swift",
        //     fontAwesomeClassname: "fab fa-swift"
        // },
        // {
        //     skillName: "npm",
        //     fontAwesomeClassname: "fab fa-npm"
        // },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "git-github",
            fontAwesomeClassname: "fab fa-github"
        },
        // {
        //     skillName: "aws",
        //     fontAwesomeClassname: "fab fa-aws"
        // },
        // {
        //     skillName: "firebase",
        //     fontAwesomeClassname: "fas fa-fire"
        // },
        {
            skillName: "python",
            fontAwesomeClassname: "fab fa-python"
        },
        {
            skillName: "vs code",
            fontAwesomeClassname: "fas fa-indent"
        },
        {
            skillName: "docker",
            fontAwesomeClassname: "fab fa-docker"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [{
        schoolName: "Veermata Jijabai Technological Institute (VJTI)",
        logo: require("./assets/images/vjti.png").default,
        subHeader: "B.tech in Electronics",
        duration: "August 2019 - June 2023",
        desc: "Technical Team Member",
        descBullets: [
            "Society of Robotics & Automation (SRA)",
            "Developer Students Club (DSC)",
            "Community of Coders (COC)"
        ]
    }, ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [{
            Stack: "Frontend", //Insert stack or technology you have experience in
            progressPercentage: "80%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend (Python)",
            progressPercentage: "70%"
        },
        {
            Stack: "ML/DL/RL",
            progressPercentage: "50%"
        }, {
            Stack: "Programming (C++ & Python)",
            progressPercentage: "60%"
        }
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [{
            role: "AI Ml & Edge Computing Intern",
            company: "AIRPIX",
            companylogo: require("./assets/images/airpix.png").default,
            date: "May 2021 – Present",
            desc: "Road Assets Inspection Using Virtual Assistance",
            descBullets: [
                "Deep learning",
                "Machine Learning",
                "Computer Vision",
                "Edge Computing"
            ]
        },
        {
            role: "Control & Software Engg.",
            company: "eYRC, IIT Bombay",
            companylogo: require("./assets/images/eyantra.png").default,
            date: "Aug 2020 – Feb 2021",
            desc: "Designed the industry manufacturing ball balancing platform in Coppeliasim. Worked in Image Processing, Control Systems, 3D Designing, Algorithm Building, Robotic Simulation, Python, and Lua programming."
        },
        {
            role: "Junior Developer",
            company: "Techfest, IIT Bombay",
            companylogo: require("./assets/images/tf.jpg").default,
            date: "Nov 2020",
            desc: "Recognisign - Analyzed possible techniques to classify traffic signs and developed a computer vision model and achieved reasonable accuracy."
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "Spnetic-5",
    display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {

    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [{
            image: require("./assets/images/saayaHealthLogo.webp").default,
            projectName: "Saayahealth",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [{
                    name: "Visit Website",
                    url: "http://saayahealth.com/"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/nextuLogo.webp"),
            projectName: "Nextu",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [{
                name: "Visit Website",
                url: "http://nextu.se/"
            }]
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [{
            title: "Python For Everybody Specialization",
            subtitle: "This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures, networked application program interfaces, and databases, using the Python programming language.",
            image: require("./assets/images/python.png").default,
            footerLink: [{
                    name: "Certification",
                    url: "https://drive.google.com/file/d/1kma9Yuk0bWN3vHPZBQ9iNM03tPgn51sk/view?usp=sharing"
                },

            ]
        },
        {
            title: "Technical Support Fundamentals By Google",
            subtitle: "",
            image: require("./assets/images/g.png").default,
            subtitle: "-Understood how the binary system works, assembled a computer from scratch, understood what the Internet is, how it works, and the impact it has in the modern world, utilized common problem-solving methodologies and soft skills in an Information Technology setting",
            footerLink: [{
                name: "Certification",
                url: "https://drive.google.com/file/d/1Su85XLOy7Mc8wd8w_81w4nlGXSh0EytQ/view?usp=sharing"
            }]
        },

        {
            title: "AI for Everyone",
            subtitle: "The meaning behind common AI terminology, including neural networks, machine learning, deep learning, and data science, Completed Certifcation from Coursera",
            image: require("./assets/images/c.png").default,
            footerLink: [
                { name: "Certification", url: "" },

            ]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

    blogs: [{
            url: "https://saurabhpowar1823.medium.com/switching-between-python-2-and-3-versions-on-ubuntu-16-04-18-04-20-04-6dc8c03018e0",
            title: "Switching between Python 2 and 3 versions on Ubuntu 16.04, 18.04 & 20.04",
            description: "In the recent past, there has been a bit of debate on which Python version should one learn. Python 2 or Python 3. It’s now 2020 and pretty evident that Python 3 is the way to go. However, Python 2 is still in the market, and some people, including me, still use it in development. It brings forth the necessity of how we set up and switch between the two versions on your Linux system"
        },

    ],
    display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [{
        title: "Build Actions For Google Assistant",
        subtitle: "Codelab at GDG DevFest Karachi 2019",
        slides_url: "https://bit.ly/saadpasta-slides",
        event_url: "https://www.facebook.com/events/2339906106275053/"
    }],
    display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️").default,
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+91-7040730350",
    email_address: "saurabhpowar1823@gmail.com",
    display: false
};

// Twitter Section

const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: false // Set true to display this section, defaults to false
};

export {
    illustration,
    greeting,
    socialMediaLinks,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails
};