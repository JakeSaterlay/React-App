import linkedin from './images/linkedin.png';
import github from './images/github.png';
import './App.css';

function Home() {
  return (

        <div>
          <p className="header-title">
            Jake Saterlay Portfolio
          </p>
          <div className="App-header">
            <div className="cards"> 
              <a className="card" href="https://github.com/JakeSaterlay" target="_blank">
                <div>
                  <img src={linkedin} className="card-img" />
                </div>
              </a>
              <a className="card" href="https://github.com/JakeSaterlay" target="_blank">
                <div>
                  <img src={github} className="card-img" />
                </div>
              </a>
            </div>
            <div className="Links">
              <a href="/about">ABOUT ME</a>
            </div>
          </div>
        </div>

  );
}

export default Home;
