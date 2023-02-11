import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../Favorites/Favorites.module.css";

const Favorites = () => {
  const { myFavorite } = useSelector((state) => state);

  return (
    <div>
      {myFavorite.map((character) => {
        return (
          <div key={character.id} className={styles.contenedor}>
            <Link to={`/detail/${character.id}`} className={styles.vinculo}>
              <h2 className={styles.title}>{character.name}</h2>
            </Link>
            <h2 className={styles.text}>{character.species}</h2>
            <h2 className={styles.text}>{character.gender}</h2>
            <img className={styles.img} src={character.image} alt="imagen" />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
