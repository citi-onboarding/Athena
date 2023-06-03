import { Request, Response } from 'express';
import { PeopleAthena } from '@models/PeopleAthena';
import { Citi, Crud } from '../global'



export default class PeopleAthenaController implements Crud {

    async create(request: Request, response: Response){ 
         
        const {name, image, text} = request.body;
        
        const isAnyUndefined = Citi.areValuesUndefined(name, image, text);
        if(isAnyUndefined) return response.status(400).send();
       
        const newUser = { name, image, text };
        const {httpStatus, message} = await Citi.insertIntoDatabase(PeopleAthena, newUser);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(PeopleAthena);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: peopleAthenaFound, message } = await Citi.findByID(PeopleAthena, id); 
           
        if(!peopleAthenaFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(PeopleAthena, peopleAthenaFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {name, image, text } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(name, image, text, id);
        if(isAnyUndefined) return response.status(400).send();

        const peopleAthenaWithUpdatedValues = { name, image, text };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(PeopleAthena, id, peopleAthenaWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}