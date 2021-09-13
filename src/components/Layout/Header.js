import React, { useState } from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";  

const Header = (props) => {
  function openCartHandler(){
    props.onOpenCart();
  }
  return (
    <React.Fragment>
      <header className={styles["main-header"]}>
        <h1 className={styles.logo}>React Meals</h1>
        <HeaderCartButton onOpenCart={openCartHandler} />
      </header>
      <div className={styles["meals-img"]}>
        <img src="" alt="" />
      </div>
     

      
    </React.Fragment>
  );
};

export default Header;
