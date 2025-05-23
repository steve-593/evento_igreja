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

function verificacaoCriarUsuario() {
    const nome = document.getElementById("nomeCompleto");
    const telefone = document.getElementById("telefone");
    const senha = document.getElementById("senha");


}
