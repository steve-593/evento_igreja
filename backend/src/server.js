import { WebSocketServer } from 'ws';
import dotenv from 'dotenv';

dotenv.config();


const webSocketServer = new WebSocketServer({ port: process.env.PORT});

webSocketServer.on('connection', (webSocket) => {
    webSocket.on('error', console.error);
    console.log('Usuário Conectado');
    
    let i = 0;

    webSocket.on('message', (message) => {
        let data = JSON.parse(message);
        console.log(`Recebido: ${i++}`);
        console.log(`Recebido: ${data.nome}`);
    });
});