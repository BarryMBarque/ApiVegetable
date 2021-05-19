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


const findadressRouter = Router();
const upload = multer(uploadConfig.multer);

findadressRouter.use(ensureAuthenticated);
const findAdressController = new FindAdressController();

findadressRouter .get(
  '/',
  findAdressController.create,
);
export default findadressRouter ;