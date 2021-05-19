import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import IAdressesRepository from '../repositories/IAdressesRepository';
import Adress from '../infra/typeorm/entities/Adress';
import AppError from '../../../shared/errors/AppError';


interface IRequest {
  id: string;
}
@injectable()
class DeleteAdressService {
  constructor(
    @inject('AdressesRepository')
    private adressesRepository: IAdressesRepository,
  ) {}

  public async execute({
    id
  }: IRequest): Promise<void> {
  
    const adress = await this.adressesRepository.findById(id);
    if(!adress){
      throw new AppError('Adress not found!')
    }

     await this.adressesRepository.remove(adress);
  }
}
export default DeleteAdressService;
