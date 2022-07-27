import styles from "./Header.module.css";

let Header = (props) => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src="/img/logo.png" alt="" />
      <div className={styles.right_header}>
        <img src="/img/basket.png" alt="" />
        <span className={styles.basket_txt}>Корзина</span>
        <span className={styles.basket_counter}>1</span>
      </div>
    </div>
  );
};

export default Header;
