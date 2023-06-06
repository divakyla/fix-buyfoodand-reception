import type { NextPage } from "next";
import Kakuteibuttonn from "./kakuteibuttonn";
import styles from "./naiyoukonyuu.module.css";
const Naiyoukonyuu: NextPage = () => {
  return (
    <div className={styles.div}>
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <div className={styles.groupDiv}>
            <div className={styles.groupDiv}>
              <img className={styles.groupChild} alt="" src="/ellipse-1.svg" />
              <b className={styles.b}>販売枚数</b>
              <b className={styles.b1}>枚</b>
              <input className={styles.groupItem} type="text" />
              <b className={styles.b2}>円</b>
              <b className={styles.id}>食券ID</b>
              <input className={styles.groupInner} type="text" />
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-48.svg"
              />
            </div>
            <b className={styles.b3}>～</b>
            <input className={styles.rectangleInput} type="text" />
          </div>
          <input className={styles.groupChild1} type="text" />
        </div>
        <div className={styles.div1}></div>
        {/* <img className={styles.test2Icon} alt="" src="/test-2.svg" /> */}
      </div>
      <div className={styles.parent}>
        <div className={styles.div2}></div>
        {/* <img className={styles.test2Icon1} alt="" src="/test-21.svg" /> */}
      </div>
      <button className={styles.button}>
        <Kakuteibuttonn />
        <div className={styles.div3}>確定</div>
      </button>
    </div>
  );
};

export default Naiyoukonyuu;
