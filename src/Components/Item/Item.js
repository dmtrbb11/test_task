import React from "react";
import styles from "./Item.module.css";
import { useState } from "react";

let Item = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [BtnClicked, setBtnClicked] = useState(false);


  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // изменение стилей по наведению
  const imgStyle = {
    marginBottom:
      (isHovering && window.innerWidth > 690) ||
      (BtnClicked && window.innerWidth > 690)
        ? 4
        : null,
    transition: BtnClicked ? "0s" : "1s",
  };

  const priceStyle = {
    marginBottom:
      (isHovering && window.innerWidth > 690) ||
      (BtnClicked && window.innerWidth > 690)
        ? 15
        : null,
    transition: BtnClicked ? "0s" : "1s",
  };

  const btnStyle = {
    backgroundColor: BtnClicked ? "#00A82D" : "#296DC1",
    opacity: isHovering || BtnClicked ? 1 : 0,
    transition: BtnClicked || isHovering === false ? "0s" : "1.3s",
  };
  ////////////////////////////////

  // при переходе из корзины на главную, кнопка зеленая и написано "в корзине"
  React.useEffect(() => {
    if (
      props.cardArr.find((el) => {
        return el.itemName === props.item.itemName;
      })
    ) {
      setBtnClicked(true);
    }
  }, [props.cardArr]);

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
    // console.log(props.cardArr, props.cardCount);
  };

  return (
    <div
      style={window.innerWidth <= 690 ? { height: 590 } : null}
      className={styles.item}
      onMouseOver={() => handleMouseOver()}
      onMouseOut={() => handleMouseOut()}
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
      {window.innerWidth > 690 ? (
        <button
          onClick={addToCard}
          style={btnStyle}
          className={styles.addToCard_btn}
        >
          {BtnClicked ? "В корзине" : "добавить в корзину"}
        </button>
      ) : null}
      {/* Button on width > 690 */}

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
