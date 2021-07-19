import { Request, response, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

export default class UserController {
  async create(request: Request, response: Response) {
    const user = request.body as User;
    
    try {
      const repository = getRepository(User);
      const userCreated = repository.create(user);
      const userSaved = await repository.save(userCreated);
      return response.json(userSaved);
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async index(_request: Request, response: Response) {
    try {
      const repository = getRepository(User);
      const users = await repository.find({
        relations: ['items', 'storages'],
      });
      return response.json(users);
    } catch (error) {
      return response.status(400).json(error)
    }
  }



  // async update(request: Request, response: Response) {
  //   const { id } = request.params as User;
  //   const requestedProduct = request.body as User;
  //   try {
  //     const repository = getRepository(User);
  //     await repository.update(id!, requestedProduct);
  //     return response.send();
  //   } catch (error) {
  //     return response.status(400).json(error)
  //   }
  // }

  // async delete(request: Request, response: Response) {
  //   const { id } = request.params as User;
  //   try {
  //     const repository = getRepository(User);
  //     await repository.delete(id!);
  //     return response.send();
  //   } catch (error) {
  //     return response.status(400).json(error)
  //   }
  // }

  async show(request: Request, response: Response) {
    const { id } = request.params
    
    try {
      const repository = getRepository(User);
      const users = await repository.findOne(id,{
        relations: ['items', 'storages'],
      });

      return response.json(users);
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}