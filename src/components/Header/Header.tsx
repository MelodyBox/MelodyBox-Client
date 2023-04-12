import SearchBar from "./SearchBar";
import styles from "./Header.module.less";

function Header() {
  return (
    <div id={styles.header}>
      <SearchBar />
    </div>
  );
}

export default Header;
