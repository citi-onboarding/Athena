import { Request, Response } from 'express';
import { NavBar } from '@models/NavBar';
import { Citi, Crud } from '../global'

export default class NavBarController implements Crud {

    // comandos do CRUD para o navbar

    async create(request: Request, response: Response){ 
       
        const {namedata, textdata} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(namedata, textdata);
        if(isAnyUndefined) return response.status(400).send();

        const newNavBar = { namedata, textdata };
        const {httpStatus, message} = await Citi.insertIntoDatabase(NavBar, newNavBar);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(NavBar);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: navbarFound, message } = await Citi.findByID(NavBar, id); 
           
        if(!navbarFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(NavBar, navbarFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {namedata, textdata } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(namedata, textdata, id);
        if(isAnyUndefined) return response.status(400).send();

        const navbarWithUpdatedValues = { namedata, textdata };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(NavBar, id, navbarWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}