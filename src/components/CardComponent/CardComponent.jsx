import "./CardComponent.css";
function CardComponent(props) {
    // const {title,body}= props;
  return (
    <div>
      <span className="highlight">{props.title}</span>
      <p className="subtitle">
        {props.body}
      </p>
    </div>
  );
}
export default CardComponent;