import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import ICartsRepository from '../repositories/ICartsRepository';
import Cart from '../infra/typeorm/entities/Cart';
import AppError from '../../../shared/errors/AppError';
//import IHashProvider from '../provider/hashProvider/models/IHashProvider';

interface IRequest {
  id: string;


}
@injectable()
class DeleteCartsService {
  constructor(
    @inject('CartsRepository')
    private cartsRepository: ICartsRepository,
 
  ) {}

  public async execute(
  id : string): Promise<void> {

    const cart = await this.cartsRepository.findById(id);
      
    if(!cart){
      throw new AppError("cart not found!", 401);
    }else{
      await this.cartsRepository.removeCart(cart);
    }


    
  }
}
export default DeleteCartsService;
