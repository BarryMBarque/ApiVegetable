import "reflect-metadata";
import {Request, Response} from 'express';
import { container} from 'tsyringe';
import CreateUserService from '../../../services/CreateUserService';
import UsersRepository from "../../typeorm/repositories/UsersRepository";
import { classToClass } from "class-transformer";
export default class UsersController {
public async create(request: Request, response: Response):Promise<Response>{

  const {name , cpf, phoneNumber, email, password, avatar,adress_id } = request.body;
  const data = request.body;
  console.log(data)

  
  const createUser = container.resolve(CreateUserService);


  const user = await createUser.execute({
    name,
    cpf,
    phoneNumber,
    email,
    password,
    avatar,

  });
  console.log(user)

  return response.json(classToClass(user));
}
}
