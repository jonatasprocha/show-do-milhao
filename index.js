const readline = require('readline-sync');

class Player {
    constructor(name='', roundStop=0, nextRounds=0, award=0) {
        this.name = name;
        this.roundStop = roundStop;
        this.nextRounds = nextRounds;
        this.award = award;
    }
}

let questions = [
    {
        pergunta: "Qual é o país mais populoso do mundo?",
        alternativas: ["Índia", "China", "Estados Unidos", "Brasil"],
        resposta: 1,
        premio: { errar: 0, parar: 0, acertar: 1000 }
    },
    {
        pergunta: "Qual é o instrumento musical mais antigo?",
        alternativas: ["Flauta", "Tambor", "Lira", "Harpa"],
        resposta: 0,
        premio: { errar: 500, parar: 1000, acertar: 2000 }
    },
    {
        pergunta: "Quem foi o inventor da lâmpada elétrica?",
        alternativas: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"],
        resposta: 0,
        premio: { errar: 1000, parar: 2000, acertar: 3000 }
    },
    {
        pergunta: "Quem foi o cientista que formulou a teoria da relatividade?",
        alternativas: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Stephen Hawking"],
        resposta: 1,
        premio: { errar: 1500, parar: 3000, acertar: 4000 }
    },
    {
        pergunta: "Quem foi o primeiro imperador romano?",
        alternativas: ["Júlio César", "Augusto", "Nero", "Marco Aurélio"],
        resposta: 1,
        premio: { errar: 2000, parar: 4000, acertar: 5000 }
    },
    {
        pergunta: "Em que ano a Segunda Guerra Mundial começou?",
        alternativas: [1935,  1945, 1941, 1939],
        resposta: 3,
        premio: { errar: 2500, parar: 5000, acertar: 10000 }
    },
    {
        pergunta: "Quem foi o fundador da Microsoft?",
        alternativas: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Jeff Bezos"],
        resposta: 2,
        premio: { errar: 5000, parar: 10000, acertar: 20000 }
    },
    {
        pergunta: "Qual é o animal símbolo da Austrália que não pode pular para trás?",
        alternativas: ["Canguru", "Coala", "Emu", "Diabo-da-Tasmânia"],
        resposta: 2,
        premio: { errar: 10000, parar: 20000, acertar: 30000 }
    },
    {
        pergunta: "Qual é a capital da França?",
        alternativas: ["Berlim", "Londres", "Paris", "Madri"],
        resposta: 2,
        premio: { errar: 15000, parar: 30000, acertar: 40000 }
    },
    {
        pergunta: "Quem foi o líder da Revolução Cubana em 1959?",
        alternativas: ["Fidel Castro", "Che Guevara", "Raúl Castro", "Fulgencio Batista"],
        resposta: 0,
        premio: { errar: 20000, parar: 40000, acertar: 50000 }
    },
    {
        pergunta: "Qual é o maior animal terrestre?",
        alternativas: ["Girafa", "Rinoceronte-branco", "Urso polar", "Elefante africano"],
        resposta: 3,
        premio: { errar: 25000, parar: 50000, acertar: 100000 }
    },
    {
        pergunta: "Qual é a montanha mais alta do mundo?",
        alternativas: ["Montanha McKinley", "Mont Blanc", "Monte Everest", "Monte Kilimanjaro"],
        resposta: 2,
        premio: { errar: 50000, parar: 100000, acertar: 200000 }
    },
    {
        pergunta: "Qual é a capital da Rússia?",
        alternativas: ["Moscou", "São Petersburgo", "Kiev", "Minsk"],
        resposta: 0,
        premio: { errar: 100000, parar: 200000, acertar: 300000 }
    },
    {
        pergunta: "Qual é o menor país do mundo em área territorial?",
        alternativas: ["Mônaco", "Nauru", "San Marino", "Vaticano"],
        resposta: 3,
        premio: { errar: 150000, parar: 300000, acertar: 400000 }
    },
    {
        pergunta: "Qual é o país conhecido como a terra dos czares?",
        alternativas: ["Rússia", "Polônia", "Hungria", "Romênia"],
        resposta: 0,
        premio: { errar: 200000, parar: 400000, acertar: 500000 }
    },
    {
        pergunta: "Em que ano ocorreu a independência do Brasil?",
        alternativas: [1808, 1822, 1836, 1888],
        resposta: 1,
        premio: { errar: 0, parar: 500000, acertar: 1000000 }
    },
];

function startGame(player) {
    let op;
    player.name = readline.question("\nDigite seu nome: ");
    console.log(`\nSeja bem-vindo ao Show do Milhão by Jônatas, ${player.name}! Espero que se divirta jogando.`);
    do {
        round(player);
        op = readline.question("\nDeseja jogar novamente? [s/n]: ");
        console.log(op);
    } while(op == "s" || op == "S");   
}

function round(player) {
    let op;
    for(let i = 0; i < questions.length; i++) {
        console.log(`\n################ Rodada número ${i + 1} ################ \n`);	
        console.log(questions[i].pergunta);
        for(let j = 0; j < questions[i].alternativas.length; j++) {
            console.log(`${j + 1}. ${questions[i].alternativas[j]}`);
        }
        console.log(`\n[Errar - ${questions[i].premio.errar}]  [Parar - ${questions[i].premio.parar}]  [Acertar - ${questions[i].premio.acertar}]\n`);
        let answer = parseInt(readline.question("Resposta: ")) - 1;
        if(answer == questions[i].resposta) {
            console.log("Resposta correta");
            player.award = questions[i].premio.acertar;
        } else {
            player.award = questions[i].premio.errar;
            player.roundStop = i + 1;
            player.nextRounds = questions.length - player.roundStop;
            console.log(`Alternativa incorreta!\nAlternativa correta: ${questions[i].resposta + 1}`);
            endGame(player);
            break;
        }
        op = readline.question("\nDeseja prosseguir? [s/n]: ")
        if(op == "n" || op == "N") {
            player.roundStop = i + 1;
            player.nextRounds = questions.length - player.roundStop;
            player.award = questions[i].premio.parar;
            endGame(player);
            break;
        } 
    }
}

function endGame(player) {
    console.log("\n############################################\n");
    console.log(`\nObrigado por ter jogado, ${player.name}!\n`);
    console.log(`Veja as estatísticas do jogo:\nÚltima rodada jogada: ${player.roundStop}\nRodadas restantes: ${player.nextRounds}\nPrêmio: ${player.award}`);
    console.log("\n############################################\n");
}

function main() {
    console.log("############### Show do milhão ############### ");
    startGame(new Player());
}

main();
