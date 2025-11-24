// ### CONFIGURANDO O BROKER MQTT PARA O NAVEGADOR
const MQTT_URL = "wss://test.mosquitto.org:8081";

// ## Configurando o ID do cliente MQTT
const clienteId = "web-casa-inteligente-vinicius";

// ### Criando o cliente MQTT do navegador, POrem ainda não esamos conectados ao BROKER
const cliente = mqtt.connect(MQTT_URL, {

    clienteId,
    clean: true,
    connectTimeout: 4000,
})

// #### Chamando um evento do JS do tipo "DOMContentLoaded", que é o evento que acontece após toda a minha página de HTML ser carregada
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada com sucesso!👁️👄👁️ ... conectando ao Mosquitto!");

    // ##### Estabelecendo a conexão com o broker mqtt
    cliente.on("connect", () => {
        console.log("Conexão estabelecida com Sucesso!✅");
        console.log("Cliente conectado:", clienteId);

    // ######## criando um topico para acessar mensagens do MQTT
        const topicoTeste = 'teste/Vinicius';

    //  ######## Recebendo mensagens do topico criado  
        cliente.subscribe(topicoTeste);


    });

    // ###### Preparando mensaem de erro caso algo aconteça
    cliente.on("error", () => {
        console.error("Erro ao conectar ao Broker MQTT!💀");
        console.error(erro);
    });

    // ####### Recebendo as mensagens dos tópicos assinados no MQTT pelo cliente 
    cliente.on("message", (topico, mensagem) => {
        console.log("Topico recebido: ", topico);
        console.log("Mensagem recebida: ", mensagem);
    })
})