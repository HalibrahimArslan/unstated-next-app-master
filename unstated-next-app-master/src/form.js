import React from "react";
import { StoreContainer } from "./store";

const FormComponent = () => {
  const form = StoreContainer.useContainer();

  console.log("Form Componet bolum"+form.bolum)
  return (
    <div>
      <p> Hello!{form.name} </p>{" "}
      <p> UnstatedNext Deneme!{form.age} </p>{" "}
      <div>
        <input type="text" value={form.input} onChange={form.handleInput} />{" "}
        <button onClick={form.updateName}> Change Name </button>

      </div>{" "}
    </div>
  );
};

export default FormComponent;
