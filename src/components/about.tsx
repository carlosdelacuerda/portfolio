import * as React from 'react';

function AboutApp() {

  return (
    <div className='about-me'>
        <h1 className='title-section'>About me</h1>
        <p>
          Hi, my name is Carlos de la Cuerda. I'm a UX/UI Designer and Front End Developer.
        </p>
        <p>
          In the design side I have more than five years of experience with various types of products and performing all tasks related to design, from requirements gathering and user experience approaches to their delivery as final visuals and team and project management.
          In relation to the development side, I have spent the last three years focused on front-end programming and have previously worked, both in-house and freelance, as a web designer.
        </p>
        <p>
          I hope my skills fit with the job profile and that we can get to know each other.
        </p>
        <p>
          Best regards. <br />
          Carlos de la Cuerda.
        </p>
        <img className='signature' src="/images/firma.png" alt="sign" />
    </div>
  )
}

export default AboutApp;