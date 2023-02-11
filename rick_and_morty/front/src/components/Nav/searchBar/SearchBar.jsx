import styles from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState();

  const handleChange = (event) => {
    setCharacter(event.target.value);
  };

  return (
    <div className={styles.searchBox}>
      <input
        type="search"
        className={styles.searchInput}
        value={character}
        onChange={handleChange}
        placeholder="Search"
      />
      <button
        onClick={() => onSearch(character)}
        className={styles.searchButton}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
