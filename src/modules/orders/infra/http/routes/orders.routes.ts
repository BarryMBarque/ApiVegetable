import { Router } from 'express';
import { container } from 'tsyringe';
import multer from 'multer';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { celebrate, Segments, Joi } from 'celebrate';
import uploadConfig from '../../../../../config/upload';
import ensureAuthenticate from '../../../../users/infra/http/middlewares/ensureAuthenticated';
import OrdersController from '../controllers/OrdersController';
import GetOrdersController from '../controllers/GetOrdersController';


const ordersRouter = Router();
const upload = multer(uploadConfig.multer);
ordersRouter.use(ensureAuthenticate);
const ordersController = new OrdersController();
const getOrdersController = new GetOrdersController();

ordersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      state:Joi.string(),
      city:Joi.string(),
      cep:Joi.number(),
      district:Joi.string(),
      road:Joi.string(),
      number:Joi.number(),
      complement:Joi.string(),
   
    },
  }),
  ordersController.create,
);
ordersRouter.get(
  '/getOrders',
 
  getOrdersController.getOrders,
);

export default ordersRouter;
