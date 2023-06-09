import express from 'express';
import UserController from '@controllers/UserController'
import TestimonyController from '@controllers/TestimonyController'
import FooterController from '@controllers/FooterController'
import BodyController from '@controllers/BodyController'
import NavBarController from '@controllers/NavBarController'
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
 

// Rotas do footer

const footerController = new FooterController();

routes.post('/footer', footerController.create);
routes.get('/footer', footerController.get);
routes.delete('/footer/:id', footerController.delete);
routes.put('/footer/:id', footerController.update);

// Rotas do body

const bodyController = new BodyController();

routes.post('/body', bodyController.create);
routes.get('/body', bodyController.get);
routes.delete('/body/:id', bodyController.delete);
routes.put('/body/:id', bodyController.update);

// Rotas do navbar

const navbarController = new NavBarController();

routes.post('/navbar', navbarController.create);
routes.get('/navbar', navbarController.get);
routes.delete('/navbar/:id', navbarController.delete);
routes.put('/navbar/:id', navbarController.update);

// Rotas PeopleAthenas

const peopleAthenaController = new PeopleAthenaController()

routes.post('/peopleAthena', peopleAthenaController.create);
routes.get('/peopleathena', peopleAthenaController.get);
routes.delete('/peopleathena/:id', peopleAthenaController.delete);
routes.put('/peopleathena/:id', peopleAthenaController.update);

// Rota nodemailer 

routes.post('/email', SendMail)


export default routes;