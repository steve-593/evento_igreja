import { serverBridge } from "./serverComunication.js";

export class User {
    criarUsuario(nomeCompleto, telefone, senha) {
        this.nomeCompleto = nomeCompleto;
        this.telefone = telefone;
        this.senha = senha;
    }
    
    login(telefone, senha) {
        this.telefone = telefone;
        this.senha = senha;
    }
    
    escolha(opcaoEscolhida) {
        this.opcaoEscolhida = opcaoEscolhida;
        this.enviarServer("escolha", this);
    }
    
    enviarServer(tipo, dados) {
        serverBridge({
            tipo: tipo,
            dados: dados
        })
    }

    encruzilhada(botao, telefone, senha, nome) {

        let tfNome, tfTelefone, tfSenha;

        switch (botao.name) {
            case "criarContabtn":
                if (nome != '' && nome.length >= 8) {
                tfNome = true;
                }

                if (telefone != '' && telefone.length == 11) {
                    tfTelefone = true;
                }

                if (senha != '' && senha.length >= 4) {
                    tfSenha = true;
                }

                if (tfNome && tfTelefone && tfSenha) {
                    this.criarUsuario(nome, telefone, senha);
                    this.enviarServer("cc", this); /* cc significa: "criar conta" */;
                } else {
                    return false
                }

                break;

            case "loginbtn":
                if (telefone != '' && telefone.length == 11) {
                tfTelefone = true;
                }

                if (senha != '' && senha.length >= 4) {
                    tfSenha = true;
                }

                if (tfTelefone && tfSenha) {
                    this.login(telefone, senha);
                    this.enviarServer("lc", this); /* lc significa: "login conta" */
                }

                break;

            default:
                break;
        }
    }
}