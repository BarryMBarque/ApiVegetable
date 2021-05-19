import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import ICartsRepository from '../repositories/ICartsRepository';
import Cart from '../infra/typeorm/entities/Cart';
import AppError from '../../../shared/errors/AppError';
//import IHashProvider from '../provider/hashProvider/models/IHashProvider';
interface IRequest {
  user_id: string;


}

@injectable()
class CreateCartsService {
  constructor(
    @inject('CartsRepository')
    private cartsRepository: ICartsRepository,
 
  ) {}

  public async execute({user_id}:IRequest): Promise<Cart[]| undefined> {
  
    
    const product = await this.cartsRepository.findAllCart(user_id);
    if(!product){
      throw new AppError('Cart not found!')
    }
    return product;
  }
}
export default CreateCartsService;
