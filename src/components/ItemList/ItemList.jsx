import React from "react";
import Item from "../Item/Item";

const ItemList = ({items}) =>{
    return(
        <>
            {
                items.map(producto => 
                    <div className="col-12 col-md-4 col-lg-3 my-2" key={producto.id}>
                        <Item producto={producto}/>
                    </div>
                )
            }
        </>
    )
}

export default ItemList;