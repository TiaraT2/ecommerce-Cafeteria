import React from "react";
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
  Center
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ name, type, description, price, img, id }) => {
  return (
    <div>
      <Center height="50px">
        <Divider orientation="vertical" />
      </Center>
      <Card maxW="sm">
        <CardBody>
          <Stack mt="6" spacing="3">
            <img src={img} />
            <Heading size="md">{name}</Heading>
            <Text>{type}</Text>
            <Text>{description}</Text>
            <Text color="brand.cuatro" fontSize="2xl">
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" bg="brand.primary">
              <Link to={`/product/${id}`}>Ver detalles</Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Item;
