import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Container, FormControl, FormLabel, Input } from "@chakra-ui/react";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);

  const db = getFirestore();
  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  const order = {
    nombre,
    email,
  };

  const ordersCollection = collection(db, "Form");
  return (
    <div>
      <Container>
        <h1 className="form">Formulario de compra</h1>
        <form action="" onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input
              placeholder="Nombre completo"
              onChange={(e) => setNombre(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <button type="submit">Enviar</button>
        </form>
        <p>Número de orden: {orderId} </p>
      </Container>
    </div>
  );
};

export default Form;
