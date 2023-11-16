import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Center, Spinner } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const oneItem = doc(db, "menu", `${id}`);

      try {
        const snapshot = await getDoc(oneItem);
        if (snapshot.exists()) {
          const docs = {
            id: snapshot.id,
            ...snapshot.data(),
          };
          setProductos(docs);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!productos) {
    return (
      <Center>
        {" "}
        <Spinner />
      </Center>
    );
  }

  return <ItemDetail productos={productos} id={id} />;
};

export default ItemDetailContainer;
