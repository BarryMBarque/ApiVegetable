import { Router } from 'express';
import { container } from 'tsyringe';
import multer from 'multer';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { celebrate, Segments, Joi } from 'celebrate';
import uploadConfig from '../../../../../config/upload';

import FindAllProductsBycategory from '../controllers/FindAllProductsByCategoriesController';


const GetProductsByCategoryRouter = Router();




const findAllProductsByCategoryController = new FindAllProductsBycategory();



GetProductsByCategoryRouter.post('/',
  celebrate({
    [Segments.BODY]: {
    categoryProduct_id: Joi.string().required(),
    },
  }),
  findAllProductsByCategoryController.findAllProductByCategory,
);
export default GetProductsByCategoryRouter;