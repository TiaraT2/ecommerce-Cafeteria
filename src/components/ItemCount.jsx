import React from "react";
import useCounter from "./useCounter.js";
import { Button } from "@chakra-ui/react";

const ItemCount = () => {
  const { count, increment, decrement } = useCounter(0, 1);

  return (
    <div>
      <Button colorScheme="green" onClick={increment}>
        +
      </Button>
      <Button colorScheme="black" variant="outline">
        {count}
      </Button>
      <Button colorScheme="red" onClick={decrement}>
        -
      </Button>
    </div>
  );
};

export default ItemCount;
