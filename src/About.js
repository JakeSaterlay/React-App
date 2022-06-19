import jake from "./images/jake.jpg";
import "./About.css";
import Modal from "react-modal";
import React from "react";

function About() {
  return (
    <div className="about-section">
      <a href="/">Home</a>
      <img src={jake} className="card-img" />
      <p>Hi! My name is Jake Saterlay and I am a programmer from Norwich.</p>
      <p>
        I have experience in C#, .NET core, HTML, CSS, Javascript and I have
        completed a course in ReactJS.
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
    </div>
  );
}

export default About;
