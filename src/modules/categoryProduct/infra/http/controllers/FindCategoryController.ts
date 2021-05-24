import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import FindCategoryProductService from '../../../services/FindCategoryService';


export default class CategoryController {
  
  
  public async find(request: Request, response: Response): Promise<Response> {
    const {name} = request.body;
  
    const findCategoryProduct = container.resolve(FindCategoryProductService);

    const categoryProduct = await findCategoryProduct.execute({
       name
    }); ;
    console.log(categoryProduct);

    return response.json(classToClass(categoryProduct));
  }
}
