"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const numero = parseInt(prompt('Digite um número inteiro de 1 a 5: '));
switch (numero) {
    case 1:
        console.log('Muito insuficiente');
        break;
    case 2:
        console.log('Insuficiente');
        break;
    case 3:
        console.log('Regular');
        break;
    case 4:
        console.log('Bom');
        break;
    case 5:
        console.log('Muito bom');
        break;
    default:
        console.log('Número fora do intervalo de 1 a 5.');
}
