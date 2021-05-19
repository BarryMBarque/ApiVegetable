import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';
import AppError from '../../../shared/errors/AppError';
import { id } from 'date-fns/locale';


interface IRequest {

  category_id: string;
}
@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(category_id: string): Promise<Product[] | undefined> {
  
    
    const products = await this.productsRepository.findAllProductByCategory(category_id);
    if(!products){
      throw new AppError('Products not found!')
    }
    return products;
  }
}
export default CreateProductService;
