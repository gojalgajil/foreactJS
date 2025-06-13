import React, { useState } from "react";
import axios from "axios";


const AddProductForm = ({onProductAdded}) => {
   // const [name, setName] = useState("");
   // const [price, setPrice] = useState("");
   // const [description, setDescription] = useState("");

    const [form, setForm] = useState({
        name: "",
        price: "",
        description: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/products", form)
        .then(response =>{
            console.log('Data berhasil ditambahkan', response.data);
            onProductAdded(response.data);
            setForm({
                name: "",
                price: "",
                description: ""
    })
})
    .catch(error => console.error('error fetching data', error));
    
}
return (
    <form onSubmit={handleSubmit}>
        <h3>Tambah Product</h3>
            <input 
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nama Product"
                required
            />
            <input
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Deskripsi Product"
                required
            />
            <input 
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Harga Product"
                required
            />
            
            <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Simpan</button>
        
    </form>
)
}

export default AddProductForm;