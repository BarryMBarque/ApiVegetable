import Product from '../infra/typeorm/entities/Product';
import ICreateProductDTO from '../dtos/ICreateProductDTO';
import { ProductArn } from 'aws-sdk/clients/servicecatalog';
import IFindAllProductCartDTO from '../dtos/IFindAllProductCartDTO';


export default interface IProductRepository {
  findAllProductCart(cart_id: string): Promise<Product[]| undefined>;
  findAllProducts(): Promise<Product[]| undefined>;
  findAllProductByCategory(category_id: string): Promise<Product[] | undefined>;
  findById(id: string): Promise<Product | undefined>;
 // findByEmail(email: string): Promise<Adress | undefined>;
  create(data: ICreateProductDTO): Promise<Product>;
  save(product: Product): Promise<Product>;
}
