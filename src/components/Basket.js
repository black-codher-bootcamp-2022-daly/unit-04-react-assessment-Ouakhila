import Product from "./Product";

export const Basket = ({ listOfProducts }) => {
  //trackName, artistName, trackPrice, currency, artworkUrl30
  return (
    <div>
      <h2> You have Added: {listOfProducts.length}</h2>
      {listOfProducts.map((el) => (
        <Product
          key={el.id}
          trackName={el.trackName}
          artistName={el.artistName}
          currency={el.currency}
          trackPrice={el.trackPrice}
          artworkUrl30={el.artworkUrl30}
          isInTheBasket={true}
        />
      ))}
    </div>
  );
};
