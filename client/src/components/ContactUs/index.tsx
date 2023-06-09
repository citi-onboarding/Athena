import React, { useState } from "react";
import { ContactUsContainer, FormContainer, FormHeading } from "./styles";
import { api } from "../../services/api";
import { toast} from 'react-toastify';


const ContactUs: React.FC = () => {

  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [occupationArea, setOccupationArea] = useState('')
  const [numberOfEmployees, setNumberOfEmployees] = useState('')
  const [training, setTraining] = useState('')
   

const notify = () => {
  toast.success('O seu email foi enviado!')
}

const error = () => {
  toast.error('Por favor, preencha todos os campos')
}

  const sendEmail = async (e:React.FormEvent) => {
      e.preventDefault()
      
      if (
        companyName.trim() === "" ||
        email.trim() === "" ||
        occupationArea.trim() === "" ||
        numberOfEmployees.trim() === "" ||
        training.trim() === ""
      ) {
         error()
        return;
      }
       

      await api.post('/email',{
        companyName:companyName,
        email:email,
        occupationArea: occupationArea,
        numberOfEmployees: numberOfEmployees,
        training: training
       })
       .then(() => {notify()})
       .catch((e)=>{console.log(e)})
  
      clearInputs()
  
    
  }

 
  const clearInputs = () => {
    setCompanyName('')
    setEmail('')
    setOccupationArea('')
    setNumberOfEmployees('')
    setTraining('')
  }

  return(
  <ContactUsContainer>
    

    <FormContainer>
      
      <FormHeading> 
       <h3>Gostaria de um orçamento? </h3> 
       <h3>Entre em contato</h3>
         </FormHeading>
      <form onSubmit={sendEmail} >
         <input
                        type="text"
                        name="companyName"
                        placeholder="Nome da empresa"
                        value = {companyName}
                        onChange= { (event) => {
                          setCompanyName(event.target.value);
                        }}
                    />

                  <input
                        type="text"
                        name="email"
                        placeholder="E-mail"
                        value = {email}
                        onChange= { (event) => {
                          setEmail(event.target.value);
                        }}
                    />
                     
       
                
                    
                  <input
                        type="text"
                        name="occupationArea"
                        placeholder="Área de atuação"
                        value = {occupationArea}
                        onChange= { (event) => {
                          setOccupationArea(event.target.value);
                        }}
                    />
                  <input
                        type="number"
                        name="numberOfEmployees"
                        placeholder="Número de funcionários"
                        value = {numberOfEmployees}
                        onChange= { (event) => {
                          setNumberOfEmployees(event.target.value);
                        }}
                    />
                      
                    
                  
                  <input
                        className="treinamento"
                        type="text"
                        name="training"
                        placeholder="O que você deseja de treinamento?"
                        value = {training}
                        onChange= { (event) => {
                          setTraining(event.target.value);
                        }}
                    />
                       
                      <div className="submit-container">
                         <button type="submit">Enviar</button>
                      </div>
                       
                 

                    



</form>


    </FormContainer>

  </ContactUsContainer>)
}

export default ContactUs