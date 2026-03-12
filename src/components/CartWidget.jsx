import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function CartWidget() {

  const { getTotalItems } = useContext(CartContext)

  const totalItems = getTotalItems()

  return (
    <Link to="/cart" className="position-relative text-white fs-4">

      <i className="bi bi-cart3"></i>

      {totalItems > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalItems}
        </span>
      )}

    </Link>
  )
}