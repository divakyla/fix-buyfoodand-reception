import type { NextPage } from "next";
import { useCallback } from "react";
import Kensakuu from "../components/kensakuu";
import Kensakubuttonn from "../components/kensakubuttonn";
import { useRouter } from "next/router";
import Nyuuroku from "../components/nyuuroku";
import Hitsukebuttonn from "../components/hitsukebuttonn";
import Modorubutton from "../components/modorubutton";
import Naiyoukonyuu from "../components/naiyoukonyuu";
import styles from "./buy-food-voucher.module.css";
import RadioButton from "../components/radiobutton";
const BuyFoodVoucher: NextPage = () => {
  const router = useRouter();

  const onGroupButton1Click = useCallback(() => {
    router.push("/buy-reception");
  }, [router]);

  const onGroupButton2Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.buyFoodvoucher}>
      <div className={styles.div}>食券購入</div>
      <div className={styles.rectangleParent}>
        <Kensakuu />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <div className={styles.occ}>
            <p className={styles.p}>株式会社OCC</p>
          </div>
          <div className={styles.div1}>沖縄 太郎</div>
        </div>
        <button className={styles.rectangleContainer}>
          <Kensakubuttonn />
          <div className={styles.div2}>検索</div>
        </button>
        <button className={styles.groupButton} onClick={onGroupButton1Click}>
          <Nyuuroku />
          <b className={styles.b}>
            <span className={styles.txt}>
              <p className={styles.p}>外注・接待</p>
              <p className={styles.p}>購入分</p>
              <p className={styles.p}>入力画面</p>
            </span>
          </b>
        </button>
      </div>
      <div className={styles.buyFoodvoucherInner}>
        <Hitsukebuttonn />
      </div>
      <button className={styles.rectangleParent1} onClick={onGroupButton2Click}>
        <Modorubutton />
        <img className={styles.groupItem} alt="" src="/group-11.svg" />
      </button>
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
      <Naiyoukonyuu />
    </div>
  );
};

export default BuyFoodVoucher;
