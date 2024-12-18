import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useDarkMode from "./hooks/useDarkMode"; // Import custom hook
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Education from "./pages/Education";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function App() {
  const { theme, setTheme } = useDarkMode(); // Use custom hook

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-300 dark:bg-primary-dark">
        {/* Page layout */}
        <div className="grid grid-cols-12 gap-4 px-5 lg:px-40 min-h-[90vh] my-14">
          <div className="col-span-12 p-3 text-center lg:col-span-3 rounded-2xl bg-accent-light dark:bg-accent-dark">
            {/* Theme toggle button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="self-end p-2 m-2 rounded-full bg-accent-light dark:bg-yellow-300 text-xl"
            >
              {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
            </button>
            <Sidebar />
          </div>
          <div className="flex flex-col col-span-12 lg:col-span-9 rounded-2xl bg-accent-light dark:bg-accent-dark">
            <Navbar />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
