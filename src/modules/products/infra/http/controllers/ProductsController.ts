import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateProductService from '../../../services/CreateProductService';





export default class ProductsController {
  public async create(request: Request , response: Response): Promise<Response> {
  
    const { name,
      description,
      quantity,
      price,
      discount_coupon,
      final_price,
      categoryProduct_id,
      cart_id}  = request.body  
      
      const filename  = request.files['picture'][0].filename

      

    
    const createProduct = container.resolve(CreateProductService);
    
    const product = await createProduct.execute({
      name,
      picture: filename,
      description,
      quantity,
      price,
      discount_coupon,
      final_price,
      categoryProduct_id,
   
    });

    return response.json(classToClass(product));
  }
}

