import React from "react";
import {Route} from "react-router"
import { BrowserRouter as Router } from 'react-router-dom'
import config from "./Components/Auth/Base/Firebase"
import PrivateRoute from "./Components/PrivateRoute"
import Home from "./Components/Home";
import SignUp from "./Components/Auth/SignUp/SignUp";
import Login from "./Components/Auth/Login/Login";
import {connect} from 'react-redux'



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
      return <p>Loading..</p>;
    }

    return (
      <Router>
        <div>
          <PrivateRoute
            exact
            path="/"
            component={Home}
            authenticated={authenticated}
          />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/login" component={Login} />


        </div>
      </Router>
    );
  }
}


export default connect()(App)