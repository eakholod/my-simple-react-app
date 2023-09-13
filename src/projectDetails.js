import React from "react";
import { useParams } from "react-router-dom";
import { projectsInfo } from "./data";
import "./projectDetails.css";

function LangSpan(props) {
  return (
      <span className="languagesSpan" >{props.lang}</span>
  );
}

function ProjectDetails() {
  const { projectId } = useParams();
  const projectFound = projectsInfo.find((project) => {
    return project.id == projectId;
  });
  if (!projectFound) {
    return (
      <div>
        <h1>Project is Not Found</h1>
        <h2>Select one of the existing project</h2>
      </div>
    );
  }
  const { id, name, desc, url, languages } = projectFound;
  return (
    <div className="projectContainer">
      <h1 className="projectTitle">Project: {name}</h1>
      <p>{desc}</p>
      <a href={url} target="_blank" className="text-indigo-600 m-12">
        {url}
      </a>
      <div className="languages">
        {languages.map((language) => {
          return (
              <LangSpan key={language} lang={language} />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectDetails;
