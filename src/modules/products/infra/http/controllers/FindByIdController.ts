import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import FindByIdService from '../../../services/FindByIdService';


export default class FindProductsByIdController {
  public async findAllByid(request: Request, response: Response): Promise<Response> {
    const {product_id}= request.body;
  
    const findById = container.resolve(FindByIdService);
   
    const product = await findById.execute(
      product_id
    );

    return response.json(classToClass(product));
  }
}
