import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "../../UI/CartIcon/CartIcon";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cardCtx = useContext(CartContext);
  const numberOfCartItems = cardCtx.items.reduce((currNumber, item) => { 
    return currNumber + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onShow}>
    <span className={styles.icon}>
      <CartIcon />
    </span>
    <span>{props.label}</span>
    <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
