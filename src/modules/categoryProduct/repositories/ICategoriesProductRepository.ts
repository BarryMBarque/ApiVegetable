import CategoryProduct from '../infra/typeorm/entities/CategoryProduct';
import ICreateCategoryProductDTO from '../dtos/ICreateCategoryProductDTO';


export default interface IcategoryProductRepository {
  //findAllProviders(data: IFindAllProviders): Promise<User[]>;
  findById(id: string): Promise<CategoryProduct | undefined>;
  //findByEmail(email: string): Promise<Adress | undefined>;
  create(data: ICreateCategoryProductDTO): Promise<CategoryProduct>;
  save(categoryProduct: CategoryProduct): Promise<CategoryProduct>;
}
