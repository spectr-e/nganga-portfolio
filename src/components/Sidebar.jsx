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

        {/* 1. email contact */}
        <li className='contact-item'>
          {/* icon */}
          <div className='icon-box'>
            <GiMailbox />
          </div>
          {/* address */}
          <div className='contact-info'>
            <p className='contact-title'>Email</p>
            <a href='mailto:business.josia@gmail.com' className='contact-link'>
              business.josia@gmail.com
            </a>
          </div>
        </li>

        {/* 2. phone contact */}
        <li className='contact-item'>
          {/* icon */}
          <div className='icon-box'>
            <GiPhone />
          </div>
          {/* number */}
          <div className='contact-info'>
            <p className='contact-title'>Phone</p>
            <a href='tel:+254736972910' className='contact-link'>
              +254 (736) 972-910
            </a>
          </div>
        </li>
      </ul>
    </div>
  </aside>
)

export default Sidebar
