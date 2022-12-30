export function Product(props) {
  const {
    trackId,
    kind,
    name,
    thumbnail,
    price,
    trackName,
    currency,
    removeFromBasket,
  } = props;

  return (
    <div className="Product-div">
      <div>
        <h1>{kind}</h1>
        <h2>{name}</h2>
        <h4>
          {currency}
          {price}
        </h4>
      </div>
      <img src={thumbnail} alt={trackName} />
      <button onClick={() => props.onClick(trackId)}>
        {removeFromBasket ? "Remove" : "Add"}
      </button>
    </div>
  );
}

//export default Product;
