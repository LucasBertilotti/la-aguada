import React from "react"
import { useParams } from "react-router-dom";
import productos from "../API/data.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = React.useState({})
    const {id} = useParams();

    React.useEffect(() => {
        const promise = new Promise((res) => {
            setTimeout(() => {
                res(productos.find( item => item.id === parseInt(id)));
            }, 2000);
        });

        promise.then((data) => {
            setItem(data);
        });

    }, [id]);

    return (
        <div className="container text-center py-5">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;