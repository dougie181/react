import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "../../UI/CartIcon/CartIcon";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cardCtx = useContext(CartContext);
  
  const { items } = cardCtx;

  const numberOfCartItems = items.reduce((currNumber, item) => { 
    return currNumber + item.amount;
  }, 0);

  const btnStyles= `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    },300);

    return (() => {
      clearTimeout(timer);
    });
  }, [items]);

  return (
    <button className={btnStyles} onClick={props.onShow}>
    <span className={styles.icon}>
      <CartIcon />
    </span>
    <span>{props.label}</span>
    <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
