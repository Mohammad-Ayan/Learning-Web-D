import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"]
    let newPrices = ["8,495", "9,900", "1,099", "449"]
    let description = ["8000 DPI", "intutive surface", "designed for iPad Pro", "wireless"];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}


export default Product;  