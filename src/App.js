import React ,{ useState } from 'react';
import styled from 'styled-components'
import logo from './logo.svg';
import './App.css';
import Person from './person/person';
import './App.css'
import { render } from '@testing-library/react';
import Styleddiv from './person/swipe'

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

      const Buttonttw=styled.button`
      {
         // background color  property is bclr
        background-color:${props=>props. backgroundColor};   
        
        border-top-left-radius: ${props=>props.bradius};
        border-bottom-left-radius:  ${props=>props.bradius};
        border-top-right-radius: ${props=>props.bradius};
        border-bottom-right-radius:  ${props=>props.bradius};
        border:1px solid ${props=>props.bordercolor};  
        color:${props=>props.color};
        padding: 8px;
        padding-inline-start: 20px;
        padding-inline-end: 20px;
        cursor:ponter;
        margin:10px;
        &:hover{
          background-color:${props=>props.hbclr};
        }

      }`;
    
      const Styleddiv=styled.div`
    {
      width:100px;    
      height:100px;
      background-color:${props=>props.bclr};

    }`
    // info array
      const info=['1','2','3','4'];
      // clor array to update background -color
      const colors=['green','red','blue','yellow'];
      // state to keeptrackof indexes
     

      const [getIndex,setIndex]=useState(0);

      // info state 
      const [getInfo,setInfo]=useState( info[0]);

      // background color state
    const [getBackgroundColor,setBackgroundColor]=useState(colors[0]);


   // our custom div 
    



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
    var x1=0;    // to keep track of intitial postion 
    var x2=0;    // to keep track of final postion

   
// setting intitial postion of x using ontouch event listner
    const swipeStart=(event)=>
    {    
           x1=event.touches[0].clientX;
           console.log('x1 is',x1);
           
    }


    // tracking touch x cordinate using touchmove
    const swipeEnd=(event)=>
    {  // updating x2 
      x2=event.touches[0].clientX;

      // if current x postion is greater than initial right swipe is made
    if(x2-x1>10)
      {

         
      console.log('right swipe is made');
     // break;
     // checking for corner case 
        if(getIndex>0 ){
        // updating indexes 
      
          setIndex(getIndex-1);
          setIndex(getIndex-1);
          setBackgroundColor(colors[getIndex-1]);
          setInfo(info[ getIndex-1]);
          console.log('sifting right');
      
        }
      }
      // if currunt x postion is less then left swipe is made
    else if(x1-x2>10)
      {
       
        console.log('left swipe is made');  
        // checking boundary cases
        if(getIndex<colors.length-1){
          // updating indexes
          setIndex(getIndex+1);
          setIndex(getIndex+1);
          setBackgroundColor(colors[getIndex+1]);
          setInfo(info[ getIndex+1]);
 
        }
        
         
          console.log('shifting left');
        
       // break;
      }

      // updating staring postion of x as
      x1=x2;

      
    }


     // defining showprev

     const showPrev=()=>
     { if(getIndex>0){
        setIndex(getIndex-1);
        setIndex(getIndex-1);
        setBackgroundColor(colors[getIndex-1]);
        setInfo(info[ getIndex-1]);
       }
      }

     const showNext=()=>
     {
       if(getIndex<colors.length-1){
          setIndex(getIndex+1);
          setIndex(getIndex+1);
          setBackgroundColor(colors[getIndex+1]);
          setInfo(info[ getIndex+1]);
       }
     }


    
 
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
        <Buttonttw bclr='white' clr='black' bordercolor='black'>Find out the best for me?</Buttonttw>*/}
        <Buttonttw 
          backgroundColor='#F7E700' 
          color='black' 
          bordercolor='#F7E700'  
          onClick={showNext}
           >Next
        </Buttonttw> 
        <Buttonttw 
           backgroundColor='#F7E700' 
          color='black' 
          onClick={showPrev}
          bordercolor='#F7E700'  
           >Prev
           </Buttonttw> 
          {/*}
        <Buttonttw bclr='#F7E700' clr='black' bordercolor='#F7E700' bradius='15px'  >Inspire me</Buttonttw>
        <Buttonttw bclr='black' clr='white' bordercolor='white'   >Itenary</Buttonttw>
        <Buttonttw bclr='white' clr='black' bordercolor='#F7E700' bradius='15px'   >Itenary</Buttonttw> */}
        {/* <Styledbutton
        alt={gettoggle.togglestate}
         onClick={togglename} >Set Name
        
        </Styledbutton> */}
        {/* {persons} */}
        < Styleddiv draggable='true' bclr={getBackgroundColor} onTouchStart={swipeStart} onTouchMove={swipeEnd}> {getInfo}  </ Styleddiv>
      </header>
     
    </div>

    // using custom tag Person
   
  //  React.createElement('div',{className:'App-header'},React.createElement('h1',null,'hey lets test createlemet react'))
  )
}



export default App;
