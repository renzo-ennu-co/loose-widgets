import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins", serif;
  font-weight: 200;
  font-style: normal;
  font-size: 14px;
  width: 100%;
  @media (min-width: 600px) {
    width: 500px;
  }
`;

export const AccordionItemContainer = styled.div`
  margin-bottom: 30px;
`;

export const AccordionHeaderContainer = styled.div`
  display: flex;
  cursor: pointer;
  //font-size: 16px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const NumberAndTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NumberContainer = styled.div<{
  isOpen: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  min-width: 25px;
  height: 25px;
  background-color: ${ props => props.isOpen ? '#FDD17C' : '#F1F2F6'};
  border: 1px solid ${ props => props.isOpen ? '#CFA90F' : '#0000001a'};
  border-radius: 9999px;
  margin-right: 10px;
`;

export const NumberSpan = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

export const TitleSpan = styled.span`
  font-weight: 600;
  text-align: left;
`;

export const ArrowDiv = styled.div`
  font-size: 21px;
`;

export const AccordionContent = styled.p`
  margin: 0;
  text-align: left;
`;

export const AccordionContentBold = styled.span`
  font-weight: 600;
`;