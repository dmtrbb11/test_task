import styles from "./Header.module.css";
import { Link } from "react-router-dom";
let Header = (props) => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src="/img/logo.png" alt="" />
      </Link>
      {props.cardArr.length > 0 ? (
        <Link to="/card">
          <div style={{ cursor: "pointer" }} className={styles.right_header}>
            <img src="/img/basket.png" alt="" />
            <span className={styles.basket_txt}>Корзина</span>
            <span style={{ opacity: 1 }} className={styles.basket_counter}>
              {props.cardCount}
            </span>
          </div>
        </Link>
      ) : (
        <div style={{ cursor: "default" }} className={styles.right_header}>
          <img src="/img/basket.png" alt="" />
          <span className={styles.basket_txt}>Корзина</span>
          <span style={{ opacity: 0 }} className={styles.basket_counter}>
            {props.cardCount}
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
