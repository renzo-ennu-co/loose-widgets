import styled from "styled-components";

export const Container = styled.div<{
  $screenWidth: number;
  $scale: number;
  $widthForDesktop: number;
  $widthForMobile: number;
  $fontAdjustment: number;
}>`
  font-family: "Poppins", serif;
  transform: ${props => props.$screenWidth > 600 ? `scale(calc(1* ${props.$scale}))` : `scale(calc(${props.$fontAdjustment/100}* ${props.$scale}))`};
  transform-origin: 0 0;
  width: ${props => props.$screenWidth > 600 ? `${props.$widthForDesktop}px` : `calc(${props.$widthForMobile}px/${props.$fontAdjustment/100})`};
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
