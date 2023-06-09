import React, { useState, useEffect } from "react";
import { BodyContainerStyled, Bodyimg1, Bodyimg2, Bodyimg3, Bodyimg4, Bodyimg5, Informationbody, Bodyrenrectangle } from "./style";
import {api} from '../../services/api'
import imagem1 from '../../assets/image_1.png'
import imagem2 from '../../assets/image_2.png'
import imagem3 from '../../assets/image_3.png'
import imagem4 from '../../assets/image_4.png'
import imagem5 from '../../assets/image_5.png'

interface bodytext{
    id: number;
    textdata: string;
}

const Bodyathena: React.FC = () => { 

    const [athenaInformationbody, setAthenInformationbody ] = useState<bodytext[]>([])

    const getInformation = async () => {
     
        await api.get('/body').then((res)=>{
        setAthenInformationbody(res.data)
       }).catch((e)=>{console.log(e)}) 
       
  
     }
  
      useEffect(()=>{
        getInformation()
      },[]) 
     
    return(
    <BodyContainerStyled>

        <Bodyimg1>
            <img src={imagem1} alt="Imagem que representa educação de qualidade"/>
        </Bodyimg1>

        <Bodyimg2>
            <img src={imagem2} alt="Imagem que representa igualdade de gênero"/>
        </Bodyimg2>

        <Bodyimg3>
            <img src={imagem3} alt="Imagem que representa cidades e comunidades sustentáveis"/>
        </Bodyimg3>

        <Bodyimg4>
            <img src={imagem4} alt="Imagem que representa trabalho descente e crescimento econômico"/>
        </Bodyimg4>

        <Bodyimg5>
            <img src={imagem5} alt="Imagem que representa redução das desigualdades"/>
        </Bodyimg5>
  
    
        {athenaInformationbody.map((bodytext) => {
            return (
                <Informationbody key = {bodytext.id}>
                <p>{bodytext.textdata}</p>
                </Informationbody>
            )
        })}
        

        <Bodyrenrectangle>
        
        </Bodyrenrectangle>
    
    </BodyContainerStyled>

    )
    
  
  }
  
  export default Bodyathena