

let ws;

ws = new WebSocket('ws://localhost:8080');
//ws.onmessage = processMessage;


let y = {
    id: 1,
    nome: "Lucas",
    idade: 20
}

ws.onopen = () => {
    ws.send(JSON.stringify(y));
}

document.getElementById('click').onclick = () => {
}