import SearchBar from "./searchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div className={styles.bodyNav}>
      <nav className={styles.menu}>
        <label className={styles.logo}>Rick and Morty</label>
        <ul className={styles.menuItems}>
          <li className={styles.activ}>
            <Link to="home" className={styles.links}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" className={styles.links}>
              About
            </Link>
          </li>
          <li>
            <SearchBar onSearch={onSearch} />
          </li>
          <li>
            <Link to="/favorites" className={styles.links}>
              Favoritos
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.links}>
              <ion-icon name="log-out-outline"></ion-icon>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
