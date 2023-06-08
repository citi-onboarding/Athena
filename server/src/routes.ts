import express from 'express';
import UserController from '@controllers/UserController'
import TestimonyController from '@controllers/TestimonyController'
import PeopleAthenaController from '@controllers/PeopleAthenaController';
import SendMail from '@controllers/MailController';

const routes = express.Router();

// Rotas User
const userController = new UserController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

// Rotas Testimony 
const testimonyController = new TestimonyController();

routes.post('/testimony', testimonyController.create);
routes.get('/testimony', testimonyController.get);
routes.delete('/testimony/:id', testimonyController.delete);
routes.put('/testimony/:id', testimonyController.update);

// Rotas peopleAthena 
const peopleAthenaController = new PeopleAthenaController()

routes.post('/peopleAthena', peopleAthenaController.create);
routes.get('/peopleathena', peopleAthenaController.get);
routes.delete('/peopleathena/:id', peopleAthenaController.delete);
routes.put('/peopleathena/:id', peopleAthenaController.update);

// Rota nodemailer 

routes.post('/email',SendMail)


export default routes;