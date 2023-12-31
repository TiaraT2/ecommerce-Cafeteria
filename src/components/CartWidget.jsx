import React, { useContext } from "react";
import { Badge, Flex, Box, Divider, Center } from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <div>
      <Flex>
        <Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </Box>
        <Divider />
        <Box>
          <Badge fontSize='24px' width="50px" height="50px" colorScheme="purple" borderRadius='md'>
            <Center h="45px">{totalQuantity}</Center>
          </Badge>
        </Box>
      </Flex>
    </div>
  );
};

export default CartWidget;
