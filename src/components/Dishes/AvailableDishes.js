import React from "react";
import Card from "../UI/Card";
import styles from "./AvailableDishes.module.css";
import DishItem from "./DishItem/DishItem";

const dishes = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableDishes = () => {
  let dishesMap = dishes.map((dish) => (
    <DishItem
     key={dish.id}
     dish={dish}
    />
  ));
  return (
    <section className={styles.dishes}>
      <Card>
        <ul>{dishesMap}</ul>
      </Card>
    </section>
  );
};

export default AvailableDishes;
