import React from "react";
import WhoMadeAthena from "../../components/WhoMadeAthena"; 
import ContactUs from "../../components/ContactUs";
import Carrossel from "../../components/Carrossel";




export const Home: React.FC = () => {
    return (<>
     <Carrossel/>
     <WhoMadeAthena />
     <ContactUs/>
 
    </>);
}

