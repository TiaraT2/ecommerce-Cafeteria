import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/cart";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/product/:id" element={<ItemDetailContainer />} />
          <Route exact path="/categoria/:type" element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
