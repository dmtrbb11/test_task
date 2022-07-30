import React, { useEffect, useRef } from "react";
import styles from "./Item.module.css";
import { useState } from "react";

let Item = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMargin, setIsMargin] = useState(false);
  const isMarginRef = useRef(isMargin);
  isMarginRef.current = isMargin;

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // изменение стилей по наведению
  const imgStyle = {
    marginBottom: isHovering && window.innerWidth > 690  ? 4 : null,
  };

  const priceStyle = {
    marginBottom: isHovering && window.innerWidth > 690 ? 15 : null,
  };

  // появление кнопки через 1сек, при помощи IsMargin
  useEffect(() => {
    if (isHovering === true) {
      setTimeout(() => {
        setIsMargin(true);
      }, 1000);
    } else {
      setTimeout(() => {
        setIsMargin(false);
      }, 0);
    }
  }, [isHovering]);

  return (
    <div
      className={styles.item}
      onMouseOver={() => handleMouseOver()}
      onMouseOut={() => handleMouseOver()} // заменить на handleMouseOver и при отводке курсора все останется на месте(handleMouseOut)
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
        1650 ₽
      </span>
      {isMargin && window.innerWidth > 690 ? (
        <button className={styles.addToCard_btn}>добавить в корзину</button>
      ) : null}
      {window.innerWidth <= 690 ? <button className={styles.addToCard_btn}>добавить в корзину</button> : null}
    </div>
  );
};

export default Item;
