import React from 'react';
import './Intro.css';

const Intro = ({setPortfolio})=> {
    return(
    <div className="App">
    <div className='container'>
        <h1 align="center">Hi 👋, I'm Patrick Muoka Wambua</h1>
        <h3 className='lead' align="center" >A passionate JavaScript|Python developer and Data Scientist 👨‍💻 😎  check out my repos 
        <a href='https://github.com/MuokaPWambua' target='_blank' rel="noreferrer"> Github</a></h3>
        <br/>
        <center>
        <button style={{align:'center',padding:'1', width:'35%', backgroundColor:'aqua'}} 
        onClick={()=>setPortfolio(true)}> My Portfolio </button>
        </center>
    </div>
    </div>
    )
}

export default Intro;
