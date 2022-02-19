import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/> 
          <Route exact path="/about" element={<About/>}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
