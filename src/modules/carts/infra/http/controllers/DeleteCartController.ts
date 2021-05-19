import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import DeleteCartService from '../../../services/DeleteCartService';
import FindAllProductCartService from '../../../..//products/services/FindAllProductCartService';
import FindAllCartService from '../../../services/FindAllCartService';
import { resolveConfig } from 'prettier';



export default class CartsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {id} = request.body
 
    const deleteCart = container.resolve(DeleteCartService);
    
   
  
      const cart = await deleteCart.execute(
        id,
        
      );
     
     
      return response.json({error:'cart deletado com sucesso!'})
    }
  }