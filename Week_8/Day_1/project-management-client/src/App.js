import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import { Routes, Route } from 'react-router-dom';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import EditProject from './pages/EditProject/EditProject';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/projects/edit/:id" element={<EditProject />} />
      </Routes>
    </div>
  );
}

export default App;
