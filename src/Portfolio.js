import React from 'react';
import './Portfolio.css'

export default function Portfolio (){
    return(
    <>
     <div className='p-bg'>
          <div style={{textAlign:'center'}} className='mt-2'>  
          <h1 align='center'>Portfolio</h1>
          <p align='center'>My sample projects built in reactjs and python for api .</p> 
          </div>
          <div id={'p-animate'} ></div>
     </div>
     <div className={'r-me'}>
         <h2 align={'center'}> How To Reach Me </h2> 
           <p align='center'>Ask me anything?</p>  
           <p align='center'>linkedin tiwter gmail whatsapp</p> 

    </div>
    </>    
)

}
