import styles from "./Item.module.css";
import { useState } from "react";

let Item = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };

  // const handleMouseOverTime = () => {
  //   setTimeout(handleMouseOver, 1000);
  // };

  // const handleMouseOutTime = () => {
  //   setTimeout(handleMouseOver, 1000);
  // };

  const imgStyle = {
    marginBottom: isHovering ? 4 : null,
  };

  const priceStyle = {
    marginBottom: isHovering ? 15 : null,
  };

  return (
    <div
      className={styles.item}
      onMouseOver={() => handleMouseOver()}
      onMouseOut={() => handleMouseOver()}
    >
      <img
        style={imgStyle}
        className={styles.item_img}
        src="/img/item1.png"
        alt=""
      />
      <p className={styles.item_txt}>
        Увлажнитель воздуха STARWIND SHC1322, 3л, белый
      </p>
      <span style={priceStyle} className={styles.item_price}>
        {isHovering ? "true" : "false"}
      </span>
      {}
      {isHovering ? (
        <button className={styles.addToCard_btn}>добавить в корзину</button>
      ) : null}
    </div>
  );
};

export default Item;
