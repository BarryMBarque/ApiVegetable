import { Router } from 'express';
import { container } from 'tsyringe';
import multer from 'multer';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { celebrate, Segments, Joi } from 'celebrate';
import uploadConfig from '../../../../../config/upload';
//import ensureAuthenticate from '../middlewares/ensureAuthenticated';
import ProductsController from '../controllers/ProductsController';
import FindAllProducts from '../controllers/FindAllProductsController';


const GetProductsRouter = Router();
const upload = multer(uploadConfig.multer);



const findAllProductsController = new FindAllProducts();



GetProductsRouter.get('/',
  findAllProductsController.findallProduct,
);
export default GetProductsRouter;