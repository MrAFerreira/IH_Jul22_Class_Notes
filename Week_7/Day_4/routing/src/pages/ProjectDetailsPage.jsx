import React from 'react';
import projectsData from '../projects-data.json';
import { useParams } from 'react-router-dom';

function ProjectDetailsPage(props) {
  const { projectId } = useParams();

  const foundProject = projectsData.find((project) => project._id === projectId);

  return (
    <div>
      <h1>Project Details</h1>

      {!foundProject && <h2>No project with that id exists!</h2>}

      {foundProject && (
        <>
          <h2>{foundProject.name}</h2>
          <h3>Tech Stack: {foundProject.technologies}</h3>
          <p>{foundProject.description}</p>
        </>
      )}
    </div>
  );
}

export default ProjectDetailsPage;
