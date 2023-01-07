import React from "react";
import { addDoc, doc, collection, getFirestore, updateDoc } from "firebase/firestore";
import { CartContext } from "../context/CartContext";

const Checkout = () =>{
    const {cart, sumTotal, clear} = React.useContext(CartContext);
    const [nombre, setNombre] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefono, setTelefono] = React.useState("");
    const [orderId, setOrderId] = React.useState("")

    const generarOrden = () =>{
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

            //Acá le estaríamos haciendo un 10% de desc a la compra
            const orderDoc = doc(db, "orders", element.id); //busco un documento por ID
            updateDoc(orderDoc, {total: order.total * 0.9}); // actualizo el documento

            

            clear();
        });

    }


    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <form> {/*agregar validacion de los campos */}
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" onInput={(e)=>{setNombre(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Ingrese su email" onInput={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input type="text" className="form-control" id="telefono" placeholder="Ingrese su telefono" onInput={(e)=>{setTelefono(e.target.value)}}/>
                    </div>
                        <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.pictureUrl} alt={item.alt} width={64}/></td>
                                    <td className="align-middle">{item.title}</td>
                                    <td className="align-middle text-center">{item.quantity}</td>
                                    <td className="align-middle text-center">${item.quantity * item.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-end">Total a pagar:</td>
                                <td className="text-center">${sumTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    {orderId ? 
                    <div className="alert alert-succes" role="alert">
                        <h1>Felicitaciones</h1>
                        <p>Tu número de orden es: {orderId}</p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}


export default Checkout;