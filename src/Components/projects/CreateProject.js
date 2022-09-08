import React, { Component } from "react";
import { connect } from "react-redux"
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
    state ={
        title: '',
        content: '',
        created: false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.setState({created: true});
    }

    render(){
        const {auth} =this.props;
        if (!auth.uid) return <Redirect to='/signIn' />

        return ( 
            <>
            <div className="body">
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="title">Welcome</div>
                <div className="subtitle">Add a new Project!</div>
                <div className="input-container ic1">
                    <input id="title" className="input" type="text" placeholder=" " onChange={ this.handleChange } />
                    <div className="cut"></div>
                    <label htmlFor="title" className="placeholder">Project Title</label>
                </div>
                <div className="textarea-container ic2">
                    <textarea id="content" className="input" type="text" placeholder=" " onChange={ this.handleChange } ></textarea>
                    <div className="cut"></div>
                    <label htmlFor="content" className="placeholder">Project Content</label>
                </div>
                
                <button type="text" className="submit">Create</button>
                { this.state.created === true ? <Redirect to='/' /> : null }
            </form>
            </div>
            </>
        );
        }
} 

const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }    
}

const mapDispatchToProps = (dispatch) => {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
