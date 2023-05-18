import ColorButton from "@/components/Lights/ColorButton/ColorButton";
import { LightColorGridContainer } from "./LightColorGrid.styled";


function LightColorGrid(){
    return(
        <LightColorGridContainer>
           <ColorButton color="white" />
           <ColorButton color="#f9c463" />
           <ColorButton color="#14fd5a" />
           <ColorButton color="#fc0000" />
           <ColorButton color="#ff6ab2" />
           <ColorButton color="blue" />
           <ColorButton color="cyan" />
           <ColorButton color="#FAD201" />
           <ColorButton color="#067aff" />
           <ColorButton color="#A2231D" />
           <ColorButton color="#A5A5A5" />
           <ColorButton color="#a2ff00" />
           <ColorButton color="#7FB5B5" />
           <ColorButton color="#C7B446" />
           <ColorButton color="#64a5ff" />
           <ColorButton color="#D36E70" />
           <ColorButton color="#c64cff" />
           <ColorButton color="#76b0c3" />
           <ColorButton color="#A18594" />
           <ColorButton color="#ff6767" />
        </LightColorGridContainer>
    )
}

export default LightColorGrid;