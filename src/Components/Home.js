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
import ResponsiveContainer from './ResponsiveContainer'
import back from "../images/back.png"
import logo from "../images/logo.png"
import {Link} from "react-router-dom"


// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.


/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const HomepageHeading = ({ mobile }) => (
    <center>
    <div style={{width:"100%",background: "#1b1c1d",paddingBottom:"7em"}}>
    <Container text style={{}}>
              <img src={logo} style={{width:"100%"}}/>
      <Header
        as='h2'
        content='Because we really care about you!'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
      <br/>
      <Link to="/courses"><Button primary size='huge'>
        Get Started
        <Icon name='right arrow' />
      </Button></Link>
    </Container>
    </div>
    </center>
  )
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }

const Home = () => (
  <ResponsiveContainer>
    <HomepageHeading />
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Can Introduce You to SDGs!
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We will do our best to make our courses fit your interests! Because we care about our environment and our future!.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Make The First Step!
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you make the first step and introduce kids to SDGs to familiarise them with SDGs and environment care. Check our kids courses, we promise you'll love them!
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image  rounded style={{width:600,maxWidth:600}} src={back} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Link to="/kids"><Button size='huge'>Check Them Out</Button></Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            “All the SDGs come down to education…”
            </Header>
            <p style={{ fontSize: '1.33em' }}>Malala Yousafzai</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            “A little less conversation, a little more action”
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Prime Minister of Norway Erna Solberg
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
        Amélie Jézabel Mariage, United Nations Young Leader for the SDGs and Co-founder of Aprendices Visuales</Header>
        <p style={{ fontSize: '1.33em' }}>
        United Nations Young Leader for the SDGs Amélie Jézabel Mariage discusses her inspiration in advocating for children's rights to access inclusive education, adding that “innovation in education is a proven path to inclusion and a bridge to opportunity.”
        </p>
        <Button href="https://www.un.org/sustainabledevelopment/blog/2019/02/amelie-jezabel-mariage-interview/" as='a' size='large'>
          Read More
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
        Madelle Kangha, United Nations Young Leader for the SDGs and Founder of JumpStart Academy Africa
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        I believe that educating and empowering young people everywhere, to become effective and productive members of society, is essential for sustainable growth and development.
        </p>
        <Button href="https://www.un.org/sustainabledevelopment/blog/2019/02/madelle-kangha-interview/" as='a' size='large'>
          Read More
        </Button>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                WeStand
              </Header>
              <p>
                Because we care about you!
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default Home;