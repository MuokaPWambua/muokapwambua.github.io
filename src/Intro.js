import React from 'react';
import './Intro.css';

const Intro = ({setPortfolio})=> {
    return(
    <div className="App">
    <div className='container'>
        <h1 align="center">Hi 👋, I'm Patrick Muoka Wambua</h1>
        <p align='center'>A hands on software engineer, front-end heavy and back-end. view portfolio <br/> 👇 <br/> </p>
        <center>
        <button style={{align:'center',padding:'1', width:'35%', backgroundColor:'aqua'}} 
        onClick={()=>setPortfolio(true)}> My Portfolio </button></center>
        <br/>
        <h3 align="center">A passionate JavaScript|Python developer and Data Scientist 👨‍💻 😎  check out my repos 
        <a href='https://github.com/MuokaPWambua' target='_blank' rel="noreferrer"> Github</a></h3>
    </div>
    </div>
    )
}

export default Intro;
