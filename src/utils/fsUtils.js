const fs = require('fs').promises;
const path = require('path');

async function readMissionsData() {
    try {
        const data = await fs.readFile(path.resolve(__dirname,'../../data/missions.json'));
        const missions = JSON.parse(data);
        console.log(missions);
    } catch (error) {
        console.error('Error reading missions data', error);
    }
  
}

module.exports = { readMissionsData }