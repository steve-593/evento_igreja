import { serverBridge } from "./serverComunication.js";

class User {
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
    }
    
    enviarServer(tipo, dados) {
        
    }
}


const botoesEsolha = {
    escolha1: document.getElementById("escolhabtn1"),
    escolha2: document.getElementById("escolhabtn2"),
    escolha3: document.getElementById("escolhabtn3")
} // o objetivo disso é testar se funciona
const botao = document.getElementById("botao");
const nome = document.getElementById("nomeCompleto");
const telefone = document.getElementById("telefone");
const senha = document.getElementById("senha");

botao.addEventListener("click", () => {
    
    let tfNome, tfTelefone, tfSenha;

    switch (botao.name) {
        case "criarContabtn":
            if (nome.value != '' && nome.value.length >= 8) {
            tfNome = true;
            }

            if (telefone.value != '' && telefone.value.length == 11) {
                tfTelefone = true;
            }

            if (senha.value != '' && senha.value.length >= 4) {
                tfSenha = true;
            }

            if (tfNome && tfTelefone && tfSenha) {
                const user = new User()
                user.criarUsuario(nome.value, telefone.value, senha.value);
                user.enviarServer("cc", user); /* cc significa: "criar conta" */;
                console.log(user);
            }

            break;

        case "loginbtn":
            if (telefone.value != '' && telefone.value.length == 11) {
            tfTelefone = true;
            }

            if (senha.value != '' && senha.value.length >= 4) {
                tfSenha = true;
            }

            if (tfTelefone && tfSenha) {
                const user = new User()
                user.login(telefone.value, senha.value);
                user.enviarServer("lc", user); /* lc significa: "login conta" */
            }

            break;

        case "escolhabtn1":
            
            break;

        case "escolhabtn2":

            break;

        case "escolhabtn3":

            break;

        default:
            break;
    }
    
});
