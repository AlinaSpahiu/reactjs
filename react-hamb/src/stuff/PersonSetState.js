
import React, { Component } from 'react'
import Person from "./Person"
import {Button, Container, Row} from "react-bootstrap"

export default class App extends Component {
  
  state = {
    persons: [
        {name: "Alina", age: 27},
        {name: "Stefano", age: 29},
        {name: "Diego", age: 30},
        {name: "Riccardo", age: 29}
    ]
}

// switch name Handler:
switchNameHandler = (newName) => {
    console.log("something")
    this.setState({ 
      persons: [
         {name: newName, age: 27},
         {name: "Stefano C.", age: 29},
         {name: "Diego B.", age: 30},
         {name: "Riccardo G.", age: 29}
  ] })
}

// Inser a new name:
nameChangedHandler = (event) => {
    this.setState({ 
        persons: [
           {name: event.target.value, age: 27},
           {name: "Stefano C.", age: 29},
           {name: event.target.value, age: 30},
           {name: "Riccardo G.", age: 29}
    ] })
}

  render() {

    const style = {
      backgroundColor: 'lightgrey',
      font: 'inherit',
      border: '2px solid pink',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
        <Container>
     
        
            <h3 > Class Set State:</h3>
            <Row className="justify-content-center mt-3">
               <button style={style}
                       variant="outline-dark w-25" 
                       onClick={this.switchNameHandler.bind(this, 'Alina Spahiu')}> 
                            Switch names
                </button>
            </Row>

          <Row className="mt-3"> 
                <Person name={this.state.persons[0].name} 
                        age={this.state.persons[0].age}
                        click = {this.switchNameHandler.bind(this, 'Alina Abbaz')} 
                        changed={this.nameChangedHandler} 
                    />
                <Person name={this.state.persons[1].name} 
                        age={this.state.persons[1].age} 
                    >
                    My hobies: Coding all day long! </Person>
                <Person name={this.state.persons[2].name} 
                        age={this.state.persons[2].age}
                        changed={this.nameChangedHandler} 
                    />
                <Person name={this.state.persons[3].name} 
                        age={this.state.persons[3].age} 
                    />
           </Row>
        
      </Container>
    )
  }
}
