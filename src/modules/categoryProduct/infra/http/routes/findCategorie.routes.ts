import { Router } from 'express';
import { container } from 'tsyringe';
import multer from 'multer';

import { celebrate, Segments, Joi } from 'celebrate';
import uploadConfig from '../../../../../config/upload';

import FindCategoryController from '../controllers/FindCategoryController';


const findCategoriesProductRouter = Router();
const upload = multer(uploadConfig.multer);


const findCategoryController = new FindCategoryController();

findCategoriesProductRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
    name: Joi.string().required(),
    },
  }),
  findCategoryController.find,
);
export default findCategoriesProductRouter;