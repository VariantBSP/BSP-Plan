import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './Components/layout/Navbar';
import Dashboard from './Components/dashboard/Dashboard';
import ProjectDetails from './Components/projects/ProjectDetails';
import CreateProject from './Components/projects/CreateProject';
import SignUp from './Components/auth/SignUp';
import SignIn from './Components/auth/SignIn';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Switch>
          <Route exact path={'/'}>
            <Dashboard />
          </Route>
          <Route path='/project/:id' component={props => <ProjectDetails {...props} />} />
          <Route path={'/create'}>
            <CreateProject />
          </Route>
          <Route path={'/SignUp'}>
            <SignUp />
          </Route>
          <Route path={'/SignIn'}>
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
