import { Request, response, Response } from 'express';
import { getRepository } from 'typeorm';
import { Products } from '../models/Products';
import jwt from 'jsonwebtoken'

export default class ProductController {
  async create(request: Request, response: Response) {
    const product = request.body as Products;
    
    try {
      const repository = getRepository(Products);
      const storeCreated = repository.create(product);
      const productSaved = await repository.save(storeCreated);
      return response.json(productSaved);
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async index(request: Request, response: Response) {
    try {
      const repository = getRepository(Products);
      const stores = await repository.find({ relations: ['products']});
      return response.json(stores);
    } catch (error) {
      return response.status(400).json(error)
    }
  }



  async update(request: Request, response: Response) {
    const { id } = request.params as Products;
    const requestedProduct = request.body as Products;
    try {
      const repository = getRepository(Products);
      await repository.update(id!, requestedProduct);
      return response.send();
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params as Products;
    try {
      const repository = getRepository(Products);
      await repository.delete(id!);
      return response.send();
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async show(request: Request, response: Response) {
    const { id } = request.params as Products;

    const repository = getRepository(Products);
    
    const product = await repository.findOneOrFail(id);

    return response.json(product);
  }
}