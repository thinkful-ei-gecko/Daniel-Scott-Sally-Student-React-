import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
  <div>
    <header>
      <h1>Sally Student</h1>
    </header>

    <main>
      <section>
        <h2>Contact information</h2>
        <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" width="200" height="300" alt="Sally's Headshot"/>
        <address>
        <a href="mailto:sallystudent@gmail.com">sallystudent@gmail.com</a>
        <a href="tel:5558675309">(555) 867-5309</a>
        </address>
      </section>
  
    <section>
      <h2>Employment Experience</h2>
      <h3>Google, Project Manager, 2015-2019</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <h3>IBM, Web Developer, 2010-2015</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </section>
    
    <section>
      <h2>Education</h2>
      <h3>North Carolina State University</h3>
      <p>Bachelor of Science, Biomechanical Engineering, class of 2009</p>
    </section>

    </main>
  </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('application-root'));