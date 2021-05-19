import { Router } from 'express';
import { container } from 'tsyringe';
import multer from 'multer';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { celebrate, Segments, Joi } from 'celebrate';
import uploadConfig from '../../../../../config/upload';
import ensureAuthenticate from '../../../../users/infra/http/middlewares/ensureAuthenticated';
//import ensureAuthenticate from '../middlewares/ensureAuthenticated';
import CartsController from '../controllers/CartsController';


const cartsRouter = Router();
const upload = multer(uploadConfig.multer);

cartsRouter.use(ensureAuthenticate);
const cartsController = new CartsController();
cartsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
    product_id: Joi.string(),
    order_id: Joi.string(),
    quantity: Joi.number(),
    val_unit: Joi.number()
    },
  }),
  cartsController.create,
);
cartsRouter.post('/getAllCarts',
celebrate({
  [Segments.BODY]: {
  user_id: Joi.string().required(),
},
}), cartsController.findallCarts)
export default cartsRouter;