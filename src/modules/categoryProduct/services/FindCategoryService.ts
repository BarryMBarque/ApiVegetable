import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import ICategoriesProductRepository from '../repositories/ICategoriesProductRepository';
import CategoryProduct from '../infra/typeorm/entities/CategoryProduct';
import AppError from '../../../shared/errors/AppError';


interface IRequest {
  name: string;
}
@injectable()
class CreateCategoryProductService {
  constructor(
    @inject('CategoriesProductRepository')
    private categoriesproductRepository: ICategoriesProductRepository,
  ) {}

  public async execute({
    name
  }: IRequest): Promise<CategoryProduct | undefined> {
    
    const categoryProduct = await this.categoriesproductRepository.findByName(
       name
    );
  if(!categoryProduct){
    throw new AppError('Category not found!');
  }
    return categoryProduct;
  }
}
export default CreateCategoryProductService;
