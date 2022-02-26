import linkedin from './images/linkedin.png';
import github from './images/github.png';
import Lottie from 'react-lottie';
import penguin from './images/penguin.json';
import './App.css';
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

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
  let subtitle;
  const [state, setState] = React.useState({title: "apples"});

  function changeTitle(){
    if(state.title == "apples"){
      setState({title: "oranges"})
    }
    else {
      setState({title: "apples"})
    }
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
        <div>
          {/* <h1>{state.title}</h1> */}
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
          {/* <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
              <button onClick={closeModal}>close</button>
              <div>I am a modal</div>
            </Modal>
          </div> */}
        </div>

  );
}

export default Home;
