import "./style.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <h1 className="items_h1">Каталог товаров</h1>
      <section className="items_list"></section>
    </div>
  );
}

export default App;
