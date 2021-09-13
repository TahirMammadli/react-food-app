import React, { useContext } from "react";
import styles from "./DishItem.module.css";
import DishItemForm from "./DishItemForm";
import CartContext from "../../../store/cart-context";

const DishItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$ ${props.dish.price.toFixed(2)}`;
  function addToCartHandler(itemAmount) {
    ctx.addItem({
      id: props.dish.id,
      name: props.dish.name,
      price: props.dish.price,
      amount: itemAmount,
    });
  }
  return (
    <li className={styles.dish}>
      <div>
        <h3>{props.dish.name}</h3>
        <div className={styles.decription}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <DishItemForm onAddToCart={addToCartHandler} dish={props.dish} />
      </div>
    </li>
  );
};

export default DishItem;
