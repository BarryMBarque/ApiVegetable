import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateCartService from '../../../services/CreateCartService';
import FindAllProductCartService from '../../../..//products/services/FindAllProductCartService';
import FindAllCartService from '../../../services/FindAllCartService';
import { resolveConfig } from 'prettier';
import FindByIdService from '../../../../products/services/FindByIdService';


export default class CartsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { product_id,
            order_id,
           quantity,
           val_unit,
           total_price} = request.body


    const createCart = container.resolve(CreateCartService);
    const getProductById = container.resolve(FindByIdService);
    const product = await getProductById.execute(product_id);
   
  if(product){
    const picture =  product.getPicture_url()
    if(picture){
      const cart = await createCart.execute({
        user_id,
        order_id,
        product_id,
        name: product.name,
        description: product.description,
        picture_url: picture,
        quantity,
        val_unit,
        total_price
        
      });
   
      return response.json(classToClass(cart));
    }else{
      return response.json({error:'produto_url não encontrado'})
    }
   
  }else{
    return response.json({error:'produto não encontrado'})
  }
     
  }
  public async findallCarts(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const FindAllCart = container.resolve(FindAllCartService);

    const carts = await FindAllCart.execute({user_id});

    return response.json(classToClass(carts));
  }
}
