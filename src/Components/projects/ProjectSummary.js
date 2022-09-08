import React from "react";
import moment from "moment";

const ProjectSummary = ({project}) => {
    return ( 
        <div className="card">
            <h2>{project.title}</h2>
            <span>Posted by { project.authorFirstName } { project.authorLastName}</span>
            <p>{ moment(project.createdAt.toDate()).calendar() }</p>
            </div>
     );
}
 
export default ProjectSummary;