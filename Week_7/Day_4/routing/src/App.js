import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import Pokedex from './pages/Pokedex';

import { useState, useEffect } from 'react';
import projectsData from './projects-data.json';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [projects, setProjects] = useState([]);

  // This effect will run only once on initial render.
  // To do it we set the dependency array empty [].
  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="App">
      <Navbar />

      {/* Routes just wraps the individual route */}
      <Routes>
        {/* The route needs two props:
          path: the path on your website you want to create
          element: component/page you want to render on that path
        */}

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage projects={projects} />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />

        <Route path="/pokemon" element={<Pokedex />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
