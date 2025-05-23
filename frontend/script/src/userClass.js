import { serverBridge } from "./serverComunication.js";

class User {
    criarUsuario(nomeCompleto, telefone, senha) {
        this.nomeCompleto = nomeCompleto;
        this.telefone = telefone;
        this.senha = senha;
    }

    login(telefone, senha) {
        
    }

    escolha(opcaoEscolhida) {
        this.opcaoEscolhida = opcaoEscolhida;
    }

    teste() {
        console.log(this.nomeCompleto);
        console.log(this.senha);
    }
}

let botao = document.getElementById("botaoCriarConta");
botao.addEventListener("click", verificacaoCriarUsuario)

function verificacaoCriarUsuario() {
    const nome = document.getElementById("nomeCompleto");
    const telefone = document.getElementById("telefone");
    const senha = document.getElementById("senha");

    if ((nome.value != '' && nome.value.length >= 8) ) {
        console.log("Nome Válido");
    } else {
        console.log("Nome Inválido");
    }

    console.log(nome.value);
    console.log(telefone.value);
    console.log(senha.value);
}

