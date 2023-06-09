import { Request, Response } from 'express';
import { Body } from '@models/Body';
import { Citi, Crud } from '../global'

export default class BodyController implements Crud {

    // comandos do CRUD para o Body

    async create(request: Request, response: Response){ 
       
        const {textdata} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(textdata);
        if(isAnyUndefined) return response.status(400).send();

        const newBody = { textdata };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Body, newBody);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Body);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: BodyFound, message } = await Citi.findByID(Body, id); 
           
        if(!BodyFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Body, BodyFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {textdata } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(textdata, id);
        if(isAnyUndefined) return response.status(400).send();

        const BodyWithUpdatedValues = { textdata };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Body, id, BodyWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}