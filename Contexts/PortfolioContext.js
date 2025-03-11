import { createContext, useState, useEffect } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Media DB",
      description: "Your Ultimate Movie & Series Guide!",
      image: "hollywood-historia.jpg",
      url: "https://chas-amazon-news-site-main-2.vercel.app/",
    },
    {
      id: 2,
      name: "Oscar's 2025 Quiz",
      description: " Try your knowledge about the Oscar's 2025!",
      image: "Oscars.webp",
      url: "https://oscar-quiz-site.vercel.app/",
    },
    {
      id: 3,
      name: "Gemini AI app",
      description: "Try Gemini AI with our App!",
      image: "Gemini2.jpg",
      url: "https://gemini-project-sand.vercel.app/",
    },
    {
      id: 4,
      name: "Radio Player",
      description: "Listen to the Swedish Radio in my app!",
      image: "Sveriges-Radio.jpg",
      url: "https://radioplayer-inky.vercel.app/",
    },
  ]);

  const [techSkills, setTechSkills] = useState([
    { name: "Html 5", src: "/html.png" },
    { name: "JS", src: "/javascript.png" },
    { name: "React", src: "/react.png" },
    { name: "Node.js", src: "/nodejs.png" },
    { name: "CSS", src: "/css.png" },
    { name: "Git Hub", src: "/github.png" },
    { name: "Linux", src: "/image.png" },
    { name: "Express", src: "/express-logo.png" },
    { name: "TS", src: "/typesc.webp" },
  ]);

  // const [newProject, setNewProject] = useState({
  //   name: "",
  //   description: "",
  //   tech: "",
  //   link: "",
  // });

  // useEffect(() => {
  //   const storedProjects = localStorage.getItem("projects");
  //   const storedTechSkills = localStorage.getItem("techSkills");

  //   if (storedProjects) {
  //     setProjects(JSON.parse(storedProjects));
  //   }
  //   if (storedTechSkills) {
  //     setTechSkills(JSON.parse(storedTechSkills));
  //   } else {
  //     setTechSkills([
  //       { name: "Html 5", src: "/html.png" },
  //       { name: "JS", src: "/javascript.png" },
  //       { name: "React", src: "/react.png" },
  //       { name: "Node.js", src: "/nodejs.png" },
  //       { name: "CSS", src: "/css.png" },
  //       { name: "Git Hub", src: "/github.png" },
  //     ]);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("projects", JSON.stringify(projects));
  // }, [projects]);

  // useEffect(() => {
  //   localStorage.setItem("techSkills", JSON.stringify(techSkills));
  // }, [techSkills]);

  function addProject(newProject) {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
    // setNewProject({ name: "", description: "", tech: "", link: "" });
  }

  function deleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  function addSkill(newSkill) {
    setTechSkills([...techSkills, newSkill]);
  }

  function deleteSkill(skillName) {
    setTechSkills(techSkills.filter((s) => s.name !== skillName));
  }

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        setProjects,
        techSkills,
        setTechSkills,
        deleteSkill,
        addSkill,
        deleteProject,
        addProject,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
