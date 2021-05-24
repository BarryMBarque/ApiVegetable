import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import IOrdersRepository from '../repositories/IOrdersRepository';

import Order from '../infra/typeorm/entities/Order';
import AppError from '../../../shared/errors/AppError';
import Product from '../../products/infra/typeorm/entities/Product';
//import IHashProvider from '../provider/hashProvider/models/IHashProvider';

interface IRequest {
user_id: string;

}
@injectable()
class GetOrdersService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository

  ) {}

  public async execute({

  user_id

  }: IRequest): Promise<Order[]> {
   
    console.log('=>',user_id)
    const orders = await this.ordersRepository.findAllOrders(user_id);
   
    if(!orders){
      throw new AppError('Orders not found');
    }

    return orders;
  }
}
export default GetOrdersService;
