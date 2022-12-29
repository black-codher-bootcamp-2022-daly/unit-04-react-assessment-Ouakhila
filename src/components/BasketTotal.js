export function BasketTotal(props) {
  const { basketTotal } = props;
  console.log(basketTotal);
  return <div>Total:{props.basketTotal}</div>;
}
