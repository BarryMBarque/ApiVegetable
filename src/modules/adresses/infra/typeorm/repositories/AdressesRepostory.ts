/* eslint-disable no-return-await */
import { Connection, getRepository, Not, Repository } from 'typeorm';
import Adress from '../entities/Adress';
import ICreateAdressDTO from '../../../dtos/ICreateAdressDTO';

import IAdressesRepository from '../../../repositories/IAdressesRepository';
import { th } from 'date-fns/locale';
import AppError from '../../../../../shared/errors/AppError';

class UsersRepository implements IAdressesRepository {
  private ormRepository: Repository<Adress>;

  constructor() {
    this.ormRepository = getRepository(Adress);
  }

 

  public async create({
   state,
   city,
   cep,
   district,
   road,
   number,
   complement,
   user_id
  }: ICreateAdressDTO): Promise<Adress> {
    const adress = this.ormRepository.create({
     state,
     city,
     CEP: cep,
     district,
     road,
     number,
     complement,
     user_id
     
    
    });
    await this.ormRepository.save(adress);

    return adress;
  }

  

  public async findById(id: string): Promise<Adress | undefined> {
    //console.log('=> aqui', id);
  
    const adress = await this.ormRepository.findOne(id);
    return adress;
  }
  public async findAllUserAdresses(id: string): Promise<Adress[]> {
    console.log('=> aqui', id);
  
    const adress = await this.ormRepository.find({
      where:{
        user_id: id
      }
    });
    if(!adress){
      throw new AppError('Adresses not found');
    }
    console.log(adress);
    return adress;
  }

  public async save(adress: Adress): Promise<Adress> {
    return await this.ormRepository.save(adress);
  }

  public async remove(adress: Adress): Promise<void> {
   
    await this.ormRepository.remove(adress);
  }
}
export default UsersRepository;
