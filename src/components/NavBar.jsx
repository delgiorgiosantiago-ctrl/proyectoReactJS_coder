import CartWidget from './CartWidget'
import logo from '../assets/roma-street-logo.svg'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-3 shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
            <a className="navbar-brand d-flex align-items-center gap-2 m-0" href="#">
                <img src={logo} alt="ROMA Street" height="48" />
            </a>

        
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
                    <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Remeras</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Zapatillas</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Accesorios</a></li>

                </ul>

                <div className="d-flex justify-content-end flex-grow-1">
                    <CartWidget />
                </div>
            </div>

        </div>
    </nav>
  )
}
