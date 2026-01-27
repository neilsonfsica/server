import { iMovimentacao } from './interface';
import Sql from './sql.telaDePedidos';

export default class Ctr {
  private sql: Sql;

  constructor() {
    this.sql = new Sql();
  }

  async getDespesa() {
    return this.sql.getDespesa();
  }
  async getReceita() {
    return this.sql.getReceita();
  }

  async insertMovimentacao(param: iMovimentacao) {
    return this.sql.insertMovimentacao(param);
  }
}