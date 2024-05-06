import { useEffect, useState } from 'react'

const About = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('/services.json')
      .then((response) => response.json())
      .then((data) => setServices(data))
  }, [])

  return <div className='about active'></div>
}

export default About
