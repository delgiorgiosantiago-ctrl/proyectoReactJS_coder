import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'
import logo from '../assets/roma-street-logo.svg'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-3 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">

        {/* LOGO -> HOME */}
        <Link className="navbar-brand d-flex align-items-center gap-2 m-0" to="/">
          <img src={logo} alt="ROMA Street" height="48" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#romaNavbar"
          aria-controls="romaNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="romaNavbar">
          <ul className="navbar-nav mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Inicio
              </NavLink>
            </li>

            {/* categoría: remeras */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/remeras">
                Remeras
              </NavLink>
            </li>

            {/* categoría: zapatillas */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/zapatillas">
                Zapatillas
              </NavLink>
            </li>

            {/* categoría: accesorios */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/accesorios">
                Accesorios
              </NavLink>
            </li>

          </ul>

          {/* carrito a la derecha */}
          <div className="d-flex justify-content-end flex-grow-1 pe-3">
            <CartWidget />
          </div>
        </div>

      </div>
    </nav>
  )
}
