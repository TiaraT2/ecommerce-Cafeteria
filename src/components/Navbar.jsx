import React from "react";
import CartWidget from "./CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <Flex>
        <Box>
          Cafeteria
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton>
              <h1>Menu</h1>
            </MenuButton>
            <MenuList>
              <MenuItem>Bebidas</MenuItem>
              <MenuItem>Comidas</MenuItem>
              <MenuItem>Combos</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box>
          <CartWidget />
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
