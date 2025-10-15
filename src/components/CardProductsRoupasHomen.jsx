import { useEffect, useState } from "react"

export function CardProductsMan(){
    const API_URL= import.meta.env.VITE_API_URL;

    const [products, setProducts] = useState([])
    const [title, setTitle] = useState("");
    const [price, setPrice]= useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("");




    useEffect(()=>{
        fetch(`${API_URL}/products/category/men's%20clothing`)
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    return(
        <div className="grid grid-cols-3 gap-5">
            {products.map((pegaItem) => (
                <div className=" w-[400px] h-[auto] border rounded">
                    <div>{pegaItem.title}</div>
                    <div><img src={pegaItem.image} alt="" className="w-[70px]"/></div>
                    <div>{pegaItem.price}</div>
                    <div>{pegaItem.description}</div>
                </div>
            ))}
        </div>
    )
}