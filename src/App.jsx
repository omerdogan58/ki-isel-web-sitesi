import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>HI! I'm Almila.</h1>
        <p>I'm a full-stack developer. I can craft solid and scalable frontend products.</p>
        <button onClick={() => window.location.href = 'mailto:pzstamales@gmail.com'}>Invite me to join your team</button>
      </header>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JAVASCRIPT</li>
          <li>REACT</li>
          <li>REDUX</li>
          <li>NODE</li>
          <li>VS CODE</li>
          <li>FISMA</li>
        </ul>
      </section>

      <section className="profile">
        <h2>Profile</h2>
        <div className="basic-info">
          <h3>Basic Information</h3>
          <p>Dodjam tarihi: 24.03.1998</p>
        </div>
        <div className="about-me">
          <h3>About me</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vivatum aut, odit laborum aliquam voluptatum nisi mollitia.</p>
        </div>
        <div className="education">
          <h3>Egitim Durumu</h3>
          <p>Hacettepe Univ. Blyde / Lisana, 2016</p>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Random Jokes</h3>
          <p>Are you bored? Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <button>View on Github</button>
          <button>Go to app</button>
        </div>
        <div className="project">
          <h3>Personal Blog</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <button>View on Github</button>
          <button>Go to app</button>
        </div>
      </section>

      <footer className="footer">
        <p>Let's work together on your next product.</p>
        <div className="social-links">
          <a href="https://github.com">Github</a>
          <a href="https://linkedin.com">Linkedin</a>
          <a href="mailto:pzstamales@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;