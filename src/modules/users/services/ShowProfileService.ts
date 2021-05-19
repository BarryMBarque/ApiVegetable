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
}
@injectable()
class ShowProfileService {
  constructor (
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    ){}
  public async execute ({  user_id}: IRequest):Promise<User>{


    const user = await this.usersRepository.findById(user_id);
    if(!user){
      throw new AppError("User Not Found",401);
    }

    return user;
  }
}
 export default ShowProfileService;
