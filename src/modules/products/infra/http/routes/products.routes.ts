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
import FindByIdController from '../controllers/FindByIdController';
import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';


const productsRouter = Router();
const upload = multer(uploadConfig.multer);

const productsController = new ProductsController();

const findAllProductsController = new FindAllProducts();
const findByIdontroller= new  FindByIdController();

var cpUpload = upload.fields([{ name: 'picture'}, { name: 'data' }])
productsRouter.post(
  '/',

  cpUpload,
  productsController.create,
);
productsRouter.post('/findByid',
celebrate({
  [Segments.BODY]: {
  product_id: Joi.string().required(),
  },
}),
findByIdontroller.findAllByid,
);
export default productsRouter;