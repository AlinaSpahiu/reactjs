
import React, { Component } from 'react'
import PersonSetState from "./stuff/PersonSetState"
import PersonUseStateHook from "./stuff/PersonUseStateHook"
import {Button, Container, Row} from "react-bootstrap"

export default class App extends Component {
  
  render() {
    return (
      <Row className="">
           <PersonSetState />
           <hr /> 
           <PersonUseStateHook />
       
      </Row>
    )
  }
}
