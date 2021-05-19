import {getRepository} from 'typeorm';
import path from 'path';
import {injectable, inject} from 'tsyringe';
import  User from '../infra/typeorm/entities/User';
import AppError from '../../../shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import IMailProvider from '../../../shared/container/providers/MailProvider/models/IMailProvider';
import IUserTokensRepository from '../repositories/IUserTokenRepository';

interface IRequest{

  email: string;

}
@injectable()
class SendForgotPasswordEmailService {
  constructor (

    @inject('UserTokensRepository')
    private userTokenRepository: IUserTokensRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,


    ){}
public async  execute({email}: IRequest):Promise<void>{
  const user = await this.usersRepository.findByEmail(email);
  if(!user){
    throw new AppError('User does not exist');

  }
 const {token} = await this.userTokenRepository.generate(user.id);
 const forgotPasswordTeplate = path.resolve(__dirname, '..','views', 'forgot_password.hbs');
  await this.mailProvider.sendMail({
    to: {
    name: user.name,
    email: user.email,
    },
    subject: '[GoBarber] Recuperação de senha',
    templateData:{
      file: forgotPasswordTeplate,
      varaibles: {
        name: user.name,
        link: `${process.env.APP_WEB_URL}/reset-password?token=${token}`,

      }
    }
  })
}
}
export default SendForgotPasswordEmailService;
