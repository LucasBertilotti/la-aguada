import  React from "react";

const CartWidget = () =>{
    return (
        <div className="btn rounded-pill botonesHeader ml-auto" type="submit">
            <img src="/images/cart.svg" alt="Carrito de compras"/>
            <span className="px-2" style={{fontSize: 13}}>1</span>
        </div>
    )
}

export default CartWidget;