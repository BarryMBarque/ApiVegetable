import  User from '../../typeorm/entities/User';
import {Connection, getRepository, Not, Repository} from 'typeorm';
import IUsersRepository from '../../../repositories/IUsersRepository'
import ICreateUsersDTO from '../../../dtos/ICreateUserDTO'
import IFindAllProviders from '../../../dtos/IFindAllProviders';
class UsersRepository  implements IUsersRepository{
  private ormRepository : Repository<User>;
  constructor (){
   this.ormRepository = getRepository(User);
  }

  ;
  public async findAllProviders({except_user_id,}: IFindAllProviders): Promise<User[]>{

     let users: User[];
    if(except_user_id){
      users = await  this.ormRepository.find({
        where:{
          id: Not(except_user_id)
        }
      })
    }else{
     users = await  this.ormRepository.find()
    }

    return users;

  }
  public async create({ name,cpf, phoneNumber, email, password,avatar}: ICreateUsersDTO):  Promise<User>{

    const users = this.ormRepository.create({ name, cpf, phoneNumber, email, password, avatar});
    await this.ormRepository.save(users);


    return users;

  }
  public async findByEmail(email: string): Promise<User | undefined>{
     const user = await this.ormRepository.findOne({
       where:{email}
     });
     return user
  }
  public async findById(id: string): Promise<User | undefined>{
    const user = await this.ormRepository.findOne(id);
    return user
  }


  public async save(user: User): Promise<User>{
      return await this.ormRepository.save(user);
  }
}
export default UsersRepository;
