import { ContentContext, ContentState } from "../ContentState";
import styles from "./Main.module.less";
import EmptyPage from "./EmptyPage";
import { useContext } from "react";

function Main() {
  const { content } = useContext(ContentContext);
  const contentMap: Record<ContentState, JSX.Element> = {
    empty: <EmptyPage />,
    loading: <p>Loading...</p>,
  };
  return (
    <main id={styles.main} className={styles[content]}>
      {contentMap[content]}
    </main>
  );
}

export default Main;
