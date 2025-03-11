import { createContext, useState, useEffect } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Project Name ",
      description: "Project description ",
      image: "Rectangle1.png",
    },
    {
      id: 2,
      name: "Project Name ",
      description: "Project Description ",
      image: "Rectangle2.png",
      url: "https://www.google.com",
    },
  ]);

  const [techSkills, setTechSkills] = useState([]);

  // const [newProject, setNewProject] = useState({
  //   name: "",
  //   description: "",
  //   tech: "",
  //   link: "",
  // });

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    const storedTechSkills = localStorage.getItem("techSkills");

    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
    if (storedTechSkills) {
      setTechSkills(JSON.parse(storedTechSkills));
    } else {
      setTechSkills([
        { name: "Html 5", src: "/html.png" },
        { name: "JS", src: "/javascript.png" },
        { name: "React", src: "/react.png" },
        { name: "Node.js", src: "/nodejs.png" },
        { name: "CSS", src: "/css.png" },
        { name: "Git Hub", src: "/github.png" },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem("techSkills", JSON.stringify(techSkills));
  }, [techSkills]);

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
