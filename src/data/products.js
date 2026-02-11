import ZapasClasicas from '../assets/products/ZapasClasicas.png'
import ZapasRunner from '../assets/products/ZapasRunner.png'
import GorraStreet from '../assets/products/GorraStreet.png'
import RemeraBasic from '../assets/products/RemeraBasic.png'
import RemeraOversize from '../assets/products/RemeraOversize.png'


export const products = [
    {
    id: '1',
    title: 'Zapatillas Roma Classic',
    price: 89999,
    category: 'zapatillas',
    stock: 10,
    sizes: ['36','37','38','39','40','41','42','43'],
    description: 'Zapatillas urbanas cómodas.',
    img: ZapasClasicas,
    },
    {
    id: '2',
    title: 'Zapatillas Roma Runner',
    price: 109999,
    category: 'zapatillas',
    stock: 7,
    sizes: ['37','38','39','40','41','42','43'],
    description: 'Diseñadas para correr.',
    img: ZapasRunner,
    },
    {
    id: '3',
    title: 'Gorra Roma Street',
    price: 24999,
    category: 'accesorios',
    stock: 15,
    sizes: ['Único'],
    description: 'Look street.',
    img: GorraStreet,
    },
    {
    id: '4',
    title: 'Remera Roma Basic',
    price: 34999,
    category: 'remeras',
    stock: 20,
    sizes: ['S','M','L','XL'],
    description: 'Remera algodón 100%, corte regular.',
    img: RemeraBasic,
    },
    {
    id: '5',
    title: 'Remera Roma Oversize',
    price: 39999,
    category: 'remeras',
    stock: 12,
    sizes: ['S','M','L','XL'],
    description: 'Remera estilo oversize urbana.',
    img: RemeraOversize,
    },

]

const wait = (ms) => new Promise((res) => setTimeout(res, ms))

export const getProducts = async () => {
  await wait(700)
  return products
}

export const getProductsByCategory = async (categoryId) => {
  await wait(700)
  return products.filter((p) => p.category === categoryId)
}

export const getProductById = async (id) => {
  await wait(700)
  return products.find((p) => p.id === id)
}
