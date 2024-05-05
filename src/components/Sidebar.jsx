import { GiClawSlashes, GiMailbox } from 'react-icons/gi'
import { josiah } from '../assets'
const Sidebar = () => (
  <aside className='sidebar'>
    <div className='sidebar-info'>
      {/* josiah */}
      <figure className='avatar-box'>
        <img src={josiah} alt='josiah' width={120} />
      </figure>
      {/* name & title */}
      <div className='info-content'>
        <h1 className='name'>Josiah Nganga</h1>
        <p className='title'>Software Engineer</p>
      </div>
      {/* click to show contact */}
      <button className='info_more-btn'>
        <span>Show Contacts</span>
        <GiClawSlashes />
      </button>
      {/* contact info */}
      <div className='sidebar-info_more'>
        <hr className='separator2' />
        <ul className='contacts-list'>
          <li className='contact-item'>
            {/* email icon */}
            <div className='icon-box'>
              <GiMailbox />
            </div>
            {/* email contact */}
            <div className='contact-info'>
              <p className='contact-title'>Email</p>
              <a
                href='mailto:business.josia@gmail.com'
                className='contact-link'
              >
                business.josia@gmail.com
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </aside>
)

export default Sidebar
