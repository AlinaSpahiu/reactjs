import React from 'react'
import "./Person.css"

const Person = (props) => {
    return (
      
        <div className="Person">
            <h2 onClick={props.click}> Hey, I'm {props.name} </h2>
            <h4> and I'm {props.age} years old!</h4>
            <p> {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    
     
    )
}

export default Person
