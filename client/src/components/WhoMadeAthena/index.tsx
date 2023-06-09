import React, { useState, useEffect } from "react";
import { AthenContainerStyled, AthenHeadingStyled, AthenaCardWrapper } from "./style";
import CardAthena, { ICardAthena } from "../CardAthena";
import {api} from '../../services/api'




const WhoMadeAthena: React.FC = () => {

   
  const [athenaPeople, setAthenPeople ] = useState<any[]>([])


  
   const getPeople = async () => {
     
      await api.get('/peopleathena')
      .then((res)=>{
      setAthenPeople(res.data)
     }).catch((e)=>{console.log(e)}) 
     
   }



    useEffect(()=>{
      getPeople()
    },[]) 

   

  return(
  <AthenContainerStyled>
   
    <AthenHeadingStyled>
    <h1>Quem faz a Athena</h1>
    <hr></hr>
   </ AthenHeadingStyled >
   
   <AthenaCardWrapper >
    
   {athenaPeople.map((people) => {
    return(
      <CardAthena  key={ people.id} name={people.name} text={people.text} image={people.image}/>
    )
   })}

   
   </AthenaCardWrapper>


  </AthenContainerStyled>)

}

export default WhoMadeAthena