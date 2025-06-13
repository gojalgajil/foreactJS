import React, {useState, useEffect} from "react";
import axios from "axios";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";


const ProductList = () =>{
    var nama = 'susi';
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);


    // function untuk fetch data ke API
    const fetchProducts = () => {
        axios.get("http://127.0.0.1:8000/api/products")
        .then(response => {
            console.log("DATA", response.data); 
            setProducts(response.data);         
        })
        .catch(error => console.error('error fetching data', error));
};

    // function add data
    const handleProductAdded = (newProduct) => {
        setProducts([newProduct, ...products]);
    };
    
    // function untuk delete data
    const handleDelete = (id) => {
        if(window.confirm("Are you sure want to delete?")){
            axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
            .then(response => {
                console.log("DATA", response.data); 
                setProducts(products.filter(product => product.id !== id));
            })
            .catch(error => console.error('error fetching data', error));
        }
    }

    // function untuk update
    const handleUpdate = (updateProduct) => {
        setProducts(products.map(p =>
            (p.id === updateProduct.id ? updateProduct : p)));
            setEditingProduct(null);
    }

    //untuk selalu running
    useEffect(() => {
        fetchProducts()
    }, []);


    return (
        <div>
            <AddProductForm onProductAdded={handleProductAdded}/>
            <h2> Daftar Product</h2>
            <ul>
                {products.map(product=>(
                    <li key ={product.id}>
                        {product.name} - Rp{product.price}
                        <button onClick={() => setEditingProduct(product)}>Edit</button>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            {editingProduct && (
                <EditProductForm
                    product={editingProduct}
                    onUpdate={handleUpdate}
                    onCancel={() => setEditingProduct(null)}
                />
            )}

        </div>
    )
}

export default ProductList;