import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const getFilteredProjects = () => {
    if (filter === "All") {
      return projects;
    }
    return projects.filter((project) => project.category.includes(filter));
  };

  const categories = ["All", "Javascript", "React", "PHP"];

  return (
    <div className="w-full h-full p-2 sm:p-4 overflow-hidden">
      <div className="overflow-x-auto">
        <ul className="flex justify-center space-x-4 mb-4">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md cursor-pointer transition-colors ${
                filter === category
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="p-5 overflow-y-scroll scrollbar-hidden"
        style={{ height: "calc(90vh - 160px)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {getFilteredProjects().map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
