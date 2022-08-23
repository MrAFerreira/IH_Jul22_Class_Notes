import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import { Routes, Route } from 'react-router-dom';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import EditProject from './pages/EditProject/EditProject';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Private from './components/Private/Private';
import Anon from './components/Anon/Anon';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects"
          element={
            <Private>
              <ProjectsPage />
            </Private>
          }
        />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/projects/edit/:id" element={<EditProject />} />
        <Route
          path="/signup"
          element={
            <Anon>
              <SignupPage />
            </Anon>
          }
        />
        <Route
          path="/login"
          element={
            <Anon>
              <LoginPage />
            </Anon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
