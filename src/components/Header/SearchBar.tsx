import styles from "./Header.module.less";
import { ReactComponent as SearchIcon } from "./search.svg";

function SearchBar() {
  return (
    <form className={styles.searchbar}>
      <input type="text" placeholder="Press 'S' to focus this searchbox..." autoFocus={true} />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBar;
