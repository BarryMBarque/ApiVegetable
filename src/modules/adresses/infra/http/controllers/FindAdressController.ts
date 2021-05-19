import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import FindAdressService from '../../../services/FindAdressService';


export default class AdressesController {
  public async create(request: Request, response: Response): Promise<Response> {
  

    const findAdress = container.resolve(FindAdressService);

    const adress = await findAdress.execute({
     user_id: request.user.id
    });

    return response.json(classToClass(adress));
  }
}
