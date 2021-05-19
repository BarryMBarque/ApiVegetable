import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateAdressService from '../../../services/CreateAdressService';


export default class AdressesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {state, city,cep, district, road, number, complement } = request.body;

    const createAdress = container.resolve(CreateAdressService);
     const user_id = request.user.id;
     console.log(state,city,cep, district, road,number, complement,user_id )
    const adress = await createAdress.execute({
      state,
      city,
      cep,
      district,
      road,
      number,
      complement,
      user_id,
      
    });

    return response.json(classToClass(adress));
  }
}
