import { useContext, useRef } from "react";
import styles from "./Header.module.less";
import { ReactComponent as SearchIcon } from "./icons/search.svg";
import { searchSong } from "../../API";
import { ContentContext } from "../ContentState";

function SearchBar() {
  const searchInput = useRef<HTMLInputElement>(null);
  const { setContent, LoaderText } = useContext(ContentContext);

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    if (searchInput.current === null) return;
    LoaderText.current = "Searching for Songs...";
    setContent("loading");
    const result = await searchSong({
      q: searchInput.current.value,
    });
    if (!result.success) {
      LoaderText.current = undefined;
      setContent("empty");
      alert(result.error);
      return;
    }
    console.log(result.data);
  }

  return (
    <form id={styles.searchbar} onSubmit={handleSubmit}>
      <input ref={searchInput} type="text" placeholder="Press 'S' to focus this searchbox..." autoFocus={true} />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBar;
