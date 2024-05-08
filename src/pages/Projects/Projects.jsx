import { useEffect, useState } from 'react'

const Projects = () => {
  // import projects data
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
  }, [])

  return (
    <section className=''>
      <header className=''>
        <h2 className='h2 article-title'>Projects</h2>
      </header>

      {/* Filter Buttons */}
      <ul className=''></ul>
    </section>
  )
}

export default Projects
