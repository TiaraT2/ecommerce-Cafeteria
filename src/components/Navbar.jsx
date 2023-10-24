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
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Flex>
        <Link to={"/"}>
        <Box>Girasoles</Box>
        </Link>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton>
              <h1>Menu</h1>
            </MenuButton>
            <MenuList>
              <Link to={`/categoria/${"Bebida"}`}>
              <MenuItem>Bebidas</MenuItem>
              </Link>
              <Link to={`/categoria/${"Pastel"}`}>
              <MenuItem>Comidas</MenuItem>
              </Link>
              <Link to={`/categoria/${"Combo"}`}>
              <MenuItem>Combos</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box>
          <Link to={"/cart"}>
          <CartWidget />
          </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
