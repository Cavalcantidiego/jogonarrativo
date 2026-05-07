const promptSync = require("prompt-sync");
const prompt = promptSync({ sigint: true });

require("colors");

function mostrarBanner() {
    console.clear();
    console.log(`
  _____  _      _    _               _____            _____    ____   ____  _____            _____ 
 |_   _|| |    | |  | |     /\\      |  __ \\    /\\    / ____|  / __ \\ |  _ \\|  __ \\ /\\     / ____|
   | |  | |    | |__| |    /  \\     | |  | |  /  \\  | (___   | |  | || |_) | |__) /  \\   | (___  
   | |  | |    |  __  |   / /\\ \\    | |  | | / /\\ \\  \\___ \\  | |  | ||  _ <|  _ </ /\\ \\   \\___ \\ 
  _| |_ | |____| |  | |  / ____ \\   | |__| |/ ____ \\ ____) | | |__| || |_) | | \\ \\ ____ \\  ____) |
 |_____||______|_|  |_| /_/    \\_\\  |_____//_/    \\_\\_____/   \\____/ |____/|_|  \\_\\_/  \\_\\_____/ 
                                                                                                 
    `.green);

    console.log("\n🐍 BEM-VINDO À ILHA DAS COBRAS 🐍\n".red);
}

mostrarBanner();

prompt("Pressione ENTER para começar...");

console.clear();

const nome = prompt("Digite seu nome: ");

console.clear();

// Usando o nome capturado na história!
console.log(`
Você acorda em uma praia...

Sua cabeça dói, ${nome}...

Você foi abandonado na ILHA DAS COBRAS.
`);

prompt("Pressione ENTER para iniciar...");

// 1. Criando o vetor para o inventário
let inventario = []; 

// 2. Variável de controle para manter o jogo rodando
let jogoRodando = true;

// 3. Estrutura de repetição (Loop Principal do Jogo)
while (jogoRodando) {
    console.log(`\n=== O QUE VOCÊ FAZ AGORA, ${nome.toUpperCase()}? ===`.yellow);
    console.log("1 - Explorar a borda da praia");
    console.log("2 - Entrar na floresta escura");
    console.log("3 - Procurar galhos secos");
    console.log("4 - Ver Inventário");
    console.log("0 - Desistir e sentar para chorar (Sair do jogo)");

    let escolha = prompt("Digite o número da sua escolha: ");

    console.clear(); // Limpa a tela para a próxima ação

    // ==========================================
    // SEU DESAFIO COMEÇA AQUI: O SWITCH CASE!
    // ==========================================
    
    // Você precisa criar um switch(escolha) aqui.
    // Para cada caso (case "1", case "2", etc), coloque um console.log contando o que aconteceu.
    // Lembre-se do 'break' ao final de cada caso!
    
}

switch (escolha) {
        case "1":
            console.log("Você caminha pela areia quente e encontra pegadas estranhas que vão em direção ao mar...");
            prompt("Pressione ENTER para continuar.");
            break;
            
        case "0":
            console.log("Você senta na areia, chora um pouco e desiste. A ilha venceu. Fim de jogo!");
            jogoRodando = false; // Essa variável sendo 'false' faz o loop do 'while' encerrar!
            break;
            
        default:
            // O default serve para pegar qualquer coisa que o jogador digite errado (letras, outros números)
            console.log("Opção inválida! Escolha um número válido do menu.");
            prompt("Pressione ENTER para continuar.");
            break;
    }