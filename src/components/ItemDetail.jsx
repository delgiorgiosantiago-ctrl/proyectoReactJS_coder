import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { toast } from "react-toastify"
import ItemCount from './ItemCount'
import SizeSelector from './SizeSelector'

function ItemDetail({ item }) {

  const [selectedSize, setSelectedSize] = useState('')
  const { addItem } = useContext(CartContext)

  const handleAddToCart = (quantity) => {

    if (!selectedSize) {
      toast.error("Debes seleccionar un talle")
      return
    }

    const productToAdd = {
      ...item,
      size: selectedSize
    }

    addItem(productToAdd, quantity)

    toast.success("Producto agregado al carrito")
  }

  return (
    <div className="card">

      <img src={item.image} className="card-img-top" alt={item.title} />

      <div className="card-body">
        <h3>{item.title}</h3>
        <p className="fw-bold">${item.price}</p>

        <p>{item.description}</p>

        <SizeSelector
          sizes={item.sizes}
          selectedSize={selectedSize}
          onSelect={setSelectedSize}
        />

        <ItemCount
          stock={item.stock}
          onAdd={handleAddToCart}
        />

      </div>
    </div>
  )
}

export default ItemDetail