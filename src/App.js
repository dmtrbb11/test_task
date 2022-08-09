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
      imgURL: "/img/item3.png",
      itemName: "Фитнес-трекер HONOR Band 5 CRS-B19S, 0.95 розовый",
      itemPrice: "2390 ₽",
    },
    {
      imgURL: "/img/item4.png",
      itemName:
        "Мышь A4TECH Bloody V3, игровая, оптическая, проводная, USB, черный",
      itemPrice: "960 ₽",
    },
    {
      imgURL: "/img/item5.png",
      itemName: "Фитнес-трекер HONOR Band 5 CRS-B19S, 0.95 черный",
      itemPrice: "2390 ₽",
    },
    {
      imgURL: "/img/item6.png",
      itemName: "Пылесос SINBO SVC 3497, 2500Вт, синий/серый",
      itemPrice: "5670 ₽",
    },
    {
      imgURL: "/img/item7.png",
      itemName: "Планшет DIGMA Optima 7 Z800 Android 10.0 серебристый",
      itemPrice: "9490 ₽",
    },
    {
      imgURL: "/img/item8.png",
      itemName: "Монитор игровой ACER Nitro RG241YPbiipx 23.8 черный",
      itemPrice: "16 800 ₽",
    },
    {
      imgURL: "/img/item9.png",
      itemName: "Экшн-камера DIGMA DiCam 310 4K, WiFi, черный",
      itemPrice: "2290 ₽",
    },
    {
      imgURL: "/img/item10.png",
      itemName:
        "Умная колонка ЯНДЕКС c голосовым помощником Алисой, серебристый",
      itemPrice: "5670 ₽",
    },
    {
      imgURL: "/img/item11.png",
      itemName: "Квадрокоптер DJI Mini 2MT2PD Fly More Combo с камерой, серый",
      itemPrice: "60 990 ₽",
    },
    {
      imgURL: "/img/item12.png",
      itemName:
        "Шлем виртуальной реальности HTC Vive PRO Eye EEA, черный/синий",
      itemPrice: "11 960 ₽",
    },
    {
      imgURL: "/img/item13.png",
      itemName: "МФУ лазерный CANON i-Sensys MF445dw, A4, лазерный, черный",
      itemPrice: "35 310 ₽",
    },
    {
      imgURL: "/img/item14.png",
      itemName: "Смарт-часы AMAZFIT Bip U, 1.43 зеленый / зеленый",
      itemPrice: "4490 ₽",
    },
    {
      imgURL: "/img/item15.png",
      itemName: "Кофемашина PHILIPS EP1224/00, серый/черный",
      itemPrice: "29 990 ₽",
    },
    {
      imgURL: "/img/item16.png",
      itemName: "Гироскутер MIZAR MZ10,5CN, 10.5 карбон",
      itemPrice: "12 990 ₽",
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
