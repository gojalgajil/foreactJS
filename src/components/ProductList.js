import React, {useState, useEffect} from "react";
import axios from "axios";


const ProductList = () =>{
    var nama = 'susi';
    const [products, setProducts] = useState([]);

    //untuk selalu runing
    useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products")
        .then(response => {
            console.log("DATA", response.data); 
            setProducts(response.data);         
        })
        .catch(error => console.error('error fetching data', error));
}, []);


    return (
        <div>
            <h2> Daftar Product</h2>
            <ul>
                {products.map(product=>(
                    <li key ={product.id}>
                        {product.name} - Rp{product.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;