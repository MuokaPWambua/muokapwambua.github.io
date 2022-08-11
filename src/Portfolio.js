import React from 'react';
import './Portfolio.css'
import twitter from './twitter.png'
import gmail from './gmail.png'
import whatsapp from './whatsapp.png'
import li from './li.png'

export default function Portfolio ({setPortfolio}){
    return(
    <>
     <div className='p-bg'>
        <div>
         <h1>Portfolio</h1>
         <p>Am fully hands on software engineer, this are but some of my projects.</p> 
         <div id={'p-animate'}></div>
        </div>
     </div>
     <div className={'r-me'}>
         <h2 align={'center'}> How To Reach Me </h2> 
         <p align='center'>Ask me anything?</p>  
         <div align='center'>
            <img width={60} height={60} src={li} alt='linkedin' className='mx-1'/>
            <img width={60} height={60} src={twitter} alt='twitter' className='mx-1'/>
            <img width={60} height={60} src={whatsapp} alt='whatsapp' className='mx-1'/>
            <img width={60} height={60} src={gmail} alt='gmail' className='mx-1'/>
         </div>
        <p align='center' className='lead my-3' onClick={()=>setPortfolio(false)}><u>Back</u></p>
    </div>
    </>    
)

}
