import Product from "./Product.jsx";

function ProductTab(){
    let specification = ["hi-Tech", "durable", "afordable"]
    return(
        <>
        <Product title="Phone" price={30000} features={specification}/>
        <Product title="Laptop" price={50000}/>
        <Product title="Charger" price={3000}/>
        </>
    );
}

export default ProductTab
