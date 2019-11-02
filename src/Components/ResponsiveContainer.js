import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import {Link} from "react-router-dom"
import config from "./Auth/Base/Firebase"
import {connect} from "react-redux"

const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }

  
class DesktopContainer extends Component {
    state = { activeItem: 'home',auth:true}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleLogout = () => {
      config.auth().signOut().then(function() {
    }, function(error) {
      this.setState({auth:false})
    })};    
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
    
    render() {
      const { children } = this.props
      const { fixed } = this.state

      return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{padding: '1em 0em' }}
              vertical
            >
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                  <Link to="/"><Menu.Item 
                  as='a'
                  name='home'>
                    Home
                  </Menu.Item></Link>
                  <Link to="/courses"><Menu.Item as='a' 
                  >Courses</Menu.Item></Link>
                  <Link to="/kids"><Menu.Item as='a'>For Kids</Menu.Item></Link>
                  <Link to="/dash"><Menu.Item as='a'>Community</Menu.Item></Link>

                  <Menu.Item position='right'>
                  {(this.state.auth==false) ? 
                    <>
                    <Link to="/login"><Button as='a' inverted={!fixed}>
                      Log in
                    </Button></Link>
                    <Link to="/register"><Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button></Link> </>
                     : <Button as='a' onClick={this.setState({auth:false})} inverted={!fixed} primary={fixed} >
                     Log out
                   </Button>}
                  </Menu.Item>
                </Container>
              </Menu>
            </Segment>
          </Visibility>
  
          {children}
        </Responsive>
      )
    }
  }
const mapStateToProps = state =>({
    auth : state.auth
})
  DesktopContainer.propTypes = {
    children: PropTypes.node,
  }
  
  class MobileContainer extends Component {
    state = {}
  
    handleSidebarHide = () => this.setState({ sidebarOpened: false })
  
    handleToggle = () => this.setState({ sidebarOpened: true })
  
    render() {
      const { children } = this.props
      const { sidebarOpened } = this.state
  
      return (
        <Responsive
          as={Sidebar.Pushable}
          getWidth={getWidth}
          maxWidth={Responsive.onlyMobile.maxWidth}
        >
          <Sidebar
            as={Menu}
            animation='push'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
          </Sidebar>
  
          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>
  
            {children}
          </Sidebar.Pusher>
        </Responsive>
      )
    }
  }
  
  MobileContainer.propTypes = {
    children: PropTypes.node,
  }
  
 const ResponsiveContainer = ({ children }) => (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </div>
  )
  
  ResponsiveContainer.propTypes = {
    children: PropTypes.node,
  }
  connect(mapStateToProps)(DesktopContainer)
  export default connect(mapStateToProps)(ResponsiveContainer)
