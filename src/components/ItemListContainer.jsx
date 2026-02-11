import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../data/products'
import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    const request = categoryId
      ? getProductsByCategory(categoryId)
      : getProducts()

    request
      .then((data) => setItems(data))
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
  <div className={`fade-wrapper ${loading ? "fade-out" : "fade-in"}`}>
    <h2 className="text-center mb-4 fw-bold">
      {categoryId
        ? `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Roma Street`
        : greeting}
    </h2>

    {loading ? (
      <p>Cargando productos...</p>
    ) : (
      <ItemList items={items} />
    )}
  </div>
)


}

export default ItemListContainer
