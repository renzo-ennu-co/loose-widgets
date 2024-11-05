import { Container, H1, UnderlinedTextSpan } from "./styles";

const getTitle = (name: string | undefined) => {
  return name ? <>{name}, you are <UnderlinedTextSpan>pre-approved</UnderlinedTextSpan> for a personalized weight loss program!</> :
  <>You are <UnderlinedTextSpan>pre-approved</UnderlinedTextSpan> for a personalized weight loss program!</>;
}

interface Props {
  name?: string
}

const PreApprovedMainTitle = ({ name }: Props) => {
  const title = getTitle(name);

  return (
    <Container>
      <H1>{title}</H1>
    </Container>
  )
}

export default PreApprovedMainTitle;