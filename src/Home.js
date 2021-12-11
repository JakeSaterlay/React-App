import jake from './images/jake.jpg';
import './App.css';

function Home() {
  return (
      <div className="App">
        <div className="App-header">
          <img src={jake} className="App-logo" alt="logo" />
          <p>
            Jake Saterlay Portfolio
          </p>
          <div className="Links">
            <a href="https://github.com/JakeSaterlay" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/jake-saterlay/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div> 
  );
}

export default Home;
