function Product(props) {
  const {
    trackName,
    artistName,
    trackPrice,
    currency,
    artworkUrl30,
    removeFromBasket,
  } = props;

  return (
    <div className="Product-div">
      <div>
        <h1>{trackName}</h1>
        <h2>{artistName}</h2>
        <h4>
          {currency}
          {trackPrice}
        </h4>
      </div>
      <img src={artworkUrl30} alt={trackName} />

      <button onClick={() => props.onClick(props.id)}>
        {removeFromBasket ? "Remove" : "Add"}
      </button>
    </div>
  );
}

export default Product;
