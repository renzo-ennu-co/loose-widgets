import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const PotentialWeightContainer = styled.div`
  border: 4px solid;
  border-radius: 0.375rem; /* rounded-md */
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 0.5rem;
`;

const Title = styled.div`
  font-size: 16px;
`;

const PotentialWeightValue = styled.div`
  font-size: 40px;
`

const BoldText = styled.span`
  font-weight: 700;
`;

const SliderContainer = styled.div`
  width: 100%;
  max-width: 250px;
  margin-bottom: 10px;
`;
/* 
const Slider = styled.input`
  width: 100%;
`; */

const colorPalette = '#e1bd62';

const Slider = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none; /* Removes default styling in WebKit browsers */
  width: 100%;
  height: 8px;
  background: ${colorPalette}; /* Default track background */
  border-radius: 4px; /* Rounded track edges */
  outline: none;

  /* Track Styles */
  &::-webkit-slider-runnable-track {
    background: ${colorPalette}; /* Track color */
    height: 8px;
    border-radius: 4px; /* Rounded track edges */
  }

  /* Thumb Styles */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: ${colorPalette}; /* Thumb color */
    border-radius: 50%; /* Rounded thumb */
    cursor: pointer;
    margin-top: -6px; /* Adjusts thumb position */
    filter: brightness(90%);
  }

  /* Firefox specific track */
  &::-moz-range-track {
    background: ${colorPalette};
    height: 8px;
    border-radius: 4px;
  }

  /* Firefox specific thumb */
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: ${colorPalette};
    border-radius: 50%;
    cursor: pointer;
  }

  /* Internet Explorer/Edge specific track */
  &::-ms-track {
    background: transparent;
    border-color: transparent;
    color: transparent;
    height: 8px;
  }

  /* Internet Explorer/Edge specific thumb */
  &::-ms-thumb {
    width: 20px;
    height: 20px;
    background: ${colorPalette};
    border-radius: 50%;
    cursor: pointer;
  }

  /* Internet Explorer lower track */
  &::-ms-fill-lower {
    background: ${colorPalette};
  }

  /* Internet Explorer upper track */
  &::-ms-fill-upper {
    background: ${colorPalette};
  }
`;

const CurrentWeightContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
`;

const Label = styled.label`
  font-size: 23px;
  margin-right: 10px;
`;

const NumberInput = styled.input`
  text-align: center;
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-width: 0px;
  border-bottom-width: 4px;
  border-radius: 2px;
  background-color: transparent;
`;

export {
  Container,
  PotentialWeightContainer,
  ContentWrapper,
  Title,
  PotentialWeightValue,
  BoldText,
  SliderContainer,
  Slider,
  CurrentWeightContainer,
  Label,
  NumberInput
}