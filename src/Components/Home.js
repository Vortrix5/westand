import React from "react"
import Navbar from "./Navbar";
import back from "./images/back.png"
import { Button } from 'semantic-ui-react'

export default function Home(){

    return(
        <>
        <Navbar/>
        <img src={back} style={{width:"68%", height:"537px",float:"right"}} alt="nothing to show" />
        <div style={{marginLeft:120, marginTop:100}}>
        <p style={{fontSize:50, marginBottom:17}}>Learning for a worthy noble cause.</p>
        <p style={{marginBottom:30}}>It's time to become aware of real life problems and to start finding solutions so what are you waiting for ?</p>
        <Button color='green'size="huge">Get Started</Button>
        </div>
       </> 
    )
}