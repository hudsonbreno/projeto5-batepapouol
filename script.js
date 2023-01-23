let nome = prompt('Qual o seu nome?');
const nomeUsuario = {name: nome};
let batePapo = document.querySelector('.conversa');
const mensagemDigitada = document.querySelector('footer input');

function erro (erro){    
    console.log(erro);
    window.location.reload();
}

function conversaNoServidor(resposta){
    let batePapo = document.querySelector('.conversa');
    batePapo.innerHTML = ''; 
    for (let i = 0; i < 100; i++){
    let hora = resposta.data[i].time;
        let nome1 = resposta.data[i].from;
        let nome2 = resposta.data[i].to;
        let texto = resposta.data[i].text;
        let tipo = resposta.data[i].type;

        if (tipo === 'status' || tipo === 'message' ){
        batePapo.innerHTML += `
            
        <div data-test="message" class="${tipo}">
            (${hora}) ${nome1} para ${nome2}: ${texto}
        </div>
        
        `;
    }

        if (tipo === 'private_message' && (nome1 === nome || nome2 === nome)){
            batePapo.innerHTML += `

            <div data-test="message" class="${tipo}">
                (${hora}) ${nome1} para ${nome2}: ${texto}
            </div>
        '
            `;
        }
    }

        batePapo.querySelector('div:last-child').scrollIntoView();
    }
function pegarConversaNoServidor(){
     const promessa = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
     promessa.then(conversaNoServidor); 
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
    pegarConversaNoServidor();
    setInterval(function (){ 
        pegarConversaNoServidor();
    } ,3000)
    setInterval(mantendoConexao, 5000);
}

function enviarMensagem(){
    const msg = {
        from: nome,
        to: "Todos",
        text: mensagemDigitada.value,
        type: "message" 
    }
    const enviar = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', msg);
    mensagemDigitada.value = "";
    enviar.then(pegarConversaNoServidor);
    enviar.catch(erro);
}



verificarUsuario();