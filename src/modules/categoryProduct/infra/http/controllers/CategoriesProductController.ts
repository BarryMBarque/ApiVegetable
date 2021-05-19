import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateCategoryProductService from '../../../services/CreateCategoryProductService';


export default class CategoryController {
  
  
  public async create(request: Request, response: Response): Promise<Response> {
    const {name} = request.body;
  
    const createCategoryProduct = container.resolve(CreateCategoryProductService);

    const categoryProduct = await createCategoryProduct.execute({
       name
    }); ;

    return response.json(classToClass(categoryProduct));
  }
}
