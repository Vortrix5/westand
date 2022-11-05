import React from "react";
import {Route} from "react-router"
import { BrowserRouter as Router } from 'react-router-dom'
import config from "./Components/Auth/Base/Firebase"
import PrivateRoute from "./Components/PrivateRoute"
import Home from "./Components/Home";
import SignUp from "./Components/Auth/SignUp/SignUp";
import Login from "./Components/Auth/Login/Login";
import {connect} from 'react-redux'
import CourseCard from "./Components/Courses/CourseCard";
import Courses from "./Components/Courses/Courses";
import Dashboard from "./Components/Dashboard/Dashboard";
import About from "./Components/About";
import Kids from "./Components/Kids/Kids";
import { Dimmer, Loader} from 'semantic-ui-react'



 class App extends React.Component {
  state = { loading: true, authenticated: false, user: null };
  componentWillMount() {
    config.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return <Dimmer active>
      <Loader size='massive'>Loading</Loader>
    </Dimmer>;
    }

    return (
      <Router>
        <div>
          <PrivateRoute
            exact
            path="/dash"
            component={Dashboard}
            authenticated={authenticated}
          />
          <Route  path="/register" component={SignUp} />
          <Route  path="/login" component={Login} />
          <Route  path="/courses" component={Courses}/>
          <Route  path="/kids" component={Kids}/>
          <Route
            exact
            path="/"
            component={Home}/>
            <Route
            exact
            path="/about"
            component={About}/>


        </div>
      </Router>
    );
  }
}


export default connect()(App)