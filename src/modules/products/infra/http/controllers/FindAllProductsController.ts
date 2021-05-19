import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import FindAllProductsService from '../../../services/FindAllProductsService';
import Product from '../../typeorm/entities/Product';


export default class FindAllProductsController {
  public async findallProduct(request: Request,response: Response): Promise<Response> {
  

    const findAllProducts= container.resolve(FindAllProductsService);

    const products = await findAllProducts.execute();

    return response.json(classToClass(products));
  }
}
