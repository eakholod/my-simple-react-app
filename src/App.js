import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { projectsInfo } from "./data";
import "./App.css";
import ProjectDetails from "./projectDetails";

function App(){
    return (
        <div className="">
            <div className="">
                {
                    projectsInfo.map((project)=> {
                        return (
                            <Link key={project.id} to={`projectsInfo/${project.id}`}> 
                            {project.name} | </Link>
                        )
                    })
                }
            </div>
            <Routes>
                <Route path="projectsInfo/:projectId" element={<ProjectDetails/>} />
            </Routes>
        </div>
    )
}

export default App;
