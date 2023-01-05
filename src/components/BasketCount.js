function BasketCount(props) {
  console.log(props.basketCount);
  return (
    <div>
      <h1>Basket</h1>
      {props.basketCount} items
    </div>
  );
}
export default BasketCount;
