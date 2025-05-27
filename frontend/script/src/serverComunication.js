import { User } from './userClass.js';

let webSocket;

export function serverBridge (msg_de_ida) {
    webSocket = new WebSocket('ws://localhost:4433');
    webSocket.onopen = () => {
        webSocket.send(JSON.stringify(msg_de_ida));

        webSocket.onmessage = ({ msg_de_volta} ) => {
            let data = JSON.parse(msg_de_volta);
            
            
        }
    }
}

