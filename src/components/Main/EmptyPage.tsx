import styles from "./Main.module.less";
import cheery from "./cheerysvg.svg";

function EmptyPage() {
  return (
    <div className={styles.empty__container}>
      <img src={cheery} alt="A young woman who is cheery." />
      <span>Start searching for songs now!</span>
    </div>
  );
}

export default EmptyPage;
