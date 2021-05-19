import Adress from '../infra/typeorm/entities/Adress';
import ICreateAdressDTO from '../dtos/ICreateAdressDTO';


export default interface IAdressRepository {
  findAllUserAdresses(user_id: string): Promise<Adress[]>;
  findById(id: string): Promise<Adress | undefined>;
  create(data: ICreateAdressDTO): Promise<Adress>;
  save(adress: Adress): Promise<Adress>;
  remove(adress: Adress): Promise<void>;
}
