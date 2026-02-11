import { Link } from 'react-router-dom'

function ItemCard({ id, title, price, img }) {
  return (
    <div className="card h-100">
      <img src={img} className="card-img-top product-img" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5>{title}</h5>
        <p>${price}</p>

        <Link to={`/item/${id}`} className="btn btn-dark mt-auto">
          Ver detalle
        </Link>
      </div>
    </div>
  )
}

export default ItemCard
