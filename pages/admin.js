import { useState, useContext } from "react";
import PortfolioContext from "@/Contexts/PortfolioContext";
import Link from "next/link";

export default function Admin() {
  const {
    projects,
    setProjects,
    techSkills,
    setTechSkills,
    deleteSkill,
    addSkill,
    deleteProject,
    addProject,
  } = useContext(PortfolioContext);

  console.log("techSkills", techSkills);

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [skillText, setSkillText] = useState("");
  const [skillIcon, setSkillIcon] = useState("");


  function handleCreateProject() {
    if (projectName && projectDescription && projectImage && projectUrl) {
      const newProject = {
      
        name: projectName,
        description: projectDescription,
        image: projectImage,
        url: projectUrl,
      };
      console.log(newProject);

      setProjects([...projects, newProject]); 
      setProjectName("");
      setProjectDescription("");
      setProjectImage("");
      setProjectUrl("");
    }
  }

  function updateDesciption(text, index) {
    const updatedProjects = projects.map((project, i) => {
      if (i === index) {
        return {
          ...project,
          description: text,
        };
      }
      return project;
    });
    setProjects(updatedProjects);
  }

  const handleAddSkill = () => {
    const newTechSkill = {
      name: skillText,
      alt: skillText,
      src: skillIcon,
    };

    addSkill(newTechSkill);
  };

  function handleLogin() {
    if (username === "Irene" && password === "HelloWorld") {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  }
  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Botón de Login */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 container mx-auto p-6">
      <h1 className="text-4xl font-bold text-white text-center mb-6">
        Admin Panel
      </h1>
      <h2 className="text-2xl text-white font-semibold mb-4">Add a Project</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="text"
              value={projectImage}
              onChange={(e) => setProjectImage(e.target.value)}
              className="w-3/4 p-3 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              URL
            </label>
            <input
              type="text"
              value={projectUrl}
              onChange={(e) => setProjectUrl(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button
          onClick={handleCreateProject}
          className="w-40 bg-indigo-600 text-white py-3 rounded-md"
        >
          Create Project
        </button>
      </div>
     
      console.log(projects)
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col items-center bg-gray-800 p-5 rounded-lg shadow-md"
        >
          <h3 className="text-white p-2">{project.name}</h3>
          <p>
            <input
              type="text"
              value={project.description}
              onChange={(e) => updateDesciption(e.target.value, index)}
              className="border p-2 rounded w-full"
            />
          </p>
          <img
            src={project.image}
            alt={project.name}
            className="w-40 h-40 object-cover rounded-md mt-2"
          />
          <a className="text-white mt-2" href={project.url}>
            Link
          </a>
          <button
            onClick={() => deleteProject(project.id)} // Pasar el id correcto
            className="bg-red-500 text-white px-3 py-1 rounded mt-2 hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      ))}
      <h2 className="text-2xl text-white font-semibold mb-4">Tech Skills</h2>
      <div className="mb-4">
        <input
          type="text"
          value={skillText}
          onChange={(e) => setSkillText(e.target.value)}
          placeholder="New Skill"
          className="p-3 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          value={skillIcon}
          onChange={(e) => setSkillIcon(e.target.value)}
          placeholder="Skill Icon URL"
          className="p-3 border border-gray-300 rounded-md ml-2"
        />
        <button
          onClick={handleAddSkill}
          className="ml-2 p-3 bg-indigo-600 text-white rounded-md"
        >
          Add Skill
        </button>
      </div>
      <ul>
        {techSkills.map((skill, index) => (
          <li key={index}>
            <div className="text-white">{skill.name}</div>
            <button
              className="bg-orange-300 text-black w-20 h-8 rounded-lg text-center p-1 m-2"
              onClick={() => deleteSkill(skill.name)}
            >
              Delete
            </button>
          </li>
        ))}
        <button className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition mr-10">
          <Link href="/">Home</Link>
        </button>
      </ul>
    </div>
  );
}
