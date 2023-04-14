import GuideButton from "./GuideButton";
import SearchBar from "./SearchBar";
import styles from "./Header.module.less";

function Header() {
  return (
    <div className={styles.header}>
      <GuideButton />
      <SearchBar />
    </div>
  );
}

export default Header;
