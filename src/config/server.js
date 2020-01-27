
const express = require('express');
const multer = require('multer')
const path = require('path');
const handler = require('../modules/handler');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './tmp')
    },
    filename: function (req, file, cb) {
        const extFile = file.originalname.split(".")[1];
        cb(null, `${file.fieldname}-${Date.now()}.${extFile}`)
    }
})

const upload = multer({ storage: storage })

function AppServer() {
    this.server = express();
    this.server.post('/azure', upload.single('uploadFile'), handler.uploadFileAzure);
    this.server.get('/', (req, res) => {
        res.sendFile(path.join(__dirname+'/../views/index.html'));
    });
}

module.exports = AppServer;
