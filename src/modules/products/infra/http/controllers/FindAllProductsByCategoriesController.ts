import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import FindAllProductByCategoryService from '../../../services/FindAllProductByCategoryService';


export default class FindAllProductsByCategoryController {
  public async findAllProductByCategory(request: Request, response: Response): Promise<Response> {
    const {categoryProduct_id}= request.body;
  
    const findAllProductByCategory = container.resolve(FindAllProductByCategoryService);
   
    const product = await findAllProductByCategory.execute(
      categoryProduct_id
    );

    return response.json(classToClass(product));
  }
}
