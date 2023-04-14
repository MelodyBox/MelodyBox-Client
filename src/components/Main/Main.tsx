import { useState } from "react";
import styles from "./Main.module.less";

type ContentState = "empty";

function Main() {
  const [content, setContent] = useState<ContentState>("empty");
  const contentMap: Record<ContentState, JSX.Element> = {
    empty: <p>Empty</p>,
  };
  return <main id={styles.main}>{contentMap[content]}</main>;
}

export default Main;
