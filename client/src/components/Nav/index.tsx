import React, { useState, useEffect } from "react";
import { NavContainerStyled, Entreemcontato, Logoathena, Logoinsta, Informationnav } from "./style";
import {api} from '../../services/api'
import logoInsta from '../../assets/logo-insta.png'
import logoathena from '../../assets/logoathena.png'

interface informationnav{
  id: number;
  linkinstadata: string;
  linknumberdata: string;

}

const Navathena: React.FC = () => { 

  const [athenaInformationnav, setAthenInformationnav ] = useState<informationnav[]>([])

    const getInformation = async () => {
     
        await api.get('/navbar').then((res)=>{
        setAthenInformationnav(res.data)
       }).catch((e)=>{console.log(e)}) 
       
  
     }
  
      useEffect(()=>{
        getInformation()
      },[]) 
     
    return(
    <NavContainerStyled>
        

  {athenaInformationnav.map((informationnav) => {
    return (
      
      <Informationnav key = {informationnav.id}>
          
          <Logoathena>
              <img src={logoathena} alt="Logo da Athena"/>
          </Logoathena>

          <Entreemcontato>
            <a href={informationnav.linknumberdata} target="_blank" rel="noopener noreferrer">
              <h1>Entre em contato</h1>
            </a>
          </Entreemcontato>
          <Logoinsta>
              <a href={informationnav.linkinstadata} target="_blank" rel="noopener noreferrer">
                  <img src={logoInsta} alt="Logo do Instagram"/>
              </a>
          </Logoinsta>
        </Informationnav>
    )
  })}
    </NavContainerStyled>)
  }
  
  export default Navathena