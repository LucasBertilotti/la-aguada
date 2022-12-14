import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg header container-fluid">
                <div className="container">
                    <Link className="navbar-brand" to={"/"}>La Aguada</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" to={"/"}>Home</NavLink>
                            <NavLink className="nav-link" to={"/category/mates"}>Mates</NavLink>
                            <NavLink className="nav-link" to={"/category/bombillas"}>Bombillas</NavLink>
                            <NavLink className="nav-link" to={"/category/yerberos"}>Yerberos</NavLink>
                        </div>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;