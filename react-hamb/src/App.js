import React, { Component } from 'react'
import PersonSetState from "./Cap3/PersonSetState"
import PersonUseStateHook from "./Cap3/PersonUseStateHook"
import {Button, Container, Row} from "react-bootstrap"

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
           <PersonSetState />
           <hr /> 
           {/* <PersonUseStateHook /> */}
       
      </div>
    )
  }
}
