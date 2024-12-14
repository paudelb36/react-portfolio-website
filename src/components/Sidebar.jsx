import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-36 h-36 mx-auto border-4 border-primary rounded-full">
          <img
            className="rounded-full object-cover h-full w-full"
            src="/myphoto.jpg"
            alt=""
          />
        </div>

        <h1 className="mt-4 text-3xl font-semibold text-primary dark:text-textColor-dark">
          Bibek Paudel
        </h1>
        <div className="mt-2 bg-backgroundColor-light dark:bg-backgroundColor-dark rounded-xl w-32">
          <h2 className="px-1 text-md font-semibold text-textColor-light dark:text-textColor-dark">
            Web Developer
          </h2>
        </div>
        <div className="mt-4">
          <h3 className="text-lg text-textColor-light dark:text-textColor-dark">
            Find me here.
          </h3>
          <div className="flex justify-around mt-1 text-4xl gap-4">
            <a
              href="https://github.com/paudelb36"
              target="_blank"
              className="text-primary hover:text-textColor-light dark:hover:text-textColor-dark"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/paudelb_"
              target="_blank"
              className="text-primary hover:text-textColor-light dark:hover:text-textColor-dark"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/bibek-paudel-06b53821b/"
              target="_blank"
              className="text-primary hover:text-textColor-light dark:hover:text-textColor-dark"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="mt-8 w-full p-1 border-2 border-primary rounded-lg">
          <h3 className="text-lg border-b-2 border-primary text-textColor-light dark:text-textColor-dark">
            Contact.
          </h3>
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2">
              <MdLocationOn className="text-primary text-xl" />
              <span className="text-[16px] text-textColor-light dark:text-textColor-dark">
                Suryabinayak, Bhaktapur
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <MdEmail className="text-primary text-xl" />
              <span className="text-[16px] text-textColor-light dark:text-textColor-dark">
                paudelb11@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <MdPhone className="text-primary text-xl" />
              <span className="text-[16px] text-textColor-light dark:text-textColor-dark">
                +977 9849632274
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
