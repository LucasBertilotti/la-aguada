import React from "react";
import './footer.css'

const Footer = () => {
    return(
        <div className="">
            <div className="container-fluid row mx-auto text-center informacionFooter">
                <div className="col-12 col-md-3 col-lg-3">
                    <p>
                        <img src="/images/whatsapp.svg" alt="Carrito de compras"/>
                        <strong>WHATSAPP</strong>
                    </p>
                    <p>+54 9 11 45455656</p>
                </div>
                <div className="col-12 col-md-3 col-lg-3">
                    <p>
                        <img src="/images/clock.svg" alt="Carrito de compras"/>
                        <strong>HORARIOS</strong>
                    </p>
                    <p>Lunes a Viernes</p>
                    <p>09:00 a 13:00 - 14:00 a 18:00</p>
                    <p>Sábados</p>
                    <p>09:00 a 13:00</p>
                </div>
                <div className="col-12 col-md-3 col-lg-3">
                    <p>
                        <img src="/images/globe.svg" alt="Carrito de compras"/>
                        <strong>REDES</strong>
                    </p>
                    <a className="socialMedia" href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">
                        <img src="/images/instagram.svg" alt="Logo de Instagram"/>
                    </a>
                    <a className="socialMedia" href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
                        <img src="/images/facebook.svg" alt="Logo de Facebook"/>
                    </a>
                    <a className="socialMedia" href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
                        <img src="/images/linkedin.svg" alt="Logo de Linkedin"/>
                    </a>
                </div>
                <div className="col-12 col-md-3 col-lg-3">
                    <p>
                        <img src="/images/wallet.svg" alt="Carrito de compras"/>
                        <strong>MEDIOS DE PAGO</strong>
                    </p>
                    <div className="mediosPago">
                        <img src="/images/visa.png" alt="Medio de pago Visa" title="Visa"/>
                        <img src="/images/paypal.png" alt="Medio de pago Paypal" title="Paypal"/>
                        <img src="/images/amex.png" alt="Medio de pago American Express" title="American Express"/>
                    </div>
                </div>
            </div>
            <div className="footer container-fluid text-center py-2">
                <p>La Aguada Talabartería | Desarrollo por Bertilotti Lucas</p>
            </div>
        </div>
    );
}

export default Footer;