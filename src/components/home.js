import React from 'react'


export default class Home extends React.Component {

  render(){

    return (
      <div className="container">
        <div>
          <h1>Welcome to Competitive Programming London</h1>
          <p>Competitive programming is a mind sport that combines 
          programming and mathematics. It is a very efficient way 
          to improve algorithmic thinking and data structures 
          for programmers. Advanced Competitive programmers are 
          able to solve difficult problems in minutes -- 
          which would take most software engineers hours 
          (if they are able to solve them at all).</p>
        </div>
        <div>
          <h2>Why Join Us?</h2>
          <ul>
            <li><span className="bold">Interview Prep</span> - Competitive programmers are able to ace programming interviews at tech giants like Google, Amazon and Netflix. One of the organisers works at Amazon.</li>
            <li><span className="bold">Master your programming language</span> - The more code you write the more you are able to discover about the building blocks of your language. You will also discover some tips and tricks to juice out the most efficiency from the language of your choice.</li>
            <li><span className="bold">Improve Mathematical thinking</span> - Mathematics is the language of logic, and the ability to read problem statements and understand them will also help you with mathematical thinking and logic. Furthermore, convincing yourself that . You will also improve in heuristics and computational complexity, which is a very useful asset to have whether you are a software engineer or a mathematician.</li>
          </ul>
        </div>
        <div>
          <h2>Who should join?</h2>
          <p>We believe that competitive programming should be accessible to anyone. All you need to know is basic knowledge of a programming knowledge and an eagerness to learn. We will provide the material and a supportive environment for you</p>
        </div>
        <div>
          <h2>Next Events</h2>
          <p>We organise and announce our events on meetup.com</p>
          <p>Our next event will take place in WeWork, on 3.1.20</p>
          <p>Make sure you save your spot! RSVP HERE</p>
        </div>
        <div>
          <h2>Our team</h2>
          <h3>Mo Habib - Founder and Organiser</h3>
          <p>Bio</p> 
          <h3>Daniel H Cohen - Website</h3>
          <p>Bio</p> 
        </div>
        <div>
          <h2>Sponsors</h2>
          <p>We want to thank our generous sponsers who host us in their offices and help us maintain this important meet up</p>
          <img src="https://i.imgur.com/ohvRyvK.png"></img>
          <p>If you want to help sharping the minds of developers in London, we are looking for sponsors to host us and to help us fund the events</p>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>Want to organise in other cities? Got questions about our upcoming events? Contact us on MoHabib@gmail.com </p>
        </div>
        <footer>
          <p>&copy;  Competitive Programming LDN</p>
        </footer>
      </div>

    )
  }
}

