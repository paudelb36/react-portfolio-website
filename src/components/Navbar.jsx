import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex gap-10 py-5 my-2 px-7 text-2xl font-medium">
      <NavLink 
        to="/"
        className={({ isActive }) =>
          isActive 
            ? "text-highlight border-b-2 border-black" 
            : "text-primary hover:text-secondary"
        }
      >
        About
      </NavLink>
      <NavLink 
        to="/projects"
        className={({ isActive }) =>
          isActive 
            ? "text-highlight border-b-2 border-black" 
            : "text-primary hover:text-secondary"
        }
      >
        Projects
      </NavLink>
      <NavLink 
        to="/education"
        className={({ isActive }) =>
          isActive 
            ? "text-highlight border-b-2 border-black" 
            : "text-primary hover:text-secondary"
        }
      >
        Education
      </NavLink>
      <NavLink 
        to="/resume"
        className={({ isActive }) =>
          isActive 
            ? "text-highlight border-b-2 border-black" 
            : "text-primary hover:text-secondary"
        }
      >
        Resume
      </NavLink>
    </nav>
  );
};

export default Navbar;
