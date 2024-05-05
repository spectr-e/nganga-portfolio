import { GiAfrica, GiClawSlashes, GiMailbox, GiPhone } from 'react-icons/gi'
import { josiah } from '../assets'
import { FaLinkedin } from 'react-icons/fa'
const Sidebar = () => (
  <aside className='sidebar'>
    {/* introduction details */}
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
    </div>

    {/* contact details */}
    <div className='sidebar-info_more'>
      <hr className='separator2' />
      <ul className='contacts-list'>
        {/* 0. linkedin contact */}
        <li className='contact-item'>
          {/* linkedin icon */}
          <div className='icon-box'>
            <FaLinkedin />
          </div>
          {/* linkedin address */}
          <div className='contact-info'>
            <p className='contact-title'>Linkedin</p>
            <a
              href='https://www.linkedin.com/in/kamaujosia'
              className='contact-link'
            >
              in | kamaujosia
            </a>
          </div>
        </li>
      </ul>
    </div>
  </aside>
)

export default Sidebar
