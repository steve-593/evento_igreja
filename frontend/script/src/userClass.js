import { serverBridge } from "./serverComunication";

class User {
    criarUsuario(nomeCompleto, senha) {
        this.nomeCompleto = nomeCompleto;
        this.senha = senha;
    }

    login(nomeCompleto, senha) {
        if (this.nomeCompleto === nomeCompleto && this.senha === senha) {
            return true;
        } else {
            return false;
        }
    }

    escolha(opcaoEscolhida) {
        this.opcaoEscolhida = opcaoEscolhida;
    }
}

