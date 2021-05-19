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


const GetAllCartsRouter = Router();
GetAllCartsRouter.use(ensureAuthenticate);
const upload = multer(uploadConfig.multer);


const cartsController = new CartsController();
GetAllCartsRouter.get('/',
// celebrate({
//   [Segments.BODY]: {
//   user_id: Joi.string().required(),
// },
// }),
 cartsController.findallCarts)
export default GetAllCartsRouter;