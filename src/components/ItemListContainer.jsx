import React from "react";
import productos from "../API/data.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () =>{
    const [items, setItems] = React.useState([]);
    const {id} = useParams();
    
    React.useEffect(()=> {
        const promise = new Promise((res) => {
            setTimeout(() =>{
                res(id ? productos.filter(item => item.category === id) : productos)
            },2000)
        });

        promise.then((data) => {
            setItems(data); 
        })
    },[id])

    return(
        <div className="container d-flex row mx-auto py-5">        
            <ItemList items={items}/>
        </div>
    );
}

export default ItemListContainer;