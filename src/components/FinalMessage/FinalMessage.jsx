import React from "react";
import { useParams, Link } from "react-router-dom";
import './finalMessage.css'

const FinalMessage = () => {
    const {id} = useParams();
    
    return (
        <div className="contaier-fluid">
            <div className="container py-5">
                <div className="col-md-12 text-center marginBottom">
                    <div className="alert alert-success text-center mb-5" role="alert">
                        <h1>Gracias por tu compra!</h1>
                        <p>Tu número de compra es: ${id}</p>
                    </div>
                    <Link to={"/"} className="finalMessageButton">Volver al inicio</Link>
                </div>
            </div>
        </div>
    )
}

export default FinalMessage;