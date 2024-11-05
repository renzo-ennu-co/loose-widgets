import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins", serif;
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
  line-height: 58px;
`

export const TextSpan = styled.span`
  font-size: 45px;
`;

export const UnderlinedTextSpan = styled.span`
  text-decoration: underline;
`;
