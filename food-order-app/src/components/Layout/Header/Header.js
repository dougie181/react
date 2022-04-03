import { Fragment } from "react";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

import styles from "./Header.module.css";
import mealsImage from "../../../images/meals.jpeg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton label="Your Cart" cartCount='2' onShow={props.onShow}/>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
