import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import IProductsRepository from '../repositories/IProductsRepository';
import ICacheProvider from '../../../shared/container/providers/CacheProvider/models/ICacheProviders';
import Product from '../infra/typeorm/entities/Product';
import AppError from '../../../shared/errors/AppError';



@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(): Promise<Product[] | undefined> {
  
    
    const product = await this.productsRepository.findAllProducts();
    return product;
  }
}
export default CreateProductService;
