function BasketCount(props) {
  const { basketCount } = props;
  console.log(basketCount);
  return (
    <div>
      <h1>Basket</h1>
      {props.basketCount} items
    </div>
  );
}
export default BasketCount;
