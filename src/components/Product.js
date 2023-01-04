function Product({ item, addToBasket, removeFromBasket, ...props }) {
  console.log({ props });
  const {
    trackId,
    kind,
    trackName,
    currency,
    trackPrice,
    artworkUrl100,
    isInTheBasket,
    artistId,
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
        {isInTheBasket !== true ? (
          <button onClick={() => addToBasket(trackId)}>Add</button>
        ) : (
          <button onClick={() => removeFromBasket(trackId)}>remove</button>
        )}
      </div>
    </div>
  );
}

export default Product;
