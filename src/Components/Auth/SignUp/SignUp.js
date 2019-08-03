import React from "react";
import { withRouter } from "react-router";
import config from "../Base/Firebase"
import SignUpView from "./SignUpView";
import {connect} from "react-redux"



class SignUp extends React.Component {
    handleSignUp = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          const user = await config
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            this.props.dispatch({type:"ON_AUTH"})
          this.props.history.push("/");
        } catch (error) {
          alert(error);
        }
    }
        render(){
            return (
                <>
                <SignUpView submit={this.handleSignUp}/>
                </>
            )
            }

}

const mapStateToProps = state => ({
    auth : state.auth
  })
export default connect(mapStateToProps)(withRouter(SignUp));


