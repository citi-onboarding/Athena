import React, { useState, useEffect } from "react";
import { FooterContainerStyled, FooterContainerrentagulo,  Logoathena, Logoinsta, Informationfooter, Informationfooternumber, Informationfooteradress } from "./style";
import {api} from '../../services/api'
import logoInsta from '../../assets/logo-insta.png'
import logoathena from '../../assets/logoathena.png'

interface informationfooter{
    id: number;
    nameSitedata: string;
    numberdata: string;
    linkinstadata: string;
    addressdata: string;
}

const Footerathena: React.FC = () => { 

    const [athenaInformationfooter, setAthenInformationfooter ] = useState<informationfooter[]>([])

    const getInformation = async () => {
     
        await api.get('/footer').then((res)=>{
        setAthenInformationfooter(res.data)
       }).catch((e)=>{console.log(e)}) 
       
  
     }
  
      useEffect(()=>{
        getInformation()
      },[]) 
     
    return(
    <FooterContainerrentagulo>

        <FooterContainerStyled>
    
        
        {athenaInformationfooter.map((informationfooter) => {
            return (
                <Informationfooter key = {informationfooter.id}>
                    <p>{informationfooter.nameSitedata}</p>

                    <Informationfooternumber>
                        <p>{informationfooter.numberdata}</p> 
                    </Informationfooternumber>

                    <Informationfooteradress>
                        <p>{informationfooter.addressdata}</p>
                    </Informationfooteradress>

                    <Logoathena> 
                        <img src={logoathena} alt="Logo da Athena"/>
                    </Logoathena>

                    <Logoinsta>
                        <a href={informationfooter.linkinstadata} target="_blank" rel="noopener noreferrer">
                            <img src={logoInsta} alt="Logo do Instagram"/>
                        </a>
                    </Logoinsta>
                </Informationfooter>
            )
        })}
            
        </FooterContainerStyled>
    </FooterContainerrentagulo>

    )
    
  
  }
  
  export default Footerathena