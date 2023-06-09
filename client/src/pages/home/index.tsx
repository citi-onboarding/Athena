import React from "react";
import WhoMadeAthena from "../../components/WhoMadeAthena";
import Navathena from "../../components/Nav";
import Footerathena from "../../components/Foot";



export const Home: React.FC = () => {
    return (<>
    <Navathena />
     <WhoMadeAthena />
     <Footerathena />
 
    </>);
}

