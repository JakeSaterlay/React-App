import jake from './images/jake.jpg';
import './About.css';

function About() {
  return (
    <div>
      <h1>HELLOOOOO</h1>
      <img src={jake} className="card-img" />
      <p>I am Jake from Norwich</p>
      <a href="/">Home</a>
    </div>
  );
}

export default About;
