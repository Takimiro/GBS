import { Request, response, Response } from 'express';
import { getRepository } from 'typeorm';
import { Item } from '../models/Item';

export default class ItemController {
  
  async create(request: Request, response: Response) {
    const { userId, id } = request.params;

    const item = request.body as Item;
    
    try {
      const repository = getRepository(Item);
      const ItemCreated = repository.create({ userId: parseInt(userId) ,storagesId: parseInt(id),...item});
      const ItemSaved = await repository.save(ItemCreated);
      return response.json(ItemSaved);
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async index(request: Request, response: Response) {
    const { userId, id } = request.params;

    try {
      const repository = getRepository(Item);
      const items = await repository.find({ relations: ['user'], where: { userId } });
      return response.json(items);
    } catch (error) {
      return response.status(400).json(error)
    }
  }



  // async update(request: Request, response: Response) {
  //   const { id } = request.params as Item;
  //   const requestedProduct = request.body as Item;
  //   try {
  //     const repository = getRepository(Item);
  //     await repository.update(id!, requestedProduct);
  //     return response.send();
  //   } catch (error) {
  //     return response.status(400).json(error)
  //   }
  // }

  // async delete(request: Request, response: Response) {
  //   const { id } = request.params as Item;
  //   try {
  //     const repository = getRepository(Item);
  //     await repository.delete(id!);
  //     return response.send();
  //   } catch (error) {
  //     return response.status(400).json(error)
  //   }
  // }

  // async show(request: Request, response: Response) {
  //   const { id } = request.params as Item;

  //   const repository = getRepository(Item);
    
  //   const item = await repository.findOneOrFail(id);

  //   return response.json(item);
  // }

  async search(request: Request, response: Response) {
    const { text } = request.query;
    const { searchItem } = request.query;

    const repository = getRepository(Item);
    
    const item = await repository.query(`SELECT * FROM users where users.name Like '%${text}%'`)

    return response.json(item);
  }
}