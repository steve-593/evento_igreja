import { WebSocketServer } from 'ws';
import dotenv from 'dotenv';

dotenv.config();

const webSocketServer = new WebSocketServer({ port: process.env.PORT});

webSocketServer.on('connection', (webSocket) => {
    webSocket.on('error', console.error);
    console.log('Usuário Conectado');
    

    webSocket.on('message', (message) => {
        const data = JSON.parse(message);
        
    });
    
});
