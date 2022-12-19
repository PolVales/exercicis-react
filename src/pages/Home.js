import "./Home.css";
import Film from "../components/film/Film";
import { useState } from "react";

function Home() {
  const films = [
    {
      title: "el lobo de wall street",
      description: "asdklnasdljasolndas wall street",
      review: "5*",
    },
    {
      title: "Un ciudadano ejemplar",
      description: "lorem impsum blasd",
      review: "4*",
    },
    {
      title: "La pesadilla de React",
      description: "es broma es la ostia",
      review: "5*",
    },
  ];

  const [count, setCount] = useState(0);

  return (
    <>
      <p>El contador es: {count}</p>
      <button onClick={() => setCount((valorActual) => valorActual + 1)}>
        suma
      </button>
      <h1>Benvinguts al TCM Netflix</h1>
      <h2>Películes destacades: </h2>
      {films.map((film) => {
        return (
          <Film
            key={film.title}
            title={film.title}
            description={film.description}
            review={film.review}
          />
        );
      })}
    </>
  );
}

export default Home;
