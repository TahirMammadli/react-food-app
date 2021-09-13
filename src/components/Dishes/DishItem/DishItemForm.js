import React, { useContext, useRef, useState } from "react";
import styles from "./DishItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const DishItemForm = (props) => {
  const [errState, setErrState] = useState(false);
  let error;
  const amountInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    )
      error = <p>Dish amount must be between 1 and 5</p>;
    setErrState(true);
    props.onAddToCart(enteredAmountNumber);
  }
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div>
        <Input
          ref={amountInputRef}
          label={"Amount"}
          input={{
            min: "1",
            max: "5",
            type: "number",
            step: "1",
            defaultValue: "1",
          }}
        />
      </div>

      <button>+ Add</button>

      {errState && error}
    </form>
  );
};

export default DishItemForm;
