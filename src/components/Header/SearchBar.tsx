import { useRef } from "react";
import styles from "./Header.module.less";
import { ReactComponent as SearchIcon } from "./icons/search.svg";
import { searchSong } from "../../API";

function SearchBar() {
  const searchInput = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    if (searchInput.current !== null) {
      const result = await searchSong({
        q: searchInput.current.value,
      });
      console.log(result);
    }
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
