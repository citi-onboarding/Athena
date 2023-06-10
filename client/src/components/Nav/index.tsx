import React from "react";
import { NavContainerStyled, Entreemcontato, Logoathena, Logoinsta } from "./style";
import logoInsta from '../../assets/logo-insta.png'
import logoathena from '../../assets/logoathena.png'

const Navathena: React.FC = () => { 
     
    return(
    <NavContainerStyled>

      <Entreemcontato>


      <h1>Entre em contato</h1>
  
      </Entreemcontato>

      <Logoinsta>
      <img src={logoInsta} alt="logo do Instagram"/>

      </Logoinsta>
      
      <Logoathena>
        <img src={logoathena} alt="logo da Athena" />
      </Logoathena>
  
    </NavContainerStyled>)
  
  }
  
  export default Navathena