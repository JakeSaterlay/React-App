import linkedin from './images/linkedin.png';
import github from './images/github.png';
import Lottie from 'react-lottie';
import penguin from './images/penguin.json';
import './App.css';
import React from 'react';




function lottieOptions(fileName) {
    return {
    loop: true,
    autoplay: true, 
    animationData: fileName,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    } 
  }
}

function Home() {

  return (
        <div>
          <p className="header-title">
            Jake Saterlay Portfolio
          </p>
          {/* <button onClick={changeTitle}>CLICK ME</button> */}
          <div className="App-header">
            <div className="welcome-content"> 
            <Lottie options={lottieOptions(penguin)}
              height={400}
              width={400}/>
              <div class="cards">
                <a className="card" href="https://www.linkedin.com/in/jake-saterlay/" target="_blank">
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
            </div>
            <div className="Links">
              <a href="/about">ABOUT ME</a>
            </div>
          </div>
        </div>

  );
}

export default Home;
