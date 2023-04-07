import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Burger from "../../assets/burger.svg";

import {
  Container,
  ContainerItens,
  ContainerOrder,
  Image,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

const App = () => {
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();
  const navigate = useNavigate()

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/order/", {
      itens: inputOrder.current.value,
      clientName: inputName.current.value,
    });console.log(orders)
    setOrders([...orders, newOrder])
    navigate("/orders")
  }

  return (
    <Container>
      <ContainerOrder>
        <Image alt="burger" src={Burger}></Image>
        <H1>Make Your Order!</H1>

        <ContainerItens>
          <InputLabel>Order:</InputLabel>
          <Input ref={inputOrder} placeholder="1-Bacon, 1-Fries 1-Coke"/>

          <InputLabel>Client Name:</InputLabel>
          <Input ref={inputName} placeholder="John"/>

          <Button onClick={addNewOrder}>Place Order</Button>
        </ContainerItens>
      </ContainerOrder>
    </Container>
  );
};

export default App;
