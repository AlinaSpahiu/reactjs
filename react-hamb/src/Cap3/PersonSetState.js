
import React, { Component } from 'react'
import Person from "./Person"
import {Container, Row} from "react-bootstrap"

export default class App extends Component {
  
  state = {
    // persons data: 
    persons: [
        {name: "Alina", age: 27},
        {name: "Stefano", age: 29},
        {name: "Diego", age: 30},
        {name: "Riccardo", age: 29}
    ],
    // showPersons: false
}

// switch name Handler:
// when you click on it, it changes the names.
switchNameHandler = () => {
    //console.log("something")
    this.setState({ 
      persons: [
         {name: "Alina S.", age: 27},
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
           {name: event.target.value, age: 29},
           {name: event.target.value, age: 30},
           {name: event.target.value, age: 29}
    ] })
}

// Hide-Show Names - TOGGLE
togglePersonHandler = () => {
       const doesShow = this.state.showPersons;
       this.setState({showPersons: !doesShow})
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
                       onClick={this.switchNameHandler.bind(this, 'Alina Spahiu')}
                      onClick={this.togglePersonHandler}
                       > 
                            Switch names
                </button>
            </Row>

          <Row className="justify-content-center mt-3"> 
              {
                this.state.showPersons ? 
                <div >
                  <Person name={this.state.persons[0].name} 
                        age={this.state.persons[0].age}
                        click = {this.switchNameHandler.bind(this, 'Alina Abbaz')} 
                        changed={this.nameChangedHandler} 
                      />
                  <Person name={this.state.persons[1].name} 
                        age={this.state.persons[1].age}
                        changed={this.nameChangedHandler} 
                      >
                    My hobies: Coding all day long! </Person>
                  <Person name={this.state.persons[2].name} 
                        age={this.state.persons[2].age}
                        changed={this.nameChangedHandler} 
                      />
                  <Person name={this.state.persons[3].name} 
                        age={this.state.persons[3].age} 
                        changed={this.nameChangedHandler}
                    />
                    
               </div> 
              : null
            } 
           </Row>
        </Container>
  
    )
  }
}
