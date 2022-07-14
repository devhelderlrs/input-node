import input from 'input'; // IMPORT BIBLIOTECA INPUT P/ INTERACAO CONSOLE
import chalk from 'chalk'; // IMPORT BIBLIOTECA PARA COLORIR MSGS DO CONSOLE

async function pegaInput() { // FUNÇÃO ASSINCRONA

    let arr = [];
    let perguntaCss;

    do {
        perguntaCss ? arr.push(perguntaCss) : ''; // TERNÁRIO PARA PREVENÇÃO DO INPUT PRA SAÍDA DO TERMINAL NÃO SER INCLUSO NO ARRAY.

        perguntaCss = (await input.text('Digite uma propriedade CSS: \n')).toLowerCase(); // MÉTODO DA BIBLIOTECA -INPUT- QUE FAZ A INTERAÇÃO NO CONSOLE.LOG

    } while (perguntaCss != 'sair'); // ENQUANTO O INPUT FOR DIFERENTE DE 'SAIR' O LAÇO EXECUTA.

    arr = arr.sort(); // .SORT() -> ORDENA O CONTEÚDO DO ARRAY EM ORDEM CRESCENTE

    arr.forEach(element => {
        console.log(chalk.green(`Propriedades CSS: ${element}`))
    })
}

pegaInput(); // CHAMADA DA FUNÇÃO