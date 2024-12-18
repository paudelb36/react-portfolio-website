import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative ">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end p-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-primary dark:text-primary hover:text-secondary dark:hover:text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col md:flex-row md:gap-10 py-2 md:py-5 px-4 md:px-7 text-lg md:text-2xl font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-highlight dark:text-primary border-b-2 border-black dark:border-primary py-2"
                : "text-primary dark:text-primary hover:text-secondary dark:hover:text-white py-2"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
            ? "text-highlight dark:text-primary border-b-2 border-black dark:border-primary py-2"
            : "text-primary dark:text-primary hover:text-secondary dark:hover:text-white py-2"
        }
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/education"
            className={({ isActive }) =>
              isActive
            ? "text-highlight dark:text-primary border-b-2 border-black dark:border-primary py-2"
            : "text-primary dark:text-primary hover:text-secondary dark:hover:text-white py-2"
        }
            onClick={() => setIsMenuOpen(false)}
          >
            Education
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive
            ? "text-highlight dark:text-primary border-b-2 border-black dark:border-primary py-2"
            : "text-primary dark:text-primary hover:text-secondary dark:hover:text-white py-2"
        }
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
