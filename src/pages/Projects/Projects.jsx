import { useEffect, useState } from 'react'
import Project from './Project'

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

  const handleFilter = (category) => {
    setActiveCat(category)
    if (category === 'All') {
      setFiltered(projects)
    } else {
      const filtered = projects.filter(
        (project) => project.category === category
      )
      setFiltered(filtered)
    }
  }

  return (
    <section>
      <header>
        <h2 className='h2 article-title'>Projects</h2>
      </header>

      {/* Filter Buttons */}
      <ul className='filter-list'>
        {['All', 'Web Design', 'Applications', 'Web Development'].map(
          (category, index) => (
            <li className='filter-item' key={index}>
              <button
                onClick={() => handleFilter(category)}
                data-filter-btn
                className={category === activeCat ? 'active' : null}
              >
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
            <Project project={project} key={project.id} />
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Projects
