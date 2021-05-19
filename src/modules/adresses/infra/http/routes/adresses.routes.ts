import { Router } from 'express';
import { container } from 'tsyringe';
import multer from 'multer';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { celebrate, Segments, Joi } from 'celebrate';
import uploadConfig from '../../../../../config/upload';
//import ensureAuthenticate from '../middlewares/ensureAuthenticated';
import AdressesController from '../controllers/AdressesController';
import FindAdressController from '../controllers/FindAdressController';
import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';


const adressesRouter = Router();
const upload = multer(uploadConfig.multer);
adressesRouter.use(ensureAuthenticated);
const adressController = new AdressesController();
const findAdressController = new FindAdressController();
adressesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
    state: Joi.string().required(),
    city: Joi.string().required(),
    cep:Joi.number().required() ,
    district: Joi.string().required(),
    road: Joi.string().required(),
    number: Joi.number().required(),
    complement: Joi.string(),
    },
  }),
  adressController.create,
);
adressesRouter.get(
  '/findAdress',
  celebrate({
    [Segments.BODY]: {
    adress_id: Joi.string().required(),
    },
  }),
  findAdressController.create,
);
export default adressesRouter;