import styles from "./CardItem.module.css";

let CardItem = (props) => {
  return (
    <div className={styles.cardItem}>
      <img className={styles.cardItem_img} src={props.imgURL} alt="" />
      <p className={styles.cardItem_name}>{props.itemName}</p>
      <div className={styles.counter}>
        <button className={styles.counter_minus}></button>
        <span className={styles.counter_value}>{1}</span>
        <button className={styles.counter_plus}></button>
      </div>
      <span className={styles.cardItem_price}>{props.itemPrice}</span>
      <div>
        <button
          style={{ backgroundImage: `url("/img/delete_btn.png")` }}
          className={styles.deleteItem_btn}
        ></button>
      </div>
    </div>
  );
};

export default CardItem;
