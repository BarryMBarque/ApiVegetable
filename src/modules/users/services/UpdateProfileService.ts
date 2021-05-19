import {getRepository} from 'typeorm';
import path from 'path';
import fs from 'fs';
import {injectable, inject} from 'tsyringe';
import uploadConfig from '../../../config/upload';
import AppError from '../../../shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import IStorageProvider from '../../../shared/container/providers/storageProvider/models/IStorageProvider';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../provider/hashProvider/models/IHashProvider';
interface IRequest {
  user_id: string;
  cpf: number;
  phoneNumber: string;
  name: string;
  email: string;
  old_password: string;
  password: string;
}
@injectable()
class UpdateProfileService {
  constructor (
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider ,
    ){}
  public async execute ({  user_id,  name,cpf, phoneNumber,
    email,
    old_password,
    password,}: IRequest):Promise<User>{

 
    const user = await this.usersRepository.findById(user_id);
    if(!user){
      throw new AppError("User Not Found",401);
    }
    const userWithUpdateEmail =  await this.usersRepository.findByEmail(email);
    if (userWithUpdateEmail && userWithUpdateEmail.id !== user_id){
      throw new AppError("Email is already in use",401);

    }
    user.name= name;
    user.cpf= cpf,
    user.phoneNumber=phoneNumber;
     user.email = email;
     if (password && !old_password){
      throw new AppError("You need to informe the old password to set the new password",401);
     }
     if (password && old_password){
       const checkOldPassword = await this.hashProvider.compareHash(old_password, user.password);
       if(!checkOldPassword){
        throw new AppError("Old Password does not match",401);
       }
       user.password = await this.hashProvider.gerenerateHash(password);
     }

    return this.usersRepository.save(user);
  }
}
 export default UpdateProfileService;
