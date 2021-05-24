import 'reflect-metadata';
import '../../infra/typeorm';
import  '../../container'
import 'express-async-errors';
import 'dotenv/config';
import express, { NextFunction, Request ,Response} from  'express';
import {errors} from 'celebrate'
import cors from 'cors';
import  routes from './routes';

import uploadConfig from '../../../config/upload';
import AppError from '../../errors/AppError';

const app = express();


app.use(cors())
app.use(express.json());


app.use(routes);
app.use(errors());
app.use(
  (err: Error, request: Request, response: Response, _: NextFunction)=>{
   if(err instanceof AppError){
   return  response.status(err.statusCode).json({
       status: 'error',
       message: err.message,
     })
   }
   console.error(err);
   return response.status(500).json({
     status: 'error',
     message: 'Internal server  error',
   })
});
app.listen(3333,()=>{
console.log('🚀 server started on port 3333!');
});
