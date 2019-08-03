import React, { Component } from 'react'
import {Menu} from 'semantic-ui-react'
import {connect} from "react-redux"
import config from "./Auth/Base/Firebase"
import logo from "../images/logo.png"
 class Navbar extends Component {
  state = { activeItem: 'home',auth:this.props.auth}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleLogout = () => {
    config.auth().signOut().then(function() {
  }, function(error) {
    this.setState({auth:true})
  })};  
  render() {
    const { activeItem, auth} = this.state

    return (
        <div style={{paddingLeft:20,paddingRight:20}}>
      <Menu secondary>
        <img src={logo} style={{width:"20%"}} alt="No logo"/>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='About us'
          active={activeItem === 'About us'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Courses'
          active={activeItem === 'Courses'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='For kids'
          active={activeItem === 'For kids'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Community'
          active={activeItem === 'Community'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
        {(auth) ?
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleLogout}
          /> :
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleLogout}
            href="/login"
          />}
          {(!auth) && <Menu.Item
          name='register'
          active={activeItem === 'register'}
          onClick={this.handleLogout}
          href="/register"
        />
           
          }

        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}

const mapStateToProps = state =>({
    auth : state.auth
})

export default connect(mapStateToProps)(Navbar)