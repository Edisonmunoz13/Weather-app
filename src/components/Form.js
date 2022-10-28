import React, { useState } from "react";
import "../assets/css/Form.css";

const Form = ({ newLocation }) => {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    if (city === "" || !city) return;

    newLocation(city);
    console.log(newLocation);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tu ciudad"
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="btn-primary input-group-text" type="submit">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
