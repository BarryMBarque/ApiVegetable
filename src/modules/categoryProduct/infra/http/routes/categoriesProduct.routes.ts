import { Router } from 'express';
import { container } from 'tsyringe';
import multer from 'multer';


import { celebrate, Segments, Joi } from 'celebrate';
import uploadConfig from '../../../../../config/upload';
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