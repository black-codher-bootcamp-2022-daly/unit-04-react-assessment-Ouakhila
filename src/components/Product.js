function Product({ item, ...props }) {
  console.log({ props });
  const {
    trackId,
    kind,
    trackName,
    currency,
    trackPrice,
    artworkUrl100,
    isInTheBasket,
    //artistId,
    //key,
  } = item;

  return (
    <div className="Product-div">
      <div>
        <h1>{kind}</h1>
        <h2>{trackName}</h2>
        <h4>
          {currency}
          {trackPrice}
        </h4>
      </div>
      <img src={artworkUrl100} alt={trackName} />

      <div>
        {isInTheBasket ? (
          <button onClick={() => props.removeFromBasket(trackId)}>
            remove
          </button>
        ) : (
          <button onClick={() => props.addToBasket(trackId)}>Add</button>
        )}
      </div>
    </div>
  );
}

export default Product;
