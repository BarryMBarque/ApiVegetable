import "reflect-metadata";
import {Request, Response} from 'express';
import {classToClass} from 'class-transformer';
import { container} from 'tsyringe';
import UpdateProfileService from '../../../services/UpdateProfileService';
import UsersRepository from "../../typeorm/repositories/UsersRepository";
import ShowProfileService from "../../../services/ShowProfileService";
export default class ProfileController {
  public async show(request: Request, response: Response):Promise<Response>{
    const user_id = request.user.id;


  const showProfile = container.resolve(ShowProfileService);

    const user = await showProfile.execute({user_id})

    return response.json(classToClass(user));

  }
public async update(request: Request, response: Response):Promise<Response>{
  const user_id = request.user.id;

  const {name , cpf, phoneNumber, email, old_password, password } = request.body;


  const UpdateProfile = container.resolve(UpdateProfileService);


  const user = await UpdateProfile.execute({
    user_id,
    cpf,
    phoneNumber,
    name,
    email,
    old_password,
    password,
  });

  
  return response.json(classToClass(user));
}
}
