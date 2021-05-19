import {getRepository} from 'typeorm';
import {isAfter, addHours} from 'date-fns';
import {injectable, inject} from 'tsyringe';
import  User from '../infra/typeorm/entities/User';
import AppError from '../../../shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import IMailProvider from '../../../shared/container/providers/MailProvider/models/IMailProvider';
import IUserTokenRepository from '../repositories/IUserTokenRepository';
import IHashProvider from '../provider/hashProvider/models/IHashProvider';
import { compare } from 'bcryptjs';

interface IRequest{

  token: string;
  password: string;

}
@injectable()
class ResetPasswordService {
  constructor (
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,

    @inject('UserTokensRepository')
    private userTokenRepository: IUserTokenRepository,


    ){}
public async  execute({token, password}: IRequest):Promise<void>{
const userToken = await this.userTokenRepository.findByToken(token);
if(!userToken){
  throw new AppError('User token does not existe');

}
const user = await this.usersRepository.findById(userToken.user_id)
if (!user){
  throw new AppError('User does not existe');
}
const tokenCreatedAt =  userToken.created_at;
const compareDate = addHours(tokenCreatedAt, 2);
if(isAfter( Date.now(),compareDate)){
  throw new AppError('expired token ');

}
user.password = await  this.hashProvider.gerenerateHash(password);

await this.usersRepository.save(user);
}
}
export default ResetPasswordService;
