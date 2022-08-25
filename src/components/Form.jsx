import React, { useState } from "react";

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');



  return (
    <div>
      <form onSubmit={ev => {
        ev.preventDefault(); 
        setNombre(
            "Nombre: " + ev.target.nombre.value)
            setApellido("Apellido: "+ ev.target.apellido.value)
            }}>
        <div className="container">

          <h2>Rellene con su nombre</h2>
          <div className="mb-3">
            <label className="form-label">
             Nombre
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su nombre"
              name="nombre"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Ingrese su apellido
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su apellido"
              name="apellido"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <br/>
        <div className="container">
            <p>{nombre}</p>
            <p>{apellido}</p>
        </div>
      </form>
    </div>
  );
};

export default Form;
