import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins", serif;
  font-weight: 500;
  border: 1px solid #DABE70;
  border-radius: 13.5px;
  background-color: #FBF8F0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100px;
  padding: 10px 10px;
  text-align: center;
`;

export const TextSpan = styled.span`
  color: #DABE70;
  font-size: 14px;
  @media (min-width: 600px) {
    width: 16px;
  }
`;
