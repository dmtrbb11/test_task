import Item from "../../Components/Item/Item";
import styles from "./MainPage.module.css";

let MainPage = ({ itemsArr, cardCount, setCardCount, cardArr, setCardArr }) => {
  return (
    <div className={styles.mainPage_wrapper}>
      <div className="container">
        <h1 className="items_h1">Каталог товаров</h1>
        <section className="items_list" style={{ marginBottom: 127 }}>
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
    </div>
  );
};

export default MainPage;
