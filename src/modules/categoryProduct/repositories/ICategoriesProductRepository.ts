import CategoryProduct from '../infra/typeorm/entities/CategoryProduct';
import ICreateCategoryProductDTO from '../dtos/ICreateCategoryProductDTO';


export default interface IcategoryProductRepository {
  findById(id: string): Promise<CategoryProduct | undefined>;
  findByName(name: string): Promise<CategoryProduct | undefined>;
  create(data: ICreateCategoryProductDTO): Promise<CategoryProduct>;
  save(categoryProduct: CategoryProduct): Promise<CategoryProduct>;
}
