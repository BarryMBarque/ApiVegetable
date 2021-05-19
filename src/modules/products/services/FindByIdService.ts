import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';
import AppError from '../../../shared/errors/AppError';
//import IHashProvider from '../provider/hashProvider/models/IHashProvider';

interface IRequest {

  product_id: string;
}
@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(product_id: string): Promise<Product| undefined> {
  
    
    const product = await this.productsRepository.findById(product_id);
    
  return product;
  }
}
export default CreateProductService;
