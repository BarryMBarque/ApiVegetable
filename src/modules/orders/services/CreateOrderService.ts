import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import IOrdersRepository from '../repositories/IOrdersRepository';

import Order from '../infra/typeorm/entities/Order';
import AppError from '../../../shared/errors/AppError';
import Product from '../../products/infra/typeorm/entities/Product';
//import IHashProvider from '../provider/hashProvider/models/IHashProvider';

interface IRequest {

  discount_coupon?: number;
  total_price: number;
  status: number;
  user_id: string;
  name: string;
  description: string;
  picture_url?: string;
  quantity:number;
  val_unit:number;
  state: string;
  city: string;
  CEP: number;
  district: string;
  road: string;
  number: number;
  complement?: string;

}
@injectable()
class CreateOrdersService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
    // @inject('HashProvider')
    // private hashProvider: IHashProvider,
    //@inject('CacheProvider')
    //private cacheProvider: ICacheProvider,
  ) {}

  public async execute({

    discount_coupon,
    total_price,
    status,
    user_id,
  name,
  description,
  picture_url,
  quantity,
  val_unit,
  state,
  city,
  CEP,
  district,
  road,
  number,
  complement



  }: IRequest): Promise<void> {
   
    
    const order = await this.ordersRepository.create({

      discount_coupon,
      total_price,
      status,
      user_id,
    name,
    description,
    picture_url,
    quantity,
    val_unit,
    state,
    city,
    CEP,
    district,
    road,
    number,
    complement


    });

 

  }
}
export default CreateOrdersService;
