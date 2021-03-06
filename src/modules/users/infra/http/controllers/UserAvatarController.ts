import {Request, Response} from 'express';
import { container} from 'tsyringe';
import multer from'multer';
import uploadConfig from '@config/upload';
//import  UsersRepository  from '@modules/users/infra/typeorm/repositories/usersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '../../../services/UpdateUserAvatarService';

import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import { classToClass } from 'class-transformer';


export default class UserAvatarController {
public async update(request: Request, response: Response):Promise<Response>{
  console.log(request.file)
const updateUserAvatar = container.resolve(UpdateUserAvatarService);
  
  const user = await updateUserAvatar.execute({
    user_id: request.user.id,
    avatarFilename: request.file.filename,
  });
  return response.json(classToClass(user));
}
}
