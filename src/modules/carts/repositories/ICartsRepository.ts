import Cart from '../infra/typeorm/entities/Cart';
import ICreateCartDTO from '../dtos/ICreateCartDTO';
import { ProductArn } from 'aws-sdk/clients/servicecatalog';


export default interface ICartRepository {
  findAllCart(id: string ): Promise<Cart[]| undefined>;
  findById(id: string): Promise<Cart | undefined>;
  removeCart(cart: Cart): Promise<void>;
  create(data: ICreateCartDTO): Promise<Cart>;
  save(cart: Cart): Promise<Cart>;
}
