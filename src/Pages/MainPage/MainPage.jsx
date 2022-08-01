import Item from "../../Components/Item/Item";

let MainPage = ({ itemsArr, cardCount, setCardCount, cardArr, setCardArr }) => {
  return (
    <div>
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
};

export default MainPage;
