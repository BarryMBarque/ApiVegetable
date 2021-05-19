import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';
import AppError from '../../../shared/errors/AppError';


interface IRequest {

  id: string;
  quantity: string;
}
@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(id: string,quantity: number): Promise<Product> {
  
    
    const product = await this.productsRepository.findById(id);
    if(!product){
      throw new AppError('Product bot found');
    }
    const c = product.quantity
    const a = c.toString();
    const b = parseInt(a);
    product.quantity = (b + quantity);
    await this.productsRepository.save(product);
    return product;
  }
}
export default CreateProductService;
