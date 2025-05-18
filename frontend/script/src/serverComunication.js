let webSocket;

export function serverBridge (msg_de_ida) {
    webSocket = new WebSocket('ws://localhost:8080');
    webSocket.onopen = () => {
    webSocket.send(JSON.stringify(msg_de_ida));

    webSocket.onmessage = ({ msg_de_volta} ) => {
        let data = JSON.parse(msg_de_volta);
        

    }

    webSocket.close();
    }
}

