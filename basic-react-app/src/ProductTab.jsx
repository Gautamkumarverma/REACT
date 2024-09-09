import Product from "./Product";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",

    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
     
      <Product title="Logitech MX Master 35" indx={0} />
      <Product title="Apple Pencil (2nd Gen)" indx={1} />
      <Product title="Zebronics  Zeb-Transformer" indx={2} />
      <Product title="Portronics Toad 23, Wireless Mouse" indx={3} />
    </div>
  );
}
export default ProductTab;
