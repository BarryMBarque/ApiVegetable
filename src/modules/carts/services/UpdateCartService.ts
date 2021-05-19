import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import ICartsRepository from '../repositories/ICartsRepository';
import Cart from '../infra/typeorm/entities/Cart';
import AppError from '../../../shared/errors/AppError';
//import IHashProvider from '../provider/hashProvider/models/IHashProvider';

interface IRequest {
  id: string;
  total_price: number;
  quantity: number;

}
@injectable()
class CreateCartsService {
  constructor(
    @inject('CartsRepository')
    private cartsRepository: ICartsRepository,
 
  ) {}

  public async execute({
  id,
  quantity,
  total_price,
  
   



  }: IRequest): Promise<Cart> {
    
      
    const cart = await this.cartsRepository.findById(id);

    if(!cart){
      throw new AppError("Carinho inexistente", 401)
    }
    cart.quantity = quantity,
    cart.total_price = total_price
    await this.cartsRepository.save(cart);
   

    return cart;
  }
}
export default CreateCartsService;
