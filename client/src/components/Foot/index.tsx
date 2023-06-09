import React, { useState, useEffect } from "react";
import { FooterContainerStyled, Logoathena, Logoinsta, Informationfooter, Informationfooternumber } from "./style";
import {api} from '../../services/api'
import logoInsta from '../../assets/logo-insta.png'
import logoathena from '../../assets/logoathena.png'

interface information{
    id: number;
    nameInstadata: string;
    numberdata: string;
    addressdata: string;

}

const Footerathena: React.FC = () => { 

    const [athenaInformation, setAthenInformation ] = useState<information[]>([])

    const getInformation = async () => {
     
        await api.get('/footer').then((res)=>{
        setAthenInformation(res.data)
       }).catch((e)=>{console.log(e)}) 
       
  
     }
  
      useEffect(()=>{
        getInformation()
      },[]) 
     
    return(
    <FooterContainerStyled>

        <Logoathena>
            <img src={logoathena} alt="Logo da Athena"/>
        </Logoathena>

        <Logoinsta>
            <img src={logoInsta} alt="Logo do Instagram"/>
        </Logoinsta>
  
    
    {athenaInformation.map((information) => {
        return (
            <Informationfooter key = {information.id}>
            <p>{information.nameInstadata}</p>
             <Informationfooternumber>
            <p>{information.numberdata}</p> 
             </Informationfooternumber>
            </Informationfooter>
        )
    })}
          
    </FooterContainerStyled>

    )
    
  
  }
  
  export default Footerathena