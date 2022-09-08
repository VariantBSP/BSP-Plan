import React from "react";
import { Link } from "react-router-dom";

const SignedOut = () => {
    return ( 
        <div>
            <Link to="/SignUp">Sign-Up</Link>
            <Link to="/SignIn">Sign-In</Link>
        </div>
     );
}
 
export default SignedOut;