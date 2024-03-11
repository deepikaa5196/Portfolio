import './index.css'

const SkillsCard = props => {
  const {skillsDetails} = props
  const {imgUrl, certificationUrl} = skillsDetails

  return (
    <li className="skill-container">
      <a href={certificationUrl}>
        <img className="skill-img" src={imgUrl} alt="skill" />
      </a>
    </li>
  )
}

export default SkillsCard
