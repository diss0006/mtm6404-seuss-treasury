import { NavLink, Outlet } from 'react-router-dom'



function App() {
  return (
    <div className="app">
      <header className="site-header">
        <h1>Seuss Treasury</h1>
        <nav>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Books
          </NavLink>
          <NavLink to="/quotes" className={({ isActive }) => isActive ? 'active' : ''}>
            Quotes
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
