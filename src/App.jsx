import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NotFound from './components/NotFound'
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
