import { useEffect, useState } from "react";
import { Container, H1, TextSpan, UnderlinedTextSpan } from "./styles";

const getTitle = (name: string | undefined) => {
  return name ? <>{name}, you are <UnderlinedTextSpan>pre-approved</UnderlinedTextSpan> for a personalized weight loss program!</> :
  <>You are <UnderlinedTextSpan>pre-approved</UnderlinedTextSpan> for a personalized weight loss program!</>;
}

interface Props {
  name?: string,
  widthForDesktop: number, //expressed in px
  widthForMobile: number, //expressed in px
  fontAdjustment: number
}

const PreApprovedMainTitle = ({ name, widthForDesktop, widthForMobile, fontAdjustment }: Props) => {
  const title = getTitle(name);
  const [screenWidth, setScreenWidth] = useState(0);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const updateScale = () => {
      const computedWidth = document.body.clientWidth;
      //const scale = Math.min(1, width / 1200); // Dynamic scale calculation
      //console.log(computedWidth);
      let computedScale: number;
      if (computedWidth >= 601 && computedWidth <= 1200) {
        // Scale from 1 to 0.5 as the width goes from 1200 to 601
        computedScale = computedWidth / 1200; // Linear scaling down
      } else if (computedWidth > 416 && computedWidth < 601) {
        // Scale is 1.25 when width is between 600 and 416
        computedScale = 1.25;
      } else if (computedWidth >= 0 && computedWidth <= 415) {
        // Scale from 1.25 to 0 as the width goes from 415 to 0
        computedScale = (0.003125 * computedWidth) - 0.05; // Linear scaling down to 0
      } else {
        // For widths above 1200px, you can define a default behavior
        computedScale = 1; // Keeps scale at 1 for width above 1200
      }

      setScreenWidth(computedWidth);
      setScale(computedScale);

      //document.documentElement.style.setProperty('--scale', computedScale+'');
    };

    // Update scale on page load and window resize
    window.addEventListener('resize', updateScale);
    updateScale(); // Initialize on load

    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  return (
    <Container
      $screenWidth={screenWidth}
      $scale={scale}
      $widthForDesktop={widthForDesktop}
      $widthForMobile={widthForMobile}
      $fontAdjustment={fontAdjustment}
    >
      <H1>
        <TextSpan>{title}</TextSpan>
      </H1>
    </Container>
  )
}

export default PreApprovedMainTitle;