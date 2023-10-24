import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import useCounter from "./useCounter.js";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const filteredProduct = productos.filter((producto) => producto.id == id);

  const { count, increment, decrement } = useCounter(0, 1);

  return (
    <div>
      {filteredProduct.map((p) => {
        return (
          <Card maxW="sm">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">{p.name}</Heading>
                <Text>{p.type}</Text>
                <Text>{p.description}</Text>
                <Text color="blue.600" fontSize="2xl">
                  ${p.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button colorScheme="green" onClick={increment}>+</Button>
                <text>{count}</text>
                <Button colorScheme="red" onClick={decrement}>-</Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemDetail;
