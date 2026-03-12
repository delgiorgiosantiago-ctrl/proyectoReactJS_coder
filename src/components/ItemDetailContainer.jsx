import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {

  const { itemId } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {

    const productRef = doc(db, "products", itemId)

    getDoc(productRef)
      .then((snapshot) => {

        if (snapshot.exists()) {
          setItem({
            id: snapshot.id,
            ...snapshot.data()
          })
        }

      })

  }, [itemId])

  if (!item) return <p>Cargando detalle...</p>

  return <ItemDetail item={item} />
}

export default ItemDetailContainer