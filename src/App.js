import React ,{ useState } from 'react';
import styled from 'styled-components'
import logo from './logo.svg';
import './App.css';
import Person from './person/person';
import './App.css'
import { render } from '@testing-library/react';

function App() {
    // const  [getperson,setperson]=useState(
    // {
      
    //     person:
    //     [
    //       {
    //       name:'Ashutosh',
    //       sub:'Python'

    //       },
    //       {
            
    //         name:'subham',
    //         sub:'ML'
    //       }
    //   ]
    // });
  
    // const [gettoggle,settoggle]=useState(
    //   {
    //     togglestate:false
    //   }
    // )

  
    // const deleteperson=(index)=>
    // {
    //   const persons=getperson.person;

    //   persons.splice(index,1);
    //   setperson({person:persons});
    // } 


    //   const changesetperson=(event)=>
    //   {
    //     setperson({
    //      person : {
    //         name:event.target.value,
    //         sub:'React'
    //       }
    //     }

        
    //     )
    //   }

      
  
    //   const Styledbutton=styled.button`
    //   background-color:${props=> props.alt ? 'red' :'green'};
    //   color:white;
    //   font:inherit;
    //   border:1px solid blue;
    //   padding :10px;
    //   cursor:ponter;
    //   margin:20px;
    //   &:hover{
    //     background-color:${props=> props.alt ? 'salmon' :'lightgreen'};
    //     color:black;
    //   }
      
    //   `;

    //   const Buttonttw=styled.button`
    //   {
    //      // background color  property is bclr
    //     background-color:${props=>props.bclr};   
        
    //     border-top-left-radius: ${props=>props.bradius};
    //     border-bottom-left-radius:  ${props=>props.bradius};
    //     border-top-right-radius: ${props=>props.bradius};
    //     border-bottom-right-radius:  ${props=>props.bradius};
    //     border:1px solid ${props=>props.bordercolor};  
    //     color:${props=>props.clr};
    //     padding: 8px;
    //     padding-inline-start: 20px;
    //     padding-inline-end: 20px;
    //     cursor:ponter;
    //     margin:10px;
    //     &:hover{
    //       background-color:${props=>props.hbclr};
    //     }

    //   }`;

      const Styleddiv=styled.div`
      {
        width:200px;    
        height:200px;
        background-color:${props=>props.bclr}

      }`
    
      const info=['anshu','ankit','ashu'];
      const colors=['green','red','blue','yellow'];
      const [getInfoIndex,setInfoIndex]=useState(
        {
          i:0
        }
      );

      const [getColorIndex,setColorIndex]=useState(
        {
           j:0
        }
      )
      const [getInfo,setInfo]=useState(
        {
          name:info[getInfoIndex.i]
        }
      );

    const [getBackgroundColor,setBackgroundColor]=useState(
    {
      backgroundColor:colors[getColorIndex.j]
    }
    );



    // const dragged=(event)=>
    // {
    //   //setbg({backgroundColor:'green'})
 
    //   setColorIndex({j:getColorIndex.j+1});
    //   setInfoIndex(
    //     {
    //       i:getInfoIndex.i+1
    //     });
      
    //  setBackgroundColor(
    //    {
    //      backgroundColor:colors[getColorIndex.j]
    //     });
    //  setInfo(
    //    {name:info[getInfoIndex.i]
    //   });
    //   console.log('drage event fired');
    
     
    // }
    var x1=0;
    var x2=0;

   

    const swipeStart=(e)=>
    {    
           x1=e.touches[0].clientX;
           console.log('x1 is',x1);
           
    }


   

    var check=true;


    const swipeEnd=(e)=>
    {
      x2=e.touches[0].clientX;
   //  console.log('x2 is',x2);
     
   




      if(x2>x1)
      {

         
      console.log('right swipe is made');
     // break;

       if(check)
       {
        setColorIndex(
          {
            j:getColorIndex.j-1
          });
        setInfoIndex(
          {
            i:getInfoIndex.i-1
          });
        setBackgroundColor(
          {
            backgroundColor:colors[getColorIndex.j]
          });
        setInfo(
          {
            name:info[ getInfoIndex.i]
          });
        console.log('sifting right');
        check=false;
       }

      }
      else if(x2<x1)
      {
       
        console.log('left swipe is made');  
  

        if(check)
        {
          setColorIndex(
            {
              j:getColorIndex.j+1
            });
          setInfoIndex(
            {
              i:getInfoIndex.i+1
            });
          
          setBackgroundColor(
            {
              backgroundColor:colors[getColorIndex.j]
            });
          setInfo(
            {
              name:info[ getInfoIndex.i]
            });
          console.log('shifting left');
          check=false;
        }
       // break;
      }
      x1=x2;

      
    }




    
 render()
 {
      // let persons=null;
      // if(gettoggle.togglestate)
      // {
      //   persons=(<Styleddiv>
      //    { getperson.person.map( (person,index) =>
      //    {
      //        return <Person click={()=> deleteperson(index)} name={ person.name} sub={person.sub}
      //        changed={changesetperson}/>;
      //    })}
      //   </Styleddiv>);
      // }
  

  return (
 
    <div className="App">
      <header className="App-header">
      
        <h1>Lets get started </h1>

         {/*  Custom Button components info  */}
{/* 
         set background-color using bclr prop 
         set color using clr props
         set side radius of button using bradius 
         set hover background color using hbclr
         set border color using bclr */}
          

        {/* <Buttonttw bclr='white' bordercolor='grey' clr='grey' bradius='5px' >Read More </Buttonttw>
        <Buttonttw bclr='white' clr='black' bordercolor='black'>Find out the best for me?</Buttonttw>
        <Buttonttw bclr='#F7E700' clr='black' bordercolor='#F7E700'   >Submit</Buttonttw>
        <Buttonttw bclr='#F7E700' clr='black' bordercolor='#F7E700' bradius='15px'  >Inspire me</Buttonttw>
        <Buttonttw bclr='black' clr='white' bordercolor='white'   >Itenary</Buttonttw>
        <Buttonttw bclr='white' clr='black' bordercolor='#F7E700' bradius='15px'   >Itenary</Buttonttw> */}
        {/* <Styledbutton
        alt={gettoggle.togglestate}
         onClick={togglename} >Set Name
        
        </Styledbutton> */}
        {/* {persons} */}
        < Styleddiv draggable="true" bclr={getBackgroundColor.backgroundColor}  onTouchStart={swipeStart} onTouchMove={swipeEnd}> {getInfo.name}  </ Styleddiv>
      </header>
     
    </div>

    // using custom tag Person
   
  //  React.createElement('div',{className:'App-header'},React.createElement('h1',null,'hey lets test createlemet react'))
  )
}
}


export default App;
