/* eslint-disable no-return-await */
import { Connection, getRepository, Not, Repository } from 'typeorm';
import Product from '../entities/Product';
import ICreateProductDTO from '../../../dtos/ICreateProductDTO';

import IProductsRepository from '../../../repositories/IProductsRepository';
import IFindAllProductCartDTO from '@modules/products/dtos/IFindAllProductCartDTO';

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

 

  public async create({
   name,
   picture,
   description,
   quantity,
   price,
   discount_coupon,
   final_price,
   categoryProduct_id,

  }: ICreateProductDTO): Promise<Product> {

    const product = this.ormRepository.create({
     name,
     picture,
     description,
     quantity,
     price,
     discount_coupon,
     final_price,
     categoryProduct_id,

    });
    await this.ormRepository.save(product);

    return product;
  }

  

  public async findById(id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne(id);
    return product;
  }

  public async save(product: Product): Promise<Product> {
    return await this.ormRepository.save(product);
  }
  public async findAllProductCart(product_id: string): Promise<Product[]| undefined> {
   let products: Product[];
      products = await  this.ormRepository.find({
        where:{
          id: product_id
        }
      })

    return products;
  }
  public async findAllProductByCategory( category_id: string): Promise<Product[] |undefined>{
    let products: Product[];
    console.log(category_id)
    products = await this.ormRepository.find({
      where:{
        categoryProduct_id: category_id
       }
    })
    return products;
  }
  public async findAllProducts (): Promise<Product[]| undefined>{
    let products : Product[];
    products = await this.ormRepository.find();
    return products;
  }
}
export default ProductsRepository;
