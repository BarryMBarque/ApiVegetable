import { Router} from 'express';
import { container} from 'tsyringe';
import multer from'multer';

import {celebrate, Segments, Joi} from 'celebrate';
import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

import ensureAuthenticate from '../middlewares/ensureAuthenticated';
import ProfileController from '../controllers/ProfileController';
import uploadConfig from '../../../../../config/upload';
import UserAvatarController from '../controllers/UserAvatarController';
const profileRouter = Router();
const upload = multer(uploadConfig.multer);
profileRouter.use(ensureAuthenticate);
const profileController= new ProfileController();
profileRouter.get('/', profileController.show);
profileRouter.put('/',
celebrate({
  [Segments.BODY]:{
    name: Joi.string().required(),
    cpf: Joi.number().required(),
    phoneNumber: Joi.string(),
    email: Joi.string().email().required(),
    old_password: Joi.string(),
    password: Joi.string(),
    password_confirmation: Joi.string().valid(Joi.ref('password')),
  }
})
,profileController.update);


export default profileRouter;

