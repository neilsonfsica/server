"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_telaDePedidos_1 = __importDefault(require("./telaDePedidos/router.telaDePedidos"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => res.send('Olá, mundo com Express + TS!'));
app.use('/pedidos', router_telaDePedidos_1.default);
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
