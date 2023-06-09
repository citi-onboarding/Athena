import React from "react";
import { CardContainerStyled, CardTextContent } from "./style";


interface ICardCarrossel {
  image: string, 
  text: string  
  
}

const CardCarrossel:React.FC<ICardCarrossel> = ({image, text}) => {
   return(
    <CardContainerStyled>
      <img src={image} alt="depoimento"/>


      <CardTextContent >
      <p>{text}</p>
      </CardTextContent>

     </CardContainerStyled>
   )
}

export default CardCarrossel