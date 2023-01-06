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
        {inBasket !== true ? (
          <button onClick={() => addToBasket(trackId)}>Add</button>
        ) : (
          <button onClick={() => removeFromBasket(trackId)}>remove</button>
        )}
      </div>
    </div>
  );
}

export default Product;
