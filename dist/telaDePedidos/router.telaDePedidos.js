"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ctrl_telaDePedidos_1 = __importDefault(require("./ctrl.telaDePedidos"));
const per_controllers_1 = __importDefault(require("../per.controllers"));
class RouterPedidos {
    ctr;
    constructor() {
        this.ctr = new ctrl_telaDePedidos_1.default();
    }
    async getPedidos() {
        return this.ctr.getPedidos();
    }
}
exports.default = (req, res, next) => (0, per_controllers_1.default)(req, res, next, new RouterPedidos());
