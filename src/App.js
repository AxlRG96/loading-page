import React, { useState, useEffect } from "react";
import Loading from "./Loading";

import "./App.css";

const App = () => {
  const [cat, setCat] = useState("");
  const [loading, setLoading] = useState(undefined);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    getCat();
  }, []);

  const getCat = () => {
    setLoading(undefined);
    setDone(undefined);

    setTimeout(() => {
      fetch("https://aws.random.cat/meow")
        .then((res) => res.json())
        .then((data) => {
          setCat(data.file);
          setLoading(true);
          setTimeout(() => {
            setDone(true);
          }, 1000);
        })
        .catch((err) => console.log(err));
    }, 1200);
  };

  // Style
  const catContainer = {
    maxWidth: "30rem",
    margin: "2rem auto",
  };

  const catImage = {
    width: "100%",
    height: "30rem",
    objectFit: "cover",
    borderRadius: "5px",
  };

  const btnStyle = {
    background: "blue",
    padding: "0.5rem 1rem",
    border: "none",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
  };

  return <Loading loading={loading} />;
};

export default App;
