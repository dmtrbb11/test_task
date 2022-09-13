import styles from "./CardPage.module.css";
import CardItem from "../../Components/CardItem/CardItem";
import React from "react";
import InputMask from "react-input-mask";
import validator from "validator";
import { Link } from "react-router-dom";

let CardPage = (props) => {
  const [nameInput, setNameInput] = React.useState("");
  const [phoneInput, setPhoneInput] = React.useState("");
  const [mailInput, setMailInput] = React.useState("");
  const [mailCorrect, setmailCorrect] = React.useState(true);
  const [makeOrderClicked, setMakeOrderClicked] = React.useState(false);
  const [randomNum, setRandomNum] = React.useState(0);

  // сумма заказа
  console.log(props.cardArr);
  let sum = 0;
  for (let i = 0; i < props.cardArr.length; i++) {
    sum = sum + parseInt(props.cardArr[i].itemPrice.replace(/[^0-9]/g, ""));
  }
  //

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // кнопка оформления заказа
  const makeOrder = () => {
    if (makeOrderBtnStyle.opacity === "100%") {
      setMakeOrderClicked(true);
      props.setCardArr([]);
      props.setCardCount(0);
      setRandomNum(randomNumberInRange(1, 999999));
    }
  };
  //
  // INPUT STYLES ////////////////////////

  const inputMailStyle = {
    outlineColor: mailCorrect ? null : "#E86880",
    outlineStyle: "solid",
    outlineWidth: 1,
  };

  const makeOrderBtnStyle = {
    opacity:
      nameInput !== "" &&
      phoneInput !== "" &&
      mailInput !== "" &&
      mailCorrect === true &&
      phoneInput[4] > 0 &&
      phoneInput[5] > 0 &&
      phoneInput[6] > 0 &&
      phoneInput[9] > 0 &&
      phoneInput[10] > 0 &&
      phoneInput[11] > 0 &&
      phoneInput[15] > 0 &&
      phoneInput[16] > 0 &&
      phoneInput[20] > 0 &&
      phoneInput[21] > 0
        ? "100%"
        : "50%",
    cursor:
      nameInput !== "" &&
      phoneInput !== "" &&
      mailInput !== "" &&
      mailCorrect === true &&
      phoneInput[4] > 0 &&
      phoneInput[5] > 0 &&
      phoneInput[6] > 0 &&
      phoneInput[9] > 0 &&
      phoneInput[10] > 0 &&
      phoneInput[11] > 0 &&
      phoneInput[15] > 0 &&
      phoneInput[16] > 0 &&
      phoneInput[20] > 0 &&
      phoneInput[21] > 0
        ? "pointer"
        : "default",
  };

  ////////////////////////////////////////

  // MAIL CHECK ////////////////////////
  const mailCorrectCheck = (event) => {
    setMailInput(event.target.value);
    if (validator.isEmail(event.target.value)) {
      setmailCorrect(true);
    } else {
      setmailCorrect(false);
    }
  };
  /////////////////////////////////////////

  return (
    <div className={styles.CardPageWrapper}>
      {makeOrderClicked ? (
        <div className={styles.black_bg}>
          <div className={styles.popup_wrapper}>
            <div className={styles.btn_right}>
              <Link to="/">
                <button
                  style={{ backgroundImage: `url("/img/popup_deleteBtn.png")` }}
                  className={styles.popup_btn}
                ></button>
              </Link>
            </div>

            <div className={styles.popup_name}>
              Спасибо{" "}
              <span className={styles.popup_fatWeight}>{nameInput}</span>, ваш
              заказ <span className={styles.popup_fatWeight}>№{randomNum}</span>{" "}
              оформлен.
            </div>
            <div className={styles.popup_phone}>
              В ближайшее время мы свяжемся с вами по телефону{" "}
              <span className={styles.popup_fatWeight}>{phoneInput}</span> для
              его подтверждения.
            </div>
          </div>
        </div>
      ) : null}

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

          <input
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            className={styles.formInput_name}
            placeholder={"Ваше имя"}
          />
          <InputMask
            value={phoneInput}
            onChange={(e) => setPhoneInput(e.target.value)}
            className={styles.formInput_phone}
            placeholder="+7(___) ___ - __ - __"
            mask="+7 (999) 999 - 99 - 99"
            maskChar=" "
          />
          <input
            value={mailInput}
            onChange={mailCorrectCheck}
            style={
              mailInput !== "" && mailCorrect === false ? inputMailStyle : null
            }
            className={styles.formInput_mail}
            placeholder={"Email"}
          />
          {mailInput !== "" && mailCorrect === false ? (
            <p className={styles.mailIncorrect}>Поле заполнено неверно </p>
          ) : null}
          <button
            onClick={() => makeOrder()}
            style={makeOrderBtnStyle}
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
