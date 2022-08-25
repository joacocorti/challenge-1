import React from "react";


const datosPersonas = [
  {
    nombre: "Pedro",
    edad: 20,
    carrera: "Ingeniería",
    hobbie: "Futbol",
  },
  {
    nombre: "Rodrigo",
    edad: 22,
    carrera: "Arquitectura",
    hobbie: "Bajo eléctrico",
  },
  {
    nombre: "Romina",
    edad: 21,
    carrera: "Abogacía",
    hobbie: "Acrobacia",
  },
  {
    nombre: "Ana",
    edad: 23,
    carrera: "Contadora",
    hobbie: "Astronomía",
  },
];

const Data = () => {
  return (
    <div>
        <table className="table ">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Carrera</th>
                <th>Hobbie</th>
              </tr>
            </thead>
       
      {datosPersonas.map((dato, index) => {
        return (
               

                    <tbody key={index}>
                        <tr >
                            
                            <td>{dato.nombre}</td>
                            <td>{dato.edad}</td>
                            <td>{dato.carrera}</td>
                            <td>{dato.hobbie}</td>
                        </tr>
                    </tbody>
        );
      })}
      </table>
    </div>
  );
};

export default Data;
