import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link to="/"><b><h5 className="nav-link ">Challenge</h5></b></Link>
                    <div className="container">
                        <Link to="/formulario"><button className="btn btn-sm btn-outline-info" type="button">Formulario</button></Link>
                        <Link to="/table"><button className="btn btn-sm btn-outline-info" type="button">Tabla</button></Link> 

                    </div>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default Navigator;
