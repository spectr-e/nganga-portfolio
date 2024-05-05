import { Outlet } from 'react-router-dom'
import './App.css'
import { NavBar, Sidebar } from './components'

const App = () => (
  <>
    <Sidebar />
    <div className='main-content'>
      <NavBar />
      <section
        style={{
          scrollBehavior: 'smooth',
        }}
      >
        <Outlet />
      </section>
    </div>
  </>
)

export default App
