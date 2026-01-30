import { conexao } from "../conexao";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { iMovimentacao } from "./interface";

class Sql {
  async getDespesa(): Promise<RowDataPacket | null> {
    const sql = `
    SELECT COALESCE(SUM(valor), 0) AS total_despesas
    FROM receitadespesa
    WHERE data >= DATE_FORMAT(CURDATE(), '%Y-%m-01')
      AND data <  DATE_ADD(DATE_FORMAT(CURDATE(), '%Y-%m-01'), INTERVAL 1 MONTH)
      AND tipo = 'Despesa';
  `;

    const [rows] = await conexao.query<RowDataPacket[]>(sql);

    return rows.length ? rows[0] : null;
  }
  async getReceita(): Promise<RowDataPacket | null> {
    const sql = `
    SELECT COALESCE(SUM(valor), 0) AS total_receita
    FROM receitadespesa
    WHERE data >= DATE_FORMAT(CURDATE(), '%Y-%m-01')
      AND data <  DATE_ADD(DATE_FORMAT(CURDATE(), '%Y-%m-01'), INTERVAL 1 MONTH)
      AND tipo = 'Receita';
  `;

    const [rows] = await conexao.query<RowDataPacket[]>(sql);

    return rows.length ? rows[0] : null;
  }
  async getMovimentacao(): Promise<RowDataPacket[]> {
    const sql = `
    SELECT * FROM receitadespesa;
  `;

    const [rows] = await conexao.query<RowDataPacket[]>(sql);
    console.log(rows, "jfjhfj");
    return rows;
  }

  async insertMovimentacao(
    param: iMovimentacao
  ): Promise<{ insertId: number }> {
    const sql = `INSERT INTO receitadespesa
        (valor, descricao, categoria, data, tipo)
        VALUES
        (?, ?, ?, CURDATE(), ?);
    `;

    const [result] = await conexao.query<ResultSetHeader>(sql, [
      param.valor,
      param.descricao,
      param.categoria,
      param.tipo,
    ]);

    return { insertId: result.insertId };
  }
}

export default Sql;
