import { useState } from "react"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import data from "./data"
import { AccordionContent, AccordionHeaderContainer, AccordionItemContainer, ArrowDiv, Container, NumberAndTitleContainer, NumberContainer, NumberSpan, TitleSpan } from "./styles";

const AccordionItem = ({ number, title, content, isOpen, onClick }: {
  number: number,
  title: string,
  content: JSX.Element,
  isOpen: boolean,
  onClick: () => void
}) => {
  return (
    <AccordionItemContainer>
      <AccordionHeaderContainer onClick={onClick}>
        <NumberAndTitleContainer>
          <NumberContainer $isOpen={ isOpen }>
            <NumberSpan>{number}</NumberSpan>
          </NumberContainer>
          <TitleSpan>{title}</TitleSpan>
        </NumberAndTitleContainer>
        <ArrowDiv>{isOpen ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown />}</ArrowDiv>
      </AccordionHeaderContainer>
        {isOpen && <AccordionContent>{content}</AccordionContent>}
    </AccordionItemContainer>
  );
};

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <Container>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          number={index + 1}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </Container>
  )
}

export default HowItWorks;