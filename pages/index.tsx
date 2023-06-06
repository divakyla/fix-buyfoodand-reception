import type { NextPage } from "next";
import Menugamen from "../components/menugamen";
import styles from "./index.module.css";
const Menu: NextPage = () => {
  return (
    <div className={styles.menu}>
      <Menugamen />
    </div>
  );
};

export default Menu;
