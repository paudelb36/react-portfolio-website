import React from 'react';

const Resume = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    // { name: "Node.js", level: 70 },
    { name: "PHP", level: 75 },
    { name: "MySQL", level: 80 },
    { name: "Tailwind CSS", level: 85 },
  ];

  return (
    <div className="w-full p-4 sm:p-6">
      {/* Download Section */}
      <div className="mb-8 text-center">
        <a
          href="/assets/Bibek Paudel Resume.pdf"
          // download
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Resume
        </a>
      </div>

      {/* Skills Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-primary dark:text-textColor-dark">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-textColor-light dark:text-textColor-dark">
                  {skill.name}
                </span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="h-2.5 w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-2.5 bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
