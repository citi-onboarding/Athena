import React from "react";
import WhoMadeAthena from "../../components/WhoMadeAthena";
import ContactUs from "../../components/ContactUs";
import Navathena from "../../components/Nav";
import Footerathena from "../../components/Foot";




export const Home: React.FC = () => {
    return (<>

    <Navathena />     
     <WhoMadeAthena />
     <ContactUs/>
     <Footerathena />

 
    </>);
}

