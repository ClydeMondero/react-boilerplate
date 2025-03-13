import React from "react";
import profile from "./assets/head-shot.jpg";
import { FaGithub } from "react-icons/fa6";

const App = () => {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Git",
    "PostgreSQL",
    "Figma",
    "Wordpress",
    "Firebase",
    "OpenAI",
  ];
  const projects = [
    {
      name: "Techy.ai",
      description: "A chatbot using OpenAI API and LangChain.",
      link: "https://github.com/ClydeMondero/techy.ai",
    },
    {
      name: "Scratch Pad",
      description: "A finance tracking app with Ledger CLI integration.",
      link: "https://github.com/ClydeMondero/scratch-pad",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      {/* Profile Section */}
      <div className="flex justify-center items-center bg-gray-800 p-6 rounded-lg shadow-lg text-center w-96">
        <div>
          <img
            src={profile}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
          />
          <h1 className="text-2xl font-bold mt-3">Clyde Mondero</h1>
          <p className="text-gray-400">Full-Stack Developer | UI/UX Designer</p>
          <a
            href="https://github.com/ClydeMondero"
            target="blank_"
            className="flex justify-center items-center gap-2 cursor-pointer"
          >
            <FaGithub className="text-lg" />
            <span>Github</span>
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-6 w-96 bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-blue-400">Skills</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-500 text-sm px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-6 w-96 bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-blue-400">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="mt-4 bg-gray-700 p-3 rounded-lg">
            <h3 className="text-md font-medium text-white">{project.name}</h3>
            <p className="text-gray-400 text-sm">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-400 text-sm hover:underline mt-2 inline-block"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-6 w-96 bg-gray-800 p-4 rounded-lg shadow text-center">
        <h2 className="text-lg font-semibold text-blue-400">Contact</h2>
        <p className="text-gray-400">
          Let's work together! Reach out via email:
        </p>
        <a href="#" className="text-blue-400 hover:underline">
          clydereinyel.mondero.c@gmail.com
        </a>
      </div>
    </div>
  );
};

export default App;
