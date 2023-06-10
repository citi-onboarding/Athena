import React, {useEffect, useState} from "react";
import { CarrosselContainer } from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CardCarrossel from '../CardCarrossel/index'
import {api} from '../../services/api'
import { ICardCarrossel } from "../CardCarrossel";


const Carrossel: React.FC = () => {
  const [photosCarrossel, setphotosCarrossel] = useState<ICardCarrossel[]>([])

  const getPhotos = async () => {
    
    await api.get('/testimony')
    .then((res)=>{
      setphotosCarrossel(res.data)
    })
    .catch(e => console.log(e)) 

  }

  useEffect(()=>{
    getPhotos()
  },[])

  
 return(
 <CarrosselContainer>
   
  <Carousel 
  axis='horizontal'
  showStatus={false}  
  >


    {photosCarrossel.map((testimony)=>{
       return(
       <CardCarrossel  image={testimony.image} name={testimony.name} text={testimony.text} />
   )
    })}


  </Carousel>
   
 </CarrosselContainer>
 )
}

export default Carrossel