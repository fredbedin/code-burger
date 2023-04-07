import styled from "styled-components";
import Background from "../../assets/background2.jpg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  height: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Image = styled.img`
  padding: 10px;
`;

export const ContainerOrder = styled.div`
  background: #0a0a10;
  border-radius: 15px;
  padding: 0 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const H1 = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  margin-bottom: 10px;
  margin-top: 20px;
`;
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 30px;
`;

export const InputLabel = styled.p`
  color: white;
  margin-left: 15px;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-top: 30px;
`;
export const Input = styled.input`
  width: 342px;
  height: 58px;
  outline: none;
  border: none;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  padding: 15px;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;
export const Button = styled.button`
  margin-top: 75px;
  width: 342px;
  height: 68px;
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  background: #d93856;
  cursor: pointer;
  border: none;
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
