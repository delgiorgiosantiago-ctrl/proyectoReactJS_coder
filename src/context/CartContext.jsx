import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  // Agregar producto al carrito
  const addItem = (product, quantity) => {
    const exist = cart.find(
      item => item.id === product.id && item.size === product.size
    )

    if (exist) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id && item.size === product.size) {
          const newQuantity = item.quantity + quantity
          return { ...item, quantity: newQuantity > product.stock ? product.stock : newQuantity }
        }
        return item
      })
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...product, quantity }])
    }
  }

  // Aumentar cantidad de un producto
  const increaseItem = (id, size, stock) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.size === size) {
        if (item.quantity >= stock) return item
        return { ...item, quantity: item.quantity + 1 }
      }
      return item
    })
    setCart(updatedCart)
  }

  // Disminuir cantidad de un producto
  const decreaseItem = (id, size) => {
    const updatedCart = cart
      .map(item =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
    setCart(updatedCart)
  }

  // Eliminar producto completo del carrito
  const removeItem = (id, size) => {
    setCart(prevCart => prevCart.filter(item => !(item.id === id && item.size === size)))
  }

  // Vaciar carrito
  const clearCart = () => {
    setCart([])
  }

  // Total de productos en el carrito
  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  }

  // Total a pagar
  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      increaseItem,
      decreaseItem,
      removeItem,   // <-- nueva función
      clearCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}