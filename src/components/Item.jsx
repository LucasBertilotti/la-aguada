import React from "react";
import { Link } from "react-router-dom";

const Item = ({producto}) =>{
    return( 
        <div className="card cardsProductos">
            <img src={producto.pictureUrl} className="card-img-top border-0" alt={producto.alt} />
            <div className="card-body text-center">
                <h3 className="card-title">{producto.title}</h3>
                <p className="card-text">${producto.price}</p> 
                <Link to={"/item/" + producto.id} className="btn btn-secondary">Ver más</Link>
            </div>
        </div>
    )
}

export default Item;