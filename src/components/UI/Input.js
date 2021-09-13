import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label className={styles.label}>{props.label}</label>
      <input className={styles.input} ref={ref} {...props.input} />
    </div>
  );
})

export default Input;
