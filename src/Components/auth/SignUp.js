import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import {signUp} from '../../store/actions/authActions';

class SignUp extends Component {
    state ={
        firstName:'',
        lastName:'',
        email:'',
        password:''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render(){
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />

        return ( 
            <>
            <div className="body">
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your account!</div>
                <div className="input-container ic1">
                    <input 
                        id="firstName" className="input" type="text" placeholder=" " 
                        onChange={this.handleChange}
                        />
                    <div className="cut"></div>
                    <label htmlFor="firstName" className="placeholder">First name</label>
                </div>
                <div className="input-container ic2">
                    <input 
                    id="lastName" className="input" type="text" placeholder=" " 
                    onChange={this.handleChange}
                    />
                    <div className="cut"></div>
                    <label htmlFor="lastName" className="placeholder">Last name</label>
                </div>
                <div className="input-container ic2">
                    <input 
                        id="password" className="input" type="password" placeholder=" " 
                        onChange={this.handleChange}
                        />
                    <div className="cut"></div>
                    <label htmlFor="lastname" className="placeholder">Password</label>
                </div>
                <div className="input-container ic2">
                    <input 
                        id="email" className="input" type="email" placeholder=" " 
                        onChange={this.handleChange}
                        />
                    <div className="cut cut-short"></div>
                    <label htmlFor="email" className="placeholder">Email</label>
                </div>
                <button type="text" className="submit">Sign Up</button>
                <div className="centre">
                    { authError ? <p>{ authError }</p> : null }
                </div>
            </form>
            </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);