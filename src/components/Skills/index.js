import SkillsCard from '../SkillsCard'

import './index.css'

const skillsList = [
  {
    id: 1,
    imgUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-html-img.png',
    certificationUrl:
      'https://certificates.ccbp.in/intensive/static-website?id=HXKIXOJRDU',
  },

  {
    id: 2,
    imgUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-css-img.png',
    certificationUrl:
      'https://certificates.ccbp.in/intensive/flexbox?id=MTJVSGRNYO',
  },

  {
    id: 3,
    imgUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-bootstrap-img.png',
    certificationUrl:
      'https://certificates.ccbp.in/intensive/responsive-website?id=AZQALDYZNN',
  },
  {
    id: 4,
    imgUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-js-img.png',
    certificationUrl:
      'https://certificates.ccbp.in/intensive/dynamic-web-application?id=YHDBSNZEWX',
  },
  {
    id: 5,
    imgUrl:
      'https://cdn.iconscout.com/icon/free/png-512/free-react-4-1175110.png?f=avif&w=256',
    certificationUrl:
      'https://certificates.ccbp.in/intensive/react-js?id=ZENYIVFMCR',
  },
  {
    id: 6,
    imgUrl:
      'http://drive.google.com/uc?export=view&id=17Y6-tnAOXctwQc-E5gtn9Q-_pv64DYtU',
    certificationUrl:
      'https://certificates.ccbp.in/intensive/introduction-to-databases?id=DRLFQHUZXH',
  },
  {
    id: 7,
    imgUrl:
      'https://cdn.iconscout.com/icon/free/png-512/free-python-3521655-2945099.png?f=avif&w=256',
    certificationUrl:
      'https://certificates.ccbp.in/intensive/programming-foundations?id=IONADJTZKA',
  },
  {
    id: 8,
    imgUrl:
      'https://cdn.iconscout.com/icon/free/png-512/free-git-17-1175218.png?f=avif&w=256',
    certificationUrl:
      'https://certificates.ccbp.in/intensive/developer-foundations?id=LUZQEXSOXN',
  },
  {
    id: 9,
    imgUrl:
      'https://cdn.iconscout.com/icon/free/png-512/free-node-js-3-1174937.png?f=avif&w=256',
    certificationUrl: '',
  },
  {
    id: 10,
    imgUrl:
      'https://cdn.iconscout.com/icon/free/png-512/free-mongodb-226029.png?f=avif&w=256',
    certificationUrl: '',
  },
]

const Skills = () => (
  <div>
    <h1 className="skills-heading">Skills and Certifications</h1>
    <ul className="skills-container">
      {skillsList.map(eachSkill => (
        <SkillsCard skillsDetails={eachSkill} key={eachSkill.id} />
      ))}
    </ul>
  </div>
)

export default Skills
