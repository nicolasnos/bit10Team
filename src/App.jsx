import React, { useEffect } from "react";
import "./App.css";

function App() {
  const apiG = async () => {
    try {
      const resp = await fetch(
        "https://api.breakingbadquotes.xyz/v1/quotes/10"
      );
      console.log(await resp.json());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    apiG();
  }, []);

  return (
    <div className="App">
      <h1>Hola</h1>
      <p>primer commit</p>
    </div>
  );
}

export default App;

/*
https://gutendex.com/books/?page=2     API DE LIBROS
https://thesimpsonsquoteapi.glitch.me/quotes    API DE LOS SIMPSON (FRASES)
https://openlibra.com/es/page/public-api    API DE LIBROS (AVERIGUAR METODOS DET, POST)

1. libros
2. simpson
3. breaking bad
*/
