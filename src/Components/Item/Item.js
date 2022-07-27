import styles from "./Item.module.css";

let Item = (props) => {
  return (
    <div className={styles.item}>
      <img className={styles.item_img} src="/img/item1.png" alt="" />
      <p className={styles.item_txt}>
        Увлажнитель воздуха STARWIND SHC1322, 3л, белый
      </p>
      <span className={styles.item_price}>1650 ₽</span>
    </div>
  );
};

export default Item;
