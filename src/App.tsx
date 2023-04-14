import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useTernaryDarkMode } from "usehooks-ts";

function App() {
  const { isDarkMode } = useTernaryDarkMode();

  return (
    <div className="App" data-theme={isDarkMode ? "dark" : "light"}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
