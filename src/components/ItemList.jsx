import ItemCard from './ItemCard'

function ItemList({ items }) {
  return (
    <div className="row">
      {items.map((prod) => (
        <div className="col-md-4 mb-4" key={prod.id}>
          <ItemCard {...prod} />
        </div>
      ))}
    </div>
  )
}

export default ItemList
