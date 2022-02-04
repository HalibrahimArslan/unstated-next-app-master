import React, { useState, useEffect } from "react";
import { axios } from "axios";

function Deneme() {
  const [bolum, setBolum] = useState([]);

  function getDeneme() {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((response) => setBolum(response));
  }


  

  useEffect(() => {
    getDeneme();
  }, []);

  console.log(bolum[0])
  

  return(<div>DENEME<p>DNEME</p></div>)
  
}

export default Deneme;
