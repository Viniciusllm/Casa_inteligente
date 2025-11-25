// ### CONFIGURANDO O BROKER MQTT PARA O NAVEGADOR
const MQTT_URL = "wss://test.mosquitto.org:8081";

// ## Configurando o ID do cliente MQTT
const clienteId = "web-casa-inteligente-vinicius";

// ### Criando o cliente MQTT do navegador, POrem ainda não esamos conectados ao BROKER
// const cliente = mqtt.connect(MQTT_URL, {

//     clienteId,
//     clean: true,
//     connectTimeout: 4000,
// })

// #########  Variaveis dos dispositivos
const lampSalaInput = document.getElementById("lamp-sala");
const lampSalaTexto = document.getElementById("lamp-sala-texto");

const cortSalaInput = document.getElementById("cort-sala");
const cortSalaTexto = document.getElementById("cort-sala-texto");

const portSalaInput = document.getElementById("port-sala")
const portSalaTexto = document.getElementById("port-sala-texto")

const lampCozinhaInput = document.getElementById("lamp-cozinha");
const lampCozinhaTexto = document.getElementById("lamp-cozinha-texto");

const exausCozinhaInput = document.getElementById("exaus-cozinha");
const exausCozinhaTexto = document.getElementById("exaus-cozinha-texto");


// ########## Alterando estado dos dispositivos
// pegando o evento de mudança do botão (ligado/desligado)
lampSalaInput.addEventListener("change", () => {

    // verifica se o botao esta como ligado
    const ligado = lampSalaInput.checked === true;

    if(ligado === true){
        console.log("Lampada Ligada");
        lampSalaTexto.innerHTML = "On"
    } else {
        console.log("Lampada Desligada");
        lampSalaTexto.innerHTML = "Off"
    }
});

cortSalaInput.addEventListener("change",() => {
    const aberta = cortSalaInput.checked === true;

    if(aberta === true){
        console.log("Cortina Ligada");
        cortSalaTexto.innerHTML = "Open"
    } else {
        console.log("Cortina Fechada");
        cortSalaTexto.innerHTML = "Closer"
    }

});

portSalaInput.addEventListener("change", () => {
    const aberta = portSalaInput.checked === true;

    if(aberta === true){
        console.log("Porta Aberta");
        portSalaTexto.innerHTML = "Open"
    } else {
        console.log("Porta Fechada");
        portSalaTexto.innerHTML = "Closer"
    }
});

lampCozinhaInput.addEventListener("change", () => {

    const ligada = lampCozinhaInput.checked === true;

    if(ligada === true){
        console.log("Lampada Ligada");
        lampCozinhaTexto.innerHTML = "On"
    } else {
        console.log("Lampada desligada");
        lampCozinhaTexto.innerHTML = "Off"
    }
});

exausCozinhaInput.addEventListener("change", () => {
    const ligado = exausCozinhaInput.checked === true;

    if(ligado === true){
        console.log("Exaustor Ligado");
        exausCozinhaTexto.innerHTML = "On"
    }else {
        console.log("Exaustor Desligado");
        exausCozinhaTexto.innerHTML = "Off"
    }
});

        

// #### Chamando um evento do JS do tipo "DOMContentLoaded", que é o evento que acontece após toda a minha página de HTML ser carregada
// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Página carregada com sucesso!👁️👄👁️ ... conectando ao Mosquitto!");

//     // ##### Estabelecendo a conexão com o broker mqtt
//     cliente.on("connect", () => {
//         console.log("Conexão estabelecida com Sucesso!✅");
//         console.log("Cliente conectado:", clienteId);

//     // ######## criando um topico para acessar mensagens do MQTT
//         const topicoTeste = 'teste/Vinicius';

//     //  ######## Recebendo mensagens do topico criado  
//         cliente.subscribe(topicoTeste);


//     });

//     // ###### Preparando mensaem de erro caso algo aconteça
//     cliente.on("error", () => {
//         console.error("Erro ao conectar ao Broker MQTT!💀");
//         console.error(erro);
//     });

//     // ####### Recebendo as mensagens dos tópicos assinados no MQTT pelo cliente 
//     cliente.on("message", (topico, mensagem) => {
//         console.log("Topico recebido: ", topico);
//         console.log("Mensagem recebida: ", mensagem);
//     })
// })