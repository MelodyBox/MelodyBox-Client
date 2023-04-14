import styles from "./Header.module.less";
import { ReactComponent as InfoIcon } from "./info.svg";

function GuideButton() {
  return (
    <button id={styles.guide}>
      <InfoIcon />
      <span>How to use Guide</span>
    </button>
  );
}

export default GuideButton;
