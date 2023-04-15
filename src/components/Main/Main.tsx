import { useState } from "react";
import styles from "./Main.module.less";
import EmptyPage from "./EmptyPage";

type ContentState = "empty";

function Main() {
  const [content, setContent] = useState<ContentState>("empty");
  const contentMap: Record<ContentState, JSX.Element> = {
    empty: <EmptyPage />,
  };
  return (
    <main id={styles.main} className={styles[content]}>
      {contentMap[content]}
    </main>
  );
}

export default Main;
