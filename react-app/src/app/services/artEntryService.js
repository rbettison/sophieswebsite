import entries from "./tiles.json";

function getArtworkEntries() {
    return new Promise((resolve, reject) => {
        resolve(entries);
    })
}

function getArtworkEntryById(id) {
    return new Promise((resolve, reject) => {
        var entry = entries.filter((el) => {
            if(el.id == id) {
                return true;
            } else {
                return false;
            }
        })
        resolve(entry[0]);
    })
}

export default {
    getArtworkEntries,
    getArtworkEntryById
};