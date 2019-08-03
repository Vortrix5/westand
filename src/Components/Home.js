import React from "react"
import Navbar from "./Navbar";
import back from "../images/back.png"
import { Button } from 'semantic-ui-react'

export default function Home(){

    return(
        <>
        <Navbar/>
        <img src={back} style={{width:"68%", height:"537px",float:"right"}} alt="nothing to show" />
        <div style={{marginLeft:120, marginTop:100}}>
        <p style={{fontSize:50, marginBottom:17}}>Nature Landing Page</p>
        <p style={{marginBottom:30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        <Button color='green'size="huge">Get Started</Button>
        </div>
       </> 
    )
}