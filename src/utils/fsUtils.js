const fs = require('fs').promises;
const path = require('path');

const MISSION_DATA_PATH = '../../data/missions.json'; 

async function readMissionsData() {
    try {
        const data = await fs.readFile(path.resolve(__dirname, MISSION_DATA_PATH));
        const missions = JSON.parse(data);
        console.log(missions);
    } catch (error) {
        console.error('Error reading missions data', error);
    }
  
}

async function writeNewMissionData(newMission) {
    try {
        const oldMissionData = await readMissionsData();
        const newMissionData = [...oldMissionData, newMission];

        await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH));
    } catch (e) {
        throw new Error('Error writing new mission data', e.message);
    }
}
module.exports = { readMissionsData, writeNewMissionData }