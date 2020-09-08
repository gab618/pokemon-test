import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { Container, PokemonCard } from "./styles";

const PokemonContent = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  useEffect(() => {
    async function getPokemonData() {
      const response = await api.get("pokemon");
      console.log(response.data);
      setPokemons(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
    }
    getPokemonData();
  }, []);

  return (
    <Container>
      {pokemons &&
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name}>
            <strong>{pokemon.name}</strong>
          </PokemonCard>
        ))}
    </Container>
  );
};

export default PokemonContent;
