const { read } = required('fs');
const { readMissionsData } = require('./utils/fsUtils');

async function Main() {
    const missions = await readMissionsData();
    console.log(missions);
}

Main();