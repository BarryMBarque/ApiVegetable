import {Request, Response} from 'express';
import { container} from 'tsyringe';
import {classToClass} from 'class-transformer';
//import  UsersRepository  from '@modules/users/infra/typeorm/repositories/usersRepository';
import AuthenticateUserService from '../../../services/AuthenticateUsersService';
export default class SessionsController {
public async create(request: Request, response: Response):Promise<Response>{
  const { email, password}= request.body;
  const authenticateUser = container.resolve(AuthenticateUserService);
   const {user, token} = await authenticateUser.execute({
    email,
    password,
  });

   return response.send({user: classToClass(user), token});
}
}
