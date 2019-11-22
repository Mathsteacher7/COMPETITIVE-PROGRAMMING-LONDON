import React from 'react'
import axios from 'axios'
import ImgSlider from './imgSlider'


export default class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {
        venue: ''
      } 
    }
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.meetup.com/London-Competitive-Programming/')
      .then(res => {
        const event = res.data.next_event.id
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.meetup.com/London-Competitive-Programming/events/${event}`)
          .then(nextEvent => {
            this.setState({data: nextEvent.data})
          })

      } )
  }

  render(){
    return (
      <div className="container">
        <div className="welcome">
          <h1>Welcome to Competitive Programming London</h1>
          <div className="slider">
            <ImgSlider />
          </div>
          <p>Competitive programming is a mind sport that combines 
          programming and mathematics. It is a very efficient way 
          to improve algorithmic thinking and data structures 
          for programmers. Advanced Competitive programmers are 
          able to solve difficult problems in minutes -- 
          which would take most software engineers hours 
          (if they are able to solve them at all).</p>
        </div>
        <div className="imgBetween">
          <img src="https://i.imgur.com/fCH9orZ.jpg"></img>
        </div>
        <div className="join">
          <h2>Why Join Us?</h2>
          <ul>
            <li><span className="bold">Interview Prep</span> - Competitive programmers are able to ace programming interviews at tech giants like Google, Amazon and Netflix. One of the organisers works at Amazon.</li>
            <li><span className="bold">Master your programming language</span> - The more code you write the more you are able to discover about the building blocks of your language. You will also discover some tips and tricks to juice out the most efficiency from the language of your choice.</li>
            <li><span className="bold">Improve Mathematical thinking</span> - Mathematics is the language of logic, and the ability to read problem statements and understand them will also help you with mathematical thinking and logic. Furthermore, convincing yourself that . You will also improve in heuristics and computational complexity, which is a very useful asset to have whether you are a software engineer or a mathematician.</li>
          </ul>
        </div>
        <div className="who">
          <h2>Who should join?</h2>
          <p>We believe that competitive programming should be accessible to anyone. All you need to know is basic knowledge of a programming knowledge and an eagerness to learn. We will provide the material and a supportive environment for you.</p>
        </div>
        <div className="events">
          <h2>Next Events</h2>
          <p>We organise and announce our events on <a href="https://www.meetup.com/London-Competitive-Programming/">meetup.com</a></p>
          <p>Our next event will take place in {this.state.data.venue.name}, on {this.state.data.local_date}</p>
          <p>For more details and to save your spot, <a href={this.state.data.link} target="_blank" rel="noopener noreferrer">RSVP HERE</a></p>
        </div>
        <div className="team">
          <h2>Our team</h2>
          <div className="ourTeam">
            <div className="teamMemebr">
          
              <h3>Mo Habib - Founder and Organiser</h3>
              <p>Software Development Engineer at Amazon Prime Video</p>
              <div className="links">        
                <a href="https://www.linkedin.com/in/mohamed-m-habib/" target="_blank" rel="noopener noreferrer">
                  <img src="https://i.imgur.com/onxmBOM.png" />
                </a>
                <a href="http://github.com/motatoes" target="_blank" rel="noopener noreferrer">
                  <img src="https://i.imgur.com/9lTlgcy.png"/>
                </a>
              </div>
            </div>
            <div className="teamMemebr">
              <h3>Daniel H Cohen - Website</h3>
              <p>Front End Engineer at Wunderman Thompson Commerce</p>
              <div className="links">        
                <a href="http://www.linkedin.com/in/daniel-h-cohen" target="_blank" rel="noopener noreferrer">
                  <img src="https://i.imgur.com/onxmBOM.png" />
                </a>
                <a href="http://github.com/Mathsteacher7" target="_blank" rel="noopener noreferrer">
                  <img src="https://i.imgur.com/9lTlgcy.png"/>
                </a>
              </div>
            </div>
          </div>
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
          <p> &copy;  Competitive Programming LDN</p>
        </footer>
      </div>

    )
  }
}

