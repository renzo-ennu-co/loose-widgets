import MyComponentWithDynamicScale from "./MyComponentWithDynamicScale";
import { H1, TextSpan, UnderlinedTextSpan } from "./styles";

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
    <MyComponentWithDynamicScale>
      <H1>
        <TextSpan>{title}</TextSpan>
      </H1>
    </MyComponentWithDynamicScale>
  )
}

export default PreApprovedMainTitle;