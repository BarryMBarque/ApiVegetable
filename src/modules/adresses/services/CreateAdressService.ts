import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import IAdressesRepository from '../repositories/IAdressesRepository';
import Adress from '../infra/typeorm/entities/Adress';
import AppError from '../../../shared/errors/AppError';


interface IRequest {
  state: string;
  city:string;
  cep: number;
  district: string;
  road: string;
  number: number;
  complement?: string;
  user_id?: string;

}
@injectable()
class CreateAdressService {
  constructor(
    @inject('AdressesRepository')
    private adressesRepository: IAdressesRepository,
  ) {}

  public async execute({
    state,
    city,
    cep,
    district,
    road,
    number,
    complement,
    user_id,

  }: IRequest): Promise<Adress> {
     console.log(state,cep, district, road,number, complement,user_id )
    const adress = await this.adressesRepository.create({
     state,
     city,
     cep,
     district,
     road,
     number,
     complement,
     user_id,

    });



    return adress;
  }
}
export default CreateAdressService;
