import './index.css'

const Footer = () => (
  <nav className="footer-header">
    <ul className="foot-menu">
      <li>
        <a href="https://www.linkedin.com/in/deepikaa-s/">
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
            alt="Linked In"
          />
        </a>
      </li>
      <li>
        <a href="https://github.com/deepikaa5196">
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
            alt="Git Hub"
          />
        </a>
      </li>
      <li>
        <a href="mailto:deepikaakanchinathan@gmail.com">
          <img
            className="social-network-img"
            src="https://res.cloudinary.com/dbkajdnpp/image/upload/v1694504901/gmail_5968534_zyfojh.png"
            alt="Gmail"
          />
        </a>
      </li>
    </ul>
  </nav>
)

export default Footer
