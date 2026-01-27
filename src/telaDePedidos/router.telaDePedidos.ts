import { Request, Response, NextFunction } from 'express';
import Ctr from './ctrl.telaDePedidos';
import per from '../../per.controllers';

class RouterPedidos {
  private ctr: Ctr;

  constructor() {
    this.ctr = new Ctr();
  }

  async getDespesa() {
    return this.ctr.getDespesa();
  }

  async getReceita() {
    return this.ctr.getReceita();
  }

  async insertMovimentacao(req: Request) {
    const { param } = req.body;
    
    if (!param) {
      throw new Error('Parâmetro "param" não fornecido');
    }
    
    return this.ctr.insertMovimentacao(param);
  }
}

export default (req: Request, res: Response, next: NextFunction) =>
  per(req, res, next, new RouterPedidos());