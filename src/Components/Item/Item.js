import React, { useEffect, useRef } from "react";
import styles from "./Item.module.css";
import { useState } from "react";

let Item = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMargin, setIsMargin] = useState(false);
  const [BtnClicked, setBtnClicked] = useState(false);
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
    marginBottom: isHovering && window.innerWidth > 690 ? 4 : null,
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

  const addToCard = () => {
    setBtnClicked(true);
    if (
      props.cardArr.find((el) => {
        return el.itemName === props.item.itemName;
      })
    ) {
    } else {
      props.setCardCount(props.cardCount + 1);
      props.setCardArr((prev) => {
        return [...prev, props.item];
      });
    }
  };

  return (
    <div
      style={window.innerWidth <= 690 ? { height: 590 } : null}
      className={styles.item}
      onMouseOver={() => handleMouseOver()}
      onMouseOut={() => handleMouseOver()} // заменить на handleMouseOver и при отводке курсора все останется на месте(handleMouseOut)
    >
      <img
        style={imgStyle}
        className={styles.item_img}
        src={props.imgURL}
        alt="itemLogo"
      />
      <p className={styles.item_txt}>{props.itemName}</p>
      <span style={priceStyle} className={styles.item_price}>
        {props.itemPrice}
      </span>
      {/* Button on width > 690 */}
      {isMargin && window.innerWidth > 690 ? (
        <button
          onClick={addToCard}
          style={
            BtnClicked
              ? { backgroundColor: "#00A82D" }
              : { backgroundColor: "#296DC1" }
          }
          className={styles.addToCard_btn}
        >
          {BtnClicked ? "В корзине" : "добавить в корзину"}
        </button>
      ) : null}
      {/* Button on width <= 690 */}
      {window.innerWidth <= 690 ? (
        <button
          onClick={addToCard}
          style={
            BtnClicked
              ? { backgroundColor: "#00A82D" }
              : { backgroundColor: "#296DC1" }
          }
          className={styles.addToCard_btn}
        >
          {BtnClicked ? "В корзине" : "добавить в корзину"}
        </button>
      ) : null}
      {/* Button on width <= 690 */}
    </div>
  );
};

export default Item;
