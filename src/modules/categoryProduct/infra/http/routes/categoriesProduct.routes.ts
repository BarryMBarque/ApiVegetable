import { Router } from 'express';
import { container } from 'tsyringe';
import multer from 'multer';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { celebrate, Segments, Joi } from 'celebrate';
import uploadConfig from '../../../../../config/upload';
//import ensureAuthenticate from '../middlewares/ensureAuthenticated';
import CategoriesProductController from '../controllers/CategoriesProductController';


const categoriesProductRouter = Router();
const upload = multer(uploadConfig.multer);

const categoriesProductController = new CategoriesProductController();
categoriesProductRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
    name: Joi.string().required(),
    },
  }),
  categoriesProductController.create,
);
export default categoriesProductRouter;