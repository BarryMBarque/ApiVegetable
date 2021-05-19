/* eslint-disable no-return-await */
import { Connection, getRepository, Not, Repository } from 'typeorm';
import Order from '../entities/Order';
import ICreateOrderDTO from '../../../dtos/ICreateOrderDTO';

import IOrdersRepository from '../../../repositories/IOrdersRepository';


class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;
  

  constructor() {
    this.ormRepository = getRepository(Order);
  
  }

 

  public async create({
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
  }: ICreateOrderDTO): Promise<void> {
  console.log( discount_coupon,
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
    complement)
    
    const order = this.ormRepository.create({
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
    await this.ormRepository.save(order);

  }

  

  public async findById(id: string): Promise<Order | undefined> {
    const order = await this.ormRepository.findOne(id);
    return order;
  }

  public async save(order: Order): Promise<Order> {
    return await this.ormRepository.save(order);
  }
  public async findAllOrders(user_id: string): Promise<Order[]| undefined>{
  
    const orders = await this.ormRepository.find({
      where:{
        user_id: user_id
      }
    });
    
    return orders;
  }
  
}
export default OrdersRepository;
