import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.map((p) => {
        return (
          <Item
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            description={p.description}
            price={p.price}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
