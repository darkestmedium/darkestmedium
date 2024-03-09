const workEntries = [
  {
    id: 8,
    img: "../assets/images/studios/dm.png",
    alt: "Darkest Medium logo.",
    position: "Web Developer",
    company: "Darkest Medium · Full-time",
    time: "Jan 2024 - Present",
    location: "Outer Space, Remote",
    description: "Learning about web development and cyber security.",
  },
  {
    id: 7,
    img: "../assets/images/studios/bambaa.png",
    alt: "Bambaa logo.",
    position: "Technical Animation Director",
    company: "Bambaa · Full-time",
    time: "Nov 2021 - Oct 2023 · 2 years",
    location: "Warsaw, Poland, Remote",
    description: "I began my journey in the realm of freelancing alongside my friends, which eventually evolved into a full- \
      time engagement on the 'Sinners' game project. Within this role, I have taken charge of the complete \
      animation pipeline. My responsibilities encompass the development of a contemporary animation \
      focused framework for Maya. Crafted personalized animation rig designs. Ingeniously adapted HumanIk to align with our animation rig requirements. \
      Maintained customer records and updated account information. Devised a two-bone IK solver inherited from the MPxNode class.",
  },
  {
    id: 6,
    img: "../assets/images/studios/blur.png",
    alt: "Blur Studio logo.",
    position: "Technical Director",
    company: "Blur Studio · Full-time",
    time: "Aug 2020 - Jul 2021 · 1 year",
    location: "San Jose, Costa Rica, Remote",
    description: "Experienced Technical Director with a strong track record in pipeline maintenance, Motion Capture \
      retargeting optimization, and batch processing of animation and layout scenes. Contributed to the \
      success of 'Love, Death & Robots 2' by leading efforts in enhancing workflows and accelerating legacy \
      toolsets. Proven ability to deliver efficient solutions that improve productivity and streamline operations.",
  },
  {
    id: 5,
    img: "../assets/images/studios/dneg.png",
    alt: "Double Negative logo.",
    position: "Technical Layout Director",
    company: "Double Negative · Full-time",
    time: "Jan 2020 - Aug 2020 · 8 months",
    location: "Montreal, Canada, On-site",
    description: "Played a pivotal role as a Technical Layout Director at DNEG, contributing to high-profile projects \
      including 'Foundation' (Apple TV), 'Infinite' (Paramount Pictures), and 'Fast and Furious 9' (Universal \
      Pictures). Led shot assembly, previs, and layout efforts, showcasing a strong ability to enhance visual \
      storytelling and drive project success.",
  },
  {
    id: 4,
    img: "../assets/images/studios/fs.png",
    alt: "Framestore logo.",
    position: "Technical Layout Director",
    company: "Framestore · Full-time",
    time: "Oct 2019 - Dec 2019 · 3 months",
    location: "Montreal, Canada, On-site",
    description: "Worked as a Technical Layout Director on the Tom and Jerry feature film for Warner Bros. Pictures and Jingle Jangle - Netflix.",
  },
  {
    id: 3,
    img: "../assets/images/studios/mpc.png",
    alt: "Moving Picture Company logo.",
    position: "Technical Layout Director",
    company: "Moving Picture Company · Full-time",
    time: "Apr 2019 - Oct 2019 · 7 months",
    location: "Montreal, Canada, On-site",
    description: "Experienced Technical Layout Director with a proven record of orchestrating shot assembly and \
      optimizing workflows for impactful visual storytelling. Instrumental in the success of 'Call of The \
      Wild' (20th Century FOX), spearheading shot assembly and streamlining day-to-day operations through \
      scripting automation. Excelled in effective inter-departmental communication and thrived in high- \
      pressure situations, consistently ensuring project alignment and quality. Adroitly managed challenges \
      arising from decision-making delays, preventing budget overruns and maintaining project excellence.",
  },
  {
    id: 2,
    img: "../assets/images/studios/digic.png",
    alt: "DIGIC Pictures logo.",
    position: "Technical Previs Director",
    company: "DIGIC Pictures · Full-time",
    time: "Dec 2018 - Mar 2019 · 4 months",
    location: "Budapest, Hungary, On-site",
    description: "Experienced Previs Artist and Technical Director, contributing to successful projects including the \
      'Warframe' game cinematic at Digital Extremes. Pioneered and adapted in-house non-linear mocap \
      animation workflows using Maya's TimeEditor, coupled with custom in-house rigs. Demonstrated \
      expertise in enhancing visual narratives and streamlining processes through innovative approaches.",
  },
  {
    id: 1,
    img: "../assets/images/studios/cdp.png",
    alt: "CD PROJEKT RED logo.",
    position: "Cinematic Designer",
    company: "CD PROJEKT RED · Full-time",
    time: "Dec 2016 - Nov 2018 · 2 years",
    location: "Warsaw, Poland, On-site",
    description: "Accomplished Previs and Layout Artist with significant contributions to high-profile projects including \
      'Cyberpunk 2077' game and its E3 2018 Trailer, along with the '10th Anniversary of The Witcher' \
      cinematic at CD Projekt RED. Demonstrated adeptness in overseeing technical implementation of in- \
      game cinematics and gameplay animations within a proprietary game engine. Managed challenges \
      arising from ongoing tool development, met tight deadlines, and navigated a rapidly expanding studio \
      environment, showcasing adaptability and problem-solving skills.", 
  },
  {
    id: 0,
    img: "../assets/images/studios/pi.png",
    alt: "Platige Image logo.",
    position: "Layout Artist",
    company: "Platige Image · Full-time",
    time: "Dec 2014 - Nov 2016 · 2 years",
    location: "Warsaw, Poland, On-site",
    description: "Versatile Layout Artist with a dynamic portfolio, encompassing a range of notable projects: 'Total War: \
      Warhammer 2' game cinematic, 'Watch Dogs 2' E3 cinematic, 'Frostpunk' game cinematic, 'Watch \
      Dogs2' and 'Tom Clancy's Ghost Recon Wildlands' TV commercials (Ubisoft), and 'Batman: Dark Flight' \
      4D Themed Park Project (Warner Bros.). Acquired fundamental expertise during this pivotal first role, \
      working across diverse media including commercials, film, game cinematics, and theme park projects. \
      Effectively tackled technically demanding assignments, devising innovative solutions tailored to each \
      project's unique challenges.",
  },
];




const educationEntires = [
  {
    id: 1,
    img: "../assets/images/studios/asp.png",
    alt: "Jan Matejko Academy of Fine Arts in Krakow.",
    university: "Jan Matejko Academy of Fine Arts in Krakow",
    degree: "Master's Degree, Animated Film",
    time: "Oct 2009 - Oct 2014 · 5 years",
    description: "Graduation project.",
  },
  {
    id: 0,
    img: "../assets/images/studios/ocv.png",
    alt: "OpenCV University",
    university: "OpenCV University",
    degree: "88%, Computer Software Engineering",
    time: "Nov 2023 - Nov 2024 · 1 year",
    description: "Mastering OpenCV with Python · 94% · 141a33e410984004b0e1e97069f4861f \
      Fundamentals of Computer Vision & Image Processing in Python · 99% · a59e0c3ff7e94f9bb11915c0ad6c0b34 \
      Fundamentals of Computer Vision & Image Processing in C++ · 95% · d3b5932cd8184dd6bba6f3dd4fa28eec \
      Deep Learning with PyTorch · 78% · 8a749e6e258d4f478337b2f0e2574c18 \
      Deep Learning with TensorFlow & Keras · 82% · 4897cd4d4cfc402fbb2830741e9c23bb \
      Computer Vision & Deep Learning Applications · 79% · 5fd49f0421624946b320b1e80f2c319e \
      Advanced AI Art Generation · 95% · cb4ccabab54b4939a4e071fc725d08ad .",
  },
]




const licCertEntries = [
  {
    id: 5,
    img: "../assets/images/studios/acg.png",
    alt: "Udemy",
    name: "AWS Certified Developer - Associate 2020",
    company: "A Cloud Guru",
    time: "Issued Aug 2022",
    url: "https://verify.acloud.guru/36B49F18CCEE",
    credentials: "36B49F18CCEE6",
  },
  {
    id: 4,
    img: "../assets/images/studios/udemy.webp",
    alt: "Udemy",
    name: "Beginning C++ Programming - From Beginner to Beyond",
    company: "Udemy",
    time: "Issued Sep 2022",
    url: "https://www.udemy.com/certificate/UC-c17375a7-1b8c-4c62-9d9a-098f2b831416/",
    credentials: "UC-c17375a7-1b8c-4c62-9d9a-098f2b831416",
  },
  {
    id: 3,
    img: "../assets/images/studios/openedg.png",
    alt: "OpenEDG Python Institute",
    name: "PCEP - Certified Entry-Level Python Programmer",
    company: "OpenEDG Python Institute",
    time: "Issued Jun 2021",
    url: "https://verify.openedg.org/",
    credentials: "0Mxg.93W1.xRMe",
  },
  {
    id: 2,
    img: "../assets/images/studios/udemy.webp",
    alt: "Udemy",
    name: "Complete Python Bootcamp From Zero to Hero",
    company: "Udemy",
    time: "Issued May 2021",
    url: "https://www.udemy.com/certificate/UC-e3e24778-a7b2-4f6a-b8fa-2cf21822bd1e/",
    credentials: "UC-e3e24778-a7b2-4f6a-b8fa-2cf21822bd1e",
  },
  {
    id: 1,
    img: "../assets/images/studios/udemy.webp",
    alt: "The Git & Github Bootcamp",
    name: "The Git & Github Bootcamp",
    company: "Udemy",
    time: "Issued Sep 2021",
    url: "https://www.udemy.com/certificate/UC-9888e681-7b7c-4af2-a5a3-ad8be041c423/",
    credentials: "UC-9888e681-7b7c-4af2-a5a3-ad8be041c423",
  },
  {
    id: 0,
    img: "../assets/images/studios/lpi.png",
    alt: "LE-1: Linux Essentials",
    name: "LE-1: Linux Essentials",
    company: "Linux Professional Institute",
    time: "Issued Sep 2021",
    url: "https://cs.lpi.org/caf/Xamman/certification/verify/LPI000498806/7qg4bn6xjl",
    credentials: "LPI000498806/7qg4bn6xjl",
  },
]




const skillEntries = [
  {
    id: 19,
    img: "../assets/icons/js.svg",
    alt: "JavaScript",
    skill: "JavaScript",
  },
  {
    id: 18,
    img: "../assets/icons/nodejs.svg",
    alt: "Node.js",
    skill: "Node.js",
  },
  {
    id: 17,
    img: "../assets/icons/react.svg",
    alt: "React",
    skill: "React",
  },
  {
    id: 16,
    img: "../assets/icons/postgresql.svg",
    alt: "PostgreSQL",
    skill: "PostgreSQL",
  },
  {
    id: 15,
    img: "../assets/icons/css3.svg",
    alt: "CSS",
    skill: "CSS",
  },
  {
    id: 14,
    img: "../assets/icons/html5.svg",
    alt: "HTML",
    skill: "HTML",
  },
  {
    id: 13,
    img: "../assets/icons/git.svg",
    alt: "Git",
    skill: "Git",
  },
  {
    id: 12,
    img: "../assets/icons/github.svg",
    alt: "GitHub",
    skill: "GitHub",
  },
  {
    id: 11,
    img: "../assets/icons/application--web.svg",
    alt: "Web Applications",
    skill: "Web Applications",
  },
  {
    id: 10,
    img: "../assets/icons/python.svg",
    alt: "Python",
    skill: "Python",
  },
  {
    id: 9,
    img: "../assets/icons/c++.svg",
    alt: "C++",
    skill: "C++",
  },
  {
    id: 8,
    img: "../assets/icons/cmake.svg",
    alt: "CMake",
    skill: "CMake",
  },
  {
    id: 7,
    img: "../assets/icons/opencv.svg",
    alt: "OpenCV",
    skill: "OpenCV",
  },
  {
    id: 6,
    img: "../assets/icons/tensorflow.svg",
    alt: "Tensorflow",
    skill: "Tensorflow",
  },
  {
    id: 5,
    img: "../assets/icons/sight.svg",
    alt: "Computer Vision",
    skill: "Computer Vision",
  },
  {
    id: 4,
    img: "../assets/icons/machine-learning-model.svg",
    alt: "Machine Learning",
    skill: "Machine Learning",
  },
  {
    id: 3,
    img: "../assets/icons/optimization.svg",
    alt: "Optimization",
    skill: "Optimization",
  },
  {
    id: 2,
    img: "../assets/icons/automation.svg",
    alt: "Automation",
    skill: "Automation",
  },
  {
    id: 1,
    img: "../assets/icons/development.svg",
    alt: "Framework Development",
    skill: "Framework Development",
  },
  {
    id: 0,
    img: "../assets/icons/linux.svg",
    alt: "Linux",
    skill: "Linux",
  },
]




export {workEntries, educationEntires, licCertEntries, skillEntries};