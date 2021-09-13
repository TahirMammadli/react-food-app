import React, {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext)
  const totalItemCount = ctx.items.reduce((sum, item) => {return sum+item.amount}, 0)
  return (
    <div>
      <button className={styles.button} onClick={props.onOpenCart}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={styles.badge}>{totalItemCount}</span>
      </button>
    </div>
  );
};

export default HeaderCartButton;
