import React, { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import {
  Card,
  CardBody,
  Stack,
  CardFooter,
  Button,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  useToast,
  Center,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const { addItem } = useContext(CartContext);
  const [quantityAdded, setQuantityAdded] = useState(1);
  const selectedProduct = productos;
  const toast = useToast();

  const agregarAlCarrito = () => {
    if (!isNaN(quantityAdded) && quantityAdded > 0) {
      const item = {
        id,
        name: selectedProduct.name,
        price: selectedProduct.price,
      };
      addItem(item, quantityAdded);
    } else {
      console.log("Cantidad inválida");
    }
  };

  return (
    <div>
      <Center height="50px">
        <Divider orientation="vertical" />
      </Center>
      <Center>
        <Card maxW="sm">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">{selectedProduct.name}</Heading>
              <img src={selectedProduct.img} alt={selectedProduct.name} />
              <Text>{selectedProduct.type}</Text>
              <Text>{selectedProduct.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                ${selectedProduct.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <ItemCount />
              <Button
                onClick={() => {
                  agregarAlCarrito();
                  toast({
                    title: "Agregado.",
                    description: "Agregado al carrito.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                }}
                bg="brand.primary"
              >
                Agregar al carrito
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Center>
    </div>
  );
};

export default ItemDetail;
