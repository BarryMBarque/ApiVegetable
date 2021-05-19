import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import IStorageProvider from '../../../shared/container/providers/storageProvider/models/IStorageProvider';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';
import AppError from '../../../shared/errors/AppError';
import DiskStorageProvider from '../../../shared/container/providers/storageProvider/implementations/S3StorageProvider';


interface IRequest {
  name: string;
  picture: string;
  description: string;
  quantity: number;
  price: number;
  discount_coupon?: number;
  final_price: number;
  categoryProduct_id: string;

}
@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
    // @inject('StorageProvider')
    // private storageProvider: IStorageProvider ,

  ) {}
  
  public async execute({
    name,
    picture,
    description,
    quantity,
    price,
    discount_coupon,
    final_price,
    categoryProduct_id,


  }: IRequest): Promise<Product> {
    const storageProvider = new DiskStorageProvider()
   
    if(discount_coupon){
      const a = price*(1-discount_coupon/100);
      const b = a.toFixed(2)
      final_price =parseFloat(b)
    }else{
      final_price = price;
    }

    const PictureName = await storageProvider.saveFile(picture);
    
    const product = await this.productsRepository.create({
      name,
      picture: PictureName,
      description,
      quantity,
      price,
      discount_coupon,
      final_price,
      categoryProduct_id,

    });

    //await this.cacheProvider.invalidatePrefix('providers-list');

    return product;
  }
}
export default CreateProductService;
