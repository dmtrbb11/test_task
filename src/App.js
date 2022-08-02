import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import Header from "./Components/Header/Header";
import MainPage from "./Pages/MainPage/MainPage";
import CardPage from "./Pages/CardPage/CardPage";

function App() {
  const [cardCount, setCardCount] = useState(0);
  const [itemsArr, setItemsArr] = useState([
    {
      imgURL: "/img/item1.png",
      itemName: "Увлажнитель воздуха STARWIND SHC1322, 3л, белый",
      itemPrice: "1650 ₽",
    },
    {
      imgURL: "/img/item2.png",
      itemName: "Триммер PHILIPS HC3521/15 серебристый/черный",
      itemPrice: "2290 ₽",
    },
    {
      imgURL: "/img/item2.png",
      itemName: "Триммер PHILIPS HC3521/15 серебристый/черный",
      itemPrice: "2290 ₽",
    },
    {
      imgURL: "/img/item2.png",
      itemName: "Пылесос SINBO SVC 3497,2500Вт, синий/серый",
      itemPrice: "2290 ₽",
    },
    {
      imgURL: "/img/item2.png",
      itemName: "Триммер PHILIPS HC3521/15 серебристый/черный",
      itemPrice: "2290 ₽",
    },
    {
      imgURL: "/img/item2.png",
      itemName: "Триммер PHILIPS HC3521/15 серебристый/черный",
      itemPrice: "2290 ₽",
    },
  ]);
  const [cardArr, setCardArr] = useState([]);
  return (
    <div>
      <Header cardCount={cardCount} cardArr={cardArr} />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              itemsArr={itemsArr}
              cardCount={cardCount}
              setCardCount={setCardCount}
              cardArr={cardArr}
              setCardArr={setCardArr}
            />
          }
        ></Route>
        <Route
          path="/card"
          element={
            <CardPage
              itemsArr={itemsArr}
              cardCount={cardCount}
              setCardCount={setCardCount}
              cardArr={cardArr}
              setCardArr={setCardArr}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
