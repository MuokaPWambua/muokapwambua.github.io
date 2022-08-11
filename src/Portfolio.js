import React from 'react';
import './Portfolio.css'
import twitter from './twitter.png'
import gmail from './gmail.png'
import whatsapp from './whatsapp.png'
import li from './li.png'

export default function Portfolio (){
    return(
    <>
     <div className='p-bg'>
          <div className='my-2'>  
            <h1>Portfolio</h1>
            <p>My sample projects built in reactjs(Frontend), python(Backend) and postgresql(database) .</p> 
          </div>
          <div id={'p-animate'}></div>
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
        <p align='center' className='lead my-3'><u>Back</u></p>
    </div>
    </>    
)

}
