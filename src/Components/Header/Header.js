import styles from "./Header.module.css";

let Header = (props) => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src="/img/logo.png" alt="" />
      <div
        style={
          props.cardArr.length > 0
            ? { cursor: "pointer" }
            : { cursor: "default" }
        }
        className={styles.right_header}
      >
        <img src="/img/basket.png" alt="" />
        <span className={styles.basket_txt}>Корзина</span>
        <span
          style={props.cardArr.length > 0 ? { opacity: 1 } : { opacity: 0 }}
          className={styles.basket_counter}
        >
          {props.cardCount}
        </span>
      </div>
    </div>
  );
};

export default Header;
