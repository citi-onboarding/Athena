import React from "react";
import WhoMadeAthena from "../../components/WhoMadeAthena";
import NavAthena from "../../components/Nav";
import FooterAthena from "../../components/Foot";
import BodyAthena from "../../components/Body";


export const Home: React.FC = () => {
    return (<>

    <NavAthena />
    <BodyAthena/>
     <WhoMadeAthena />
     <FooterAthena />
 
    </>);
}

