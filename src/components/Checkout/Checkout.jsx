import React from "react";
import { addDoc, collection, getFirestore} from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { Navigate } from "react-router-dom";
import './checkout.css'
import useNotify from "../../hooks/useNotify";

const Checkout = () =>{
    const {cart, sumTotal, clear,shippingCost} = React.useContext(CartContext);
    const {infoNotif} = useNotify();
    const [nombre, setNombre] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [emailConfirm, setEmailConfirm] = React.useState("");
    const [telefono, setTelefono] = React.useState("");
    const [orderId, setOrderId] = React.useState("");

    let expRegNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]{3,15}$/g.test(nombre)
    let expRegEmail = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    
    const generarOrden = (e) =>{
        e.preventDefault()

        if( !expRegNombre) {
            infoNotif("Debe ingresar un nombre válido");
            return
        } else if (!expRegEmail){
            infoNotif("Debe ingresar un Email válido");
            return
        } else if (email !== emailConfirm){
            infoNotif("El Email ingresado no coincide");
            return
        }

        const date = new Date();
        const order = {
            buyer: {name:nombre, email:email, phone:telefono},
            items: cart.map(item => ({id: item.id, title: item.title, price: item.price, quantity: item.quantity})),
            date: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
            total: sumTotal()
        }
    
        const db = getFirestore();

        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then((element) =>{
            setOrderId(element.id);
            clear();
        });
    }

    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label fw-bolder">NOMBRE</label>
                            <input type="text" className="form-control formDetails" id="nombre" placeholder="Ingrese su nombre" onInput={(e)=>{setNombre(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-bolder">EMAIL</label>
                            <input type="text" className="form-control formDetails" id="email" placeholder="Ingrese su email" onInput={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emailConfirm" className="form-label fw-bolder">CONFIRME SU EMAIL</label>
                            <input type="text" className="form-control formDetails" id="emailConfirm" placeholder="Confirme su email" onInput={(e)=>{setEmailConfirm(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label fw-bolder">TELÉFONO</label>
                            <input type="text" className="form-control formDetails" id="telefono" placeholder="Ingrese su teléfono" onInput={(e)=>{setTelefono(e.target.value)}}/>
                        </div>
                        <button type="submit" className="checkoutButton" onClick={generarOrden}>Finalizar compra</button>
                    </form>
                </div>
                <div className="col">
                    <span><strong>DETALLE DE TU COMPRA</strong></span>
                    <table className="table mt-2">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id} className="heightItem">
                                    <td><img className="itemCart " src={item.pictureUrl} alt={item.alt} width={64}/></td>
                                    <td className="align-middle">{item.title}</td>
                                    <td className="align-middle text-center">{item.quantity}</td>
                                    <td className="align-middle text-center">${item.quantity * item.price}</td>
                                </tr>
                            ))}
                            <tr className="heightItem">
                                <td colSpan={3} className="align-middle text-end">Envío</td>
                                <td className="align-middle text-center">${shippingCost}</td>
                            </tr>
                            <tr className="heightItem">
                                <td colSpan={3} className="align-middle text-end fw-semibold">Total con envío</td>
                                <td className="align-middle text-center fw-semibold">${sumTotal() + shippingCost}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    {orderId ? <Navigate to={"/finalmessage/" + orderId} /> : ""}
                </div>
            </div>
        </div>
    );
}

export default Checkout;