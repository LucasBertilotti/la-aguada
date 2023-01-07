import React from "react"
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";


const ItemDetail = ({item}) => {
    const {addItem} = React.useContext(CartContext);

    const ondAdd = (quantity) => {
        addItem(item, quantity);
    }

    return(
        <div className="container ">
            <div className="mx-auto cardDetailProducto pb-3">
                <img src={item.pictureUrl} alt={item.alt}/>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="mx-1">Medidas: {item.measures}</p>
                <p>${item.price}</p>
            <ItemCount stockItems={item.stock} onAdd={ondAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail;