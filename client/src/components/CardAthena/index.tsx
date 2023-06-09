import React from "react";
import { CardContainerStyled } from "./styles";
import { CardContentStyled } from "./styles";

export interface ICardAthena {
  name: string,
  image: string,
  text: string
}

const CardAthena: React.FC<ICardAthena> = ({name,image,text}) => {
  return(<>
   
    <CardContainerStyled >
      
     
      <img src={image} alt='Profile pic'/>
    
      <CardContentStyled>
      <h2>{name}</h2>
      <p>{text}</p> 
      </CardContentStyled>


    </CardContainerStyled>
  </>)
}

export default CardAthena
