import React from "react"
import {useParams} from "react-router-dom"
import {projectsInfo} from "./data";


function ProjectDetails() {
    const {userId} = useParams();
    const projectFound = projectsInfo.find((project)=>{
      return project.id == userId;
    }
    );
    const projectName = projectFound.projectName;
    // use userId and find matching object from userInfo array
    return (
        <div>
            <h1 className="text-indigo-600 m-12">Project {projectName}</h1>
            {/* use user object and display different propeties about that user */}
        </div>
    )
}

export default ProjectDetails