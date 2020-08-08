import entries from "./tiles.json";
import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = "http://localhost:8081/api/";

function getArtworkEntries() {
    return axios.get(BASE_URL + "getEntries").then(response => {
        return response.data.entries;
    })
}

function getArtworkEntryById(id) {
    return axios.get(BASE_URL + "getEntryById/" + id).then(response => {
        return response.data.entry;
    })
}

function updateArtworkEntry(updatedEntry) {
    const header = authHeader.authHeader();
    return axios.post(BASE_URL + "updateEntry", updatedEntry, {headers: header})
    .then(response => {
        return response.data.entry;
    })
}

function createArtworkEntry(createdEntry) {
    const header = authHeader.authHeader();
    return axios.post(BASE_URL + "createEntry", createdEntry, {headers: header})
    .then(response => {
        return response.data.entry;
    })
}

export default {
    getArtworkEntries,
    getArtworkEntryById,
    updateArtworkEntry,
    createArtworkEntry
};