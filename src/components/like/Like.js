import { useState } from "react";
import "./Like.css";

function Like() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked((valorActual) => !valorActual)}>
      {liked ? "Unlike" : "Like"}
    </button>
  );
}

export default Like;
