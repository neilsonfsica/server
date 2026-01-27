"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_telaDePedidos_1 = __importDefault(require("./sql.telaDePedidos"));
class Ctr {
    sql;
    constructor() {
        this.sql = new sql_telaDePedidos_1.default();
    }
    async getPedidos() {
        return this.sql.getPedidos();
    }
}
exports.default = Ctr;
