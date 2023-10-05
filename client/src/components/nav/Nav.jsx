import styles from "./Nav.module.css";
import logo from "../../assets/logo.svg";

import CarButton from "../cartButton/carButton";

const Nav = () => {
  return (
    <div className={styles.bar}>
      <div>
        <img src={logo} alt="logo da devSteam" width={"72"} />
        DevSteam
      </div>
      <input type="text" placeholder="Buscar" />
      <CarButton />
    </div>
  );
};

export default Nav;
