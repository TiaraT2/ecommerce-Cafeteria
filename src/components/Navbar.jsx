import React from "react";
import CartWidget from "./CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  Box,
  SimpleGrid,
  Img,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <SimpleGrid columns={3}>
        <Link to={"/"}>
          <Box w="100%" bg="brand.cuatro">
            <Img
              src="/logo.png"
              alt="logo de la cafeteria"
              width="230px"
              height="140px"
            ></Img>
          </Box>
        </Link>
        <Box bg="brand.cuatro" position="relative">
          <Divider />
          <AbsoluteCenter>
            <Menu classname="bgmenu">
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
          </AbsoluteCenter>
        </Box>
        <Box w="100%" bg="brand.cuatro">
          <Center h="130px">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Center>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Navbar;
