import React from 'react';
import Intro from './Intro';
import Portfolio from './Portfolio';

function App() {
    const [portfolio,setPortfolio] = React.useState(false)
    return (
    !portfolio ? <Intro setPortfolio={setPortfolio}/>:<Portfolio setPortfolio={setPortfolio}/>    
 );
}

export default App;
