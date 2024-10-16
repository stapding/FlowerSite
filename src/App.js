import Header from "./components/Header";
import Promo from "./components/Promo";
import Products from "./components/Products"
import React, { useState } from 'react';
import ShowLogin from './components/ShowLogin';

function App() {
  const [showFullItem, setShowFullItem] = useState(false); // Добавляем состояние showFullItem
  return (
    <div className="wrapper">
      <Header showFullItem={showFullItem} setShowFullItem={setShowFullItem}/>
      <Promo />
      <Products />
      {showFullItem && <ShowLogin setShowFullItem={setShowFullItem}/>}
    </div>
  );
}

export default App;
