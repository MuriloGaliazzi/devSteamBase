import Button from "../forms/button/button";
import CartOption from "../cartOption/cartOption";
import styles from "./cartMenu.module.css";

const cartMenu = () => {
  return (
    <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
      <div className={styles.options}>
        <CartOption />
        <CartOption />
        <CartOption />
        <CartOption />
      </div>

      <div className={styles.priceLine}>
        <h2>Total</h2>
        <h2>R$ 99,90</h2>
      </div>
      <Button fullwidth>Finalizar Compra</Button>
    </div>
  );
};

export default cartMenu;
