import {getRepository} from 'typeorm';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import {injectable, inject} from 'tsyringe';
import  User from '../infra/typeorm/entities/User';
import AppError from '../../../shared/errors/AppError';
import IHashProvider from '../provider/hashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';


interface IRequest{
  name: string ;
  cpf: number;
  phoneNumber?: string;
  email: string;
  password: string;
  avatar?: string;

}
@injectable()
class CreateUserService {
  constructor (
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
   // @inject ('CacheProvider')
   // private cacheProvider: ICacheProvider,
    ){}
public async execute({name, cpf, phoneNumber, email, password, avatar}: IRequest): Promise<User>{

   const hashedPassword = await this.hashProvider.gerenerateHash(password);
   const user = await this.usersRepository.create({
     name,
     cpf,
     phoneNumber,
     email,
     password: hashedPassword,
     avatar,
    
   });
  
 // await this.cacheProvider.invalidatePrefix('providers-list');

   return user;

}
}
export default CreateUserService;
