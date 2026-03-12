import { Link } from 'react-router-dom'

function ItemCard({ id, title, price, image }) {
  return (

    <Link
      to={`/item/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >

      <div className="card product-card h-100">

        <img
          src={image}
          className="card-img-top product-img"
          alt={title}
        />

        <div className="card-body d-flex flex-column">

          <h5>{title}</h5>

          <p>${price}</p>

        </div>

      </div>

    </Link>

  )
}

export default ItemCard