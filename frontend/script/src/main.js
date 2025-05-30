import { User } from './userClass.js';
import { serverBridge } from './serverComunication.js';

const botoesEsolha = {
    botao: document.getElementById("botao"), // pega 2 botoes diferentes pelo id, o botao de login e o de criar conta
    escolha1: document.getElementById("escolhabtn1"),
    escolha2: document.getElementById("escolhabtn2"),
    escolha3: document.getElementById("escolhabtn3")
}

const campos = {
    nome: document.getElementById("nomeCompleto"),
    telefone: document.getElementById("telefone"),
    senha: document.getElementById("senha")
}

const user = new User();

botoesEsolha.botao.addEventListener("click", () => {
    user.encruzilhada(
        botoesEsolha.botao,
        campos.telefone.value,
        campos.senha.value,
        campos.nome.value
    )
})