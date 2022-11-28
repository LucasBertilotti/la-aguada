import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg header container-fluid">
                <div className="container">
                    <a className="navbar-brand" href="#">La Aguada</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link active" href="#">Mates</a>
                            <a className="nav-link active" href="#">Bombillas</a>
                        </div>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;