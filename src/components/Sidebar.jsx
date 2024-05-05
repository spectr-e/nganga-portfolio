import { josiah } from '../assets'
const Sidebar = () => (
  <aside className='sidebar'>
    <div className='sidebar-info'>
      <figure className='avatar-box'>
        <img src={josiah} alt='josiah' width={120} />
      </figure>
      <div className='info-content'>
        <h1 className='name'>Josiah Nganga</h1>
        <p className='title'>Software Engineer</p>
      </div>
    </div>
  </aside>
)

export default Sidebar
