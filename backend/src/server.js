import { WebSocketServer } from 'ws';
import dotenv from 'dotenv';

dotenv.config();

let i = 0;

const wss = new WebSocketServer({ port: process.env.PORT});

wss.on('connection', (ws) => {
    ws.on('error', console.error);
    console.log('Usuário Conectado');

    ws.on('message', (message) => {
        let data = JSON.parse(message);
        console.log(`Recebido: ${i++}`);
        console.log(`Recebido: ${data.id}`);
    });
})