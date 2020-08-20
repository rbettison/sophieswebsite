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

function uploadImage(imageFile) {

  console.log('file' + imageFile);
    if(_.isNil(imageFile.name)) {
      return Promise.resolve();
    }
    const file = imageFile;
    const contentType = imageFile.type;
    const generatePutUrl = BASE_URL + "aws-presign/put";
    const header = authHeader.authHeader();
    header['Content-Type'] = contentType;
    header['x-amz-acl'] = 'public-read';
    const options = {
        params: {
          Key: imageFile.name,
          ContentType: contentType
        },
        headers: header 
      };
      return axios.get(generatePutUrl, options).then(res => {
        console.log(res);
        const {
          data: { putURL }
        } = res;
        return axios.put(putURL, file).then((res) => {
            return res;
          })
          .catch((err) => {
            console.log('err', err);
            return err;
          });
      }).catch((err) => {
        console.log('err' + err);
      })
}

export default {
    getArtworkEntries,
    getArtworkEntryById,
    updateArtworkEntry,
    createArtworkEntry,
    uploadImage
};