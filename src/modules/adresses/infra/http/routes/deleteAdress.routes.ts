import { Router } from 'express';
import { container } from 'tsyringe';
import multer from 'multer';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { celebrate, Segments, Joi } from 'celebrate';
import uploadConfig from '../../../../../config/upload';
//import ensureAuthenticate from '../middlewares/ensureAuthenticated';
import AdressesController from '../controllers/AdressesController';
import DeleteAdressController from '../controllers/DeleteAdressController';
import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';


const deleteAdressRouter = Router();
const upload = multer(uploadConfig.multer);

deleteAdressRouter.use(ensureAuthenticated);
const deleteAdressController = new DeleteAdressController();

deleteAdressRouter .post(
  '/',
  celebrate({
    [Segments.BODY]: {
    id: Joi.string().required(),
   
    },
  }),
  deleteAdressController.create,
);
export default deleteAdressRouter ;