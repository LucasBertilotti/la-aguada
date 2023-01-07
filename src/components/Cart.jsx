import React from "react";
import { CartContext } from "../context/CartContext";
import {Link} from "react-router-dom"

const Cart = () => {
    const {cart, removeItem, sumTotal, cartTotal, clear} = React.useContext(CartContext)


    if(cartTotal() === 0) {
        return(
            <div className="contaier py-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-danger text-center" role="alert">
                            No hay productos en el carrito
                        </div>
                        <Link to={"/"} className="btn">Volver al inicio</Link> {/*acomodar este boton y el que esta abajo- deberian ser iguales */}
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="container py-5">
            <div className="col-md-12">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" colSpan={5} className="text-end"><Link className="btn" onClick={clear}>Vaciar carrito</Link></th>
                    </tr>
                    <tr>
                        <th scope="col">&nbsp;</th>
                        <th scope="col">Producto</th>
                        <th scope="col" className="text-center">Cantidad</th>
                        <th scope="col" className="text-center">Precio</th>
                        <th scope="col">&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.pictureUrl} alt={item.alt} width={64}/></td>
                            <td className="align-middle">{item.title}</td>
                            <td className="align-middle text-center">{item.quantity}</td>
                            <td className="align-middle text-center">${item.quantity * item.price}</td>
                            <td className="align-middle text-center"><Link onClick={() => {removeItem(item.id)}}><img src={"/images/trash.svg"} alt={"Eliminar producto"} width={24}/></Link></td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={2}>&nbsp;</td>
                        <td className="text-center">Suma total:</td>
                        <td className="text-center">${sumTotal()}</td>
                        <td className="text-center"><Link to={"/checkout"} className="btn">Finalizar compra</Link></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default Cart;