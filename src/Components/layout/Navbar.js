import React from "react";
import { Link } from "react-router-dom";
import SignedIn from "./Signedin";
import SignedOut from "./SignedOut";
import { connect } from 'react-redux';


const Navbar = (props) => {
  const {auth, profile} = props;
  const links = auth.uid ? <SignedIn profile={profile} /> : <SignedOut />;
    return ( 
        <nav>
            <h1 className="logo"><Link to="/">Project</Link></h1>
            <div className="links">
              {links}
            </div>
        </nav>
     );
}
 
const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);