import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const dishes = (
    <ul className={styles["cart-items"]}>
      {[{ name: "Sushi", amount: 2, price: 12.99 }].map((dish) => (
        <li>{dish.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal closeCartHandler={props.onCloseCart}>
      {dishes}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>12.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["close-btn"]} onClick={props.onCloseCart}>Close</button>
        <button className={styles["order-btn"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
