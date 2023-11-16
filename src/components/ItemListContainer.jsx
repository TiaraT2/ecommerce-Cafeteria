import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = ({}) => {
  const { type } = useParams();

  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "menu");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductos(docs);
    });
  }, []);

  const filterProduct = productos.filter((product) => product.type === type);

  return (
    <div>
      <Center p="1rem">
        {type ? (
          <ItemList productos={filterProduct} />
        ) : (
          <ItemList productos={productos} />
        )}
      </Center>
    </div>
  );
};

export default ItemListContainer;
