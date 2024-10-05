import { useState } from 'react'
import { Span } from "./style";

const INITIAL_WEIGHT = 252; //lbs
const WEIGHT_LOSS_FACTOR = 0.85;

function PotentialWeight() {
  const [currentWeight, setCurrentWeight] = useState(INITIAL_WEIGHT);
  const potentialWeight = Math.round(currentWeight * WEIGHT_LOSS_FACTOR);

  return (
    <>
    <div className="flex flex-col items-center">
        <div>
            <div className="border-4 border-sky px-l rounded-md text-onprimary">
                <div className="column items-center pt-s">
                    <div className="text-l leading-1">Your potential weight with GLP-1s:</div>
                        <div className="text-3xl whitespace-nowrap">
                            <Span>{ potentialWeight } lbs</Span> 
                        </div>
                    </div>
                </div>
            </div> 
            <div className="w-full max-w-[250px]">
                <input type="range" 
                    className="text-neutral w-full accent-orange" 
                    min="120" 
                    max="400" 
                    value={currentWeight} 
                    onChange={(e) => setCurrentWeight(Number(e.target.value))}
                />
            </div>
            <div className="row items-center gap-m">
                <label className="text-xl">Your current weight:</label>
                <input type="number" 
                    className="text-neutral rounded-[2px] py-xs text-center text-l border-b-4 border-neutral bg-page" 
                    value={currentWeight}
                    onChange={(e) => setCurrentWeight(Number(e.target.value))}
                />
            </div>
        </div>
    </>
  )
}

export default PotentialWeight
