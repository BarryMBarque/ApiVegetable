import { Router } from 'express';
import { container } from 'tsyringe';
import multer from 'multer';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { celebrate, Segments, Joi } from 'celebrate';
import uploadConfig from '../../../../../config/upload';
import ensureAuthenticate from '../../../../users/infra/http/middlewares/ensureAuthenticated';
//import ensureAuthenticate from '../middlewares/ensureAuthenticated';
import DeleteCartController from '../controllers/DeleteCartController';


const DeleteCartRouter = Router();
const upload = multer(uploadConfig.multer);

DeleteCartRouter.use(ensureAuthenticate);
const deleteCartController = new DeleteCartController();
DeleteCartRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
    id: Joi.string(),
    },
  }),
  deleteCartController.create,
);

export default DeleteCartRouter;