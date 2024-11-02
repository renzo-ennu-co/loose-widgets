import { useState } from "react"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import data from "./data"
import { AccordionContent, AccordionHeaderContainer, AccordionItemContainer, ArrowDiv, Container, NumberAndTitleContainer, NumberContainer, NumberSpan, TitleSpan } from "./styles";

const AccordionItem = ({ index, title, content }: {
  index: number,
  title: string,
  content: JSX.Element
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionItemContainer>
      <AccordionHeaderContainer onClick={() => setIsActive(!isActive)}>
        <NumberAndTitleContainer>
          <NumberContainer isActive={ isActive }>
            <NumberSpan>{index}</NumberSpan>
          </NumberContainer>
          <TitleSpan>{title}</TitleSpan>
        </NumberAndTitleContainer>
        <ArrowDiv>{isActive ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown />}</ArrowDiv>
      </AccordionHeaderContainer>
        {isActive && <AccordionContent>{content}</AccordionContent>}
    </AccordionItemContainer>
  );
};

const HowItWorks = () => {
/*   const [activeIndex, setActiveIndex] = useState(-1);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  }; */

  return (
    <Container>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          index={index + 1}
          title={item.title}
          content={item.content}
          /* isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)} */
        />
      ))}
    </Container>
  )
}

export default HowItWorks;