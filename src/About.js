import jake from "./images/jake.jpg";
import "./About.css";
import Modal from "react-modal";
import React from "react";

function About() {
  return (
    <div className="about-section">
      <img src={jake} className="card-img" />
      <p>Hi! My name is Jake Saterlay and I am a programmer from Norwich.</p>
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
      <a href="/">Home</a>
    </div>
  );
}

export default About;
