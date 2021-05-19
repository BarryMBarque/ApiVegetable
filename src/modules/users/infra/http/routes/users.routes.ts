import { Router} from 'express';
import { container} from 'tsyringe';
import multer from'multer';
import uploadConfig from '../../../../../config/upload';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import {celebrate, Segments, Joi} from 'celebrate';
import ensureAuthenticate from '../middlewares/ensureAuthenticated';
import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();
const upload = multer(uploadConfig.multer);

const userController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRouter.post('/',
celebrate({
  [Segments.BODY]:{
    name: Joi.string().required(),
    cpf: Joi.number().required(),
    phoneNumber: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    avatar: Joi.string(),
    adress_id: Joi.string(),

  }
}), userController.create);

usersRouter.patch('/avatar',ensureAuthenticate, upload.single('avatar') ,userAvatarController.update)

export default usersRouter;

