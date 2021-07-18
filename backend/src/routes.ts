import { Router } from 'express';
import ProductController from './controllers/ProductController';
import StoreController from './controllers/StoreController';
import auth from './middlewares/auth';

const routes = Router();

const storeController = new StoreController() 
const productController = new ProductController() 

routes.get('/users/products', productController.index);
routes.get('/users/stores', productController.index);


routes.post('/admin/stores/register', storeController.create);
routes.post('/admin/stores/authenticate', storeController.authenticate);

routes.post('/admin/stores/products', productController.create);
routes.get('/admin/stores/products', productController.index);

routes.use(auth)  
routes.get('/admin/stores', storeController.index);
routes.get('/admin/store/products', productController.index);


export default routes;