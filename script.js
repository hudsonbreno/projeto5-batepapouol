
    //enviar {name:"João"}
    https://mock-api.driven.com.br/api/v6/uol/participants 
    //400 se já houver um usuario online com esse nome
    //200 confirmado

    // https://mock-api.driven.com.br/api/v6/uol/status
    // {name:"João"}
    //a cada 5 segundos

    //https://mock-api.driven.com.br/api/v6/uol/messages
    //resposta com arrays de objetos
    //status
    //message
    //private_message
    
    //https://mock-api.driven.com.br/api/v6/uol/messages
    //enviar


    // quando entrar no servidor deve carregar as mensagens do servidor

    //Mensagem de status Entrou e Saiu, deve ter fundo cinza

    // Reservadamente, fundo rosa

    // normais fundo branco

    //a cada 3 segundos o site de recarregar as mensagens

    //rolagem automatica por padrão
    ```jsx
    const elementoQueQueroQueApareca = document.querySelector('.mensagem');
    elementoQueQueroQueApareca.scrollIntoView();
    ```

    //prompt nome
    // se sucesso entrar
    // se não deve pedir para repetir

    //online ou não

    //Ao enviar a mensagem
    //caso sucesso, receber mensagens do servidor
    //caso erro, usuario não esta na sala e a pagina deve ser atualizada, window.location.reload()

    // Nesse envio, deve ser informado o remetende, o destinataro e se a mensagem é reservada ou não
    // BONUS RESERVADA OU PÚBLICA