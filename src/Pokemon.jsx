import React, { useEffect, useState } from "react";
import instance from "./Api";
import { useParams } from "react-router-dom";
import "./Pokemon.css"

function Pokemon () {
  const { index } = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await instance.get(`/type/${index}`);
      const dt = res.data;
      setData(dt)
      console.log(dt);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div> 
      <h1>Pokemons do tipo {data.name}</h1>
      <hr/>
      <br/>
      {data.pokemon?.map((pokemon, index) => (
        <div key={index}>
          <p class="pokemon">{pokemon.pokemon.name}</p>
          <br/>
        </div>
      ))}
    </div>
  );
}

export default Pokemon;
