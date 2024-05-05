import { GiClawSlashes } from 'react-icons/gi'
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
    </div>
  </aside>
)

export default Sidebar
