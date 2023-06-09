import MailServer from "src/services/MailServer";
import dotenv from "dotenv"
import {Resquest, Response} from "express"

dotenv.config();

const SendMail = async (request: Resquest, response: Response) => {
 
  try {

    const {companyName, email, occupationArea, numberOfEmployees, training} = request.body

    await MailServer({
      destinationUser: process.env.EMAIL_WILL_RECEIVE,
      subjectText: 'Novo contato',
      htmlOption: `
      <html>
    <body>
      <h2> A empresa <b> ${companyName} entrou em contato! </b>  </h2>
      <p> A empresa ${companyName} que possui o email: ${email} atua na área de ${occupationArea}, possui ${numberOfEmployees} funcionários e <b>deseja se aperfeiçoar com um treinamento de ${training}.</b> </p>
    </body>
  </html> 
      `
    })

    return response.status(200).send({
      answer:'Email enviado!'
    })


  } catch(e) {
     
    return response.status(500).send({
      answer:'Desculpe. Houve algum problema!'
    })

  }

}

export default SendMail