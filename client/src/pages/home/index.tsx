import React from "react";
import WhoMadeAthena from "../../components/WhoMadeAthena";
import NavAthena from "../../components/Nav";
import BodyAthena from "../../components/Body";
import ContactUs from "../../components/ContactUs";
import Footerathena from "../../components/Foot";



export const Home: React.FC = () => {
    return (<>

    <NavAthena />
    <BodyAthena/>
     <WhoMadeAthena /> 
     <ContactUs/>
     <Footerathena />
 
    </>);
}

