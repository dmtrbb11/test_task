import React from "react";
import styles from "./CardItem.module.css";

let CardItem = (props) => {
  const [count, setCount] = React.useState(0);
  const minusCount = () => {
    if (count > 0 && count <= 10) {
      setCount(count - 1);
    }
  };
  const plusCount = () => {
    if (count <= 0 || count < 10) {
      setCount(count + 1);
    }
  };
  const deleteItem = () => {
    props.setCardArr(
      props.cardArr.filter((e) => {
        return e.itemName !== props.itemName;
      })
    );
    props.setCardCount(props.cardCount - 1);
  };
  return (
    <div>
      {window.innerWidth > 690 ? (
        <div className={styles.cardItem}>
          <img className={styles.cardItem_img} src={props.imgURL} alt="" />
          <p className={styles.cardItem_name}>{props.itemName}</p>
          <div className={styles.counter}>
            <button
              onClick={() => minusCount()}
              className={styles.counter_minus}
            ></button>
            <span className={styles.counter_value}>{count}</span>
            <button
              onClick={() => plusCount()}
              className={styles.counter_plus}
            ></button>
          </div>
          <span className={styles.cardItem_price}>{props.itemPrice}</span>
          <div>
            <button
              onClick={() => deleteItem()}
              style={{ backgroundImage: `url("/img/delete_btn.png")` }}
              className={styles.deleteItem_btn}
            ></button>
          </div>
        </div>
      ) : null}
      {window.innerWidth <= 690 ? (
        <div className={styles.cardItem}>
          <img className={styles.cardItem_img} src={props.imgURL} alt="" />
          <p className={styles.cardItem_name}>{props.itemName}</p>
          <div className={styles.mobile_wraper}>
            <span className={styles.cardItem_price}>{props.itemPrice}</span>
            <div className={styles.counter}>
              <button
                onClick={() => minusCount()}
                className={styles.counter_minus}
              ></button>
              <span className={styles.counter_value}>{count}</span>
              <button
                onClick={() => plusCount()}
                className={styles.counter_plus}
              ></button>
            </div>
            <div className={styles.deleteBtn}>
              <button
                onClick={() => deleteItem()}
                className={styles.deleteItem_btn}
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CardItem;
