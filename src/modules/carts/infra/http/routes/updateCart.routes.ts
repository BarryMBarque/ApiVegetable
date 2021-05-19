import { Router } from 'express';
import { container } from 'tsyringe';
import multer from 'multer';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { celebrate, Segments, Joi } from 'celebrate';
import uploadConfig from '../../../../../config/upload';
import ensureAuthenticate from '../../../../users/infra/http/middlewares/ensureAuthenticated';
//import ensureAuthenticate from '../middlewares/ensureAuthenticated';
import UpdateCartController from '../controllers/UpdateCartController';


const UpdateCartRouter = Router();
const upload = multer(uploadConfig.multer);

UpdateCartRouter.use(ensureAuthenticate);
const updateCartController = new UpdateCartController();
UpdateCartRouter.patch(
  '/',
  celebrate({
    [Segments.BODY]: {
    id: Joi.string(),
    quantity: Joi.number(),
    total_price: Joi.number()
    },
  }),
  updateCartController.create,
);

export default UpdateCartRouter;