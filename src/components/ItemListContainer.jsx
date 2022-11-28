import React from "react";

const ItemListContainer = ({gretting}) =>{
    return(
        <div className="container d-flex row mx-auto">
            <div className="col-12 col-md-3 col-lg-3">
                <p className="my-3">Este es el {gretting}</p>
            </div>
        </div>
    );
}

export default ItemListContainer;