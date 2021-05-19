import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import UpdateCartService from '../../../services/UpdateCartService';
import FindAllProductCartService from '../../../..//products/services/FindAllProductCartService';
import FindAllCartService from '../../../services/FindAllCartService';
import { resolveConfig } from 'prettier';



export default class CartsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { id,
           quantity,
           total_price} = request.body
           console.log(id,
            quantity,
            total_price)


    const updateCart = container.resolve(UpdateCartService);
    
   
  
      const cart = await updateCart.execute({
        id,
        quantity,
        total_price
        
      });
      

      return response.json({error:'cart atualizado com sucesso!'})
    }
  }