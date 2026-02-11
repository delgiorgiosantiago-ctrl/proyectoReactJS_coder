function SizeSelector({ sizes = [], selectedSize, onSelect }) {
  if (!sizes.length) return null

  return (
    <div className="d-flex align-items-center flex-wrap gap-2 my-3 justify-content-center">
      <span className="fw-semibold">Talle:</span>

      <div className="d-flex flex-wrap gap-2">
        {sizes.map((size) => {
          const active = selectedSize === size
          return (
            <button
              key={size}
              type="button"
              className={`btn btn-sm ${active ? 'btn-dark' : 'btn-outline-dark'} size-pill`}
              onClick={() => onSelect(size)}
            >
              {size}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default SizeSelector
