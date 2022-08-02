import styles from "./CardPage.module.css";
import CardItem from "../../Components/CardItem/CardItem";
import React from "react";

let CardPage = (props) => {
  let sum = 0;
  for (let i = 0; i < props.cardArr.length; i++) {
    sum = sum + parseInt(props.cardArr[i].itemPrice.replace(/[^0-9]/g, ""));
  }
  console.log(sum);
  return (
    <div>
      <div className="container">
        <h1 className="items_h1">Корзина</h1>
        <section className={styles.itemsCard_list}>
          {props.cardArr.map((e, index) => {
            return (
              <CardItem
                key={index}
                cardCount={props.cardCount}
                setCardCount={props.setCardCount}
                cardArr={props.cardArr}
                setCardArr={props.setCardArr}
                imgURL={e.imgURL}
                itemName={e.itemName}
                itemPrice={e.itemPrice}
                item={e}
              />
            );
          })}
        </section>
        <div className={styles.total_price}>Сумма {sum} ₽ </div>
      </div>
      <section className={styles.form}>
        <div className={styles.form_wrapper}>
          <span className={styles.form_h1}>Пожалуйста, представьтесь</span>
          <input className={styles.formInput_name} placeholder={"Ваше имя"} />
          <input
            className={styles.formInput_phone}
            placeholder="+7(___) ___ - __ - __"
          />
          <input className={styles.formInput_mail} placeholder={"Email"} />
          <button className={styles.form_btn}>оформить заказ</button>
        </div>
      </section>
    </div>
  );
};

export default CardPage;
