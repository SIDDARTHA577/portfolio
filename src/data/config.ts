const config = {
  title: "Sai Siddartha Gorantla | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Sai Siddartha, a full-stack developer and DevOps enthusiast specializing in Python, Web Development, and Cloud technologies. Discover my latest work, including Online Movie Streaming Platform, Bus Ticket Booking Application, and Weather Forecast Management System.",
    short:
      "Discover the portfolio of Sai Siddartha, a full-stack developer creating interactive web experiences and robust DevOps pipelines.",
  },
  keywords: [
    "Sai Siddartha",
    "portfolio",
    "full-stack developer",
    "Python",
    "DevOps",
    "web development",
    "React",
    "Next.js",
    "Django",
    "Docker",
    "Kubernetes",
    "AWS",
    "Jenkins",
  ],
  author: "Sai Siddartha Gorantla",
  email: "gorantlasaisiddartha12@gmail.com",
  site: "https://portfolio-siddu.vercel.app",

  // for github stars button
  githubUsername: "SIDDARTHA577",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/saisiddartha",
    linkedin: "https://www.linkedin.com/in/siddartha-gorantla-45910228b/",
    instagram: "https://www.instagram.com/saisiddartha",
    facebook: "https://www.facebook.com/saisiddartha",
    github: "https://github.com/SIDDARTHA577",
  },
};
export { config };
