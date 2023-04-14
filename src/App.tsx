import Header from "./components/Header/Header";
import { useTernaryDarkMode } from "usehooks-ts";

function App() {
  const { isDarkMode } = useTernaryDarkMode();

  return (
    <div className="App" data-theme={isDarkMode ? "dark" : "light"}>
      <Header />
    </div>
  );
}

export default App;
