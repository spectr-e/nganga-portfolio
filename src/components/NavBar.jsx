import { NavLink } from 'react-router-dom'

const NavBar = () => (
  <nav className='navbar'>
    <ul className='navbar-list'>
      <li className='navbar-item'>
        <NavLink to={'/'} className={'navbar-link'}>
          About
        </NavLink>
      </li>
      <li className='navbar-item'>
        <NavLink to={'/resume'} className={'navbar-link'}>
          Resume
        </NavLink>
      </li>
      <li className='navbar-item'>
        <NavLink to={'/projects'} className={'navbar-link'}>
          Projects
        </NavLink>
      </li>
      <li className='navbar-item'>
        <NavLink to={'/blogs'} className={'navbar-link'}>
          Blog
        </NavLink>
      </li>
      <li className='navbar-item'>
        <NavLink to={'/contacts'} className={'navbar-link'}>
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default NavBar
