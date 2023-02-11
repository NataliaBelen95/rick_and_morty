import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styles.divDetail}>
      <div className={styles.contenedorDetalle}>
        <div className={styles.divImagen}>
          <img
            className={styles.img}
            src={character?.image}
            alt={character.name}
          />
        </div>
        <button className={styles.boton}>
          <Link className={styles.link} to="/home">
            Home
          </Link>
        </button>
        <div className={styles.detalles}>
          <h1 className={styles.nombre}>{character?.name}</h1>

          <p className={styles.info}>{character?.status}</p>
          <p className={styles.info}>{character?.species}</p>
          <p className={styles.info}>{character?.gender}</p>
          <p className={styles.info}>{character?.origin?.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
