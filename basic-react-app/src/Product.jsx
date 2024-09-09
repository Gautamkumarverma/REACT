import "./Product.css";
import Price from "./Price";

function Product({ title, indx }) {
  let oldPrice = ["21,000", "23,545", "4,35", "5,90"];
  let newPrice = ["19,909", "20,000", "1,00", "2,00"];
  let description = [
    ["8,000 DPI", "5 programmable buttons"],
    ["instutive touch Surface", "designed for iPad Pro"],
    ["designed for iPad Pro", "instutive touch Surface"],
    ["Wireless Mouse 2.4GHz", "optical orientation"],
  ];

  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[indx][0]}</p>
      <p>{description[indx][1]}</p>
      <Price oldPrice={oldPrice[indx]} newPrice={newPrice[indx]} />
    </div>
  );
}
export default Product;
