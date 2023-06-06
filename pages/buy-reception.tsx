import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Modoru from "../components/modoru";
import Kensaku from "../components/kensaku";
import Kensakubutton from "../components/kensakubutton";
import Hitsukebutton from "../components/hitsukebutton";
import Konyuunaiyou from "../components/konyuunaiyou";
import RadioGaichu from "../components/radio-gaichu";
import styles from "./buy-reception.module.css";
import RadioButton from "../components/radiobutton";
const BuyReception: NextPage = () => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.buyReception}>
      <div className={styles.div}>外注・接待</div>
      <button className={styles.rectangleParent} onClick={onGroupButtonClick}>
        <Modoru />
        <img className={styles.groupChild} alt="" src="/group-11.svg" />
      </button>
      <div className={styles.rectangleGroup}>
        <Kensaku />
        <div className={styles.rectangleContainer}>
          <div className={styles.groupItem} />
          <div className={styles.occ}>
            <p className={styles.occ1}>株式会社OCC</p>
          </div>
          <div className={styles.div1}>沖縄 太郎</div>
        </div>
        <button className={styles.groupButton}>
          <Kensakubutton />
          <div className={styles.div2}>検索</div>
        </button>
      </div>
      <div className={styles.buyReceptionInner}>
        <Hitsukebutton />
      </div>
      <div className={styles.div3}>購入方法</div>
      <div className={styles.div4}>購入内容<br />
      <RadioButton></RadioButton>
      </div>
      <div className={styles.component2}>
        <div className={styles.parent}>
          <div className={styles.div5}>天引</div>
          <img className={styles.test2Icon} alt="" src="/test-2.svg" />
        </div>
        <div className={styles.test2Parent}>
          <img className={styles.test2Icon1} alt="" src="/test-21.svg" />
          <div className={styles.div6}>現金</div>
        </div>
      </div>
      <Konyuunaiyou />
      <RadioGaichu />
    </div>
  );
};

export default BuyReception;
