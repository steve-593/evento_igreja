import { WebSocketServer } from 'ws';
import dotenv from 'dotenv';

dotenv.config();

const webSocketServer = new WebSocketServer({ port: process.env.PORT});

let i = 0;

webSocketServer.on('connection', (webSocket) => {
    webSocket.on('error', console.error);
    console.log('Usuário Conectado');
    

    webSocket.on('message', (message) => {
        let data = JSON.parse(message);
        console.log(`Recebido: ${i++}`);
        console.log(`Recebido: ${data.nome}`);
    });
});