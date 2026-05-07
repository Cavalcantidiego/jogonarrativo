const promptSync = require("prompt-sync");
const prompt = promptSync({ sigint: true });

require("colors");

// ====================
// BANNER
// ====================

function mostrarBanner() {

    console.clear();

    console.log(`
██╗██╗     ██╗  ██╗ █████╗
██║██║     ██║  ██║██╔══██╗
██║██║     ███████║███████║
██║██║     ██╔══██║██╔══██║
██║███████╗██║  ██║██║  ██║
╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝

██████╗  █████╗ ███████╗
██╔══██╗██╔══██╗██╔════╝
██║  ██║███████║███████╗
██║  ██║██╔══██║╚════██║
██████╔╝██║  ██║███████║
╚═════╝ ╚═╝  ╚═╝╚══════╝

 ██████╗ ██████╗ ██████╗ ██████╗  █████╗ ███████╗
██╔════╝██╔═══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝
██║     ██║   ██║██████╔╝██████╔╝███████║███████╗
██║     ██║   ██║██╔══██╗██╔══██╗██╔══██║╚════██║
╚██████╗╚██████╔╝██████╔╝██║  ██║██║  ██║███████║
 ╚═════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
`.green);

    console.log("\n🐍 ILHA DAS COBRAS 🐍\n".red);

}

// ====================
// FUNÇÃO PRINCIPAL
// ====================

function iniciarJogo() {

    mostrarBanner();

    prompt("Pressione ENTER para começar...".yellow);

    mostrarBanner();

    // ====================
    // NOME
    // ====================

    const nome = prompt("Digite seu nome: ".cyan);

    console.clear();

    // ====================
    // HISTÓRIA
    // ====================

console.log(`
Você acorda em uma praia...

Sua cabeça dói, ${nome}...

🐍 Sons estranhos ecoam pela mata.

Você foi abandonado na ILHA DAS COBRAS.

📻 Seu único meio de escapar:

Encontrar peças de um rádio perdido
e montar um sinal de socorro.
`.gray);

prompt("\nPressione ENTER para continuar...".yellow);

console.clear()

// ====================
// GUIA
// ====================

console.log(`
╔══════════════════════════════════════╗
║          GUIA DE SOBREVIVÊNCIA      ║
╠══════════════════════════════════════╣

🎯 OBJETIVO
Monte o rádio e envie um sinal
de socorro antes do tempo acabar.

══════════════════════════════════════

📅 TEMPO
Você possui apenas 10 dias
para escapar da ilha.

══════════════════════════════════════

⚠️ SOBREVIVÊNCIA

🍗 Fome
💧 Hidratação
⚡ Energia
🧠 Sanidade

Se algum status chegar a 0:
VOCÊ MORRE.

══════════════════════════════════════

🎒 INVENTÁRIO

Os itens encontrados ficam
armazenados automaticamente.

Ao usar recursos:
⌛ 1 DIA É CONSUMIDO.

══════════════════════════════════════

🌴 A ilha é imprevisível.

Boa sorte, sobrevivente.

╚══════════════════════════════════════╝
`.green)

prompt("\nPressione ENTER para iniciar sua sobrevivência...".yellow);

console.clear()

    // ====================
    // STATUS
    // ====================

    let fome = 100;
    let hidratacao = 100;
    let energia = 100;
    let sanidade = 100;

    // ====================
    // INVENTÁRIO
    // ====================

    let inventario = [];

    // ====================
    // CONTROLE
    // ====================

    let jogoRodando = true;

    let progressoRadio = 0;

    let dia = 1;
    let maxDias = 10;

    // ====================
    // STATUS NA TELA
    // ====================

    function mostrarStatus() {

        mostrarBanner();

        console.log("════════════════════════════".green);
        console.log(`📅 DIA ${dia} / ${maxDias}`.yellow);
        console.log("════════════════════════════".green);

        console.log(`🍗 Fome: ${fome}%`.red);
        console.log(`💧 Hidratação: ${hidratacao}%`.blue);
        console.log(`⚡ Energia: ${energia}%`.yellow);
        console.log(`🧠 Sanidade: ${sanidade}%`.magenta);

        console.log(`\n📻 Rádio: ${progressoRadio}%`.cyan);

        if (progressoRadio < 100) {

            console.log("🔎 Explore a floresta para encontrar peças.".gray);

        } else {

            console.log("✅ Rádio montado!".green);

        }

        console.log("\n🎒 Inventário:");

        if (inventario.length === 0) {

            console.log("Mochila vazia.".gray);

        } else {

            console.log(inventario);

        }

        console.log("\n════════════════════════════".green);

    }

    // ====================
    // LOOP PRINCIPAL
    // ====================

    while (jogoRodando) {

        mostrarStatus();

        console.log(`
🎯 COMO ESCAPAR:
Encontre peças do rádio na floresta.
Monte o rádio antes do 10º dia.
`.yellow);

        console.log("1 - 🌊 Explorar praia".green);
        console.log("2 - 🌴 Entrar na floresta".yellow);
        console.log("3 - 🍗 Procurar comida".cyan);
        console.log("4 - 🎒 Usar item".magenta);

        if (progressoRadio >= 100) {

            console.log("5 - 🚁 Enviar sinal de socorro".brightRed);

        }

        console.log("0 - 💀 Desistir".gray);

        let escolha = prompt("\nEscolha uma ação: ");

        console.clear();

        switch (escolha) {

            // ====================
            // PRAIA
            // ====================

            case "1":

                console.log(`
🌊 Você caminha pela praia...

O mar parece infinito...
`.green);

                energia -= 2;
                hidratacao -= 2;

                prompt("\nPressione ENTER para continuar...");
                break;

            // ====================
            // FLORESTA
            // ====================

            case "2":

                console.log(`
🌴 Você entra na floresta...
`.yellow);

                energia -= 3;
                hidratacao -= 3;
                sanidade -= 1;

                const evento = Math.floor(Math.random() * 3);

                // PEÇA DO RÁDIO
                if (evento === 0) {

                    console.log(`
📡 Você encontrou uma peça do rádio!
`.cyan);

                    progressoRadio += 50;

                    if (progressoRadio >= 100) {

                        progressoRadio = 100;

                        console.log(`
📻 Você conseguiu montar o rádio!

🚁 Agora você pode enviar um sinal de socorro.
`.green);

                    }

                }

                // COMIDA
                else if (evento === 1) {

                    console.log(`
🍎 Você encontrou frutas e cocos!
`.green);

                    inventario.push("Comida");

                    hidratacao += 10;

                    console.log(`
💧 Você se hidratou.
`.blue);

                }

                // COBRA
                else {

                    console.log(`
🐍 Uma cobra apareceu!

Você conseguiu fugir...
`.red);

                    sanidade -= 10;

                }

                prompt("\nPressione ENTER para continuar...");
                break;

            // ====================
            // PROCURAR COMIDA
            // ====================

            case "3":

                console.log(`
🍗 Você procura comida...
`.green);

                energia -= 2;

                const comida = Math.floor(Math.random() * 2);

                if (comida === 0) {

                    console.log(`
🍖 Você encontrou comida!
`.green);

                    inventario.push("Comida");

                } else {

                    console.log(`
🥥 Você encontrou cocos!
`.yellow);

                    hidratacao += 20;

                    console.log(`
💧 Sua hidratação aumentou.
`.blue);

                }

                prompt("\nPressione ENTER para continuar...");
                break;

            // ====================
            // USAR ITEM
            // ====================

            case "4":

                console.log(`
🎒 Você procura algo útil na mochila...
`.magenta);

                if (inventario.length > 0) {

                    // PEGA O PRIMEIRO ITEM
                    let itemUsado = inventario[0];

                    // REMOVE DO INVENTÁRIO
                    inventario.splice(0, 1);

                    // COMIDA
                    if (itemUsado === "Comida") {

                        console.log(`
🍖 Você comeu comida.
`.green);

                        fome += 30;

                        console.log(`
🍗 Sua fome diminuiu.
`.red);

                    }

                    // PASSAGEM DE TEMPO
                    console.log(`
⌛ Usar recursos consumiu 1 dia.
`.gray);

                    dia++;

                } else {

                    console.log(`
❌ Sua mochila está vazia.
`.red);

                }

                prompt("\nPressione ENTER para continuar...");
                break;

            // ====================
            // ENVIAR SINAL
            // ====================

            case "5":

                if (progressoRadio >= 100) {

                    console.log(`
📻 Você liga o rádio...

📡 ...estática...

"...ALÔ?!"

🚁 Um helicóptero responde!

"Encontramos você!"

✅ VOCÊ ESCAPOU DA ILHA DAS COBRAS!
`.green);

                    jogoRodando = false;

                }

                prompt("\nPressione ENTER para continuar...");
                break;

            // ====================
            // DESISTIR
            // ====================

            case "0":

                console.log(`
💀 Você desistiu.

A ilha venceu.
`.red);

                jogoRodando = false;

                break;

            // ====================
            // ERRO
            // ====================

            default:

                console.log(`
❌ Escolha inválida.
`.red);

                prompt("\nPressione ENTER para continuar...");
                break;

        }

        // ====================
        // PASSAGEM DE TEMPO
        // ====================

        dia++;

        fome -= 2;
        hidratacao -= 2;

        // ====================
        // LIMITES
        // ====================

        if (fome > 100) fome = 100;
        if (hidratacao > 100) hidratacao = 100;
        if (energia > 100) energia = 100;
        if (sanidade > 100) sanidade = 100;
        if (progressoRadio > 100) progressoRadio = 100;

        // ====================
        // GAME OVER
        // ====================

        if (fome <= 0) {

            mostrarBanner();

            console.log(`
💀 Você morreu de fome...
`.red);

            jogoRodando = false;

        }

        if (hidratacao <= 0) {

            mostrarBanner();

            console.log(`
💀 Você morreu de sede...
`.blue);

            jogoRodando = false;

        }

        if (energia <= 0) {

            mostrarBanner();

            console.log(`
💀 Você desmaiou de exaustão...
`.yellow);

            jogoRodando = false;

        }

        if (sanidade <= 0) {

            mostrarBanner();

            console.log(`
🧠 Você enlouqueceu na ilha...
`.magenta);

            jogoRodando = false;

        }

        if (dia > maxDias && jogoRodando) {

            mostrarBanner();

            console.log(`
⌛ O tempo acabou...

A ilha venceu.
`.red);

            jogoRodando = false;

        }

    }

    // ====================
    // JOGAR NOVAMENTE
    // ====================

    console.log("\n════════════════════════════".green);

    let novamente = prompt("\n🔁 Deseja jogar novamente? (s/n): ".yellow);

    if (novamente.toLowerCase() === "s") {

        iniciarJogo();

    } else {

        console.clear();

        console.log("\n👋 Obrigado por jogar!\n".cyan);

    }

}

// ====================
// INICIAR
// ====================

iniciarJogo();