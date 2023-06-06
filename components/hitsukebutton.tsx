import type { NextPage } from "next";
import styles from "./hitsukebutton.module.css";
const Hitsukebutton: NextPage = () => {
  return <input className={styles.groupChild} type="date" />;
};

export default Hitsukebutton;
