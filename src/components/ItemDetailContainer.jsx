import React from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const productos = [
    {
      id: 1,
      name: "Café Americano",
      type: "Bebida",
      description: "Café negro recién hecho",
      price: 2.99,
    },
    {
      id: 2,
      name: "Café Latte",
      type: "Bebida",
      description: "Café con leche y espuma de leche",
      price: 3.49,
    },
    {
      id: 3,
      name: "Café Mocha",
      type: "Bebida",
      description: "Café con chocolate y crema batida",
      price: 3.99,
    },
    {
      id: 4,
      name: "Pastel de Chocolate",
      type: "Pastel",
      description: "Delicioso pastel de chocolate",
      price: 4.99,
    },
    {
      id: 5,
      name: "Pastel de Fresa",
      type: "Pastel",
      description: "Pastel de fresa fresca",
      price: 4.99,
    },
    {
      id: 6,
      name: "Pastel de Zanahoria",
      type: "Pastel",
      description: "Pastel de zanahoria con nueces",
      price: 5.49,
    },
    {
      id: 7,
      name: "Combo Americano",
      type: "Combo",
      description: "Café Americano y pastel de chocolate",
      price: 6.99,
    },
    {
      id: 8,
      name: "Combo Latte",
      type: "Combo",
      description: "Café Latte y pastel de fresa",
      price: 7.49,
    },
    {
      id: 9,
      name: "Combo Mocha",
      type: "Combo",
      description: "Café Mocha y pastel de zanahoria",
      price: 8.49,
    },
  ];

  return (
    <>
    
       <ItemDetail productos={productos}/>

    </>
  );
};

export default ItemDetailContainer;
