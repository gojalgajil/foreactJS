import {useState, useEffect} from "react";
import axios from "axios";

const EditProductForm = ({product, onCancel, onUpdate}) => {
    const [form, setForm] = useState({...product}); //titik 3x bisa ngambil semua product

    const handleChange = (e) => {
       // const {name, value} = e.target;
        setForm({...form, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //akses ke API
        axios.put(`http://127.0.0.1:8000/api/products/${product.id}`, form)
        .then(response => {
            console.log("DATA", response.data); 
            onUpdate(response.data);
            onCancel();
        })
        .catch(error => console.error('error fetching data', error));
        onUpdate(form);
    }

    return (
            
            <form onSubmit={handleSubmit}>
                <h3>Edit Product</h3>
                <label>
                    Name:
                    <input type="text" name="name" value={form.name} 
                    onChange={handleChange} placeholder="Nama" />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={form.description} 
                    onChange={handleChange} placeholder="Deskripsi" />
                </label>
                <label>
                    Price:
                    <input type="number" name="price" value={form.price} 
                    onChange={handleChange} placeholder="Harga" />
                </label>
                <button type="submit">Update</button>
                <button type="button" onClick={onCancel}>Cancel</button>
                </form>
                
    )
}
export default EditProductForm;


