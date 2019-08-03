import React from "react";
import { withRouter } from "react-router";
import config from "../Base/Firebase"
import LoginView from "./LoginView";
import {connect} from 'react-redux'


class Logins extends React.Component {
    handleLogIn = async event => {
        event.preventDefault();
        this.props.dispatch({type:"ON_AUTH"})
        const { email, password } = event.target.elements;
        try {
          const user = await config
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          this.props.history.push("/");
        } catch (error) {
          alert(error);
        }
    }
        render(){
            return (
                <>
                 <LoginView submit={this.handleLogIn}/>
                </>
            )
            }

}

const mapStateToProps = state => ({
  auth : state.auth
})
export default connect(mapStateToProps)(withRouter(Logins));


