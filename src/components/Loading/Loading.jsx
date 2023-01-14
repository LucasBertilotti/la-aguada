import React from "react";

const Loading = () => {
    return(
        <div className="contaier py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <p className="fs-3 fw-semibold">Cargando...</p>
                    <div className="spinner-border text-warning" role="status"></div>
                </div>
            </div>
        </div>
    );
}

export default Loading;