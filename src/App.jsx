import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NotFound from './components/NotFound'
import Cart from './pages/Cart'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

function App() {
  return (
    <>
      <NavBar />

      <div className="container py-4 main-content">
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a ROMA Street" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos por categoría" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App