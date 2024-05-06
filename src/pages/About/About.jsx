import { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

const About = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('/services.json')
      .then((response) => response.json())
      .then((data) => setServices(data))
  }, [])

  return (
    <div className='about active'>
      {/* about me */}
      <header className=''>
        <h2 className='h2 article-title'>About Me</h2>
      </header>
      <section className='about-text'>
        <p className=''>
          I am a Creative Full Stack Software Engineer from Nairobi, Kenya
          working in web development and graphic design. I enjoy turning complex
          problems into simple, beautiful and intuitive digital systems.
        </p>
        <p className=''>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add a
          personal touch to your product and make sure that it is eye-catching
          and easy to use. My aim is to bring across your message and identity
          in the most creative way
        </p>
      </section>

      {/* my services */}
      <section className='service'>
        <h2 className='h3 service-title'>What I Do</h2>
        <ul className=''>
          {services.map((service, index) => (
            <ServiceCard data={service} key={index} />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default About
