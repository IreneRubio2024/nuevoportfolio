import { useContext } from "react";
import PortfolioContext from "@/Contexts/PortfolioContext"; // Importa el contexto
import Link from "next/link";

export default function Home() {
  const { projects, techSkills } = useContext(PortfolioContext); // Usamos el contexto aquí

  // return (
  //     <div>
  //       <h1>My Portfolio</h1>

  //       <section>
  //         <h2>My Projects</h2>
  //         {projects.map((project) => (
  //           <div key={project.id}>
  //             <h3>{project.name}</h3>
  //             <p>{project.description}</p>
  //             <a href={project.url}>Link</a>
  //           </div>
  //         ))}
  //       </section>
  //       <section>
  //         <h2>Tech Skills</h2>
  //         <ul>
  //           {techSkills.map((skill, index) => (
  //             <li key={index}>{skill}</li>
  //           ))}
  //         </ul>
  //       </section>
  //     </div>
  //   )
  // }
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 relative">
      {/* BOTÓN ADMIN */}
      <Link
        href="/admin"
        className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-500 transition z-50"
      >
        Admin
      </Link>

      {/* HERO SECTION */}
      <section className="relative py-20 text-white text-center bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.6),_rgba(109,40,217,0.6))]">
        <div className="max-w-3xl mx-auto">
          <img
            src="/Irene.jpg"
            alt="Irene's Profile"
            className="w-40 h-40 mx-auto rounded-full border-4 border-white object-cover aspect-square"
          />
          <h1 className="text-4xl font-bold mt-4">¡Hello, I am Irene!</h1>
          <p className="text-lg mt-2">Frontend Developer with UX/UI skills</p>
        </div>
      </section>

      {/* TECH SKILLS */}
      <section className="py-20 bg-slate-200">
        <h2 className="text-2xl font-bold text-center">Tech Stack</h2>
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          {techSkills.map((skill, index) => {
            return (
              <div
                key={index}
                className="bg-gray-200 px-4 py-2 rounded shadow-md text-lg"
              >
                <img className="h-10 w-10" src={skill.src} alt={skill.alt} />
                {skill.name}
              </div>
            );
          })}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="bg-gray-100 min-h-screen py-10">
        <h2 className="text-2xl font-bold text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
            >
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-gray-700">{project.description}</p>
              <a
                href={project.url}
                className="text-blue-500 mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
