import jake from './images/jake.jpg';
import './About.css';
import Modal from 'react-modal';
import React from 'react';

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

function About() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [state, setState] = React.useState({title: "apples"});
  const [counter, setCounterState] = React.useState({counter: 1});

  function changeTitle(){
    if(state.title == "apples"){
      setState({title: "oranges"})
    }
    else {
      setState({title: "apples"})
    }
  }

  function incrementCounter(){
      setCounterState({counter: counter.counter+=1})
  }

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
      <h1>{state.title}</h1>
      <h1>{counter.counter}</h1>
      <div>
        <button onClick={changeTitle}>Click to change title</button>
        <button onClick={incrementCounter}>add one</button>
      </div>
      <img src={jake} className="card-img" />
      <p>I am Jake from Norwich</p>
      <a href="/">Home</a>
       <div>
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
          </div>
    </div>
  );
}

export default About;
