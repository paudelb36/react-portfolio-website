import React from "react";
import { education } from "../data";

const Education = () => {
  return (
    <div className="w-full h-full p-4 overflow-hidden">
    <div className="max-w-4xl mx-auto h-full">
      <div
        className="relative wrap overflow-y-scroll p-4 scrollbar-hidden"
        style={{ height: "calc(90vh - 160px)" }}
      >
        {/* Vertical divider */}
        <div 
          className="absolute border-opacity-20 border-black dark:border-primary border-2 left-1/2 transform -translate-x-1/2"
          style={{ height: `${education.length * 250}px` }}
        ></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >

              {index % 2 === 0 ? (
                <>
                  <div className="order-1 w-5/12">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl px-6 py-4">
                      <h3 className="mb-3 font-bold text-xl text-primary dark:text-primary">{edu.degree}</h3>
                      <h4 className="mb-3 font-bold text-primary dark:text-white">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-white mb-2">
                        {edu.location}
                      </p>
                      <p className="text-sm font-medium text-gray-700 dark:text-white mb-2">
                        {edu.duration}
                      </p>
                      <p className="text-sm leading-snug tracking-wide text-gray-600 dark:text-white">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                  <div className="z-20 flex items-center order-1 bg-primary dark:bg-primary shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">
                      {edu.id}
                    </h1>
                  </div>
                  <div className="order-1 w-5/12"></div>
                </>
              ) : (
                <>
                  <div className="order-1 w-5/12">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl px-6 py-4">
                      <h3 className="mb-3 font-bold text-xl text-primary dark:text-primary">{edu.degree}</h3>
                      <h4 className="mb-3 font-bold text-primary dark:text-white">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-white mb-2">
                        {edu.location}
                      </p>
                      <p className="text-sm font-medium text-gray-700 dark:text-white mb-2">
                        {edu.duration}
                      </p>
                      <p className="text-sm leading-snug tracking-wide text-gray-600 dark:text-white">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                  <div className="z-20 flex items-center order-1 bg-primary dark:bg-primary shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">
                      {edu.id}
                    </h1>
                  </div>
                  <div className="order-1 w-5/12"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
