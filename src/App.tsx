import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import headerStyles from "./components/Header/Header.module.less";
import { useTernaryDarkMode } from "usehooks-ts";
import ContentProvider from "./components/ContentState";

function App() {
  const { isDarkMode } = useTernaryDarkMode();

  function handleClick(event: React.SyntheticEvent) {
    // ========[ Remove Dropdown ]========
    const dropDown = (event.target as Element).closest(`.${headerStyles.dropdown}`);
    if (dropDown) return;

    const findDropMenu = document.querySelector(`.${headerStyles.dropmenu}`);
    if (findDropMenu === null) return;

    const btn = findDropMenu.previousElementSibling;
    if (btn === null) return;

    (btn as HTMLElement).click();
    // ===================================
  }

  return (
    <div className="App" data-theme={isDarkMode ? "dark" : "light"} onClick={handleClick}>
      <ContentProvider>
        <Header />
        <Main />
      </ContentProvider>
    </div>
  );
}

export default App;
