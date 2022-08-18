import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProjectsPage(props) {
  const [projects, setProjects] = useState(props.projects);

  useEffect(() => {
    setProjects(props.projects);
  }, [props.projects]);

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => {
        return (
          <div key={project.id} className="project">
            <Link to={`/projects/${project._id}`}>
              <h3>{project.name}</h3>
            </Link>
            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsPage;
