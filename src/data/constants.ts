// thoda zada ts ho gya idhar
export enum SkillNames {
  PYTHON = "python",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  JS = "javascript",
  MONGODB = "mongodb",
  MYSQL = "mysql",
  DOCKER = "docker",
  JENKINS = "jenkins",
  GITHUBACTIONS = "githubactions",
  KUBERNETES = "kubernetes",
  AWS = "aws",
  JAVA = "java",
  SPRING = "spring",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "The snake that charms the code! 🐍✨",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "The skeleton of the web! 💀🌐",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Making the web look good! 💅🎨",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Building UIs like a boss! ⚛️😎",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.JS]: {
    id: 6,
    name: "javascript",
    label: "JavaScript",
    shortDescription: "Adding logic to the web! 🧠💻",
    color: "#f7df1e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL for modern apps! 🍃💾",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 30,
    name: "mysql",
    label: "MySQL",
    shortDescription: "Relational database power! 🐬🗄️",
    color: "#00758f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerize all the things! 🐳📦",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.JENKINS]: {
    id: 28,
    name: "jenkins",
    label: "Jenkins",
    shortDescription: "Automation server for CI/CD! 🤵⚙️",
    color: "#d24939",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  },
  [SkillNames.GITHUBACTIONS]: {
    id: 29,
    name: "githubactions",
    label: "GitHub Actions",
    shortDescription: "Automate your workflow! 🐙▶️",
    color: "#2088ff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.KUBERNETES]: {
    id: 27,
    name: "kubernetes",
    label: "Kubernetes",
    shortDescription: "Orchestrating containers! 🚢☸️",
    color: "#326ce5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud computing services! ☁️💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 31,
    name: "java",
    label: "Java",
    shortDescription: "Write once, run anywhere! ☕",
    color: "#007396",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.SPRING]: {
    id: 32,
    name: "spring",
    label: "Spring Boot",
    shortDescription: "Java-based framework for app dev! 🌱🚀",
    color: "#6db33f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "July 2024",
    endDate: "September 2024",
    title: "Java Full Stack Developer",
    company: "AICTE Virtual Internship",
    description: [
      "Completed a Java Full Stack Developer Virtual Internship program.",
      "Developed full-stack applications using Java, Spring Boot, JavaScript, and MySQL.",
    ],
    skills: [
      SkillNames.JAVA, // Assuming Java exists or needs to be added? If not, use JS/MySQL etc.
      SkillNames.JS,
      SkillNames.MYSQL,
      SkillNames.REACT, // Keeping React if relevant or removing if strictly following resume which says Spring Boot/Java
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
