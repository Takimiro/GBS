import { Request, response, Response } from 'express';
import { getRepository } from 'typeorm';
import  { Storage }   from '../models/Storage';

export default class StorageController {
  async create(request: Request, response: Response) {
    let storeRequested = request.body as Storage;
    const { id } = request.params;

    try {
      const repository = getRepository(Storage);
      const storeCreated = repository.create({ userId: parseInt(id),...storeRequested });
      const storeSaved = await repository.save(storeCreated);
      return response.json(storeSaved);
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async index(_request: Request, response: Response) {
    try {
      const repository = getRepository(Storage);
      const store = await repository.find({ relations: ['items'] });
      console.log(store)
      return response.json(store);
    } catch (error) {
      console.log(error)
      return response.status(400).json(error)
    }
  }

  // async update(request: Request, response: Response) {
  //   const { id } = request.params as Storage;
  //   const requestedStore = request.body as Storage;
  //   try {
  //     const repository = getRepository(Storage);
  //     await repository.update(id!, requestedStore);
  //     return response.send();
  //   } catch (error) {
  //     return response.status(400).json(error)
  //   }
  // }

  // async delete(request: Request, response: Response) {
  //   const { id } = request.params as Storage;
  //   try {
  //     const repository = getRepository(Storage);
  //     await repository.delete(id!);
  //     return response.send();
  //   } catch (error) {
  //     return response.status(400).json(error)
  //   }
  // }
}