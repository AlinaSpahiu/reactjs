
import React, { useState } from 'react'
import Person from "./Person"
import {Button, Container, Row} from "react-bootstrap"


 const PersonUseStateHook = props => {
 const [ personsState, setPersonsState] =  useState({
       persons: [
           {name: "Merdije", age: 27},
           {name: "Nafije", age: 29},
           {name: "Nora", age: 30},
           {name: "Hatixhe", age: 29}
          ]
     });



     // switch name Handler:
const switchNameHandler = (newName) => {
    console.log("something")
    setPersonsState({ 
      persons: [
        {name: newName, age: 27},
        {name: "Nafije S.", age: 29},
        {name: "Nora K.", age: 30},
        {name: "Hatixhe C.", age: 29}
  ] })
}

 

    return (
        <Container className="">
      
        <h3 > Use State Hook:</h3>
            <Row className="justify-content-center mt-3">
               <Button variant="outline-dark w-25" onClick={() => switchNameHandler("aLIIINA")}> Switch names</Button>
            </Row>

          <Row> 
                <Person name={personsState.persons[0].name} 
                        age={personsState.persons[0].age} 
                    />
                <Person name={personsState.persons[1].name} 
                        age={personsState.persons[1].age} 
                    />
                <Person name={personsState.persons[2].name} 
                        age={personsState.persons[2].age} 
                    />
                <Person name={personsState.persons[3].name} 
                        age={personsState.persons[3].age} 
                    />
           </Row>
        </Container>
 
    )
  
}


export default PersonUseStateHook