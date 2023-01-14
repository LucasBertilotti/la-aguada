import  React from "react";
import { Link } from "react-router-dom";
import './error404.css'

const Error404 = () =>{
    return (
        <div className="container">
            <div className=" col-10 offset-2">
                <img className="error404 mx-auto" src="/images/error-404.png" alt="Error, página no encontrada" />
            </div>
            <Link to={"/"} className="buttonError404 text-center mx-auto mb-5">Volver al inicio</Link>
        </div>
    )
}

export default Error404;