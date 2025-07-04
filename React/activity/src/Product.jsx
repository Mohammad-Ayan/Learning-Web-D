import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"]
    let newPrices = ["8,495", "9,900", "1,099", "449"]
    let description = [
        ["8000 DPI", "5 Programmable buttons"],
        ["intutive surface", "designed for iPad Pro"],
        ["designed for iPad Pro", "intutive surface"],
        ["wireless", "optical orientation"],
    ];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}


export default Product;  