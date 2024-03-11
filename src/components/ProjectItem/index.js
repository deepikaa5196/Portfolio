import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {projectId, imageURL, description, title, url} = projectDetails
  return (
    <>
      <li className="project-item-container">
        <img
          className="project-item-image"
          src={imageURL}
          alt={`project-item ${projectId}`}
        />

        <div className="project-item-details-container">
          <h1 className="project-item-title">{title}</h1>
          <p className="project-item-description">{description}</p>
          <a href={url}>
            <button type="button" className="preview-btn">
              Click here
            </button>
          </a>
        </div>
      </li>
    </>
  )
}

export default ProjectItem
