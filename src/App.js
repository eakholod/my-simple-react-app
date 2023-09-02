import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { projectsInfo } from "./data";
import "./App.css";
import ProjectDetials from "./projectDetails";

function App(){
    return (
        <div className="">
            <div className="mx-20 flex gap-5 my-24">
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
                <Route path="projectsInfo/:projectId" element={<ProjectDetials/>} />
            </Routes>
        </div>
    )
}

export default App;
