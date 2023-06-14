import 'styled-components';
import styled from 'styled-components';

export const CardContainerStyled = styled.div`

width: 230px;
height: 445px;
left: 30px;
top: 179px;
border-radius: 25px;

gap: 20px;

display: flex;
flex-direction: column;
align-items: center;



background-color: #DDDFE6;

img {
  width: 100%;
  height: 50%;
  border-radius: 20px;
  padding: 10px;

}



`
export const CardContentStyled = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

/* background-color: red; */

padding: 5px;

width: auto;
height: auto;


h2 {

font-style: normal;
font-weight: 400;

text-align: center;
 
margin-bottom: 15px;

}

p {



font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;

text-align: center;

letter-spacing: 1.2px;
text-transform: capitalize;

}

`
