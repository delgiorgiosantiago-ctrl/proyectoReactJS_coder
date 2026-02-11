import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="text-center">
      <h1>404</h1>
      <Link to="/" className="btn btn-dark">
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound
