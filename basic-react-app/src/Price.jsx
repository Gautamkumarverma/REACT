function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecorationLine: "line-through",
  };
  let newStyle = {
    fontWeight: "bold",
  };
  let styles = {
    backgroundColor: "pink",
    height: "30px",
    width: "250px",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
  };
  return (
    <div style={styles}>
      ₹<span style={oldStyles}>{oldPrice}</span>
      &nbsp; &nbsp; ₹<span style={newStyle}>{newPrice}</span>
    </div>
  );
}
export default Price;
