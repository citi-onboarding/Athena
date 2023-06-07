import 'styled-components';
import styled from 'styled-components';

// Engloba todos os elementos da seção "Quem faz a Athena"
export const AthenContainerStyled = styled.div`

width: 100vw;
height: 702px;

/* display: flex;
flex-direction: column;
justify-content: center;
align-items: center; */

background: #131D4A;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

margin: 0 auto;


`

// Engloba os textos 
export const AthenHeadingStyled = styled.div`

display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;

padding-top: 70px;

/* background-color: red; */

h1 {
color:#ffffff; 

font-style: normal;
font-weight: 400;
font-size: 42px;

align-items: center;
text-align: center;
letter-spacing: 1.2px;


}

hr {
width: 513px;
height: 0px;


border: 3px solid #EB762E;
}




`

// Engloba os cards 
export const AthenaCardWrapper = styled.div`

margin-top: 50px;

width: auto;
height: auto;



/* background-color: purple; */

display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
gap: 10px;

`