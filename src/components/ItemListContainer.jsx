import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/firebase"
import ItemList from "./ItemList"

function ItemListContainer({ greeting }) {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {

    setLoading(true)

    const productsRef = collection(db, "products")

    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef

    getDocs(q)
      .then((snapshot) => {

        const products = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        setItems(products)

      })
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