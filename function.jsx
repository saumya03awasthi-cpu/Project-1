Header.js
import React from 'react';
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li> <a href="skills">skills</a></li>
          <li> <a href= "#contact"></a></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header ;
Hero.js
import React from 'react';
const Hero = ()=>{
return (
  <section id="hero">
    <h1> Welcome to my portfolio</h1>
    <p1> I am a [Your Profession]</p1>
  </section>
)
}
export default Hero;
Skills.js
import React from React;
const skills = () =>{
  return (
    <section id ="skills">
    <h2> skills</h2>
    <ul>
      <li> HTML/CSS</li>
      <li> JavaScript</li>
      <li>React</li>
    </ul>
</section>
  )
}

export default Skills;
Project.js
import React from 'react';
const Project =() => {
  return(
    <section id="project">
      <h2> Project</h2>
      <div className="project-card">
        <h3> Project 1</h3>
        <p> Lorem ipsum dolor sit amet,consetetur adipiscing elit.</p>
        <div className="project-card"></div>
        <h3> Project 2</h3>
        <p> Lorem ipsum dolor sit amet,consetetur adipiscing elit.</p>
        <div className="project-card"></div>
         <h3> Project 3</h3>
         <p> Lorem ipsum dolor sit amet,consetetur adipiscing elit.</p>
      </div>
    </section>
  )
}

export default Project;
Contact.js
import React from 'react'
const Contact =() =>{
  return(
    <section id="contact">
      <h2>Get in Touch</h2>
      <form>
        <input type="text" placeholder="Name"/>
        <input type="email"placeholder="Emial"/>
        <texarea placeholder="Message"/>
        <button type="submit">Send</button>
      </form>
    </section>
  )

}
export default Contact;
Footer.js
import React from 'react';
const Footer =() =>{
  return(
    <Footer>
      <p>&copy;2023 Your Name</p>
    </Footer>
  )
}
export default Footer;



