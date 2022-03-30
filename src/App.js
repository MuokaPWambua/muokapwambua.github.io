import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Intro from './Intro';
import Portfolio from './Portfolio';

function App() {
  return (
    <Router>
        <Routes>
	        <Route path='/' element={<Intro/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>    
   </Router>
  );
}

export default App;
