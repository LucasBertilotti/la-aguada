import  React from "react";
import {Link} from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './cartWidget.css'

const CartWidget = () =>{
    const {cartTotal} = React.useContext(CartContext);
    
    return cartTotal() ? 
        <Link to={"/cart"} className="btn rounded-pill botonesHeader ml-auto" title="Carrito" type="submit">
            <img src="/images/cart.svg" alt="Carrito de compras"/>
            <span className="px-2" style={{fontSize: 13}}>{cartTotal()}</span>
        </Link>
        : <img className="cartEmpty" src="/images/cart-add.png" alt="Carrito de compras" title="Carrito"/>;
}

export default CartWidget;