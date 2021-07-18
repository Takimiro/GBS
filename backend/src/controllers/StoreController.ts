import { Request, response, Response } from 'express';
import { getRepository } from 'typeorm';
import  {Stores}   from '../models/Stores';
import jwt from 'jsonwebtoken'

export default class StoreController {
  async create(request: Request, response: Response) {
    const storeRequested = request.body;
 
    try {
      const repository = getRepository(Stores);
      const storeCreated = repository.create(storeRequested);
      const storeSaved = await repository.save(storeCreated);
      return response.json({
        user: storeSaved,
        token: jwt.sign({ id: storeSaved }, 'lll', {
          expiresIn: 86400,
        }),
      });
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async index(request: Request, response: Response) {
    try {
      const repository = getRepository(Stores);
      const store = await repository.find({ relations: ['products'] });
      console.log(store)
      return response.json(store);
    } catch (error) {
      console.log(error)
      return response.status(400).json(error)
    }
  }



  async update(request: Request, response: Response) {
    const { id } = request.params as Stores;
    const requestedStore = request.body as Stores;
    try {
      const repository = getRepository(Stores);
      await repository.update(id!, requestedStore);
      return response.send();
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params as Stores;
    try {
      const repository = getRepository(Stores);
      await repository.delete(id!);
      return response.send();
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async authenticate(request: Request, response: Response) {
    const { email, password } = request.body;

    if(!password) {
      return response.status(400).send({  message: 'Password invalid'})
    }

    if(!email) {
      return response.status(400).send({  message: 'Email invalid'})
    }

    const repository = getRepository(Stores);
    
    const store = await repository.findOneOrFail(email);

    if(store.password !== password) {
      return response.status(400).send({  message: 'Password invalid'})
    }
	
    store.password = undefined;

    return response.json({
      store: store,
      token: jwt.sign({ id: store.id }, 'lll', {
        expiresIn: 86400,
      }),
    });
  }
}