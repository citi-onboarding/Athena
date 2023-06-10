import React from "react";

import Rectanglethena from "../../components/Rectangle"
import Carrossel from "../../components/Carrossel";
import WhoMadeAthena from "../../components/WhoMadeAthena";
import NavAthena from "../../components/Nav";
import BodyAthena from "../../components/Body";
import ContactUs from "../../components/ContactUs";
import Footerathena from "../../components/Foot";




export const Home: React.FC = () => {
    return (<>
    <Rectanglethena/>
    <NavAthena />
    <BodyAthena/>
    <Carrossel/>
    <WhoMadeAthena />
    <ContactUs/>
    <Footerathena />
 
    </>);
}

