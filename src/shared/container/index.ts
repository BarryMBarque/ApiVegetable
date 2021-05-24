import 'reflect-metadata';
import './providers';
import '../../modules/users/provider';
import { container } from 'tsyringe';
import uploadConfig from '../../config/upload';

// import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

// import AppoimentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IAdressesRepository from '../../modules/adresses/repositories/IAdressesRepository';

import AdressesRepository from '../../modules/adresses/infra/typeorm/repositories/AdressesRepostory';

import IUsersRepository from '../../modules/users/repositories/IUsersRepository';

import UsersRepository from '../../modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '../../modules/users/repositories/IUserTokenRepository';

import UserTokensRepository from '../../modules/users/infra/typeorm/repositories/UserTokenRepository';

import ICategoriesProductRepository from '../../modules/categoryProduct/repositories/ICategoriesProductRepository';

import CategoriesProductRepository from '../../modules/categoryProduct/infra/typeorm/repositories/CategoriesProductRepostory';

import IProductsRepository from '../../modules/products/repositories/IProductsRepository';

import ProductsRepository from '../../modules/products/infra/typeorm/repositories/ProductsRepository';


import IOrdersRepository from '../../modules/orders/repositories/IOrdersRepository';

import OrdersRepository from '../../modules/orders/infra/typeorm/repositories/OrdersRepository';

import ICartsRepository from '../../modules/carts/repositories/ICartsRepository';

import CartsRepository from '../../modules/carts/infra/typeorm/repositories/CartsRepository';
import IStorageProvider from './providers/storageProvider/models/IStorageProvider';
import { providers } from './providers/storageProvider';


container.registerSingleton<IAdressesRepository>(
  'AdressesRepository',
  AdressesRepository,
);
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);
container.registerSingleton<ICategoriesProductRepository>(
  'CategoriesProductRepository',
  CategoriesProductRepository,
);
container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);
container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);
container.registerSingleton<ICartsRepository>(
  'CartsRepository',
  CartsRepository,
);
container.registerSingleton<IStorageProvider>(

  'StorageProvider',
  providers[uploadConfig.driver],
);

