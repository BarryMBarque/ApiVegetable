/* eslint-disable no-return-await */
import { Connection, getRepository, Not, Repository } from 'typeorm';
import Cart from '../entities/Cart';
import ICreateCartDTO from '../../../dtos/ICreateCartDTO';

import ICartsRepository from '../../../repositories/ICartsRepository';

class CartsRepository implements ICartsRepository {
  private ormRepository: Repository<Cart>;

  constructor() {
    this.ormRepository = getRepository(Cart);
  }

 

  public async create({
   user_id,
   product_id,
   name,
   description,
   picture_url,
   quantity,
   val_unit,
   total_price

  }: ICreateCartDTO): Promise<Cart> {
    const order = this.ormRepository.create({
      user_id,
      product_id,
      name,
      description,
      picture_url,   
      quantity,
      val_unit,
      total_price

    });
    await this.ormRepository.save(order);

    return order;
  }

  

  public async findById(id: string): Promise<Cart | undefined> {
    const cart = await this.ormRepository.findOne(id);
    return cart;
  }
  public async findAllCart(id: string): Promise<Cart[]| undefined> {
    const cart = await this.ormRepository.find({
     where:{
       user_id: id
     }
    });
    return cart;
  }

  public async save(cart: Cart): Promise<Cart> {
    return await this.ormRepository.save(cart);
  }
  public async removeCart(cart: Cart): Promise<void> {
   
      await this.ormRepository.remove(cart);
     
  }

}
export default CartsRepository;
