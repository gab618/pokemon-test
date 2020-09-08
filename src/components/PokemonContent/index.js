import React, { useState, useEffect } from "react";
import api from "../../services/api";

import {
  Container,
  PokemonCard,
  ButtonsContainer,
  PrevButton,
  NextButton,
} from "./styles";

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

  async function refreshPokemon(url) {
    if (url) {
      fetch(`${url}`).then(async (res) => {
        const response = await res.json();
        setPokemons(response.results);
        setNextPage(response.next);
        setPrevPage(response.previous);
      });
    }
  }

  return (
    <Container>
      {pokemons &&
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name}>
            <strong>{pokemon.name}</strong>
          </PokemonCard>
        ))}
      <ButtonsContainer>
        <PrevButton onClick={() => refreshPokemon(prevPage)}>P</PrevButton>
        <NextButton onClick={() => refreshPokemon(nextPage)}>N</NextButton>
      </ButtonsContainer>
    </Container>
  );
};

export default PokemonContent;
