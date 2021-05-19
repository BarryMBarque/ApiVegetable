import Order from '../infra/typeorm/entities/Order';
import Product from '../../products/infra/typeorm/entities/Product';
import ICreateOrderDTO from '../dtos/ICreateOrderDTO';
import ICreateProductDTO from '../../products/dtos/ICreateProductDTO';
import { ProductArn } from 'aws-sdk/clients/servicecatalog';


export default interface IOrderRepository {

  findById(id: string): Promise<Order | undefined>;
  findAllOrders(user_id: string): Promise<Order[] | undefined>;
  create(data: ICreateOrderDTO): Promise<void>;
  save(order: Order): Promise<Order>;
}
