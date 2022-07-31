import { useState } from "react";
import "./style.css";
import Header from "./Components/Header/Header";
import Item from "./Components/Item/Item";

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
    <div className="container">
      <Header cardCount={cardCount} cardArr={cardArr} />
      <h1 className="items_h1">Каталог товаров</h1>
      <section className="items_list">
        {itemsArr.map((e, index) => {
          return (
            <Item
              cardCount={cardCount}
              setCardCount={setCardCount}
              key={index}
              cardArr={cardArr}
              setCardArr={setCardArr}
              imgURL={e.imgURL}
              itemName={e.itemName}
              itemPrice={e.itemPrice}
              item={e}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
