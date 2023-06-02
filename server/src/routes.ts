import express from 'express';
import UserController from '@controllers/UserController'
import TestimonyController from '@controllers/TestimonyController'
import PeopleAthenaController from '@controllers/PeopleAthenaController';

const routes = express.Router();
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

// Rotas PeopleAthenas
// Cria instância de classe 
const peopleAthenaController = new PeopleAthenaController()

// Coloca os métodos dentro das rotas
routes.post('/peopleAthena', peopleAthenaController.create);
routes.get('/peopleathena', peopleAthenaController.get);
routes.delete('/peopleathena/:id', peopleAthenaController.delete);
routes.put('/peopleathena/:id', peopleAthenaController.update);


export default routes;