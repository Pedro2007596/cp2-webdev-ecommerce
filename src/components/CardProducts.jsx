import { useEffect, useState } from "react"

export function CardProducts(){
    const API_URL= import.meta.env.VITE_API_URL;

    const [products, setProducts] = useState([])
    const [title, setTitle] = useState("");
    const [price, setPrice]= useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("");




    useEffect(()=>{
        fetch(`${API_URL}/products`)
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    return(
        <div>
            {products.map((pegaItem) => (
                <div className="w-[100px] h-[80px] border rounded">
                    <div>{pegaItem.title}</div>

                </div>
            ))}
        </div>
    )
}