import React, { Component } from 'react'
import {Menu} from 'semantic-ui-react'
import {connect} from "react-redux"
import config from "./Auth/Base/Firebase"
import logo from "./images/logo.png"
import {Link} from "react-router-dom"
 class Navbar extends Component {
  state = { activeItem: 'home',auth:this.props.auth}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleLogout = () => {
    config.auth().signOut().then(function() {
  }, function(error) {
    this.setState({auth:false})
  })};  
  render() {
    const { activeItem, auth} = this.state

    return (
        <div style={{paddingLeft:20,paddingRight:20}}>
      <Menu secondary>
      <Link to="/">
        <img src={logo} style={{width:"40%"}} alt="No logo"/>
        </Link>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          
        ></Menu.Item>
        <Menu.Item
          name='Courses'
          active={activeItem === 'Courses'}
          onClick={this.handleItemClick}
          
        ><Link to="/courses">Courses</Link></Menu.Item>
        <Menu.Item
          name='For kids'
          active={activeItem === 'For kids'}
          onClick={this.handleItemClick}
          
        ><Link to="/kids">For kids</Link></Menu.Item>
        <Menu.Item
          name='Community'
          active={activeItem === 'Community'}
          onClick={this.handleItemClick}
          
        ><Link to="/dash">Community</Link></Menu.Item>
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