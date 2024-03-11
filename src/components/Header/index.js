import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-mobile-logo-container">
        <Link to="/">
          <img
            className="website-logo"
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/letter-d-4394469-3642892.png?f=avif&w=256"
            alt="website logo"
          />
        </Link>

        <button type="button" className="nav-mobile-btn">
          <a href="../resume/Deepikaa_S resume.pdf" download>
            <img
              src="https://res.cloudinary.com/dbkajdnpp/image/upload/v1694505559/curriculum-vitae_744418_x6sag5.png"
              alt="nav resume"
              className="nav-bar-img"
            />
          </a>
        </button>
      </div>

      <div className="nav-bar-large-container">
        <Link to="/">
          <img
            className="website-logo"
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/letter-d-4394469-3642892.png?f=avif&w=256"
            alt="website logo"
          />
        </Link>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <a href="../resume/Deepikaa_S.pdf" download>
          <strong>
            <button type="button" className="resume-desktop-btn">
              Resume
            </button>
          </strong>
        </a>
      </div>
    </div>
    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <li className="nav-menu-item-mobile">
          <Link to="/" className="nav-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
              alt="nav home"
              className="nav-bar-img"
            />
          </Link>
        </li>

        <li className="nav-menu-item-mobile">
          <Link to="/about" className="nav-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
              alt="about"
              className="nav-bar-img"
            />
          </Link>
        </li>
        <li className="nav-menu-item-mobile">
          <Link to="/projects" className="nav-link">
            <img
              src="https://res.cloudinary.com/dbkajdnpp/image/upload/v1694504901/project_qu4fim.png"
              alt="nav projects"
              className="nav-bar-img"
            />
          </Link>
        </li>
        <li className="nav-menu-item-mobile">
          <Link to="/contact" className="nav-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/contact-blog-img.png"
              alt="nav contact"
              className="nav-bar-img"
            />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
