import React from "react"
import Navbar from "./Navbar";
import back from "./images/about.png"
import { Button } from 'semantic-ui-react'

export default function About(){

    return(
        <>
        <Navbar/>
        <img src={back} style={{width:"68%", height:"537px",float:"right"}} alt="nothing to show" />
        <div style={{marginLeft:120, marginTop:100}}>
        <p style={{fontSize:50, marginBottom:17, color:"#43a180"}}>LEADERS to the change</p>
        <p style={{marginBottom:30}}>The first academy to teach people about environment care and aware them about the importance of their role in helping the world achieve the SDGs.</p>
        <Button color='green'size="huge">Contact us</Button>
        </div>
       </> 
    )
}