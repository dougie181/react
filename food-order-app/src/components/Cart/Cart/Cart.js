import React, { useContext } from "react";
import Modal from "../../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../../store/cart-context";
import CartItem from "../CartItem/CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = ((id) => {
    cartCtx.removeItem(id);
  });

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null,item)}
            onRemove={cartItemRemoveHandler.bind(null,item.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onHide={props.onHide}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHide}>
          Close
        </button>
        {hasItems && (
          <button className={styles.button} onClick={props.onShow}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
