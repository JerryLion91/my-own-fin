import { Request, Response } from 'express';
import TransactionModel from '../models/TransactionModel';

class TransactionController {
  store(req: Request, res: Response) {
    throw new Error('NoRoutesMatched');
  }
  index(req: Request, res: Response) {
    throw new Error('NoRoutesMatched');
  }
  update(req: Request, res: Response) {
    throw new Error('NoRoutesMatched');
  }
  get(req: Request, res: Response) {
    throw new Error('NoRoutesMatched');
  }
  delete(req: Request, res: Response) {
    throw new Error('NoRoutesMatched');
  }
}

export default new TransactionController();
