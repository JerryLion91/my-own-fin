import { Router } from 'express';

import TransactionController from '../controllers/Transactions';

const routes = Router();

routes.post('/transaction', TransactionController.store);
routes.get('/transaction', TransactionController.index);
routes.put('/transaction/:container_id', TransactionController.update);
routes.get('/transaction/:container_id', TransactionController.get);
routes.delete('/transaction/:container_id', TransactionController.delete);

export default routes;
