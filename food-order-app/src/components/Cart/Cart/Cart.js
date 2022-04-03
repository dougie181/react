import React from "react";
import Modal from "../../UI/Modal/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onHide={props.onHide}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.63</span>
      </div>

      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onHide}>Close</button>
        <button className={styles.button} onClick={props.onShow}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
