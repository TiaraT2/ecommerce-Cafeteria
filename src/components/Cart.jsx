import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  Center,
  useDisclosure,
  Container,
  Box,
  Divider,
} from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContext";

const Cart = () => {
  const { cart, clearCart, totalQuantity, totalPrice, removeItem } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <Container>
          <Center>
            <h2>Vacío</h2>
          </Center>
          <Divider orientation="vertical" />
          <Center height="50px">
            <Button bg="brand.secondary" as={Link} to="/" className="Option">
              Volver
            </Button>
          </Center>
        </Container>
      </div>
    );
  }

  const DiscardAlertDialog = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();

    return (
      <>
        <Button bg="brand.terciary" onClick={onOpen}>
          Descartar
        </Button>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>¿Descartar cambios?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              ¿Está seguro de borrar el carrito?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button onClick={clearCart} colorScheme="red" ml={3}>
                Sí
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    );
  };

  return (
    <div>
      <Container padding="15px" bg="cinco">
        <Box>
          <h2>Contenido del carrito:</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - Cantidad: {item.quantity} - Precio por unidad: $
                {item.price}{" "}
                <Button
                  onClick={() => removeItem(item.id)}
                  colorScheme="red"
                  size="xs"
                >
                  Eliminar
                </Button>
              </li>
            ))}
            <h3>Total: ${totalPrice}</h3>
            <DiscardAlertDialog />
            <Button bg="brand.secondary" as={Link} to="/form" variant="solid">
              Finalizar compra
            </Button>
          </ul>
        </Box>
      </Container>
    </div>
  );
};

export default Cart;
