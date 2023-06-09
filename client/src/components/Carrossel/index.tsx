import React from "react";
import { CarrosselContainer } from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CardCarrossel from '../CardCarrossel/index'

//CarrosselContainer > componente carrosel da lib q renderiza um array 
// o array é preenchido com um get do servidor 

// O STASE FICA AQUI! 
const Carrossel: React.FC  = () => {

  
 return(
 <CarrosselContainer>
   
  <Carousel 
  axis='horizontal'
  showStatus={false}

  >
  
  <CardCarrossel image='https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg' text='“Eu considero esse projeto riquíssimo para a educação e acredito nessa parceria. A partir de agora nós vamos dar continuidade ao projeto.”



Maria da conceição, gestora da escola Inácio Gomes Meira, Cabaceiras-PB' />
  <CardCarrossel image='https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg' text='“Eu considero esse projeto riquíssimo para a educação e acredito nessa parceria. A partir de agora nós vamos dar continuidade ao projeto.”



Maria da conceição, gestora da escola Inácio Gomes Meira, Cabaceiras-PB' />
  <CardCarrossel image='https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg' text='“Eu considero esse projeto riquíssimo para a educação e acredito nessa parceria. A partir de agora nós vamos dar continuidade ao projeto.”



Maria da conceição, gestora da escola Inácio Gomes Meira, Cabaceiras-PB' />

 
 
  </Carousel>
   
 </CarrosselContainer>
 )
}

export default Carrossel