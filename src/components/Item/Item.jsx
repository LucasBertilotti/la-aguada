import React from "react";
import { Link } from "react-router-dom";
import './item.css'

const Item = ({producto}) =>{
    return( 
        <div className="card cardsProductos">
            <img src={producto.pictureUrl} className="card-img-top border-0" alt={producto.alt} />
            <div className="card-body text-center">
                <h3 className="card-title">{producto.title}</h3>
                <p className="card-text fw-semibold">${producto.price}</p> 
                <Link to={"/item/" + producto.id} className="itemsButton">Ver más</Link>
            </div>
        </div>
    )
}

export default Item;