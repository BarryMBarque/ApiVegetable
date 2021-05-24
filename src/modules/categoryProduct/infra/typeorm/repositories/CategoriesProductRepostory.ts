/* eslint-disable no-return-await */
import { Connection, getRepository, Not, Repository } from 'typeorm';
import CategoryProduct from '../entities/CategoryProduct';
import ICreateCategoryProductDTO from '../../../dtos/ICreateCategoryProductDTO';

import ICategoriesProductRepository from '../../../repositories/ICategoriesProductRepository';

class CategoriesProductRepository implements ICategoriesProductRepository {
  private ormRepository: Repository<CategoryProduct>;

  constructor() {
    this.ormRepository = getRepository(CategoryProduct);
  }

 

  public async create({
   name
  }: ICreateCategoryProductDTO): Promise<CategoryProduct> {
    const categoryProduct = this.ormRepository.create({
     name
    });
    await this.ormRepository.save(categoryProduct);

    return categoryProduct;
  }

  

  public async findById(id: string): Promise<CategoryProduct | undefined> {
    const categoryProduct = await this.ormRepository.findOne(id);
    return categoryProduct;
  }
  public async findByName(name: string): Promise<CategoryProduct | undefined> {
    const categoryProduct = await this.ormRepository.findOne({
      where: {
        name: name
      }
    });
    return categoryProduct;
  }
  public async save(categoryProduct: CategoryProduct): Promise<CategoryProduct> {
    return await this.ormRepository.save(categoryProduct);
  }
}
export default CategoriesProductRepository;

