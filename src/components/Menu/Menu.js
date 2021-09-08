import React from "react";
import importedDishes from "../../data";
import styles from "./Menu.module.css";

const dishes = importedDishes;

const Menu = () => {
  return (
    <section className={styles["menu-flex"]}>
      <div className={styles["menu"]}>
        <div className={styles["menu__flex-column"]}>
          <section className={styles["menu__dish"]}>
            {dishes.map((dish) => {
              return (
                <>
                  <h1>{dish.name}</h1>
                  <i>
                    <p>{dish.description}</p>
                  </i>
                  <h2 className={styles["menu__dish-price"]}>{dish.price}</h2>
                </>
              );
            })}
          </section>
  
          <section className={styles["menu__amount-add"]}>
            
            <div className={styles["menu__amount"]}>
              <h2>Amount</h2>
              <div className={styles["menu__dish-count"]}>1</div>
            </div>
            <button className={styles["menu__add-button"]}>+ Add</button>
            <div className={styles["menu__amount"]}>
              <h2>Amount</h2>
              <div className={styles["menu__dish-count"]}>1</div>
            </div>
            <button className={styles["menu__add-button"]}>+ Add</button>
            <div className={styles["menu__amount"]}>
              <h2>Amount</h2>
              <div className={styles["menu__dish-count"]}>1</div>
            </div>
            <button className={styles["menu__add-button"]}>+ Add</button>
            <div className={styles["menu__amount"]}>
              <h2>Amount</h2>
              <div className={styles["menu__dish-count"]}>1</div>
            </div>
            <button className={styles["menu__add-button"]}>+ Add</button>
          </section>
          
        </div>
      </div>
    </section>
  );
};

export default Menu;
