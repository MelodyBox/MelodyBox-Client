import { ContentContext, ContentState } from "../ContentState";
import styles from "./Main.module.less";
import EmptyPage from "./EmptyPage";
import { useContext } from "react";
import Loader from "./Loader";
import Results from "./Results";

function Main() {
  const { content, LoaderText, searchResult } = useContext(ContentContext);
  const contentMap: Record<ContentState, JSX.Element> = {
    empty: <EmptyPage />,
    loading: <Loader text={LoaderText.current} />,
    results: <Results results={searchResult} />,
  };
  return (
    <main id={styles.main} className={styles[content]}>
      {contentMap[content]}
    </main>
  );
}

export default Main;
