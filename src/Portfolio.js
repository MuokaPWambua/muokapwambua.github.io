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
      <p>Am hands on software engineer and a technical writer 
         <a href='https://medium.com/@muokapwambua' target='_blank' rel="noreferrer"> Articles </a>.
         <a href='https://github.com/MuokaPWambua' target='_blank' rel="noreferrer"> Github Projects</a>
      </p> 
      <div id={'p-animate'}></div>
      </div>
   </div>
   <div className={'r-me'}>
      <h2 align={'center'}> How To Reach Me </h2> 
      <p align='center'>Ask me anything?</p>  
      <div align='center'>
         <a href='https://www.linkedin.com/in/patrick-muoka-187890152/' target='_blank' rel="noreferrer">
         <img width={60} height={60} src={li} alt='linkedin' className='mx-1'/>
         </a>
         <a href='https://twitter.com/muokapwambua' target='_blank' rel="noreferrer">
         <img width={60} height={60} src={twitter} alt='twitter' className='mx-1'/>
         </a>
         <a href="https://api.whatsapp.com/send?phone=+254795826354" target='_blank' rel="noreferrer">
         <img width={60} height={60} src={whatsapp} alt='whatsapp' className='mx-1'/>
         </a>
         <a href="mailto:muokapwambua@gmail.com?subject=subject" target='_blank' rel="noreferrer">
         <img width={60} height={60} src={gmail} alt='gmail' className='mx-1'/>
         </a>
      </div>
      <p align='center' className='lead my-3' onClick={()=>setPortfolio(false)}><u>Back</u></p>
   </div>
   </>    
)

}
