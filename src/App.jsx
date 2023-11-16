import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import Form from "./components/Form";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ShoppingCartProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/form" element={<Form />} />
            <Route
              exact
              path="/product/:id"
              element={<ItemDetailContainer />}
            />
            <Route
              exact
              path="/categoria/:type"
              element={<ItemListContainer />}
            />
          </Routes>
        </ShoppingCartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
