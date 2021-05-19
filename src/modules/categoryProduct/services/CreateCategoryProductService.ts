import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import ICategoriesProductRepository from '../repositories/ICategoriesProductRepository';
import CategoryProduct from '../infra/typeorm/entities/CategoryProduct';
import AppError from '../../../shared/errors/AppError';
//import IHashProvider from '../provider/hashProvider/models/IHashProvider';

interface IRequest {
  name: string;
}
@injectable()
class CreateCategoryProductService {
  constructor(
    @inject('CategoriesProductRepository')
    private categoriesproductRepository: ICategoriesProductRepository,
    // @inject('HashProvider')
    // private hashProvider: IHashProvider,
    //@inject('CacheProvider')
    //private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    name
  }: IRequest): Promise<CategoryProduct> {
    
    const categoryProduct = await this.categoriesproductRepository.create({
       name
    });

    //await this.cacheProvider.invalidatePrefix('providers-list');

    return categoryProduct;
  }
}
export default CreateCategoryProductService;
