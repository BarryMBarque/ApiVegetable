import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import IAdressesRepository from '../repositories/IAdressesRepository';
import Adress from '../infra/typeorm/entities/Adress';
import AppError from '../../../shared/errors/AppError';


interface IRequest {
  user_id: string;
}
@injectable()
class FindAdressService {
  constructor(
    @inject('AdressesRepository')
    private adressesRepository: IAdressesRepository,
  ) {}

  public async execute({
    user_id
  }: IRequest): Promise<Adress[]> {
  
    const adress = await this.adressesRepository.findAllUserAdresses(user_id);

   if(!adress){
    throw new AppError('Adress not Found!');
     }

    return adress;
  }
}
export default FindAdressService;
