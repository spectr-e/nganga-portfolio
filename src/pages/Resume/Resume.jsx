import { FaBookReader } from 'react-icons/fa'
import Timeline from './Timeline'

const Resume = () => {
  return (
    <section className=''>
      <header className=''>
        <h2 className='h2 article-title'>My Resume</h2>
      </header>
      <div className='timeline'>
        {/* title */}
        <div className='title-wrapper'>
          {/* icon */}
          <div className='icon-box'>
            <FaBookReader />
          </div>
          {/* text */}
          <h3 className='h3'>Education</h3>
        </div>

        <ol className='timeline-list'>
          <Timeline />
        </ol>
      </div>
    </section>
  )
}

export default Resume
