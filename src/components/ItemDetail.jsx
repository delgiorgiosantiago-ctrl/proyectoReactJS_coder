import { useState } from 'react'
import ItemCount from './ItemCount'
import SizeSelector from './SizeSelector'

function ItemDetail({ item }) {
  const [selectedSize, setSelectedSize] = useState('')

  return (
    <div className="card">
      <img src={item.img} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h3>{item.title}</h3>
        <p className="fw-bold">${item.price}</p>

        <p>{item.description}</p>

        <SizeSelector
          sizes={item.sizes}
          selectedSize={selectedSize}
          onSelect={setSelectedSize}
        />

        <ItemCount stock={item.stock} />
      </div>
    </div>
  )
}

export default ItemDetail
