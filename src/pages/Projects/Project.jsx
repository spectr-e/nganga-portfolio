import { FaRegEye } from 'react-icons/fa'

const Project = ({ project }) => (
  <li
    className='project-item active'
    data-category={project.category}
    data-filter-item
  >
    <a href='#'>
      {/* project snapshots */}
      <figure className='project-img'>
        <div className='project-item-icon-box'>
          <FaRegEye />
        </div>
        <img src={project.image} alt='project snapshot' loading='lazy' />
      </figure>

      {/* project details */}
      <h3 className='project-title'>{project.title}</h3>
      <p className='project-category'>{project.category}</p>
    </a>
  </li>
)

export default Project
