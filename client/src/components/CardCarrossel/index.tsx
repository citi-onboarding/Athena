import React from "react";
import { CardContainerStyled, CardTextContent } from "./style";


export interface ICardCarrossel {
  image: string, 
  name:string,
  text: string  
    
}

const CardCarrossel:React.FC<ICardCarrossel> = ({image, name, text}) => {
   return(
    <CardContainerStyled >
      <img src={image} alt="depoimento"/>

      <CardTextContent  >
      <p className="text">{text}</p>
      <b><p className="name">{name}</p></b>
      </CardTextContent>

     </CardContainerStyled>
   )
}

export default CardCarrossel