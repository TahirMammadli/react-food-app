import React from "react";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <React.Fragment>
      <div className={styles["main-header"]}>
        <h1 className={styles.logo}>React Meals</h1>
        <section className={styles.cart}>
          <h3>Your cart</h3>
          <div className={styles["cart-quantity"]}>0</div>
        </section>
      </div>
      <div className={styles['meals-img']}>
          <img src="" alt="" />
      </div>
      <section className={styles["ad-banner-flex"]}>
        <div className={styles["ad-banner"]}>
          <h1>Delicious Food, Delivered To You</h1>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>
      </section>
      
    </React.Fragment>
  );
};

export default MainHeader;
