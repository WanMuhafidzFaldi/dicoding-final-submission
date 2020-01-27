const wrap = require('../config/wrapping');
const Write = require('./write/write');
const write = new Write()

const uploadFileAzure = async (req, res) => {
  const { file:payload } = req;
  const request = async () => {
    return await write.uploadFile(payload)
  };
  const sendResponse = async (result) => {
    /* eslint no-unused-expressions: [2, { allowTernary: true }] */
    (result.err) ? wrap.response(res, 'fail', result, 'Error upload file', 500)
      : wrap.response(res, 'success', result, 'Success upload file', 200);
  };
  sendResponse(await request());
};

module.exports = {
  uploadFileAzure
}