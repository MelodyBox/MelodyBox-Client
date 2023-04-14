import GuideButton from "./GuideButton";
import SearchBar from "./SearchBar";
import ItemBar from "./ItemBar";
import styles from "./Header.module.less";

function Header() {
  return (
    <div id={styles.header}>
      <GuideButton />
      <SearchBar />
      <ItemBar icon="theme" text="Change theme" onClick={() => console.log("Theme")} />
      <ItemBar icon="github" text="Check the project on GitHub!" link="https://github.com/MelodyBox/MelodyBox-Client" />
    </div>
  );
}

export default Header;
