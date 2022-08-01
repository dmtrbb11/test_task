import styles from "./CardPage.module.css";
import CardItem from "../../Components/CardItem/CardItem";
import React, { useEffect } from "react";

let CardPage = (props) => {

  return (
    <div>
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
    </div>
  );
};

export default CardPage;
