import GuideButton from "./GuideButton";
import SearchBar from "./SearchBar";
import ItemBar from "./ItemBar";
import { useTernaryDarkMode } from "usehooks-ts";
import styles from "./Header.module.less";
import { useState } from "react";

function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const { ternaryDarkMode, setTernaryDarkMode } = useTernaryDarkMode();
  type TernaryDarkMode = typeof ternaryDarkMode;
  return (
    <div className={styles.dropdown}>
      <ItemBar icon="theme" text="Change theme" onClick={() => setOpen((current) => !current)} />
      {open ? (
        <ul className={styles.dropmenu}>
          {["system", "light", "dark"].map((mode) => (
            <li
              key={mode}
              className={styles.dropdown__item}
              id={mode === ternaryDarkMode ? styles.selectedTheme : undefined}
              onClick={(ev) => setTernaryDarkMode((ev.target as HTMLLIElement).textContent as TernaryDarkMode)}
            >
              {mode}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function Header() {
  return (
    <div id={styles.header}>
      <GuideButton />
      <SearchBar />
      <ThemeSwitcher />
      <ItemBar icon="github" text="Check the project on GitHub!" link="https://github.com/MelodyBox/MelodyBox-Client" />
    </div>
  );
}

export default Header;
