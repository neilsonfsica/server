"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conexao_1 = require("../conexao");
class Sql {
    async getPedidos() {
        const sql = `SELECT * FROM caixa`;
        const [rows] = await conexao_1.conexao.query(sql);
        return rows;
    }
}
exports.default = Sql;
