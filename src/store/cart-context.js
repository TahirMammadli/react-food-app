import React, { useReducer } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 3,
  addItem: (item) => {},
  removeItem: (id) => {},
});
const initialCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingDish = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return initialCartState;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    initialCartState
  );

  function addItemToCartHandler(item) {
    dispatchCartState({ type: "ADD", item: item });
  }
  function removeItemFromCartHandler() {}
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
