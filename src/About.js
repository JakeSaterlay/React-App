import jake from "./images/jake.jpg";
import "./About.css";
import Modal from "react-modal";
import React from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function About() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="about-section">
      <img src={jake} className="card-img" />
      <p>
        Hi! My name is Jake Saterlay and I am a Software Developer from Norwich.
      </p>
      <p>
        I have experience in C#, .NET Core, HTML, CSS, JavaScript and ReactJS
      </p>
      <div>
        <p>Certifications:</p>
        <a
          href="https://jakesaterlay.com/certificates/Jake-react-cert.pdf"
          target="_blank"
        >
          Mastering React
        </a>
      </div>
      <a href="#" onClick={openModal}>
        Projects
      </a>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>My Projects</div>
        <div>League of Legends Champion Randomiser, built in ReactJS</div>
        <div>Harry Potter API built in Node and Express</div>
        <div>Football API built in C#, .NET Core and MongoDB</div>
        <div>Front end website for my sister's business, built in ReactJS</div>
      </Modal>
      <a href="/">Home</a>
    </div>
  );
}

export default About;
