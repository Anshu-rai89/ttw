import React ,{ useState } from 'react';
import styled from 'styled-components'
import logo from './logo.svg';
import './App.css';
import Person from './person/person';
import './App.css'

function App() {
  const  [get,set]=useState( [
    {
      name:'Ashutosh',
      sub:'Python'

    },
    {
      
      name:'subham',
      sub:'ML'
    }
  
  ] );

   const  setNameHandler=()=>
      {
        set([{
          name:'somethother',
          sub:'fancy'
        }]
        )
      }

      const changesetperson=(event)=>
      {
        set([
          {
            name:event.target.value,
            age:90
          }
        ])
      }

      const Styledbutton=styled.button`
      background-color:green;
      color:white;
      font:inherit;
      border:1px solid blue;
      padding :10px;
      cursor:ponter;
      &:hover{
        background-color:lightgreen;
        color:black;
      }
      
      `;


  return (
 
    <div className="App">
      <header className="App-header">
      
        <h1>Lets get started </h1>
        <Styledbutton
         onClick={setNameHandler} >Set Name
        
        </Styledbutton>
        <Person  name={get[0].name} sub={get[0].sub}/>
        <Person 

        click={setNameHandler}
        changed={changesetperson}
         name='Ashu' 
         sub='js'/>
        <Person  name='Rishi' sub='Node'>  And i am Damm good at it</Person>
      </header>
     
    </div>

    // using custom tag Person
   
  //  React.createElement('div',{className:'App-header'},React.createElement('h1',null,'hey lets test createlemet react'))
  )
}

export default App;
