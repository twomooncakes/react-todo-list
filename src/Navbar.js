import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          React Router
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto'>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
            <NavLink className='nav-link' to='/about'>
              About
            </NavLink>
            <NavLink className='nav-link' to='/contact'>
              Contact
            </NavLink>
            <NavLink className='nav-link' to='/posts'>
              Posts
            </NavLink>
            <NavLink className='nav-link' to='/todos'>
              Todos Page
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
