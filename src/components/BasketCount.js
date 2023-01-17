function BasketCount(props) {
  console.log(props.basketCount);
  return (
    <div className="counts">
      <h1 className="items-basket">Basket</h1>
      {props.basketCount} items
    </div>
  );
}
export default BasketCount;
