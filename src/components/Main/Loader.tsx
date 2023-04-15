import styles from "./Main.module.less";

type LoaderProps = {
  text?: string;
};

function Loader({ text }: LoaderProps) {
  const txt = text || "Loading...";
  return (
    <div className={styles.loader__container}>
      <div className={styles.loader}>
        <span></span>
      </div>
      <span className={styles.loader__text}>{txt}</span>
    </div>
  );
}

export default Loader;
