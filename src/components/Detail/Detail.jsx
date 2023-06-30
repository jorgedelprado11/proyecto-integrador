import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
    return setCharacter({});
  }, [id]);

  return (
    <>
      {character && character.origin ? (
        <div className={styles.div}>
          <div className={styles.data}>
            <h1>{character.name}</h1>
            <h2>SPECIE || {character.species}</h2>
            <h2>GENDER || {character.gender}</h2>
            <h2>STATUS || {character.status}</h2>
            <h2>ORIGIN || {character.origin.name}</h2>
          </div>
          <div className={styles.img}>
            <img src={character.image} alt={character.name} />
          </div>
        </div>
      ) : (
        <div>
          <h2>Acá no hay nada</h2>
        </div>
      )}
    </>
  );
};

export default Detail;