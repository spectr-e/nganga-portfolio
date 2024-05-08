import { useEffect, useState } from 'react'

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
        <ul className=''>
          {filtered.map((project) => (
            <li className='' key={project.id}>
              <a href='#' className=''>
                <figure className=''>
                  <img src={project.img} alt='project snapshot' width='80' />
                </figure>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Projects
