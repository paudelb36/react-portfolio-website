import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className="max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
        onClick={handleClick}
      >
        <div className="w-full h-32 rounded-t-lg overflow-hidden">
          <img
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
            src={project.image}
            alt={project.name}
          />
        </div>
        <div className="p-3">
          <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {project.name}
          </h5>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project.name}
              </h3>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Column - Image */}
              <div className="md:w-1/2">
                <div className="w-full h-[300px] rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full object-contain bg-gray-100 dark:bg-gray-900"
                    src={project.image}
                    alt={project.name}
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Tools & Frameworks:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.key_value.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group px-5 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg flex items-center gap-2 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                    >
                      <svg
                        className="w-5 h-5 group-hover:animate-bounce"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span className="font-medium">GitHub</span>
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg flex items-center gap-2 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                    >
                      <svg
                        className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <span className="font-medium">Live Demo</span>
                    </a>
                  )}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="group px-5 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg flex items-center gap-2 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                  >
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="font-medium">Close</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
