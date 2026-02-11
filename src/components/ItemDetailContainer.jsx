import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../data/products'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const { itemId } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    getProductById(itemId).then(setItem)
  }, [itemId])

  if (!item) return <p>Cargando detalle...</p>

  return <ItemDetail item={item} />
}

export default ItemDetailContainer
