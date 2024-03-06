const fs = require('fs').promises;
const path = require('path');

const MISSION_DATA_PATH = '../../data/missions.json'; 

async function readMissionsData() {
    try {
        const data = await fs.readFile(path.resolve(__dirname, MISSION_DATA_PATH));
        const missions = JSON.parse(data);
        console.log(missions);
        return missions;
    } catch (error) {
        console.error('Error reading missions data', error);
    }
}

async function writeNewMissionData(newMission) {
    try {
        const oldMissionData = await readMissionsData();
        const newMissionWithId = { id: Date.now(), ...newMission };
        const allMissions = [...oldMissionData, newMissionWithId];

        await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), allMissions);
        return newMissionWithId;
    } catch (e) {
        console.error(`Error writing new mission data : ${e}`);
    }
}

async function updateMissionData(id, updatedMissionData) {
    const oldMissionData = await readMissionsData();
    const updatedMission = { id, ...updatedMissionData };
    const updatedMissions = oldMissionData.reduce((missionsList, currentMission) => {
        if (currentMission.id === updatedMission.id) {
            return [...missionsList, updatedMission];
        }
        return [...missionsList, currentMission]; 
}, []);
const updatedData = JSON.stringify(updatedMissions);
try {
    await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), updatedData);
    return updatedMission;
} catch (error) {
    console.error(`Error updating mission data: ${error}`);
}
}

async function deleteMissionData(id) {
    const oldMissionData = await readMissionsData();
    const updatedMissions = oldMissionData.filter((mission) => mission.id !== id);
    const updatedData = JSON.stringify(updatedMissions);
    try {
        await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), updatedData);
    } catch (error) {
        console.error(`Error deleting mission data: ${error}`);
    }
}
module.exports = { readMissionsData, writeNewMissionData, updateMissionData, deleteMissionData };