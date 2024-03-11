// Write your JS code here
import Education from '../Education'
import Skills from '../Skills'
import './index.css'

const About = () => (
  <div className="about-container">
    <img
      src="https://res.cloudinary.com/dbkajdnpp/image/upload/v1694504901/4549495_zbysj3.jpg"
      alt="about"
      className="about-img"
    />
    <h1 className="about-heading">About Me</h1>
    <p className="about-paragraph-description">
      Greetings! I'm Deepikaa, a passionate Front-end Developer actively seeking
      new opportunities. I come from a diverse background, holding a BTech
      degree in Chemical Engineering. My training at NxtWave in MERN stack has
      honed my technical expertise, allowing me to create dynamic and engaging
      user interfaces. I am committed to continuous learning and thrive in
      dynamic, collaborative environments. Beyond my professional pursuits, I am
      a dedicated individual with a close-knit family of three, which fuels my
      drive for success.
    </p>

    <p className="about-heading">My Career and Education Journey</p>
    <Education />
    <Skills />
  </div>
)

export default About
