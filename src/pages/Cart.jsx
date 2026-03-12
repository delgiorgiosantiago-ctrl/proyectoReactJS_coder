import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

function Cart() {

  const { cart, increaseItem, decreaseItem, removeItem, clearCart, getTotalPrice } = useContext(CartContext)
  const navigate = useNavigate()

  // Compra completa
  const handleBuy = () => {
    Swal.fire({
      icon: "success",
      title: "Compra realizada",
      text: "Su compra se realizó correctamente",
      timer: 2000,
      showConfirmButton: false,
      allowOutsideClick: false
    }).then(() => {
      clearCart()
      navigate("/")
    })
  }

  // Vaciar carrito
  const handleClearCart = () => {
    Swal.fire({
      icon: "info",
      title: "Carrito vacío",
      text: "Se vació el carrito correctamente",
      timer: 2000,
      showConfirmButton: false,
      allowOutsideClick: false
    }).then(() => {
      clearCart()
      navigate("/")
    })
  }

  // Mostrar mensaje si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div className="container text-center">
        <h2>Tu carrito está vacío 🛒</h2>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/")}
        >
          Ir a comprar
        </button>
      </div>
    )
  }

  return (
    <div className="container">
      <h2 className="mb-4">Carrito</h2>

      {cart.map(prod => (
        <div key={prod.id + prod.size} className="card mb-3 p-3">
          <div className="row align-items-center">

            <div className="col-md-2">
              <img src={prod.image} alt={prod.title} className="img-fluid" />
            </div>

            <div className="col-md-10">
              <h4>{prod.title}</h4>
              <p>Precio: ${prod.price}</p>
              <p>Talle: {prod.size}</p>

              <div className="d-flex align-items-center gap-3">

                {/* Botón restar: desactivado si quantity === 1 */}
                <button
                  className="btn btn-danger"
                  onClick={() => decreaseItem(prod.id, prod.size)}
                  disabled={prod.quantity === 1}
                >
                  -
                </button>

                <span>{prod.quantity}</span>

                <button
                  className="btn btn-success"
                  onClick={() => increaseItem(prod.id, prod.size, prod.stock)}
                >
                  +
                </button>

                {/* Botón eliminar con confirmación */}
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    Swal.fire({
                      icon: 'warning',
                      title: 'Eliminar producto',
                      text: '¿Seguro que querés eliminar este producto del carrito?',
                      showCancelButton: true,
                      confirmButtonText: 'Sí, eliminar',
                      cancelButtonText: 'Cancelar'
                    }).then(result => {
                      if (result.isConfirmed) {
                        removeItem(prod.id, prod.size)
                        Swal.fire({
                          icon: 'success',
                          title: 'Producto eliminado',
                          timer: 1500,
                          showConfirmButton: false
                        })
                      }
                    })
                  }}
                >
                  Eliminar
                </button>

              </div>
            </div>
          </div>
        </div>
      ))}

      <h3 className="mt-4">Total: ${getTotalPrice()}</h3>

      <div className="mt-3 d-flex gap-3">
        <button className="btn btn-success" onClick={handleBuy}>
          Comprar
        </button>
        <button className="btn btn-danger" onClick={handleClearCart}>
          Vaciar carrito
        </button>
      </div>
    </div>
  )
}

export default Cart