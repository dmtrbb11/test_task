import styles from "./Item.module.css";
import { useState } from "react";

let Item = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={styles.item}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img className={styles.item_img} src="/img/item1.png" alt="" />
      <p className={styles.item_txt}>
        Увлажнитель воздуха STARWIND SHC1322, 3л, белый
      </p>
      <span className={styles.item_price}>1650 ₽</span>
      {isHovering && <button className={styles.addToCard_btn}>добавить в корзину</button>}
    </div>
  );
};

export default Item;
