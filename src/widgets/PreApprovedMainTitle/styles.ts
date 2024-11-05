import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins", serif;
  height: 100px;
  width: 100%;
  @media (min-width: 600px) {
    width: 700px;
  }
`;

export const H1 = styled.h1`
  margin: unset;
  font-weight: 200;
  font-style: italic;
  text-align: left;
  font-size: 25px;
  line-height: 38px;
  @media (min-width: 600px) {
    font-size: 45px;
    line-height: 58px;
  }
`

export const UnderlinedTextSpan = styled.span`
  text-decoration: underline;
`;
