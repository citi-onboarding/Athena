import 'styled-components';
import styled from 'styled-components';

// Engloba todos os elementos da seção "Nav"
export const NavContainerStyled = styled.div`

box-sizing: border-box;

position: relative;
width: 100vw;
height: 140px;

background: #FFFFFF;
border: 1px solid #000000;
box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
border-radius: 0px 0px 25px 25px;
`

export const Entreemcontato = styled.div`
/* Auto layout */

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 20px 45.22px 20px 45px;

position: absolute;
width: 257.22px;
height: 55px;
right: 10.4vw;
top: 6.5vh;

background: #EB762E;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;

h1{
    width: 167px;
    height: 15px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 15px;
    /* identical to box height, or 100% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.6px;
    text-transform: uppercase;

    color: #FFFFFF;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}
`

export const Logoathena = styled.div `
img {
    position: absolute;
    width: 196.33px;
    height: 115px;
    left: 3.5vw;
    top: 2vh;
}
`

export const Logoinsta = styled.div `

img{
    position: absolute;
    width: 45px;
    height: 45px;
    left: 90vw;
    top: 7.5vh;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

`



