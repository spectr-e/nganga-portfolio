import { Outlet } from 'react-router-dom'
import './App.css'

const App = () => (
  <div>
    <p>Sidebar</p>
    <div className='main-content'>
      <nav>Navbar</nav>
      <section
        style={{
          scrollBehavior: 'smooth',
        }}
      >
        <Outlet />
      </section>
    </div>
  </div>
)

export default App
