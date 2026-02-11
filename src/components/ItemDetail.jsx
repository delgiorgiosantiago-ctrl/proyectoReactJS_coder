import ItemCount from './ItemCount'

function ItemDetail({ item }) {
  return (
    <div className="card">
      <img src={item.img} className="card-img-top" />
      <div className="card-body">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <p>{item.description}</p>

        <ItemCount stock={item.stock} />
      </div>
    </div>
  )
}

export default ItemDetail
