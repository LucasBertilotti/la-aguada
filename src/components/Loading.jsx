import React from "react";

const Loading = () => {
    return(
        <div className="contaier py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;