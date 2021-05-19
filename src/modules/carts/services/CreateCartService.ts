import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import ICartsRepository from '../repositories/ICartsRepository';
import Cart from '../infra/typeorm/entities/Cart';
import AppError from '../../../shared/errors/AppError';
//import IHashProvider from '../provider/hashProvider/models/IHashProvider';

interface IRequest {
  user_id: string;
  product_id: string;
  order_id?:string;
  name: string;
  description: string;
  picture_url?: string;
  quantity: number;
  val_unit: number;
  total_price: number;

}
@injectable()
class CreateCartsService {
  constructor(
    @inject('CartsRepository')
    private cartsRepository: ICartsRepository,
 
  ) {}

  public async execute({
   user_id,
   product_id,
   order_id,
   name,
   description,
   picture_url,
   quantity,
   val_unit,
   total_price,
   



  }: IRequest): Promise<Cart> {
    if(quantity && val_unit){
      const a = quantity*val_unit;
      const b  = a.toFixed(2);
      total_price = parseFloat(b);
    }
    
    const cart = await this.cartsRepository.create({
   user_id,
   product_id,
   order_id,
   name,
   description,
   picture_url,
   quantity,
   val_unit,
   total_price
 
    });

    //await this.cacheProvider.invalidatePrefix('providers-list');

    return cart;
  }
}
export default CreateCartsService;
