import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedIn = (props) => {
    return ( 
        <div>
            <Link to="/create">New Project</Link>
            <a onClick={props.signOut}>Log-out</a>
            <Link to="/"><button>{props.profile.initials}</button></Link>
        </div>
     );
}
 
const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedIn);