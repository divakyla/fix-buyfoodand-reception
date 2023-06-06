import type { NextPage } from "next";
import styles from "./radio-gaichu.module.css";
const RadioGaichu: NextPage = () => {
  return (
    <button className={styles.component4}>
      <div className={styles.div}>
        <div className={styles.child} />
        <div className={styles.div1}>接待</div>
      </div>
      <div className={styles.div}>
        <div className={styles.item} />
        <div className={styles.div3}>外注</div>
      </div>
    </button>
  );
};

export default RadioGaichu;
