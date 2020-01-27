const wrap = require('../../config/wrapping');
const azureStorage = require('azure-storage');
const uuid = require('uuid/v4');
const path = require('path');
const fs = require('fs');

class Write {
    constructor(){
        this.fileService = azureStorage.createFileService("DefaultEndpointsProtocol=https;AccountName=dicodingstorage;AccountKey=bo+gyhjIuYhxBm790cRAdDkKhqQjO6liox7UB2gNtk1HJIfbomzh84V3X08UJb6NbqWWf3l32B06IDuv3TFlcQ==;EndpointSuffix=core.windows.net")
    }

    async uploadFile(payload) {
        const allowType = ["png", "jpg", "jpeg"]
        const extFile = payload.filename.split(".")[1];
        if(allowType.findIndex(element => element === extFile)){
            return wrap.error("err", "File Not Allowed", 500);
        }

        await this.fileService.createFileFromLocalFile("dicoding", "images", `${uuid()}.${extFile}`, `${path.join(`${__dirname}/../../../tmp/${payload.filename}`)}`, async (error, result, response) =>{
            if (error) {
                return wrap.error("err", "error file upload", 500);
            }
            fs.unlink(`${path.join(`${__dirname}/../../../tmp/${payload.filename}`)}`, () => {
                return
            })
        });
        return wrap.data("success upload file")
    }
}

module.exports = Write;