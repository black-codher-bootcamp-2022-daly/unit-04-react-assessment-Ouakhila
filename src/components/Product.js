function Product({ item, addToBasket, removeFromBasket }) {
  //console.log({ props });
  const {
    trackId,
    kind,
    trackName,
    currency,
    trackPrice,
    artworkUrl100,
    inBasket,
    //artistId,
    //key,
  } = item;

  return (
    <div className="Product-div">
      <img src={artworkUrl100} alt={trackName} />
      <div className="List-element">
        <h1>{kind}</h1>
        <h2>{trackName}</h2>
        <h4>
          {currency}
          {trackPrice}
        </h4>
      </div>

      <div>
        {inBasket !== true ? (
          <button onClick={() => addToBasket(trackId)}>Add to basket</button>
        ) : (
          <button onClick={() => removeFromBasket(trackId)}>
            remove from basket
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
