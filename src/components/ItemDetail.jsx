import React from "react"
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return(
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <img src={item.pictureUrl} alt={item.alt}/>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Medidas: {item.measures}</p>
                <p>${item.price}</p>
            </div>
            <ItemCount stockItems={item.stock} initial={item.initial}/>
        </div>
    )
}

export default ItemDetail;