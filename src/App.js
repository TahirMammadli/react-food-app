import { useState } from "react";
import Header from "./components/Layout/Header";
import Dishes from "./components/Dishes/Dishes";
import { Fragment } from "react/cjs/react.production.min";
import Cart from './components/Cart/Cart'
import { CartProvider } from "./store/cart-context";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  function openCartHandler(){
    setIsOpen(true);
  }
  function closeCartHandler(){
    setIsOpen(false);
  }
  return (
    <CartProvider>
      {isOpen && <Cart onCloseCart={closeCartHandler}/>}
      <Header onOpenCart={openCartHandler}/>
      <Dishes />
    </CartProvider>
  );
}

export default App;
