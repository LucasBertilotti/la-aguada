import React from "react";
import { CartContext } from "../../context/CartContext";
import {Link} from "react-router-dom"
import './cart.css'

const Cart = () => {
    const {cart, removeItem, sumTotal, cartTotal, clear, shippingCost} = React.useContext(CartContext)

    if(cartTotal() === 0) {
        return(
            <div className="container-fluid py-5">
                <div className="container backgroundCart">
                    <div className="col-lg-10 col-md-10 offset-md-1 col-sm-3">
                        <p className="border-bottom pt-5 fw-semibold cartItems">Tu carrito (0)</p>
                        <p className="text-center">Tu carrito está vacío</p>
                        <p className="text-center fw-lighter">Comienza a llenarlo con nuestros productos.</p>
                        <div className="text-center pt-4">
                            <Link to={"/"} className="btn cartButton cartButtonEmpty fw-semibold">Ir de compras</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container-fluid py-5">
            <div className="container backgroundCart">
                <div className="col-lg-10 col-md-10 offset-md-1 col-sm-3">
                    <table className="table">
                        <thead>
                            <tr className="heightCart">
                                <th scope="col" className="pt-5 fw-semibold cartItems">Tu carrito ({cartTotal()})</th>
                                <th scope="col" colSpan={4}>&nbsp;</th>
                            </tr>
                            <tr className="heightCart">
                                <th scope="col">&nbsp;</th>
                                <th scope="col" className="align-middle text-center">Producto</th>
                                <th scope="col" className="align-middle text-center">Cantidad</th>
                                <th scope="col" className="align-middle text-center">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id} className="heightCart">
                                    <td><img className="itemCart shadow" src={item.pictureUrl} alt={item.alt} width={64}/></td>
                                    <td className="align-middle text-center">{item.title}</td>
                                    <td className="align-middle text-center">{item.quantity}</td>
                                    <td className="align-middle text-center">${item.quantity * item.price}</td>
                                    <td className="align-middle text-center"><Link onClick={() => {removeItem(item.id)}}><img src={"/images/trash.svg"} alt={"Eliminar producto"} width={24}/></Link></td>
                                </tr>
                            ))}
                            <tr className="heightCart align-middle">
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Envío</td>
                                <td className="text-center">{shippingCost}</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr className="heightCart align-middle">
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Total con envío</td>
                                <td className="text-center">${sumTotal() + shippingCost}</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr className="heightCart align-middle">
                                <td colSpan={3}>&nbsp;</td>
                                <td className="text-center"><Link to={"/checkout"} className="cartButton">Continuar compra</Link></td>
                                <td className="text-center"><Link className="cartButton" onClick={clear}>Vaciar carrito</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Cart;