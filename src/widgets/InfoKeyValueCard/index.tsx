import { Container, TextSpan, Wrapper } from "./styles";

interface Props {
  _key: string,
  value: string
}

const InfoKeyValueCard = ({ _key = 'key', value = 'value' }: Props) => {
  return (
    <Container>
      <Wrapper>
        <TextSpan>{_key}: {value}</TextSpan>
      </Wrapper>
    </Container>
  )
}

export default InfoKeyValueCard;