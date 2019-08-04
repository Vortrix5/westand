import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import {connect} from "react-redux"
import { Progress } from 'semantic-ui-react'



const CourseModal = (props) => (

  <Modal trigger={props.trigger}>
      <>
    <Modal.Header>Course Information</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={props.chose.img} />
      <Modal.Description>
        <Header style={{color:props.chose.color}}>{props.chose.title}</Header>
        <p>{props.chose.desc}</p>
        <Progress color="green" progress percent={props.chose.progress} size='small'>
    </Progress>
      </Modal.Description>
    </Modal.Content>
    </>
      
  </Modal>
)

const mapStateToProps = state => ({
    chose: state.chosenCourse
})

export default connect(mapStateToProps)(CourseModal)
