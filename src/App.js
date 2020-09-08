import React from "react";

import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import PokemonContent from "./components/PokemonContent";

function App() {
  return (
    <>
      <Header />
      <PokemonContent />
      <GlobalStyles />
    </>
  );
}

export default App;
