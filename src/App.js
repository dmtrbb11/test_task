import "./style.css";
import Header from "./Components/Header/Header";
import Item from "./Components/Item/Item";

function App() {
  return (
    <div className="container">
      <Header />
      <h1 className="items_h1">Каталог товаров</h1>
      <section className="items_list">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </section>
    </div>
  );
}

export default App;
