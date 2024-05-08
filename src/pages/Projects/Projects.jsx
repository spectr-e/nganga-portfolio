import { useEffect, useState } from 'react'
import { FaRegEye } from 'react-icons/fa'

const Projects = () => {
  // import projects data
  const [projects, setProjects] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data)
        setFiltered(data)
      })
  }, [])

  const [activeCat, setActiveCat] = useState('All')

  return (
    <section className=''>
      <header className=''>
        <h2 className='h2 article-title'>Projects</h2>
      </header>

      {/* Filter Buttons */}
      <ul className='filter-list'>
        {['All', 'Web Design', 'Applications', 'Web Development'].map(
          (category, index) => (
            <li className='filter-item' key={index}>
              <button className={category === activeCat ? 'active' : null}>
                {category}
              </button>
            </li>
          )
        )}
      </ul>

      {/* projects */}
      <section className='projects'>
        <ul className='project-list'>
          {filtered.map((project) => (
            <li className='project-item active' key={project.id}>
              <a href='#'>
                {/* project snapshots */}
                <figure className='project-img'>
                  <div className='project-item-icon-box'>
                    <FaRegEye />
                  </div>
                  <img
                    src={project.image}
                    alt='project snapshot'
                    loading='lazy'
                  />
                </figure>

                {/* project details */}
                <h3 className='project-title'>{project.title}</h3>
                <p className='project-category'>{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Projects
