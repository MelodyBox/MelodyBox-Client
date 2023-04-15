import styles from "./Main.module.less";
import cheery from "./cheerysvg.svg";

function EmptyPage() {
  return (
    <div className={styles.empty__container}>
      {/* Image by pikisuperstar on Freepik
          URL: https://www.freepik.com/free-vector/student-set-with-different-postures_2881095.htm
       */}
      <img src={cheery} alt="A young woman who is cheery." />
      <span>Start searching for songs now!</span>
    </div>
  );
}

export default EmptyPage;
