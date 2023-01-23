let nome = prompt('Qual o seu nome?');
const nomeUsuario = {name: nome};
let batePapo = document.querySelector('.conversa');
const mensagemDigitada = document.querySelector('footer input');

function erro (erro){    
    console.log(erro);
    window.location.reload();
}

function pegarConversaNoServidor(){
     const promessa = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
     promessa.then(); //se deu certo
     promessa.catch(erro);
}

function verificarUsuario(){
    const verificarUsuario = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nomeUsuario);
    verificarUsuario.then(usuarioVerificado);
    verificarUsuario.catch(erro);
}

function mantendoConexao(){
    const manterConexao = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', nomeUsuario);
    manterConexao.then(); 
    manterConexao.catch(erro);
}


function usuarioVerificado (){
    console.log("pegar conversar no servidor");
}

verificarUsuario();