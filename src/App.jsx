import { Outlet } from 'react-router-dom'
import './App.css'
import { Sidebar } from './components'

const App = () => (
  <div>
    <Sidebar />
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
