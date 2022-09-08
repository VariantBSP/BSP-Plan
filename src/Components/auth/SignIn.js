import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }
    render(){
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />

    return (
        <>
        <div className="body-signin">
        <form className="form" onSubmit={this.handleSubmit}>
            <div className="input-container ic2">
                <input 
                    id="email" className="input" type="email" placeholder=" " 
                    onChange={this.handleChange}
                    />
                <div className="cut cut-short"></div>
                <label htmlFor="email" className="placeholder">Email</label>
            </div>
            <div className="input-container ic2">
                <input 
                    id="password" className="input" type="password" placeholder=" " 
                    onChange={this.handleChange}
                    />
                <div className="cut"></div>
                <label htmlFor="password" className="placeholder">Password</label>
            </div>
            <button type="submit" className="submit">Sign In</button>
            <div className="centre">
                { authError ? <p>{authError}</p> : null}
            </div>
        </form>
        </div>
        </>
     );
}
}

const mapStateToProps = (state) => {
    return{   
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)