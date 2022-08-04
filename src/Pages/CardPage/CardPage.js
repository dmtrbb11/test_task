import styles from "./CardPage.module.css";
import CardItem from "../../Components/CardItem/CardItem";
import React from "react";
import InputMask from "react-input-mask";

let CardPage = (props) => {
  const [makeOrderClicked, setmakeOrderClicked] = React.useState(false);

  const [nameInput, setNameInput] = React.useState("");
  const [phoneInput, setPhoneInput] = React.useState("");
  const [mailInput, setMailInput] = React.useState("");
  const [nameCorrect, setNameCorrect] = React.useState(true);
  const [phoneCorrect, setPhoneCorrect] = React.useState(true);
  const [mailCorrect, setmailCorrect] = React.useState(true);

  // сумма заказа
  let sum = 0;
  for (let i = 0; i < props.cardArr.length; i++) {
    sum = sum + parseInt(props.cardArr[i].itemPrice.replace(/[^0-9]/g, ""));
  }
  //

  const makeOrder = () => {};

  // INPUT STYLES ////////////////////////

  // const inputMailStyle = {
  //   outlineColor: mailCorrect ? "#4892EC" : "#E86880",
  //   outlineStyle: "solid",
  //   outlineWidth: 1,
  // };

  // const inputEmptyStyle = {
  //   outlineColor: "#E86880",
  //   outlineStyle: "solid",
  //   outlineWidth: 1,
  // };
  // const makeOrderBtnStyle = {
  //   opacity:
  //     nameInput !== "" && phoneInput !== "" && mailInput !== ""
  //       ? "100%"
  //       : "50%",
  //   cursor:
  //     nameInput !== "" && phoneInput !== "" && mailInput !== ""
  //       ? "pointer"
  //       : "default",
  // };

  ////////////////////////////////////////

  // MAIL INPUT ////////////////////////
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const mailCorrectCheck = (event) => {
    setMailInput(event.target.value);
    if (!isValidEmail(event.target.value)) {
      setmailCorrect(false);
    } else {
      setmailCorrect(true);
    }
  };
  /////////////////////////////////////////

  // NAME INPUT /////////////////////////
  const nameInputComponent = function () {
    if (nameCorrect === true) {
      return (
        <input
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          className={styles.formInput_name}
          placeholder={"Ваше имя"}
        />
      );
    } else {
      return (
        <input
          value={nameInput}
          // style={inputEmptyStyle}
          onChange={(e) => setNameInput(e.target.value)}
          className={styles.formInput_name}
          placeholder={"Ваше имя"}
        />
      );
    }
  };
  ///////////////////////////////////////////
  // TELEPHONE INPUT /////////////////////////
  const telephoneInputComponent = function () {
    if (phoneCorrect === true) {
      return (
        <InputMask
          value={phoneInput}
          onChange={(e) => setPhoneInput(e.target.value)}
          className={styles.formInput_phone}
          placeholder="+7(___) ___ - __ - __"
          mask="+7(999) 999-99-99"
          maskChar=" "
        />
      );
    } else {
      return (
        <InputMask
          value={phoneInput}
          // style={inputEmptyStyle}
          onChange={(e) => setPhoneInput(e.target.value)}
          className={styles.formInput_phone}
          placeholder="+7(___) ___ - __ - __"
          mask="+7(999) 999-99-99"
          maskChar=" "
        />
      );
    }
  };
  ///////////////////////////////////////////

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
          {nameInputComponent()}
          {telephoneInputComponent()}
          <input
            value={mailInput}
            onChange={mailCorrectCheck}
            // style={
            //   mailInput !== "" && mailCorrect === false ? inputMailStyle : null
            // }
            className={styles.formInput_mail}
            placeholder={"Email"}
          />

          <button
            onClick={() => makeOrder()}
            // style={makeOrderBtnStyle}
            className={styles.form_btn}
          >
            оформить заказ
          </button>
        </div>
      </section>
    </div>
  );
};

export default CardPage;
