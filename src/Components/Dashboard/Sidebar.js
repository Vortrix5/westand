import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import chat from "../images/dash/chat.png"
import campain from "../images/dash/compains.png"
import {connect} from "react-redux"



const useStyles = makeStyles(theme => ({
  root: {
    width: '20%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
    width: 80,
    height: 80,
  },
}));
let img = chat

function Sidebar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  function handleClick() {
  }
  function handleCamp() {
      props.dispatch({type:"CAMP_CHANGE"})
      setOpen(!open);

  }
  function handleChat() {
    props.dispatch({type:"CHAT_CHANGE"})
}

  return (

    <>
     <div width="51%">
         
         
    <List
    style={{display:"inline-block"}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
          <>
        <Grid container justify="center" alignItems="center">
      <Avatar style={{marginTop:30}} className={classes.purpleAvatar}>AZ</Avatar>
    </Grid>
    <h2 style={{display:"flex", justifyContent:"center"}}>Amine Zouaoui</h2>
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
        </>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleChat} >
        <ListItemIcon>
        <Icon>chat_bubble_outline</Icon>
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItem>
      <ListItem button onClick={handleCamp}>
        <ListItemIcon>
        <Icon>calendar_today</Icon>
        </ListItemIcon>
        <ListItemText primary="Compains" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button onClick={handleCamp} className={classes.nested}>
            <ListItemIcon>
            <Icon>add_circle_outline</Icon>
            </ListItemIcon>
            <ListItemText primary="Create a compain" />
          </ListItem>
          <ListItem button onClick={handleCamp}  className={classes.nested}>
            <ListItemIcon>
            <Icon>not_listed_location</Icon>
            </ListItemIcon>
            <ListItemText primary="Paticipate to compains" />
          </ListItem>
        </List>
      </Collapse>
    </List>
    <img src={props.img} style={{display:"inline-block", float:"right"}} width="78%" alt="no"/>
    </div>
    
    </>
  );
    }

   const mapStateToProps = state =>({
        img: state.img
   })
    export default connect(mapStateToProps)(Sidebar) 