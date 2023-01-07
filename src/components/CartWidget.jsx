import  React from "react";
import {Link} from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () =>{
    const {cartTotal} = React.useContext(CartContext);
    
    return (
        <Link to={"/cart"} className="btn rounded-pill botonesHeader ml-auto" type="submit">
            <img src="/images/cart.svg" alt="Carrito de compras"/>
            <span className="px-2" style={{fontSize: 13}}>{cartTotal()}</span>
        </Link>
    )
}

export default CartWidget;