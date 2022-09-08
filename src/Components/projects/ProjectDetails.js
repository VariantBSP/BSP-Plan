import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from 'react-router-dom';
import moment from "moment";

const ProjectDetails = (props) => {
    const { project, auth } = props;
    if (!auth.uid) return <Redirect to='/signIn' />
    if(project){
     return ( 
        <div className="details">
            <h2>{ project.title}</h2>
            <p>{ project.content }</p>
            <p>Written By <span>{ project.authorFirstName } { project.authorLastName }</span></p>
            <p><span>{ moment(project.createdAt.toDate()).calendar() }</span></p>
        </div>
     );
    } else{
        return(
        <div className="container">
            <h2>Loading project...</h2>
        </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return{
        project: project,
        auth: state.firebase.auth
    }
}
 
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(ProjectDetails);