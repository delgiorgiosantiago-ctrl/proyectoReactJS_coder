import { Link } from 'react-router-dom'

export default function CartWidget() {
  return (
    <Link to="/" className="position-relative text-white fs-4">
      <i className="bi bi-cart3"></i>

      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        3
      </span>
    </Link>
  )
}
