import React from 'react';
import styled from 'styled-components'
import './person.css'
// creating a functional componet and exporting it to use in app
const Person=(props)=>
{
    return (
    <div className='person'>
        <p onClick={props.click}>Hey {props.name} Lets Do {props.sub} </p> 
       
         <p> {props.children}</p>
        <input type="text" onChange={props.changed} />
       
    </div>
  
        
        
        );
}

export default Person;