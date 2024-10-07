import { useState } from 'react'
import { 
  BoldText,
  Container, 
  ContentWrapper, 
  CurrentWeightContainer, 
  Label, 
  NumberInput, 
  PotentialWeightContainer, 
  PotentialWeightValue, 
  Slider, 
  SliderContainer,
  Title
} from "./styles";

const INITIAL_WEIGHT = 252; //lbs
const WEIGHT_LOSS_FACTOR = 0.85;

function PotentialWeight() {
  const [currentWeight, setCurrentWeight] = useState(INITIAL_WEIGHT);
  const potentialWeight = Math.round(currentWeight * WEIGHT_LOSS_FACTOR);

  return (
    <Container>
      <PotentialWeightContainer>
        <ContentWrapper>
          <Title>Your potential weight with GLP-1s:</Title>
          <PotentialWeightValue>
            <BoldText>{potentialWeight}</BoldText> lbs
          </PotentialWeightValue>
        </ContentWrapper>
      </PotentialWeightContainer>
      <SliderContainer>
        <Slider
          type="range"
          min="120"
          max="400"
          value={currentWeight}
          onChange={(e) => setCurrentWeight(Number(e.target.value))}
        />
      </SliderContainer>
      <CurrentWeightContainer>
        <Label htmlFor="weight">Your current weight:</Label>
        <NumberInput 
          type="number"
          value={currentWeight}
          onChange={(e) => setCurrentWeight(Number(e.target.value))}
          name="weight"
        />
      </CurrentWeightContainer>
    </Container>
  )
}

export default PotentialWeight
