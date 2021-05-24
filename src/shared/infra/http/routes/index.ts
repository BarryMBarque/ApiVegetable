import {Router} from 'express';

import usersRouter from '../../../../modules/users/infra/http/routes/users.routes';
import sessionsRouter from '../../../../modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '../../../../modules/users/infra/http/routes/password.routes';
import profileRouter from '../../../../modules/users/infra/http/routes/profile.routes';
import adressesRouter from '../../../../modules/adresses/infra/http/routes/adresses.routes';
import deleteAdressRouter from '../../../../modules/adresses/infra/http/routes/deleteAdress.routes';
import findAdressRouter from '../../../../modules/adresses/infra/http/routes/findAdress.routes';
import categoriesProductRouter from '../../../../modules/categoryProduct/infra/http/routes/categoriesProduct.routes';
import findCategoryRouter from '../../../../modules/categoryProduct/infra/http/routes/findCategorie.routes';
import productsRouter from '../../../../modules/products/infra/http/routes/products.routes';
import getProductsRouter from '../../../../modules/products/infra/http/routes/getAllProducuts.routes';
import ordersRouter from '../../../../modules/orders/infra/http/routes/orders.routes';
import cartsRouter from '../../../../modules/carts/infra/http/routes/carts.routes';
import updateCartsRouter from '../../../../modules/carts/infra/http/routes/updateCart.routes';
import deleteCartsRouter from '../../../../modules/carts/infra/http/routes/deleteCart.routes';
import getAllCartsRouter from '../../../../modules/carts/infra/http/routes/getallcart.routes';
import getAllProductsByCategory from '../../../../modules/products/infra/http/routes/getAllProductsByCategory.routes';

const routes = Router();


routes.use('/users', usersRouter);
routes.use('/adresses', adressesRouter);
routes.use('/deleteAdress', deleteAdressRouter);
routes.use('/findAdress', findAdressRouter);
routes.use('/categoriesProduct', categoriesProductRouter);
routes.use('/findCategory', findCategoryRouter);
routes.use('/getAllProducts', getProductsRouter);
routes.use('/getAllProductsByCategory', getAllProductsByCategory);
routes.use('/orders', ordersRouter);
routes.use('/carts', cartsRouter);
routes.use('/updateCarts', updateCartsRouter);
routes.use('/deleteCarts', deleteCartsRouter);
routes.use('/getAllCarts', getAllCartsRouter)
routes.use('/products', productsRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
export default routes;
