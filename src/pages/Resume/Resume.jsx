import { FaBookReader } from 'react-icons/fa'
import Timeline from './Timeline'
import { BiSolidBookmark } from 'react-icons/bi'
import Skill from './Skill'

const Resume = () => {
  return (
    <section className=''>
      <header className=''>
        <h2 className='h2 article-title'>My Resume</h2>
      </header>

      {/* Education Section */}
      <div className='timeline'>
        <div className='title-wrapper'>
          <div className='icon-box'>
            <FaBookReader />
          </div>
          <h3 className='h3'>Education</h3>
        </div>
        {/* details */}
        <ol className='timeline-list'>
          <Timeline
            title='University of Nairobi'
            date={'2020 - 2024'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quasi esse, nulla mollitia quod expedita eveniet adipisci labore fugit? Excepturi atque quasi dicta. Sed fugit, saepe ipsa quo eligendi corporis?'
            }
          />
          <Timeline
            title='University of Nairobi'
            date={'2020 - 2024'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quasi esse, nulla mollitia quod expedita eveniet adipisci labore fugit? Excepturi atque quasi dicta. Sed fugit, saepe ipsa quo eligendi corporis?'
            }
          />
          <Timeline
            title='University of Nairobi'
            date={'2020 - 2024'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quasi esse, nulla mollitia quod expedita eveniet adipisci labore fugit? Excepturi atque quasi dicta. Sed fugit, saepe ipsa quo eligendi corporis?'
            }
          />
        </ol>
      </div>

      {/* Experience Section */}
      <div className='timeline'>
        <div className='title-wrapper'>
          <div className='icon-box'>
            <BiSolidBookmark />
          </div>
          <h3 className='h3'>Experience</h3>
        </div>
        {/* details */}
        <ol className='timeline-list'>
          <Timeline
            title='University of Nairobi'
            date={'2020 - 2024'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quasi esse, nulla mollitia quod expedita eveniet adipisci labore fugit? Excepturi atque quasi dicta. Sed fugit, saepe ipsa quo eligendi corporis?'
            }
          />
          <Timeline
            title='University of Nairobi'
            date={'2020 - 2024'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quasi esse, nulla mollitia quod expedita eveniet adipisci labore fugit? Excepturi atque quasi dicta. Sed fugit, saepe ipsa quo eligendi corporis?'
            }
          />
          <Timeline
            title='University of Nairobi'
            date={'2020 - 2024'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quasi esse, nulla mollitia quod expedita eveniet adipisci labore fugit? Excepturi atque quasi dicta. Sed fugit, saepe ipsa quo eligendi corporis?'
            }
          />
        </ol>
      </div>

      {/* Skills Section */}
      <div className='skill'>
        <h3 className='skills-title h3'>My Skills</h3>
        <ul className='skills-list content-card'>
          <Skill title={'Figma'} value={60} />
          <Skill title={'Adobe Illustrator'} value={50} />
          <Skill title={'React JS'} value={80} />
          <Skill title={'Next JS'} value={40} />
          <Skill title={'TypeScript'} value={50} />
          <Skill title={'Ruby on Rails'} value={80} />
          <Skill title={'Node JS'} value={70} />
        </ul>
      </div>
    </section>
  )
}

export default Resume
