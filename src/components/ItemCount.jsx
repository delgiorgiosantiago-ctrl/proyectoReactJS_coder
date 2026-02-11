import { useState } from 'react'

function ItemCount({ stock }) {
  const [count, setCount] = useState(1)

  return (
    <div>
      <button onClick={() => setCount(count > 1 ? count - 1 : count)}>
        -
      </button>

      <span className="mx-3">{count}</span>

      <button onClick={() => setCount(count < stock ? count + 1 : count)}>
        +
      </button>

      <button className="btn btn-dark ms-3">
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
