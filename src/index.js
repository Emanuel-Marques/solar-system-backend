const readline = require('readline-sync');
const { writeNewMissionData } = require('./utils/fsUtils');

async function Main() {
    const name = readline.question('Qual o nome da missão?');
    const ano = readline.question('Qual o ano da missão?');
    const country = readline.question('Qual o país da missão?');
    const destination = readline.question('Qual o destino da missão?');
    
    const newMissions = { name, ano, country, destination };
    writeNewMissionData(newMissions); 
    console.log(`Missão ${name} foi adicionada com sucesso!`);
}

Main(); 