import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addItem = (product, quantity) => {

    const exist = cart.find(
      item => item.id === product.id && item.size === product.size
    )

    if (exist) {

      const updatedCart = cart.map(item => {

        if (item.id === product.id && item.size === product.size) {

          const newQuantity = item.quantity + quantity

          if (newQuantity > product.stock) {
            return { ...item, quantity: product.stock }
          }

          return { ...item, quantity: newQuantity }
        }

        return item
      })

      setCart(updatedCart)

    } else {

      setCart([...cart, { ...product, quantity }])

    }
  }

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

  const clearCart = () => {
    setCart([])
  }

  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      increaseItem,
      decreaseItem,
      clearCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}