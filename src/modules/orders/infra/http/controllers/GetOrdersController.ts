import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import GetOrdersService from '../../../services/GetOrdersService';

import Cart from '../../../../carts/infra/typeorm/entities/Cart';





export default class OrdersController {
  public async getOrders(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    
    const getorders = container.resolve(GetOrdersService);

    const orders =  await getorders.execute({user_id})
     console.log(orders)

    return response.json(classToClass(orders));

   

    
  }
}
