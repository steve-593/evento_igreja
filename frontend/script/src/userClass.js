import dotenv from 'dotenv';
const { Client } = pg;
dotenv.config();

class CriarConta {
    constructor(nomeCompleto, senha) {
        this.nomeCompleto = nomeCompleto;
        this.senha = senha;
    }

    enviarParaBancoDeDados(nomeCompleto, senha) {

    }
}

document.getElementById('botaoCriarConta').onclick = () => {
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const senha = document.getElementById('senha').value;

    let t = new CriarConta('testeNome', 'testeSenha');
}