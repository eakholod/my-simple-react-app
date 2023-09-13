import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { projectsInfo } from "./data";
import "./app.css";
import HomePage from "./home";
import NotFound from "./notFound";
import ProjectDetails from "./projectDetails";

function App() {
  return (
    <div className="">
      <div className="navbar">
        <Link to="/">Home </Link>
        {projectsInfo.map((project) => {
          return (
            <Link key={project.id} to={`projectsInfo/${project.id}`}>
              {project.name}
            </Link>
          );
        })}
        {}
      </div>
      <Routes>
        <Route path="projectsInfo/:projectId" element={<ProjectDetails />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
