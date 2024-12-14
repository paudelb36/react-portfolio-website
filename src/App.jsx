import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Education from "./pages/Education";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-300 dark:bg-primary-dark">
          <div className="grid grid-cols-12 gap-4 px-5 lg:px-48 min-h-[90vh] my-14 ">
            <div className="col-span-12 p-4 text-center lg:col-span-3 rounded-2xl bg-accent-light dark:bg-accent-dark">
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
    </>
  );
}

export default App;
