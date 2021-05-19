import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import DeleteAdressService from '../../../services/DeleteAdressService';


export default class AdressesController {
  public async create(request: Request, response: Response): Promise<Response> {
  
   const id = request.body

    const findAdress = container.resolve(DeleteAdressService);

    const adress = await findAdress.execute({
     id
    });

    return response.json(classToClass(adress));
  }
}
