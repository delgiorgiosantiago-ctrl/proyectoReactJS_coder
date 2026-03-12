import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

function Cart() {

  const { cart, increaseItem, decreaseItem, clearCart, getTotalPrice } = useContext(CartContext)

  const navigate = useNavigate()

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
              <img
                src={prod.image}
                alt={prod.title}
                className="img-fluid"
              />
            </div>

            <div className="col-md-10">

              <h4>{prod.title}</h4>

              <p>Precio: ${prod.price}</p>

              <p>Talle: {prod.size}</p>

              <div className="d-flex align-items-center gap-3">

                <button
                  className="btn btn-danger"
                  onClick={() => decreaseItem(prod.id, prod.size)}
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

              </div>

            </div>

          </div>

        </div>

      ))}

      <h3 className="mt-4">
        Total: ${getTotalPrice()}
      </h3>

      <div className="mt-3 d-flex gap-3">

        <button
          className="btn btn-success"
          onClick={handleBuy}
        >
          Comprar
        </button>

        <button
          className="btn btn-danger"
          onClick={handleClearCart}
        >
          Vaciar carrito
        </button>

      </div>

    </div>
  )
}

export default Cart