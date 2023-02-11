import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/action";

function Card({ name, species, gender, image, onClose, id }) {
  const dispatch = useDispatch();
  const myFavorite = useSelector((state) => state.myFavorite);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ name, species, gender, image, onClose, id }));
    }
  };

  useEffect(() => {
    myFavorite.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorite]);

  return (
    <div className={styles.contenedorCard}>
      <div className={styles.character}>
        <div className={styles.imagenChar}>
          <img className={styles.imgCard} src={image} alt="imagen" />
        </div>
        <div className={styles.detalle}>
          <Link to={`/detail/${id}`} className={styles.linkin}>
            <h2>{name}</h2>
          </Link>
          <h2 className={styles.text}>{species}</h2>
          <h2 className={styles.text}>{gender}</h2>
          {isFav ? (
            <button onClick={handleFavorite} className={styles.botonFav}>
              ❤️
            </button>
          ) : (
            <button onClick={handleFavorite} className={styles.botonFav}>
              🤍
            </button>
          )}
          <button className={styles.botoncito} onClick={() => onClose()}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
