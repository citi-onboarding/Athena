import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import Mail from 'nodemailer/lib/mailer'

dotenv.config()

 interface IEmailConfig {
  destinationUser: string,
  subjectText: string,
  htmlOption: string
 }


 const MailServer = async ({destinationUser, subjectText, htmlOption}: IEmailConfig) => {
  

 const transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:process.env.EMAIL,
    pass:process.env.PASSWORD
  }
 })
  
   await transporter.sendMail({
     from:process.env.EMAIL,
     to:destinationUser, 
     subject:subjectText,
     html:htmlOption
   })
 
 }

 export default MailServer