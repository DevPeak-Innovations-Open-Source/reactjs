import "./CardComponent.css";
function CardComponent(props) {
  return (
    <div className="product-card">
      <h2 className="product-name">{props.name}</h2>
      <p className="product-price">Price: Rs.{props.price}</p>
    </div>
  );
}

export default CardComponent;
