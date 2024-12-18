import React from "react";
import { FaDesktop, FaServer, FaCode, FaPalette } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <p className="mt-4 px-6 text-[20px] text-justify text-textColor-light dark:text-textColor-dark">
        Aspiring Frontend Developer with a strong foundation in web development,
        skilled in HTML, CSS, JavaScript, and React. Experienced in creating
        responsive, user-friendly interfaces and applications. Dedicated to
        continuous learning and improving my skills to deliver innovative
        solutions.
      </p>
      <h3 className="text-xl font-bold text-primary mt-4 px-6">
        Skills & Tech Stack
      </h3>

      {/* Updated grid with responsive classes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
        {/* Top Row */}
        <div className="relative">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-highlight rounded-lg"></span>
          <div className="relative h-full p-3 bg-background border-2 border-primary rounded-lg">
            <div className="flex items-center -mt-1">
              <FaDesktop className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <h3 className="my-2 ml-3 text-base sm:text-lg font-bold text-primary">
                Frontend Development
              </h3>
            </div>
            <p className="my-1 text-sm sm:text-base text-textColor-light dark:text-textColor-dark">
              React, JavaScript, HTML5, CSS3, Tailwind CSS
            </p>
          </div>
        </div>

        <div className="relative">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-highlight rounded-lg"></span>
          <div className="relative h-full p-3 bg-background border-2 border-primary rounded-lg">
            <div className="flex items-center -mt-1">
              <FaServer className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <h3 className="my-2 ml-3 text-base sm:text-lg font-bold text-primary">
                Backend Development
              </h3>
            </div>
            <p className="my-1 text-sm sm:text-base text-textColor-light dark:text-textColor-dark">
              PHP, MySQL, Firebase
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="relative">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-highlight rounded-lg"></span>
          <div className="relative h-full p-3 bg-background border-2 border-primary rounded-lg">
            <div className="flex items-center -mt-1">
              <FaCode className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <h3 className="my-2 ml-3 text-base sm:text-lg font-bold text-primary">
                Technical Skills
              </h3>
            </div>
            <p className="my-1 text-sm sm:text-base text-textColor-light dark:text-textColor-dark">
              Git, GitHub, VS Code, Responsive Design, Web Performance, Testing,
              Debugging
            </p>
          </div>
        </div>

        <div className="relative">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-highlight rounded-lg"></span>
          <div className="relative h-full p-3 bg-background border-2 border-primary rounded-lg">
            <div className="flex items-center -mt-1">
              <FaPalette className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <h3 className="my-2 ml-3 text-base sm:text-lg font-bold text-primary">
                Soft Skills
              </h3>
            </div>
            <p className="my-1 text-sm sm:text-base text-textColor-light dark:text-textColor-dark">
              Problem Solving, Team Collaboration, Communication, Time
              Management
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
