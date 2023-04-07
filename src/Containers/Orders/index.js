import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Bag from "../../assets/bag.svg";
import Bin from "../../assets/bin.svg";

import {
  Container,
  ContainerItens,
  ContainerOrder,
  Image,
  H1,
  Order,
  Button,
  OrderDetails,
} from "./styles";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get(
        "http://localhost:3001/order/"
      ); 
      setOrders(newOrders);
    }
    fetchOrders();
  }, []);

  async function deleteOrder(orderid) {
    await axios.delete(`http://localhost:3001/order/${orderid}`);
    const newOrders = orders.filter((order) => order.id !== orderid);
    setOrders(newOrders);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <ContainerOrder>
        <Image alt="bag" src={Bag}></Image>
        <H1>Your Order</H1>

        <ContainerItens>
          <ul>
            {orders.map((order) => (
              <Order key={order.id}>
                <OrderDetails><p>{order.itens}</p> <b>{order.clientName}</b></OrderDetails>
                <button onClick={() => deleteOrder(order.id)}>
                  <img alt="trash-icon" src={Bin} />
                </button>
              </Order>
            ))}
          </ul>

          <Button isBack={true} onClick={goBackPage}>
            Return
          </Button>
        </ContainerItens>
      </ContainerOrder>
    </Container>
  );
};

export default Orders;
