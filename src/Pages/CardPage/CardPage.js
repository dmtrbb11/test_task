import styles from "./CardPage.module.css";
import CardItem from "../../Components/CardItem/CardItem";
import React from "react";
import InputMask from "react-input-mask";
import validator from "validator";

let CardPage = (props) => {
  const [nameInput, setNameInput] = React.useState("");
  const [phoneInput, setPhoneInput] = React.useState("");
  const [mailInput, setMailInput] = React.useState("");
  const [mailCorrect, setmailCorrect] = React.useState(true);

  // сумма заказа
  let sum = 0;
  for (let i = 0; i < props.cardArr.length; i++) {
    sum = sum + parseInt(props.cardArr[i].itemPrice.replace(/[^0-9]/g, ""));
  }
  //

  const makeOrder = () => {
    if (makeOrderBtnStyle.opacity === "100%") {
      console.log("u can click");
    }
  };

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
      phoneInput[3] > 0 &&
      phoneInput[4] > 0 &&
      phoneInput[5] > 0 &&
      phoneInput[8] > 0 &&
      phoneInput[9] > 0 &&
      phoneInput[10] > 0 &&
      phoneInput[12] > 0 &&
      phoneInput[13] > 0 &&
      phoneInput[15] > 0 &&
      phoneInput[16] > 0
        ? "100%"
        : "50%",
    cursor:
      nameInput !== "" &&
      phoneInput !== "" &&
      mailInput !== "" &&
      mailCorrect === true &&
      phoneInput[3] > 0 &&
      phoneInput[4] > 0 &&
      phoneInput[5] > 0 &&
      phoneInput[8] > 0 &&
      phoneInput[9] > 0 &&
      phoneInput[10] > 0 &&
      phoneInput[12] > 0 &&
      phoneInput[13] > 0 &&
      phoneInput[15] > 0 &&
      phoneInput[16] > 0
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
      <div className={styles.black_bg}>
        <div className={styles.popup_wrapper}>
          <button
            style={{ backgroundImage: `url("/img/popup_deleteBtn.png")` }}
            className={styles.popup_btn}
          ></button>
          <div className={styles.popup_name}>
            Спасибо Татьяна, ваш заказ №165796 оформлен.
          </div>
          <div className={styles.popup_phone}>
            В ближайшее время мы свяжемся с вами по телефону +7 (999) 999 - 99 -
            99 для его подтверждения.
          </div>
        </div>
      </div>
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
            mask="+7(999) 999-99-99"
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
