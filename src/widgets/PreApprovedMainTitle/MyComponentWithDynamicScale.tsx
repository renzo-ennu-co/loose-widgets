import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MyComponent = styled.div<{
  $width: number,
  $scale: number
}>`
  font-family: "Poppins", serif;
  transform: ${props => props.$width > 600 ? `scale(calc(1* ${props.$scale}))` : `scale(calc(0.55* ${props.$scale}))`};
  transform-origin: 0 0;
`;

const MyComponentWithDynamicScale = ({ children }: { children: JSX.Element }) => {
  const [width, setWidth] = useState(0);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const updateScale = () => {
      const innerWidth = window.innerWidth;
      //const scale = Math.min(1, width / 1200); // Dynamic scale calculation
      console.log(innerWidth);
      let computedScale: number;
      if (innerWidth >= 601 && innerWidth <= 1200) {
        // Scale from 1 to 0.5 as the width goes from 1200 to 601
        computedScale = innerWidth / 1200; // Linear scaling down
      } else if (innerWidth > 416 && innerWidth < 601) {
        // Scale is 1.25 when width is between 600 and 416
        computedScale = 1.25;
      } else if (innerWidth >= 0 && innerWidth <= 415) {
        // Scale from 1.25 to 0 as the width goes from 415 to 0
        computedScale = (0.003125 * innerWidth) - 0.05; // Linear scaling down to 0
      } else {
        // For widths above 1200px, you can define a default behavior
        computedScale = 1; // Keeps scale at 1 for width above 1200
      }

      setWidth(innerWidth);
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

  return <MyComponent $width={width} $scale={scale}>{ children }</MyComponent>;
};

export default MyComponentWithDynamicScale;
