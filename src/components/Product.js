function Product(props) {
  const { trackName, artistName, trackPrice, currency, artworkUrl30 } = props;

  return (
    <div className="Book-div">
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
        {props.isInTheBasket ? "Remove" : "Add"}
      </button>
    </div>
  );
}

export default Product;

// const BookList = (props) => {
//   console.log(props.books)
//   return (

//     <main>
//       <h2>Book List</h2>
//       {props.books.map((item) => (<Book title={item.volumeInfo.title} subtitle={item.volumeInfo.subtitle} authors={item.volumeInfo.authors} selflink={item.selfLink}></Book>))}
//     </main>

//   );

// }
