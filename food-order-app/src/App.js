import { useState } from "react";
import Cart from "./components/Cart/Cart/Cart";
// import './App.css';
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (() => {
    setCartIsShown(true);
  });

  const hideCartHandler = (() => {
    setCartIsShown(false);
  });

  return (
    <CartProvider>
      {cartIsShown && <Cart onHide={hideCartHandler}/>}
      <Header onShow={showCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
