import { Request, Response } from 'express';
import { Testimony } from '@models/Testimony';
import { Citi, Crud } from '../global'




export default class TestimonyController implements Crud {

    async create(request: Request, response: Response){ 
        
        const {image, name, text} = request.body
         
        const isAnyUndefined = Citi.areValuesUndefined(image, name, text);
        if(isAnyUndefined) return response.status(400).send();
        
        const newTestimony =  {image, name, text} ;
        const {httpStatus, message} = await Citi.insertIntoDatabase(Testimony, newTestimony);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Testimony);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: testimonyFound, message } = await Citi.findByID(Testimony, id); 
           
        if(!testimonyFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Testimony, testimonyFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {image, name, text } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, name, text, id);
        if(isAnyUndefined) return response.status(400).send();

        const testimonyWithUpdatedValues = { image, name, text };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Testimony, id, testimonyWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}